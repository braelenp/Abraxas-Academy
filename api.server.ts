import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';
import nftRouter from './api/nft-operations';

dotenv.config({ path: '.env.local' });

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Register API routes
app.use('/api/nft', nftRouter);

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/submit-homework', async (req, res) => {
  try {
    const { moduleName, moduleId, walletAddress, imageBase64 } = req.body;

    if (!moduleName || !walletAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    console.log(`📝 Homework submission: ${moduleName} from ${walletAddress}`);

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background: #0a0e27; color: #e0e0e0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #00f5ff; border-radius: 8px; padding: 20px; background: #1a1f3a;">
          <h1 style="color: #00f5ff; margin-top: 0;">New Homework Submission</h1>
          
          <div style="margin: 20px 0; padding: 15px; background: #0a0e27; border-left: 3px solid #9945ff;">
            <p style="margin: 8px 0;"><strong>Module:</strong> ${moduleName}</p>
            <p style="margin: 8px 0;"><strong>Wallet Address:</strong> <code style="background: #1a1f3a; padding: 4px 8px; border-radius: 4px;">${walletAddress}</code></p>
            <p style="margin: 8px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>

          ${imageBase64 ? `
            <div style="margin: 20px 0;">
              <p style="margin-bottom: 10px;"><strong>Screenshot:</strong></p>
              <img src="${imageBase64}" style="max-width: 100%; border-radius: 4px; border: 1px solid #00f5ff;" alt="Homework submission" />
            </div>
          ` : ''}

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #00f5ff; font-size: 12px; color: #808080;">
            <p>This is an automated submission from Abraxas Academy.</p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    const emailResponse = await resend.emails.send({
      from: 'Abraxas Academy <noreply@abraxas-academy.vercel.app>',
      to: 'abraxasacademy@gmail.com',
      subject: `[Homework] ${moduleName} - ${walletAddress.slice(0, 8)}...`,
      html: emailHtml,
    });

    console.log(`✅ Email sent:`, emailResponse);

    res.status(200).json({
      success: true,
      message: 'Homework submitted successfully!',
      submission: {
        moduleName,
        walletAddress,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('❌ Submission error:', error);
    res.status(500).json({
      error: 'Failed to submit homework',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`🎓 Abraxas Academy API running on http://localhost:${PORT}`);
  console.log(`📧 Resend API Key: ${process.env.RESEND_API_KEY ? '✓ Loaded' : '✗ Missing'}`);
});

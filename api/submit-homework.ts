import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory submission tracking (in production, use a database)
interface HomeworkSubmission {
  moduleName: string;
  walletAddress: string;
  timestamp: string;
  imageUrl?: string;
}

let submissions: HomeworkSubmission[] = [];

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { moduleName, walletAddress, imageBase64 } = req.body;

    if (!moduleName || !walletAddress) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const submission: HomeworkSubmission = {
      moduleName,
      walletAddress,
      timestamp: new Date().toISOString(),
    };

    submissions.push(submission);

    // Prepare email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; background: #0a0e27; color: #e0e0e0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; border: 1px solid #00f5ff; border-radius: 8px; padding: 20px; background: #1a1f3a;">
          <h1 style="color: #00f5ff; margin-top: 0;">New Homework Submission</h1>
          
          <div style="margin: 20px 0; padding: 15px; background: #0a0e27; border-left: 3px solid #9945ff;">
            <p style="margin: 8px 0;"><strong>Module:</strong> ${moduleName}</p>
            <p style="margin: 8px 0;"><strong>Wallet Address:</strong> <code style="background: #1a1f3a; padding: 4px 8px; border-radius: 4px;">${walletAddress}</code></p>
            <p style="margin: 8px 0;"><strong>Submitted:</strong> ${new Date(submission.timestamp).toLocaleString()}</p>
          </div>

          ${imageBase64 ? `
            <div style="margin: 20px 0;">
              <p style="margin-bottom: 10px;"><strong>Screenshot:</strong></p>
              <img src="${imageBase64}" style="max-width: 100%; border-radius: 4px; border: 1px solid #00f5ff;" alt="Homework submission" />
            </div>
          ` : ''}

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #00f5ff; font-size: 12px; color: #808080;">
            <p>This is an automated submission from Abraxas Academy.</p>
            <p>Total submissions so far: ${submissions.length}</p>
          </div>
        </div>
      </div>
    `;

    // Send email using Resend
    await resend.emails.send({
      from: 'Abraxas Academy <noreply@abraxas-academy.vercel.app>',
      to: 'abraxasacademy@gmail.com',
      subject: `[Homework] ${moduleName} - ${walletAddress.slice(0, 8)}...`,
      html: emailHtml,
    });

    res.status(200).json({
      success: true,
      message: 'Homework submitted successfully!',
      submission,
    });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({
      error: 'Failed to submit homework',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

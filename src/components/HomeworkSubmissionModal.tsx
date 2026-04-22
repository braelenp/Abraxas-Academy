import { useState } from 'react';
import { X, Upload, Loader } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { useMembership } from '../providers/MembershipProvider';

interface HomeworkSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  moduleName: string;
  moduleId: string;
}

export function HomeworkSubmissionModal({
  isOpen,
  onClose,
  moduleName,
  moduleId,
}: HomeworkSubmissionModalProps) {
  const { walletAddress } = useMembership();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size must be less than 5MB');
      return;
    }

    setFile(selectedFile);
    setError(null);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async () => {
    if (!file || !walletAddress) {
      setError('Missing file or wallet address');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = async (e) => {
        const imageBase64 = e.target?.result as string;

        const response = await fetch('/api/submit-homework', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            moduleName,
            moduleId,
            walletAddress,
            imageBase64,
          }),
        });

        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || 'Submission failed');
        }

        setSuccess(true);
        setFile(null);
        setPreview(null);

        setTimeout(() => {
          onClose();
          setSuccess(false);
        }, 1500);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm md:items-center">
      <Card className="w-full max-w-md border-cyan-300/20 bg-slate-950 p-6 md:rounded-2xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-cyan-100">Submit Homework</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Module & Wallet Info */}
        <div className="mb-4 space-y-2 text-xs">
          <div>
            <p className="text-slate-400">Module</p>
            <p className="font-semibold text-cyan-100">{moduleName}</p>
          </div>
          <div>
            <p className="text-slate-400">Your Wallet</p>
            <p className="truncate font-mono text-cyan-100">{walletAddress || 'Not connected'}</p>
          </div>
        </div>

        {/* Success State */}
        {success && (
          <div className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-center">
            <p className="text-sm font-semibold text-green-100">✓ Submitted!</p>
            <p className="mt-1 text-xs text-green-100/70">
              Check your email for confirmation
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3">
            <p className="text-sm text-red-100">{error}</p>
          </div>
        )}

        {/* File Upload */}
        {!success && (
          <>
            <div className="mb-4">
              <label htmlFor="file-upload" className="block">
                <div className="flex cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-cyan-300/30 bg-cyan-500/5 p-6 transition hover:border-cyan-300/50 hover:bg-cyan-500/10">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-cyan-300/70 mb-2" />
                    <p className="text-sm font-medium text-cyan-100">Click to upload</p>
                    <p className="text-xs text-slate-400">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  disabled={isLoading}
                />
              </label>
            </div>

            {/* Preview */}
            {preview && (
              <div className="mb-4">
                <p className="mb-2 text-xs font-semibold text-slate-300">Preview</p>
                <img
                  src={preview}
                  alt="Preview"
                  className="h-32 w-full rounded-lg border border-cyan-300/20 object-cover"
                />
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3">
              <Button
                onClick={handleSubmit}
                disabled={!file || isLoading || !walletAddress}
                className="w-full flex items-center justify-center gap-2 rounded-lg border-cyan-300/40 bg-cyan-500/15 text-cyan-100 hover:bg-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed h-10 font-semibold"
              >
                {isLoading && <Loader className="h-4 w-4 animate-spin" />}
                {isLoading ? 'Submitting...' : 'Submit Homework'}
              </Button>
              <Button
                onClick={onClose}
                disabled={isLoading}
                className="w-full rounded-lg border border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 disabled:opacity-50 h-10"
              >
                Cancel
              </Button>
            </div>

            {!walletAddress && (
              <p className="mt-3 text-xs text-red-100/70 text-center">
                Connect your wallet to submit homework
              </p>
            )}
          </>
        )}
      </Card>
    </div>
  );
}

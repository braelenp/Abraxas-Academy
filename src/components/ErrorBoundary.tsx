import React, { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
          <div className="max-w-md rounded-lg border border-red-500/50 bg-red-950/20 p-6 text-center">
            <h1 className="text-xl font-bold text-red-300 mb-3">Application Error</h1>
            <p className="text-sm text-red-200 mb-4 font-mono">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <p className="text-xs text-red-300/70 mb-4">
              Please check the browser console for more details.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-red-600/40 px-4 py-2 text-sm text-red-100 hover:bg-red-600/60 transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

import React, { Component, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Update state to indicate that an error occurred
    this.setState({ hasError: true });
    // You can also log the error or send it to a logging service here
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Sorry, an error occurred.</p>
        </div>
      );
    }
    return this.props["children"] as ReactNode;
  }
}

export default ErrorBoundary;

import { Component } from 'react';
// import { captureException } from '../../../errorTracking';


export type ErrorBoundaryProps = Readonly<{}>;
export type ErrorBoundaryState = Readonly<{
  error: Error | null
}>;


export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null
    };
  }



  public componentDidCatch(error: Error) {
    this.setState({ error });
    // captureException(error)
  }

  public render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return null;
    }


    return children;
  }
}


export default ErrorBoundary;


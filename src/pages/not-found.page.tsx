import * as React from 'react';

export interface NotFoundProps {
}

export interface NotFoundState {
}

export class NotFound extends React.Component<NotFoundProps, NotFoundState> {
  render() {
    return (
      <div>
        <h1>PAGE NOT FOUND</h1>
      </div>
    );
  }
}
import * as React from 'react';

interface ICenteredDetailProps {
  children: JSX.Element;
}

export default function CenteredDetail({ children }: ICenteredDetailProps) {
  return (
    <div className="row">
      <div className="col-sm-offset-3">
        {children}
      </div>
    </div>
  );
}

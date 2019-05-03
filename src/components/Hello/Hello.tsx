import React, { FunctionComponent } from 'react';

interface Props {
  name: string;
}

const Hello: FunctionComponent<Props> = (props): JSX.Element => {
  const { name } = props;
  return (
    <div>
      <h1 style={{ color: '#f66e90' }}>Hello from {name}!</h1>
    </div>
  );
};

export default Hello;

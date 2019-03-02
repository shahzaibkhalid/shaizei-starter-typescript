import React from 'react';
import { render } from 'react-dom';
import { setConfig } from 'react-hot-loader';
import App from 'components/App/App';

setConfig({
  pureRender: true,
  ignoreSFC: true,
});

const root = document.getElementById('root');

if (!root) throw new Error('Unable to mount your app.');

render(<App />, root);

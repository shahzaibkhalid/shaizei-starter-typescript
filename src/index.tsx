import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { setConfig } from 'react-hot-loader';
import './styles.css';
import App from 'components/App/App';

setConfig({
  pureRender: true,
  ignoreSFC: true,
});

const root: HTMLElement | null = document.getElementById('root');

if (root) {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    root,
  );
} else {
  throw new Error('Unable to mount your app.');
}

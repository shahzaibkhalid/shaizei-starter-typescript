import React from 'react';
import { hot } from 'react-hot-loader/root';
import Hello from 'components/Hello/Hello';
import Logo from 'assets/logo.svg';

const shaizeiGitHub: JSX.Element = (
  <a href='https://github.com/shahzaibkhalid/shaizei'>
    github.com/shahzaibkhalid/shaizei
  </a>
);

const App = (): JSX.Element => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <img src={Logo} alt='React Logo' style={{ width: 200, height: 200 }} />
    <Hello name='shaizei' />
    <h3>Start editing to see some magic happen!</h3>
    <p>Checkout {shaizeiGitHub} to learn more.</p>
  </div>
);

export default hot(App);

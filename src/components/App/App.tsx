import React from 'react';
import { hot } from 'react-hot-loader/root';
import Play from 'components/Play/Play';

const App = (): JSX.Element => (
  <>
    <input type='text' />
    <h1>This is my first component!!</h1>
    <Play />
  </>
);

export default hot(App);

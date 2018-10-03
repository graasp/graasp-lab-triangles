import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Triangle');
  expect(div.innerHTML).toContain('Use Sides');
  expect(div.innerHTML).toContain('Use Angle');

  ReactDOM.unmountComponentAtNode(div);
});

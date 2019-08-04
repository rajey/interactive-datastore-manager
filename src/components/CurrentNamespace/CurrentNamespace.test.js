import React from 'react';
import ReactDOM from 'react-dom';
import CurrentNamespace from './CurrentNamespace';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrentNamespace />, div);
  ReactDOM.unmountComponentAtNode(div);
});

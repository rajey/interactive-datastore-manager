import React from 'react';
import ReactDOM from 'react-dom';
import CurrentNamespaceHeader from './CurrentNamespaceHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrentNamespaceHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});

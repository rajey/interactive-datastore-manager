import React from 'react';
import ReactDOM from 'react-dom';
import NamespaceItem from './NamespaceItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NamespaceItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

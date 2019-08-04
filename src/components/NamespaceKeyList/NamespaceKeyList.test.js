import React from 'react';
import ReactDOM from 'react-dom';
import NamespaceKeyList from './NamespaceKeyList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NamespaceKeyList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

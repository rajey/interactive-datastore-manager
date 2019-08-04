import React from 'react';
import ReactDOM from 'react-dom';
import NamespaceList from './NamespaceList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NamespaceList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

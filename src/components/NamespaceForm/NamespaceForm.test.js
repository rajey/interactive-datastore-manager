import React from 'react';
import ReactDOM from 'react-dom';
import NamespaceForm from './NamespaceForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NamespaceForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

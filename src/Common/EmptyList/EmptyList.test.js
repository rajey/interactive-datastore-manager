import React from 'react';
import ReactDOM from 'react-dom';
import EmptyList from './EmptyList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EmptyList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

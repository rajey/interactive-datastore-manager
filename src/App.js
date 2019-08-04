import './App.css';

import React from 'react';

import NamespaceList from './Namespace/List/NamespaceList';
import CurrentNamespace from './Namespace/Current/CurrentNamespace';
import { TextField, Button } from '@material-ui/core';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      namespaces: [
        {
          id: 'dashboard',
          name: 'Dashboard'
        },
        {
          id: 'scorecard',
          name: 'Scorecard'
        },
        {
          id: 'function-maintenance',
          name: 'Function Maintenance'
        },
        {
          id: 'data-quality-dashboards',
          name: 'Data Quality Dashboard'
        }
      ],
      currentNamespaceId: ''
    };
  }
  render() {
    return (
      <div className="Container">
        <div className="NamespaceList-container">
          <div className="NamespaceList-header">
            <TextField placeholder="Search namespace" />
            <div>&nbsp;</div>
            <Button variant="contained" color="primary">
              New
            </Button>
          </div>
          <div className="NamespaceList">
            <NamespaceList namespaces={this.state.namespaces} />
          </div>
        </div>
        <div className="CurrentNamespace">
          <CurrentNamespace />
        </div>
      </div>
    );
  }
}

export default App;

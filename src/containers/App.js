import './App.css';

import React from 'react';

import NamespaceList from '../components/NamespaceList/NamespaceList';
import CurrentNamespace from '../components/CurrentNamespace/CurrentNamespace';
import { TextField, Button } from '@material-ui/core';
import { find } from 'lodash';

class App extends React.Component {
  state = {
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
    currentNamespace: null
  };

  setCurrentNamespace = namespaceId => {
    this.setState({
      currentNamespace: find(this.state.namespaces, ['id', namespaceId])
    });
  };

  render() {
    return (
      <div className="Container">
        <div className="NamespaceList-container">
          <div className="NamespaceList-header">
            <TextField placeholder="Search namespace" />
            <div>&nbsp;</div>
            <Button variant="outlined" size="small" color="primary">
              New
            </Button>
          </div>
          <div className="NamespaceList">
            <NamespaceList
              namespaces={this.state.namespaces}
              currentNamespaceId={
                this.state.currentNamespace
                  ? this.state.currentNamespace.id
                  : ''
              }
              onSetCurrentNamespace={this.setCurrentNamespace.bind(this)}
            />
          </div>
        </div>
        <div className="CurrentNamespace">
          <CurrentNamespace namespace={this.state.currentNamespace} />
        </div>
      </div>
    );
  }
}

export default App;

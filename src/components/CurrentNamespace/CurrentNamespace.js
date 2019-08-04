import React from 'react';
import CurrentNamespaceHeader from '../CurrentNamespaceHeader/CurrentNamespaceHeader';
import NamespaceKeyList from '../NamespaceKeyList/NamespaceKeyList';
import './CurrentNamespace.css';

const currentNamespace = ({ namespace }) => {
  return (
    <div className="CurrentNamespace-container">
      <div className="CurrentNamespace-details">
        <CurrentNamespaceHeader namespace={namespace} />
        <NamespaceKeyList />
      </div>
      <div className="CurrentNamespace-editor">Namespace key editor</div>
    </div>
  );
};

export default currentNamespace;

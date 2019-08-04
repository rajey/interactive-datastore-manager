import React from 'react';
import { Divider } from '@material-ui/core';
import './CurrentNamespaceHeader.css';
const currentNamespaceHeader = ({ namespace }) => {
  return (
    <div>
      {namespace ? (
        <div>
          <div className="CurrentNamespace-title">{namespace.name}</div>
          <Divider />
          <div>
            <code>{namespace.id}</code>
          </div>
        </div>
      ) : (
        <div>Namespace is not defined</div>
      )}
    </div>
  );
};

export default currentNamespaceHeader;

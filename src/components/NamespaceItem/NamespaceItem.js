import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import './NamespaceItem.css';

const namespaceItem = ({
  namespace,
  currentNamespaceId,
  onSetCurrentNamespace
}) => {
  const setCurrentNamespace = e => {
    e.stopPropagation();
    onSetCurrentNamespace(namespace.id);
  };

  const isCurrent = () => {
    return namespace && namespace.id === currentNamespaceId;
  };

  return (
    <div className={isCurrent() ? 'ActiveNamespaceItem' : ''}>
      {namespace ? (
        <ListItem button onClick={event => setCurrentNamespace(event)}>
          <ListItemText>{namespace.name}</ListItemText>
        </ListItem>
      ) : (
        <div>Namespace not defined</div>
      )}
    </div>
  );
};

export default namespaceItem;

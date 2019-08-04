import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const namespaceItem = ({ namespace, onSetCurrentNamespace }) => {
  const setCurrentNamespace = e => {
    e.stopPropagation();
    onSetCurrentNamespace(namespace.id);
  };

  return (
    <div>
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

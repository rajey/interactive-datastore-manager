import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const namespaceItem = ({ namespace }) => {
  return (
    <div>
      {namespace ? (
        <ListItem button>
          <ListItemText>{namespace.name}</ListItemText>
        </ListItem>
      ) : (
        <div>Namespace not defined</div>
      )}
    </div>
  );
};

export default namespaceItem;

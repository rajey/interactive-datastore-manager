import React from 'react';
import { List } from '@material-ui/core';
import NamespaceItem from '../NamespaceItem/NamespaceItem';
import EmptyList from '../EmptyList/EmptyList';

const namespaceList = ({
  namespaces,
  currentNamespaceId,
  onSetCurrentNamespace
}) => {
  return (
    <div>
      {!namespaces || namespaces.length === 0 ? (
        <EmptyList name={'namespace'} />
      ) : (
        <List>
          {namespaces.map(namespace => (
            <NamespaceItem
              onSetCurrentNamespace={onSetCurrentNamespace}
              currentNamespaceId={currentNamespaceId}
              key={namespace.id}
              namespace={namespace}
            />
          ))}
        </List>
      )}
    </div>
  );
};

export default namespaceList;

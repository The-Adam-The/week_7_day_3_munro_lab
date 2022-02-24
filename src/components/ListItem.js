import React from 'react';
import './ListItem.css';
import './MunroDetail';


const ListItem = ({munro, onMunroSelect}) => {

  const handleSelect = function() {
    onMunroSelect(munro);
  }

  return (
        <option value={munro} onChange={handleSelect}> {munro.name}</option>
        );
}

export default ListItem;
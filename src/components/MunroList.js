import React from 'react';
import ListItem from './ListItem';


const MunroList = ({munros, onMunroSelect}) => {

   const handleSelect = function(munro) {
    onMunroSelect(munro);
  }

  const munrosNodes = munros.map((munro) => {
    return (
      <ListItem onChange={handleSelect(munro)} munro={munro} key={munro.smcid}/>
      );
    });

  return (
    <div>
    <select>
      {munrosNodes}
    </select>
  </div>
  )
}

export default MunroList;
import React, { useState } from 'react';

const ListItem = ({children}) => {
  const [done, setDone] = useState(false);

  return (
    <li style={{
      textDecoration: done ? "line-through" : 'unset'
    }}
    
    onClick={() => {
      setDone(!done)
    }}>{children}</li>
  )
}

export default ListItem
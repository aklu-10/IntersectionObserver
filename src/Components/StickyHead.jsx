import React from 'react'

const StickyHead = ({children}) => {

  return (
    <div style={{position:'sticky', top:'0', padding:'10px'}}>
        {children}
    </div>
  )
}

export default StickyHead
import React from 'react'
import ItemList from './ItemList'

const Content = ({items}) => {
  return (
    <div className='content-container'>
       <ItemList 
          items = {items}
        />
    </div>
  )
}

export default Content
import React, { useContext } from 'react';
//Context
import { checkedContext } from '../context/CheckedContextProvider'

const SelectedItems = () => {

const {listItems} = useContext(checkedContext)
{listItems.map(item=>(item.checked && console.log(item)))}
    return (
        <div className='selectedItems-container'>
            <h2>selected Items</h2>
            {listItems.map(item => (item.checked && <p key={item.id}>{item.title}</p>))}
                
            
        </div>
    );
};

export default SelectedItems;
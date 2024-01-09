import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

let RightMenu =(props)=>
{
    return(
        <div className='rightMenu'>
            
            <ul>
                <li><FontAwesomeIcon icon={faCartShopping} /> {props.countValue} Items</li>
                <li><FontAwesomeIcon icon={faSearch} /> </li>
            </ul>
        </div>
    )
}
export default RightMenu
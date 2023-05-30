import React ,{useContext} from 'react'
import { AppContext } from '../context/AppContext'
import {TiDelete} from 'react-icons/ti'

export default function ExpenseItem(props) {
   const {dispatch}=useContext(AppContext);

   const handleDelete=()=>{
    dispatch({
      type:'DELETE_EXPENSE',
      payload:props.id
    })
   };

  return (

   <li key={props.id}className='list-group-item d-flex justify-content-between align-item-center'>
     {props.name}
     <div>
        <span className="badge rounded-pill bg-primary">${props.cost}</span>
        <TiDelete size='1.5rem' style={{marginLeft:5}} onClick={handleDelete}></TiDelete>
     </div>
   </li>
  )
}

import React,{useState,useContext} from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

export default function AddExpense() {
    const {dispatch}=useContext(AppContext);

   const [name, setname] = useState('');
   const [cost, setcost] = useState('');
   const handleSubmit=(e)=>{
        e.preventDefault();
        // alert(name+' '+cost);
        const expense={
            id: uuidv4(),
            name:  name,
            cost: parseInt(cost)
        }
        dispatch({type:'ADD_EXPENSE',payload:expense});
   }
  return (
    <form onSubmit={handleSubmit}>
        <div className="row">
            <div className="col-sm">
                <label htmlFor="name">Name</label>
                <input type="text"
                       required='required'
                       className='form-control'
                       id='name'
                       value={name}
                       onChange={(e)=>{setname(e.target.value)}} />
                <div className="col-sm mt-3">    
                <label htmlFor="cost">Cost</label>
                <input type="number"
                       required='required'
                       className='form-control'
                       id='cost'
                       value={cost} 
                       onChange={(e)=>{setcost(e.target.value)}}
                       />
                  </div>

                  <div className="col-sm mt-3">
                    <button type='submit'
                            className='btn btn-primary'>Save It</button>
                  </div>
            </div>
        </div>
    </form>
  )
}

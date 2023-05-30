import React,{useContext} from 'react'
import ExpenseItem from './ExpenseItem'
// import ExpenseSofar from './ExpenseSofar'
import { AppContext } from '../context/AppContext'

export default function ExpenseList() {
    const {expenses}=useContext(AppContext);
    return (
    <div>
        <ul className='list-group'>
            {
                expenses.map(((expenseItem) =>(
                    <ExpenseItem 
                    id={expenseItem.id} 
                    name={expenseItem.name} 
                    cost={expenseItem.cost}/>
                )))
            }
        </ul>
    </div>
  )
}

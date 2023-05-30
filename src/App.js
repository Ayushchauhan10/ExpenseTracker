import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget'
import Remaining from './components/Remaining';
import ExpenseSofar from './components/ExpenseSofar';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { AppProvider } from './context/AppContext';

function App() {
  return (

    <AppProvider>
    <div className="container  ">
      <div className="container bg-bgnewcolor  px-4 py-2 mx-auto my-3 ">
        <h1 className="mt-3">Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />

          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseSofar />
          </div>
        </div>
      </div>
      <h1>Expenses</h1>
      <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList/>

          </div>
     
    </div>
    <h1 className='mt-3 '>Add Expense</h1>
    <div className="mt-3">
      <div className="col-sm">
      <div>
      <AddExpense/>
    </div>
      </div>
    </div>
    
    </div>
    </AppProvider>


  );
}

export default App;

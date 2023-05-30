import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/scss/bootstrap.scss';
import '../custom.scss';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
export default function Remaining() {
  const { expenses, budget } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
  return (
         <div className="alert alert-custom-color " >
           <span>Remaining: £{budget - totalExpenses}</span>
         </div>
  )
}

import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function Budget() {
  const {budget}= useContext(AppContext)
  return (
    <div>
        <div className="alert alert-warning">
            <span> Budget: ${budget}</span>
        </div>
    </div>
  )
}

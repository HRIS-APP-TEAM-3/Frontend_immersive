import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import User from './pages/user/listUser'
import ListReimbursement from './pages/employee/reimbursement/listReimbursement'
import TakenReimbursement from './pages/employee/reimbursement/reimbursementTaken'
import HistoryReimbursement from './pages/history/reimbursement'
import ResultKey from './pages/result/listResult'
import Progress from './pages/result/progress'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard/>} path='/dashboard'/>
        <Route element={<User/>} path='/user'/>
        <Route element={<ListReimbursement/>} path='/reimbursement'/>
        <Route element={<TakenReimbursement/>} path='/reimbursement-taken'/>
        <Route element={<HistoryReimbursement/>} path='/history/reimbursement'/>
        <Route element={<ResultKey/>} path='/result-key'/>
        <Route element={<Progress/>} path='/progress'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
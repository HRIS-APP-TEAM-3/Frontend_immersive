import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import User from './pages/user/listUser'
import ListReimbursement from './pages/employee/reimbursement/listReimbursement'
import TakenReimbursement from './pages/employee/reimbursement/reimbursementTaken'
import HistoryReimbursement from './pages/history/reimbursement'
import ResultKey from './pages/result/listResult'
import Progress from './pages/result/progress'
import Login from './pages/login'
import ListEmployee from './pages/employee/listEmployee'
import TimeOff from './pages/timeoff'
import HistoryTimeOff from './pages/history/TimeOff'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Login/>} path='/'/>
        <Route element={<ListEmployee/>} path='/listemployee'/>
        <Route element={<TimeOff/>} path='/timeoff'/>
        <Route element={<HistoryTimeOff/>} path='/history/timeoff'/>
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
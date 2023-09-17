import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import User from './pages/user/listUser'
import ListReimbursement from './pages/employee/reimbursement/listReimbursement'
import TakenReimbursement from './pages/employee/reimbursement/reimbursementTaken'
import HistoryReimbursement from './pages/history/reimbursement'
import PersonalData from './pages/employee/DataEmployee/PersonalData'
import Attandence from './pages/employee/DataEmployee/Attendence'
import TimeOff from './pages/employee/DataEmployee/TimeOff'
import HistoryAttendence from './pages/history/Attendence'
import AddUser from './pages/user/addPersonalData'
import AddImportantData from './pages/user/addImporttanData'
import AddEducation from './pages/user/addEducation'
import Approval from './pages/user/approval/Index'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Dashboard/>} path='/dashboard'/>
        <Route element={<User/>} path='/user'/>
        <Route element={<AddUser/>} path='/user/adduser'/>
        <Route element={<ListReimbursement/>} path='/reimbursement'/>
        <Route element={<TakenReimbursement/>} path='/reimbursement-taken'/>
        <Route element={<HistoryReimbursement/>} path='/history/reimbursement'/>
        <Route element={<PersonalData/>} path='/employee/personaldata'/>
        <Route element={<Attandence/>} path='/employee/attandence'/>
        <Route element={<TimeOff/>} path='/employee/timeoff' />
        <Route element={<HistoryAttendence/>} path='/history/attendence'/>
        <Route element={<AddImportantData/>} path='/user/addimportantdata'/>
        <Route element={<AddEducation/>} path='/user/addeducation'/>
        <Route element={<Approval/>} path='/user/approval'/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
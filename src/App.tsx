import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import User from './pages/user/listUser'
import ListReimbursement from './pages/employee/reimbursement/listReimbursement'
import TakenReimbursement from './pages/employee/reimbursement/reimbursementTaken'
import HistoryReimbursement from './pages/history/reimbursement'
import PersonalData from './pages/employee/personalData'
import Attandence from './pages/employee/attendence'
import HistoryAttendence from './pages/history/attendence'
import AddUser from './pages/user/addPersonalData'
import AddImportantData from './pages/user/addImporttanData'
import AddEducation from './pages/user/addEducation'
import Approval from './pages/user/approval/Index'
import ResultKey from './pages/result/listResult'
import Progress from './pages/result/progress'
import Login from './pages/login'
import ListEmployee from './pages/employee/listEmployee'
import TimeOff from './pages/employee/timeOff'
import HistoryTimeOff from './pages/history/TimeOff'
import About from './pages/about'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Login/>} path='/'/>
        <Route element={<Dashboard/>} path='/dashboard'/>
        <Route element={<About/>} path='/about'/>

        <Route element={<User/>} path='/user'/>
        <Route element={<AddUser/>} path='/user/adduser'/>
        <Route element={<AddImportantData/>} path='/user/addimportantdata'/>
        <Route element={<AddEducation/>} path='/user/addeducation'/>
        <Route element={<Approval/>} path='/user/approval'/>

        <Route element={<ListEmployee/>} path='/listemployee'/>
        <Route element={<ResultKey/>} path='/result-key'/>
        <Route element={<Progress/>} path='/progress'/>

        <Route element={<ListReimbursement/>} path='/reimbursement'/>
        <Route element={<TakenReimbursement/>} path='/reimbursement-taken'/>
        <Route element={<PersonalData/>} path='/personaldata'/>
        <Route element={<Attandence/>} path='/attandence'/>
        <Route element={<TimeOff/>} path='/timeoff' />

        <Route element={<HistoryTimeOff/>} path='/history/timeoff'/>
        <Route element={<HistoryReimbursement/>} path='/history/reimbursement'/>
        <Route element={<HistoryAttendence/>} path='/history/attendence'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
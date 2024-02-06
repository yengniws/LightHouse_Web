import { Routes, Route } from 'react-router-dom'
import BoardList from './nav/BoardList'
import Home from './Home'
import User from './nav/User'
import Grade1 from './questionChoose/Grade1'
import Grade2 from './questionChoose/Grade2'
import Grade3 from './questionChoose/Grade3'
import Login from './login/Login'
import Rank from './nav/Rank'
import A1 from './questionChoose/A1'
import ExtraLogin from './login/ExtraLogin'
import AuthProvider from './login/authProvider'
import BoardDetail from './nav/BoardDetail'
import BoardWrite from './nav/BoardWrite'
import Q from './questionChoose/Q'
import UploadQ from './questionChoose/UploadQ'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Grade1' element={<Grade1 />} />
        <Route path='/Q' element={<Q />} />
        <Route path='/get/:id/:category' element={<A1 />} />
        <Route path='/Grade2' element={<Grade2 />} />
        <Route path='/Grade3' element={<Grade3 />} />
        <Route path='/Board' element={<BoardList />} />
        <Route path="/post/:id" element={<BoardDetail />} />
        <Route path='/BoardWrite' element={<BoardWrite />} />
        <Route path='/Rank' element={<Rank />} />
        <Route path='/User' element={<User />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ExtraLogin' element={<ExtraLogin />} />
        <Route path='/UploadQ' element={<UploadQ />} />
      </Routes>
    </AuthProvider>
  )
}

export default App

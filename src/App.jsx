import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

function App() {

  const [user] = useState(null);

  const AuthRoute = () => {
    return user ? <Navigate to='/dashboard' /> : <Outlet />
  }

  const ProtectedRoute = () => {
    return user ? <Outlet /> : <Navigate to="/login" />
  }

  return (<Routes>
    {/* Public */}
    <Route path='/' element={<Placeholder message="Landing Page" />} />
    <Route path='/pricing' element={<Placeholder message="Pricing Page" />} />

    {/* Auth */}
    <Route element={<AuthRoute />}>
      <Route path='/login' element={<Placeholder message="Login" />} />
      <Route path='/signup' element={<Placeholder message="Sign Up" />} />
      <Route path='/forgot-password' element={<Placeholder message="Forgot Password" />} />
    </Route>

    {/* Protected Routes */}
    <Route element={<ProtectedRoute />}>
      <Route path='/dashboard' element={<Placeholder message="Dashboard" />} />
      <Route path='/templates' element={<Placeholder message="Templates" />} />
      <Route path='/editor/:id' element={<Placeholder message="Resume Editor" />} />
      <Route path='/settings' element={<Placeholder message="Settings" />} />
    </Route>

    <Route path='*' element={<Placeholder message="404, Not Found" />} />
  </Routes>)
}


const Placeholder = ({ message = "Placeholder" }) => <div className='text-center fs-5 my-5'>{message}</div>

export default App

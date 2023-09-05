import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import UserPage from './pages/UserPage'
import ShowUserPage from './pages/ShowUserPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<span className='text-2xl'>Home Page</span>} />
          <Route path="user" element={<UserPage />} />
          <Route path="show" element={<ShowUserPage />} />
          <Route
            path="*"
            element={<span className='text-2xl'>Not found</span>}
          />
        </Route>
      </Routes>
    </>
  )
}

export default App

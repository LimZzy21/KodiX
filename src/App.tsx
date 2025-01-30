import {Routes, Route, BrowserRouter as Router}from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'

function App() {
  return (
    <>
     <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App

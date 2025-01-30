import {Routes, Route, BrowserRouter as Router}from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import PostDetails from './pages/DetailsPost'

function App() {
  return (
    <>
     <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/post/:id' element={<PostDetails/>}/>
        </Routes>
     </Router>
    </>
  )
}

export default App

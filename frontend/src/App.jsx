import Home from './components/Home.jsx'
import { Route,Routes } from 'react-router-dom'
import ModelPredict from './components/ModelPredict.jsx'
import Rehab from './components/Rehab.jsx'
import TeleBot from './components/TeleBot.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/regions" element={<ModelPredict/>}></Route>
        <Route path="/rehab" element={<Rehab/>}></Route>
        <Route path='/telebot' element={<TeleBot/>}></Route>
      </Routes>
    </>
  )
}

export default App

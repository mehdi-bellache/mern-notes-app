import {Route, Routes} from "react-router";

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast';

function App() {
  return (
    <div data-theme="coffee">
      {/* <button onClick={()=>{toast.success("congrats")}} className='text-red-950 bg-pink-400'>click me</button> */}
      {/* <button className='btn btn-outline'>click me</button> */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App

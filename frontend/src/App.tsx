import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Form from './components/Form'
import Comment from './components/Comment'
import Delete from './components/Delete'
import Edit from './components/Edit'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/form' element={<Form />}/>
          <Route path='/comment/:id' element={<Comment />}/>
          <Route path='/edit/:id' element={<Edit />}/>
          <Route path='/delete/:id' element={<Delete />}/>
        </Routes>
      </div>
    </>
  )
}

export default App

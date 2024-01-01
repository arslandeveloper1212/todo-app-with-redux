
import './App.css';
import AddNoteForm from './components/AddNoteForm';
// import NoteList from './components/NoteList';
import {Routes,Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import Header from './components/Header';
import Logout from './components/Logout';
function App() {
  return (
    <div className="note-taking-app">
    <Header/>
    <Routes>
    <Route path='/logout' element={<Logout/>}/>
      <Route path='/signin' element={<Register/>}/>
      <Route
          path="/home"
          element={<ProtectedRoute element={<AddNoteForm />} />}
        />
        <Route path='*' navigate to="/signin"/>

    </Routes>
    
  </div>
  );
}

export default App;

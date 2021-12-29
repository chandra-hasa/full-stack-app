import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import StudentList from './components/StudentList';
import PageError from './components/PageError';
import AddStudents from './components/AddStudents';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StudentList/>}/>
        <Route path="*" element={<PageError/>}/>
        <Route path="/add" element={<AddStudents/>}/>
        <Route path="/student/edit/:studentId" element={<AddStudents/>}/>
        <Route path="/student/delete/:studentId" element={<StudentList/>}/>

      </Routes>
          

      

    </Router>
    
  );
}

export default App;

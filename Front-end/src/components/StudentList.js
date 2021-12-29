import React from 'react';
import {useState,useEffect,} from 'react';
import {Link} from 'react-router-dom';
import studentService from '../services/studentService'
import 'bootstrap/dist/css/bootstrap.min.css' 



function StudentList() {

    const [students,setStudents]=useState([]);

    useEffect(()=>{
      init();
    },[])


    const init=()=>{
        studentService.getAll()
      .then(response=>{
        console.log("Printing students data...",response.data);
        setStudents(response.data);
      })
      .catch(error=>{
        console.log("Something went wrong..",error);
      })
    }

    const handleDelete=(studentId)=>{
        studentService.remove(studentId)
        .then(response=>{
            console.log("Delete operation success...!");
            init();

        })
        .catch(error=>{
            console.log("Something went wrong..!",error);
        })
    }
  
    return (
        <div className='container'>
            <h3>LIST OF STUDENTS</h3>
            <hr/>
            <div>
            <Link to="/add" className="btn btn-primary mb-2">Add Student</Link>
                <table className='table table-bordered table-striped'>
                <thead className='thead-dark'>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    students.map(student=>(
                    <tr key={student.studentId}>
                        <td>{student.studentName}</td>
                        <td>{student.age}</td>
                        <td>
                            <Link className='btn btn-sm btn-warning' to={`/student/edit/${student.studentId}`}>Update</Link>
                            <button className='btn btn-sm  btn-danger ml-4' onClick={(e)=>{handleDelete(student.studentId)}}>Delete</button>
                        </td>
                        
                    </tr>
                    ))
                }
                </tbody>
                
                </table>
            </div>

            
            
        </div>
    )
}

export default StudentList

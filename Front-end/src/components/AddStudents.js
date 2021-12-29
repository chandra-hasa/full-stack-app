import React from 'react';
import {useState,useEffect} from 'react';
import studentService from '../services/studentService';
import {useNavigate,Link, useParams} from 'react-router-dom';

function AddStudents() {

    const [studentName,setStudentName]=useState('');
    const [age,setAge]=useState();
    const navigate = useNavigate();
    const {studentId}= useParams();

    const saveStudent=(e)=>{
        e.preventDefault();
        const student={studentName,age,studentId};
        if(studentId){
            studentService.update(student)
            .then(response=>{
                console.log("Updated succesfully!!",response.data);
                navigate('/');
            })
            .catch(error=>{
                console.log("Something went wrong",error);
            })

        }
        else{
            studentService.create(student)
        .then(response=>{
            console.log("Student added Succesfully..!",response.data);
            navigate('/');
        })
        .catch(error=>{
            console.log("Something went wrong..!",error);
        })
        }

    }

    useEffect(()=>{
        if(studentId){
            studentService.get(studentId)
            .then(student=>{
                setStudentName(student.data.studentName);
                setAge(student.data.age);
            })
            .catch(error=>{
                console.log("Something went wrong",error);
            })
        }
    },[studentId])


    return (
        <div className='container'>
            <h3>Add New Student</h3>
            <hr/>
            <form>
                <div className='form-group'>
                    <div className='form-group'>
                        <input
                            type="text"
                            className='form-control col-4'
                            id="name"
                            value={studentName}
                            onChange={(e)=>setStudentName(e.target.value)}
                            placeholder='Enter name'
                        />
                    </div>

                    <div className='form-group'>
                        <input
                            type="number"
                            className='form-control col-4'
                            id="age"
                            value={age}
                            onChange={(e)=>setAge(e.target.value)}
                            placeholder='Enter age'
                        />
                    </div>

                    <div className='form-group'>
                        <button className='btn btn-info' onClick={(e)=>saveStudent(e)}>Save</button>
                    </div>
                    

                </div>
            </form>
            <hr/>

            <Link to="/" className='btn btn-sm btn-outline-info'>Back to List</Link>
        </div>
    )
}

export default AddStudents

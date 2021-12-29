package com.school.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.school.entity.StudentEntity;
import com.school.repository.StudentRepository;



@RestController
@RequestMapping("/api/school")
@CrossOrigin("*")
public class StudentController {
	
	@Autowired
	private StudentRepository sRepo;
	
	@GetMapping(value="/home")
	public String homePage() {
		return "Welcome!! This is Home Page";
	}
	
	@GetMapping(value="/students")
	public List<StudentEntity> getAllStudents(){
		 return sRepo.findAll();
	}
	
	@PostMapping(value="/add/student")
	public StudentEntity saveStudent(@RequestBody StudentEntity student) {
		return sRepo.save(student);
	}
	
	@GetMapping(value="get/student/{id}")
	public StudentEntity getStudentById(@PathVariable int id) {
		return sRepo.findById(id).get();
	}
	
	@PutMapping("/update/student")
	public StudentEntity updateStudent(@RequestBody StudentEntity student) {
		return sRepo.save(student);
	}
	
	@DeleteMapping("/delete/student/{id}")
	public ResponseEntity<HttpStatus> deleteStudent(@PathVariable int id){
		sRepo.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		
	}
	
	
	
	
}
	
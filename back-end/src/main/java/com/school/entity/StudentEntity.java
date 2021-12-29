package com.school.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



/*1. Entity
  2. POJO
  3. applications.properties
  4. repository Interface
  5. Service Interface
  6. Service Implementation Class
  7. Controller
*/

@Entity(name="stud_db")
@Table(name="stud_db")
public class StudentEntity {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private int studentId;
	private String studentName;
	private int age;
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	
	
	

}

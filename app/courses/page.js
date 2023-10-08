



'use client'

import { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

function Courses() {
  const [students, setStudents] = useState([]);
  const [studentN, setStudentN] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");

  // Fetch the courses from Firestore
  const fetchCourses = async () => {
    try {
      const collectionName = collection(db, "courses");
      const docs = await getDocs(collectionName);
      const coursesData = [];

      docs.forEach((doc) => {
        coursesData.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setStudents(coursesData);
    } catch (error) {
      console.error("Error fetching courses", error);
    }
  };

  // Add a new course to Firestore
  const addHandler = async () => {
    const newCourse = {
      name: studentN,
      course,
      date,
    };

    try {
      const collectionName = collection(db, "courses");
      await addDoc(collectionName, newCourse);
      console.log("Course added successfully");
      fetchCourses(); // Refresh the list of courses after adding
    } catch (e) {
      console.error("Error adding course: ", e);
    }
  };

  // Delete a course from Firestore
  const onDeleteHandler = async (id) => {
    try {
      await deleteDoc(doc(db, "courses", id));
      console.log("Course deleted successfully");
      fetchCourses(); // Refresh the list of courses after deletion
    } catch (err) {
      console.error("Error deleting course: ", err);
    }
  };

  useEffect(() => {
    fetchCourses(); // Fetch courses when the component mounts
  }, []);
////
 const show = ()=>{
      const x = document.getElementById('content')
      // const x = document.getElementsByClassName('nav')
      // const x = document.getElementsByName("nav")
      if(x.style.display == 'block'){
          x.style.display = 'none'
      }else{
          x.style.display = 'block'
      }
   }
   //
   const notshow = ()=>{
    const x = document.getElementById('content')
    if(x.style.display == 'block'){
        x.style.display = 'none'
    }else{
        x.style.display = 'block'
    }
 }


  return (
    <>
     
<div className="border-2 p-2 rounded-lg hover:scale-100 bg-sharoon-400 w-2/12 text-center text-white " onClick={show}>To add Courses</div>
<div id="content" className="hidden flex justify-center items-center my-10">
        <div className="border shadow-2xl  bg-sharoon-400 p-5 w-3/4 md:w-3/5">
        
            <h1 className="text-center text-xl font-semibold mb-2 text-white ">
              Add User
            </h1>
            <div className="space-y-5">
              <div className="flex  gap-3.5">
                
                <input
                  className="w-full p-2 border"
                  type="text"
                  placeholder="Course Name"
                  onChange={(e)=> setStudentN(e.target.value)}
                  required
                />
              </div>
              <textarea
              rows={5}
                className="w-full p-2 border"
                type="text"
                placeholder="course"
                onChange={(e)=> setCourse(e.target.value)}                required
              ></textarea>
             
             
              <input
                className="text-center text-white bg-transparent"
                type="date"
                onChange={(e)=> setDate(e.target.value)}                required
              />
              <div className="text-center space-x-4">
                <button
                  className=" text-white hover:scale-105 rounded-md outline-none text-center  p-2 px-3 border"
                  onClick={addHandler}
                >
                  Add students
                </button>
                <button
                  className=" bg-slate-700 text-white hover:scale-105 rounded-md outline-none text-center  p-2 px-3 border"
onClick={notshow}                >
                  Close
                </button>
              </div>
            </div>
          
        </div>
      </div>
        
      <div id="show" className="flex justify-center my-10">
        {/* ... your add course form code ... */}
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full">
          <h1 className="text-center text-4xl font-extrabold my-4">Offered Courses</h1>
          <table className="w-full text-center border border-blue-900">
            <thead className="">
              <tr>
                <th className="py-2 font-bold border-2 border-sharoon-400">
                  Course Name
                </th>
                <th className="py-2 font-bold border-2 border-sharoon-400">
                   Course Discripation
                </th>
                
                <th className="py-2 font-bold border-2 border-sharoon-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((item) => (
                <tr className="text-black" key={item.id}>
                  <td className="py-2 border border-sharoon-400">
                    {item.name}
                  </td>
                  <td className="py-2 border border-sharoon-400">
                    {item.course}
                  </td>
                  
                  <td className="flex gap-1">
                    <button className="border rounded-md p-1 hover:bg-sharoon-400 duration-1000">
                      Edit
                    </button>
                    <button
                      className="rounded-md p-1 border hover:bg-sharoon-400 duration-1000"
                      onClick={() => onDeleteHandler(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
<div>
  
</div>
    </>
  );
}

export default Courses;

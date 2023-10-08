"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, addDoc } from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/config/firebase";


function AddData() {
 const [studentId,setStudentId]=useState('')
 const [studentN,setStudentN]=useState('')
 const [course,setCourse]=useState('')
 const [contect,setContect]=useState('')
 const [adress,setAdress]=useState('')
 const [date,setDate]=useState('')

 const  addHandler = async () =>{
    let student = {
      name: 
      studentId,
      studentN,
      course,
      contect,
      adress,
      date
    }
    try {
      const collectionName = collection(db,"student")
    
      await addDoc(collectionName, student )
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }


  return (
    <>
      <div className=" flex justify-center my-10">
        <div className="border shadow-2xl  bg-sharoon-400 p-5 w-3/4 md:w-3/5">
        
            <h1 className="text-center text-xl font-semibold mb-2 text-white ">
              Add User
            </h1>
            <div className="space-y-5">
              <div className="flex gap-3.5">
                <input
                  className="w-6/12 p-2 border "
                  type="number"
                  placeholder="Student Id"
                  onChange={(e)=> setStudentId(e.target.value)}
                  required
                />
                <input
                  className="w-6/12 p-2 border"
                  type="text"
                  placeholder="student Name"
                  onChange={(e)=> setStudentN(e.target.value)}
                  required
                />
              </div>
              <input
                className="w-full p-2 border"
                type="text"
                placeholder="course"
                onChange={(e)=> setCourse(e.target.value)}                required
              />
              <input
                className="w-full p-2 border"
                type="number"
                placeholder="contect Number"
                onChange={(e)=> setContect(e.target.value)}                required
              />
             
              <input
                className="text-center text-white bg-transparent"
                type="date"
                onChange={(e)=> setDate(e.target.value)}                required
              />
              <div className="text-center">
                <button
                  className="  hover:scale-105 rounded-md outline-none text-center  p-2 px-3 border"
                  onClick={addHandler}
                >
                  Add students
                </button>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}
export default AddData;

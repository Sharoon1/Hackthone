'use client'
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "@/config/firebase";
import { useState } from "react";
import { Firestore } from "firebase/firestore";
import { getDocs, collection, query, where, deleteDoc, updateDoc} from "firebase/firestore"

function Student(){
    const [id, setId] = useState("")
    const [students, setStudents] = useState([])
    const fetchDocs = async ()=> {
        try {
          const collectionName = collection(db, "student")
          const queryRef = query(collectionName, where("email","==","sharoon"))
          const docs = await getDocs(collectionName)
          const studentsData = []
          docs.forEach((doc)=>{
            studentsData.push({
              id:doc.id,
              ...doc.data()
            })
          })
          setStudents(studentsData)
          console.log("students",studentsData)
    
        } catch (error) {
          console.log("error",error);
        }         
}

const onDeleteHandler = async (student) => {
  try {
    await deleteDoc(doc(db, "student", student.id));
    const studentsAfterDelete = students.filter((s) => s.id !== student.id);
    setStudents(studentsAfterDelete);
    console.log("Student deleted successfully");
  } catch (error) {
    console.error("Error deleting student:", error);
  }
};



// const onDeletHandler = async (id)=>{
//     const docRef = doc(db,"student", id )

//    try {
//     setId(id)
    
//     await deleteDoc(docRef)
    
     
//     const newStudents = students.filter((student)=>id !== student.id)
//     setLoading(false)
//     setStudents(newStudents)
     
//    } catch (error) {
//     alert("error")
//    }
//   }
useEffect(()=>{
    fetchDocs()
},[])
    return(
        <>
<div>
    <div>
       <button className="border p-2 hover:bg-sharoon-400 duration-1000">Search</button> <input className="border-2 border-sharoon-400" type="text" placeholder="Search user here"/>
    </div>
</div>




        <div className="flex justify-center items-center">
        <div className="w-full">
        <h1 className="text-3xl my-2 font-boldnpm install chart.js
">Students Enrolled</h1>
        <table class="w-full text-center border border-blue-900">
        <thead class="">
        <tr>
            <th class="py-2 font-bold border-2 border-sharoon-400">Student Id</th>
            <th class="py-2 font-bold border-2 border-sharoon-400">Student Name</th>
            <th class="py-2 font-bold border-2 border-sharoon-400">Student Course</th>
            <th class="py-2 font-bold border-2 border-sharoon-400">Student Contacts</th>
            <th class="py-2 font-bold border-2 border-sharoon-400">Student Address</th>
            <th class="py-2 font-bold border-2 border-sharoon-400">Udate</th>
        </tr>
    </thead>
{students.map((item)=>{
    return(
        <tbody>
        <tr class="text-black " >
            <td class="py-2 border border-sharoon-400">{item.id}</td>
            <td class="py-2 border border-sharoon-400">{item.name}</td>
            <td class="py-2 border border-sharoon-400">{item.course}</td>
            <td class="py-2 border border-sharoon-400">{item.contect}</td>
            <td class="py-2 border border-sharoon-400">{item.adress}</td>
            <td className="flex gap-1"><button className="border rounded-md p-1 hover:bg-sharoon-400  duration-1000" >Edit</button><button className="rounded-md p-1 border hover:bg-sharoon-400 duration-1000" onClick={onDeleteHandler}>Del</button></td>
        </tr>
    </tbody>

    )
})}   
   
</table>

            </div>

            </div>
        </>
    )
}
export default Student
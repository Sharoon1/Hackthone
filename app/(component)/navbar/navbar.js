'use client'


import dayjs from "dayjs"
import { useEffect, useState } from "react"


function Navbar(){
const [date ,setDate] = useState(0)
useEffect(()=>{
    setInterval(()=>{
        setDate(dayjs().format('dddd hh:mm:ss YYYY'))
    })
})
    return(
        <>
<div className="bg-sharoon-400">
    <div className="text-center text-white text-3xl py-3 font-extrabold">{date}</div>
</div>
        </>
    )
}
export default Navbar
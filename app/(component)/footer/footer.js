


function Footer(){
const year = new Date().getFullYear()    
    return(
        <>
        <p className="border-t-4 border-sharoon-400 py-2 text-center">&copy; All Rignt Reserved {year}</p>
        </>
    )
}
export default Footer
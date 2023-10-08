import Image from 'next/image';
import salyni from '../../../public/assets/salyni.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope } from '@fortawesome/free-regular-svg-icons';
function Header (){
    return(
        <>
        <div className='border-b-4 py-2 border-sharoon-400'>
            <div className='flex  mx:10 md:mx-20 justify-between items-center'>
<Image className=' h-10 w-11 md:h-13 md:w-14' src={salyni} alt='salyni pic'/>                <h1 className="xl sm:text-3xl md:text-4xl font-bold">Student DashBoard</h1>
               <div className='flex gap-3'><FontAwesomeIcon className='h-7  m-1'  icon={faEnvelope}/>  
               <span className="absolute inline-flex items-end justify-center w-2 h-2 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full right-20   dark:border-gray-900"></span>
               <FontAwesomeIcon className='relative  h-7 m-1' icon={faBell}/></div> 
               
            </div>
        </div>
        </>
    )
}
export default Header;
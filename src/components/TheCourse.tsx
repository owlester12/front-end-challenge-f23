import {useEffect, useState} from 'react';
import { Course } from '../interfaces';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useDispatch } from 'react-redux';
import { addPrimCart, delPrimCart, addAltCart, delAltCart } from '../redux/cart';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../redux/store';

interface theCourseProps{
    course: Course
}

const TheCourse:React.FC<theCourseProps> = ({course}) => {


    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch();
    const {primCart, isPrimCart, altCart, description} = useSelector((state: RootState) => state.cart);
    const limit = primCart.length < 7
    const delCart = (course: number) => {
      if(isPrimCart){
        dispatch(delPrimCart(course))
      } else {
        dispatch(delPrimCart(course))
      }
    }
    const addCart = (course: Course) => {
      if(isPrimCart){
        dispatch(addPrimCart(course))
      } else {
        dispatch(addAltCart(course))
      }
    } 
    const theCart = isPrimCart ? primCart : altCart 
    const inCart = theCart.map((a) => a.number).includes(course.number)




  
  
    return( 
    <div className = 'border-b-[1px] border-black border-opacity-10 p-[10px] hover:bg-gray-100' onClick = {() => setIsShown(!isShown)}>
      <div className = 'courseHead' onClick = {() => setIsShown(!isShown)} >
        <div className = 'courseID'>
          {!inCart && limit && <button className = "rounded-[10px] text-[#9c0404] font-bold cursor-poiter mr-[10px]"
            onClick={() => addCart(course)}> <AddCircleIcon /> </button>}   
          {inCart && <button className = "remBut cursor-pointer mr-[10px]" onClick={() => delCart(course.number)}><RemoveCircleIcon/></button>}
          {course.dept} {' '} {course.number}

        </div>
        <div className = 'title'> {course.title} </div>
      </div>
    
      {((isShown && description !== 2) || description === 1) && <div className = "text-[13px]" >  {course.description} </div>}
      {((isShown && description !== 2) || description === 1) && (course["prereqs"] !== undefined) && Array.isArray(course["prereqs"]) && <div className = 'text-[13px]'> Prerequisites: {course["prereqs"]?.join(", ")} </div>}
      {((isShown && description !== 2) || description === 1) && (course["cross-listed"] !== undefined) && <div className = 'text-[13px]'> Also offered as: {course["cross-listed"]?.join(", ")}</div>}
           
    </div>);
  }

  export default TheCourse;
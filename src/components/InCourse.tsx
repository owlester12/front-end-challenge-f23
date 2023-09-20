import { Course } from "../interfaces"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Draggable } from "@hello-pangea/dnd";
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux'
import { RootState } from "../redux/store";
import { delPrimCart, delAltCart } from "../redux/cart";

interface inCourseProps{
    course: Course
    index: number
}

const InCourse:React.FC<inCourseProps> = ({course, index}) =>{

  const dispatch = useDispatch();
  const {isPrimCart} = useSelector((state: RootState) => state.cart);
  const delCart = (course: number) => {
    if(isPrimCart){
      dispatch(delPrimCart(course))
    } else {
      dispatch(delAltCart(course))
    }
  }


    return( 
    <Draggable key = {course.number} draggableId = {course.number.toString()} index= {index}>
      {(provided) => (
        <div {...provided.draggableProps} ref = {provided.innerRef} {...provided.dragHandleProps}
        className = 'border-b-[1px] border-black border-opacity-10 p-[10px] bg-white hover:bg-gray-100'>
          <div className = 'courseHead' >
            <div className = 'courseID'>
              <button className = "remBut cursor-pointer mr-[10px]" onClick={() =>delCart(course.number)}><RemoveCircleIcon/></button>
              
              {(index + 1).toString() + ".   "}  {course.dept} {' '} {course.number}
            </div>
            <div className = 'title'> {course.title} </div>
          </div>
        </div>
   
      )}
    </Draggable>);
}
export default InCourse;
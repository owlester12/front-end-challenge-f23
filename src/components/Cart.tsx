import InCourse from "./InCourse";
import {DragDropContext, DropResult, Droppable} from '@hello-pangea/dnd'
import {useSelector} from 'react-redux'
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { reOrderPrimCart, setIsPrimCart, reOrderAltCart } from "../redux/cart";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



const Cart = () =>{

  const {primCart, altCart, isPrimCart} = useSelector((state: RootState) => state.cart);


  const dispatch = useDispatch();
  const [expand, setExpand] = useState(false)
  const theCart = isPrimCart ? primCart : altCart 

  //Used when changing course carts onClcik
  const setOther = () => {
    dispatch(setIsPrimCart())
    setExpand(!expand)
  }

  //Handles drag and drop 
  const handleOnDragEnd = (result:DropResult) => {
    if(!result.destination) return;
    const cartCopy = theCart.map((x) => x);
    const [reorderItem] = cartCopy.splice(result.source.index, 1);
    cartCopy.splice(result.destination.index, 0,  reorderItem);
    if(isPrimCart){
      dispatch(reOrderPrimCart(cartCopy));
    } else {
      dispatch(reOrderAltCart(cartCopy));
    }
    
  }

 


    return( 
    <div className = ' border-black border-opacity-10 ' >
       <div className = " flex justify-between hover:bg-gray-100 bg-white p-2 cursor-pointer" onClick={() => setExpand(!expand)}>
       <h4 className = " "> {isPrimCart ? "Primary " : "Alternate "} Course Cart</h4>
                {!expand && <ExpandMoreIcon />}
                {expand && <ExpandLessIcon/>}
        </div>
        <div className = {`hover:bg-gray-100 bg-white p-2 cursor-pointer  border-b-[1px] border-black border-opacity-10 ${expand ? "block" : "hidden"}`} onClick = {() => setOther()}>
        {isPrimCart ? "Alternative " : "Primary "} Course Cart
         </div>


       
        
        
        
        {theCart.length === 0 && <div className = "empty text-sm p-2"> Your cart is empty </div> }
     
        <DragDropContext onDragEnd = {handleOnDragEnd}>
          <Droppable droppableId="cart">
            {(provided) => (
              <div {...provided.droppableProps} ref = {provided.innerRef}>
   
                  {theCart?.map((value, index) => (
   
   
                    <InCourse  key = {value.number} course = {value}  index = {index} />
   
                  ))}
                {provided.placeholder}
              </div> )}
      
          </Droppable>
        </DragDropContext>
     </div>
     );
   }
   
   export default Cart;
   
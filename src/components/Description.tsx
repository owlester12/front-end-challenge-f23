import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useSelector} from 'react-redux'
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setDescription } from "../redux/cart";

const Description = () => {
    const [expand, setExpand] = useState(false)
    const {description} = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const setDescript = (val:number) => {
        dispatch(setDescription(val));
        setExpand(!expand);
    }

    return (
    <div className = " border-b-[1px] border-black border-opacity-10">
    <div className='flex justify-between  hover:bg-gray-100 bg-white p-2 cursor-pointer' onClick = {() => setExpand(!expand)}>
        <div className = " cursor pointer" > Description: {description === 0 ? "Show on click" : description === 1 ? "Show all" : "Hide all"} </div>
            {!expand && <ExpandMoreIcon />}
            {expand && <ExpandLessIcon/>}
        </div>

        {expand && description !== 0 &&
        <div className = {`hover:bg-gray-100 bg-white p-2 px-10 cursor-pointer  `} onClick = {() => setDescript(0)}> Show on click </div>
        }
       {expand && description !== 1 &&
        <div className = {`hover:bg-gray-100 bg-white p-2 px-10 cursor-pointer  `} onClick = {() => setDescript(1)}> Show all </div>
        }
         {expand && description !== 2 &&
        <div className = {`hover:bg-gray-100 bg-white p-2 px-10 cursor-pointer  `} onClick = {() => setDescript(2)}> Hide all </div>
        }


            </div>

  )
}

export default Description
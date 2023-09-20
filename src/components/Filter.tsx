import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useSelector} from 'react-redux'
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/cart";


const Filter = () => {

    const [expand, setExpand] = useState(false)
    const {filter} = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    function getClass(inp:boolean){
        if (inp){
            return "selected";
        }
        else {
            return "unselected";
        }
    }



    return ( 
    <div className = " border-b-[1px] border-black border-opacity-10">
        <div className='flex justify-between  hover:bg-gray-100 bg-white p-2 cursor-pointer' onClick = {() => setExpand(!expand)}>
            <div className = " cursor pointer" > Filters: {!filter[0] ? " 100s " : ""} {!filter[1] ? " 200s " : ""} {!filter[2] ? " 300s " : ""} {!filter[3] ? " 400s " : ""}  </div>
                {!expand && <ExpandMoreIcon />}
                {expand && <ExpandLessIcon/>}
            </div>
        <div className = {`flex justify-center flex-wrap ${expand ? "block" : "hidden"}`}>

            <button className = {"filt " + getClass(filter[0])} onClick={() => dispatch(setFilter(0))}> 100s </button>
            <button className = {"filt " + getClass(filter[1])} onClick={() => dispatch(setFilter(1))}> 200s </button>
            <button className = {"filt " + getClass(filter[2])} onClick={() => dispatch(setFilter(2))}> 300s </button>
            <button className = {"filt " + getClass(filter[3])} onClick={() => dispatch(setFilter(3))}> 400s </button>
        
        </div>
    </div>

);

}
export default Filter;
import {ChangeEvent, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/cart";




const Nav = () =>{

  const dispatch = useDispatch();

 
  const [theInput, setTheInput] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>){
   setTheInput(e.target.value);
  };

  function onSubmitSearch(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    dispatch(setSearch(theInput));

  }

  let navigate = useNavigate(); 
  function routeChange(){ 
    navigate('checkout');
  }

  
  
return  (<div className = "w-full p-[0.1rem] pl-[50px] border-b-[1px] bg-[#041d5b] border-gray-100 text-white h-[7vh] flex items-center justify-around m-0">
    <h2 className = "sm:block hidden font-bold text-lg">Penn Course Cart</h2>
    <form className = "flex items-center" onSubmit={e => onSubmitSearch(e)}>
    <input className = "focus:outline-none min-w-[150px]  py-[2px] px-[16px] rounded-l-[8px] border-[1px] border-white text-black"
     type = "text" id = "navInput" onChange={e => handleChange(e)}  />
    <button type = "submit"
     className = "py-[2px] px-[2px] w-[50px] rounded-r-[8px] border-[1px] border-[#9c0404] bg-[#9c0404] text-white"> 
     <SearchIcon /></button>
    </form>
    <button className = " border-[#9c0404] bg-[#9c0404] py-[4px] px-[8px] rounded-[8px] text-white items-center text-[15px] font-bold"
  onClick = {routeChange}> Checkout </button>
  </div>
  );
}

export default Nav;
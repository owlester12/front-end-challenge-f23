import courses_data from  '../data/courses.json'
import TheCourse from './TheCourse';
import { Course } from '../interfaces';
import {useSelector} from 'react-redux'
import { RootState } from "../redux/store";

const Courses = () => {

  const courses:Course[] = courses_data
  const {filter} = useSelector((state: RootState) => state.cart);
  const {theSearch} = useSelector((state: RootState) => state.cart)

  //filters courses according to filters and search input
  const filtCourse = courses.filter(function(entry){



    return (theSearch === ""|| theSearch === " " 
    || ((entry.dept.toLowerCase().includes(theSearch.toLowerCase()) ||
    entry.description.toLowerCase().includes(theSearch.toLowerCase()) ||
    entry.title.toLowerCase().includes(theSearch.toLowerCase()) ||
    (entry.dept.toLowerCase() + " " + entry.number.toString()).includes(theSearch.toString().toLowerCase())) ))&&
   ((filter[0]&& entry.number >= 100 && entry.number < 200 )
    || (filter[1] && entry.number >= 200 && entry.number <300)
    || (filter[2] && entry.number >= 300 && entry.number < 400) 
    || (filter[3] && entry.number >= 400 && entry.number < 500)
    );

  })

  return (
  <div className = "ml-[10px]">
    {theSearch !== ""  && theSearch !== " "  &&
    <div className = "text-[12px]">Showing results for "{theSearch}" </div>}
    <div className = "border-b-[1px] border-black border-opacity-10 top-0  sticky bg-white  py-2 bg-opacity-80 backdrop-blur-sm">
      Course Catalog
    </div>
    {filtCourse.map((value) => (

      <TheCourse course = {value} />
      
    ))}
  </div>);
}

export default Courses;
import Nav from './components/Nav';
import Filter from './components/Filter';
import Cart from './components/Cart';
import Courses from './components/Courses';
import Description from './components/Description';

const App= () => {


  return (
    <div className = "app">
    <div className = "nav">
    <Nav  />
    </div>
    <div className = "flex h-[93vh] sm:flex-row flex-col">
        <div className = "sm:flex-[0.3] flex-[0.25] sticky overflow-y-scroll  sm:border-r-[1px] border-b-[2px] border-[#041d5b] sm:border-black  sm:border-opacity-10">
        <Filter   />
        <Description />
        <Cart  />

        </div>
        <div className = "flex sm:flex-[0.7] flex-[0.75] flex-col overflow-y-scroll">
        <Courses  />

        </div>
        </div>
    </div>
  )
}
export default App;

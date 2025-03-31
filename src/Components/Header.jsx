import { Link } from "react-router-dom"


function Header() {
    
  return (
    <header className=" border-b-gray-500 flex justify-between flex-wrap items-center py-4 px-4 shadow-md  text-green-400">
      <h3 className="font-bold">STARTUPS<br /><span className=" ">.SL</span></h3>
     
      <nav className="flex flex-col md:flex-row items-center  gap-4">
        <ul className="flex justify-center space-x-8 mt-5 md:mt-0 list-none text-black"> 
          <li>
            <Link className="hover:bg-white  text-gray-800  p-1 rounded-md cursor-pointer list-none mr-5" to={"/Home"}>Home</Link>
          </li>   

         <li> <Link className="hover:bg-white  text-gray-800  p-1 rounded-md cursor-pointer list-none mr-5" to={"/"}>Industries</Link></li>
         <li> <Link className="hover:bg-white  text-gray-800  p-1 rounded-md cursor-pointer list-none mr-5" to={"/"}>Top 50</Link></li>
            
        </ul>
      </nav>
    </header>
  )
}

export default Header

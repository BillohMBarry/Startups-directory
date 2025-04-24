import { Link } from "react-router-dom"


function Header() {
    
  return (
    <header className="border-b-gray-500 flex justify-between flex-wrap items-center py-4 px-4 shadow-md">
      <h1 className="font-bold">STARTUPS<br /><span className=" ">.SL</span></h1>
     
      <nav className="flex flex-col md:flex-col items-center  gap-4">
        <ul className="flex justify-center space-x-8 mt-5 md:mt-0 list-none text-black"> 
          <li>
            <Link className="text-gray-800 font-bold p-1 rounded-md cursor-pointer list-none" to={"/"}>Home</Link>
          </li>   

         {/* <li> <Link className="hover:bg-white  text-gray-800  p-1 rounded-md cursor-pointer list-none mr-5" to={"/"}>Top 50</Link></li> */}
         <li> <Link className="text-gray-800 font-bold p-1 rounded-md cursor-pointer list-none" to={"/"}>Founders</Link></li>
         <li> <Link className="text-gray-800 font-bold p-1 rounded-md cursor-pointer list-none" to={"/"}>Blog</Link></li>
            
        </ul>
      </nav>
    </header>
  )
}

export default Header

import { useState } from "react"
import {Link} from "react-router-dom"
import StartupData from "./StartupData.json"

function Home() {
    const [Info, setInfo] = useState(StartupData)
    const [noResults, setNoResults] = useState(false)
    const handlingFormInput = (formData) => {
      const getInfo = formData.get("search")
      const searchByName =  StartupData.filter(byNames => byNames.name.toLowerCase().includes(getInfo))
      setInfo(searchByName)
      setNoResults(searchByName.length === 0)
      console.log(getInfo)
    }
  //  currently my search functionality work well, but there is a problem if i search from a specific if it avaiable it render the startup and if i try to search for another startups when it have render a startup it doesn't show there until i refersh the page why does this happen so 
  return (
    <div>
      
      <article className="container mx-auto px-4 py-8  ">
        <section className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-gray-700">List of Startups in Sierra Leone</h1>
          <Link to={"/addStartup"} className="bg-blue-600 hover:bg-blue-700 text-white font-md py-2 px-4 rounded">Add Startup</Link> 
        </section>
        <section className=" mb-6 flex  items-center">
          <form action={handlingFormInput}>           
            <input type="text" 
             name="search" 
             id="search"
             aria-label=""
             placeholder="lowerCase letters e.g life blood" className="bg-gray-500 text-white rounded-md p-2 w-70"  />
          </form>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-md py-2 px-4 ml-8 rounded">Search</button>
        </section>
  
        <div className="overflow-x-auto shadow-md rounded-lg ">
          <table className="min-w-full  border-gray-500 justify-center " >
            <thead className="bg-gray-100">
              <tr className="border-b hover:bg-gray-500 bg-gray-500 ">
               <th className="py-3 px-2 sm:px-6 text-left font-semibold text-gray-700">No</th>
               <th className="py-3 px-2 sm:px-6 text-left font-semibold text-gray-700"></th>
               <th className="py-3 px-2 text-left  sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">Names</th>
               <th className="py-3 px-2 text-left  sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">Description</th>
               <th className="py-3 px-2 text-left  sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">Industry</th>
               <th className="py-3 px-2 text-left  sm:px-6 font-semibold text-gray-700 text-sm sm:text-lg">founded</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 sm:flex-col ">
            {noResults &&
            <div className="mt-4">
                <p className="text-black">No Result found</p>
            </div> }  
              { Info.map((item) => (
                <tr key={item.id} className=" hover:bg-gray-50">
                     <td className="py-4 px-6 text-justify text-gray-800">{item.id}</td>    
                  <td className="py-4 px-2 sm:px-6 text-justify text-gray-800">
                    <img src={item.startUpLogo} alt="img" className="w-8 h-8 sm:h-12 object-contain rounded-md"/>
                  </td>  
                  <td className="sm:px-6 text-justify text-gray-800">
                    <Link to={`/startUpsDetails/${item.name}` } className="text-sm sm:text-base">
                      {item.name}
                    </Link>
                  </td>                    
                  <td className=" sm:px-6  text-justify text-gray-800 max-w-[150px] sm:max-w-md text-medium  sm:text-lg truncate">{item.description}</td>
                  <td className=" md:table-cell py-4 px-6 text-justify text-gray-800 text-sm sm:text-base">{item.industry}</td>
                  <td className="py-4 px-6 text-justify text-gray-800">{item.founded}</td>    
                </tr>
              ))}
            
                
            </tbody>

           
          </table>
         
        </div>
      </article>
    </div>
  )
}
export default Home

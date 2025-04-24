import { useState } from "react"
import {Link} from "react-router-dom"
import StartupData from "../StartupsData/StartupData.json"

function Home() {
  const [Info, setInfo] = useState(StartupData)
  const [noResults, setNoResults] = useState(false)

  // search
  const handlingFormInput = (formData) => {
    const getInfo = formData.get("search")
    const searchByName =  StartupData.filter(byNames => byNames.name.toLowerCase().includes(getInfo))
    setInfo(searchByName)
    setNoResults(searchByName.length === 0)
    console.log(getInfo)
  }
  
  return (  
    <article className="container mx-auto px-4 py-8  ">
      {/* flex justify-between  p-4 flex-wrap items-center mb-6 */}
      <section className="flex justify-between flex-wrap mb-6">
        <h1 className="font-bold text-gray-700 mb-3">List of Startups in Sierra Leone</h1>
        <br />
        <Link to={"/addStartup"} className="bg-blue-600 text-white font-md py-2 px-4 rounded" aria-label="add startup">Add Startup</Link> 
      </section>
      <section className="mb-6">
        <form action={handlingFormInput}>   
          <div className="flex gap-5 flex-wrap">
            <input type="text" name="search" id="search"  placeholder="lowerCase letters e.g life blood" className="bg-gray-500 text-white rounded-md p-2 w-70"  />
            <button className="bg-blue-600 text-white font-md py-2 px-4 rounded" aria-label="search">Search</button>
          </div>        

        </form>
      </section>
      <section className="overflow-x-auto shadow-md rounded-lg ">
        <table className="min-w-full border-gray-500 justify-center sm:w-180" >
          <thead className="bg-gray-100">
            <tr className="border-b hover:bg-gray-500 bg-gray-500 ">
              <th className="py-3 px-2 sm:px-6 text-left font-semibold text-neutral-100">No</th>
              <th className=""></th>
              <th className="py-3 px-2 text-left sm:px-6 font-semibold text-neutral-100 text-sm sm:text-lg">Names</th>
              <th className="py-3 px-2 text-left sm:px-6 font-semibold text-neutral-100 text-sm sm:text-lg">Service</th>
              <th className="py-3 px-2 text-left sm:px-6 font-semibold text-neutral-100 text-sm sm:text-lg">Industry</th>
              <th className="py-3 px-2 text-left sm:px-6 font-semibold text-neutral-100 text-sm sm:text-lg">founded</th>
            </tr>
          </thead>
          {noResults &&
            <div className="text-center m-7">
              <p className="font-bold text-gray-800 text-medium sm:text-lg">No Result found</p>
            </div> 
          }  
          <tbody className="divide-y divide-gray-200 sm:flex-col ">
            { Info.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="sm:px-6 text-justify text-gray-800 py-4 px-6 text-medium">{item.id}</td>    
                <td className="sm:px-6 ">
                  <img src={item.startUpLogo} alt="img" className="w-8 h-8 object-contain  rounded-md"/>
                </td>  
                <td className="sm:px-6 sm:m-3 text-medium text-justify py-4 px-6 sm:text-lg text-gray-950 text-wrap">
                  <Link to={`/startUpsDetails/${item.name}`}>
                    {item.name}
                  </Link>
                </td>     
                <td className=" sm:px-6  text-justify text-gray-800 max-w-[150px] sm:max-w-md text-medium  sm:text-lg truncate">
                  <Link to={`/startUpsDetails/${item.name}`}>
                    {item.service}
                  </Link>
                </td>
                <td className=" md:table-cell py-4 px-6 text-justify text-gray-800 text-medium sm:text-lg ">
                  <Link to={`/startUpsDetails/${item.name}`}>
                   {item.industry}
                  </Link>
                </td>
                <td className="py-4 px-6 text-justify text-gray-800 text-medium sm:text-lg">{item.aboutStartups.founded}</td>    
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </article>
  )
}
export default Home

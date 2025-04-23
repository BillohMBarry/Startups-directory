import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import StartupData from '../StartupsData/StartupData.json';
import { ClipLoader } from "react-spinners";
import {ArrowLeft} from "lucide-react"
import StartupUpdateFrom from "./StartupUpdateFrom";

function UpdateStartup() {
  const [isLoading, setIsLoading] = useState(true);
  const [startup, setStartup] = useState(null);
  const { name } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
   setTimeout(() => {
    const getStartup = StartupData.find((item) => item.name === name);
    setStartup(getStartup);
    setIsLoading(false)
    }, 3000);
  }, [name]);

 
 // Show loading state if startup data isn't loaded yet
if (isLoading) {
  return(
    <div className="mt-6 flex justify-center items-center" >
      <span>Loading startup info</span>
        <ClipLoader color="#036ffc" />
    </div>
  )    
  }
  const formSubmit = (event) => {
    event.preventDefault();
    alert("Changes saved!");
    navigate(`/startUpsDetails/${startup.name}`); 
  }
  return (
    <section className="container mx-auto px-4 py-8 flex items-center flex-wrap">
      <section className=" flex-2/3 flex flex-row flex-wrap justify-between items-center ">
        <h3 className="sm:text-lg">Edit Startup</h3>
        <div className="text-medium inline-flex items-end gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
         <ArrowLeft size={20} />
         <Link to={`/startUpsDetails/${startup.name}`}>
          Back to Profile</Link>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <p className="mb-3 sm:text-lg">{`Update information for ${startup.name}`}</p>
        <StartupUpdateFrom formSubmit={formSubmit} startup={startup} setStartup={setStartup}/>
      </section>
    </section>
 )}


export default UpdateStartup;
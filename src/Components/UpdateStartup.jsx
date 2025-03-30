import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import StartupData from '../StartupsData/StartupData.json';
import { ClipLoader } from "react-spinners";
import {ArrowLeft} from "lucide-react"
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

   const handleChange = (event) => {
    // Then destructure name and value from the event target
    const { name, value } = event.target;
    setStartup((prevSet) => {
      // Handle fields within aboutStartups object (about, location, phone, founded)
      if (["about", "location", "phone", "founded"].includes(name)) {
        return {
          ...prevSet, 
          aboutStartups: {
            ...prevSet.aboutStartups,
            [name]: value
          }
        }
      } 
      // Handle fields within links object (website, facebook, instagram, x)
      else if (["website", "facebook", "instagram", "x"].includes(name)) {
        return {
          ...prevSet, 
          links: {
            ...prevSet.links,
            [name]: value
          }
        }
      } 
      // Handle all other top-level fields
      else {
        return {
          ...prevSet, 
          [name]: value
        }
      }
    })
  }
 // Show loading state if startup data isn't loaded yet
if (isLoading) {
  return(
    <div className="mt-6 flex justify-center items-center" >
      <span>Loading startup info</span>
        <ClipLoader color="#36d7b7" />
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
        <div className="">
          <h3 className="text-xl">Edit Startup</h3>
          <p>{`Update information for ${startup.name}`}</p>
        </div>
        <div className="text-medium  inline-flex items-end  gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
         <ArrowLeft size={20} />
         <Link to={`/startUpsDetails/${startup.name}`}>
          Back to Profile</Link>
        </div>
        </section>
      <section className="container mx-auto px-6 py-12">
      <form className="space-y-6 bg-white shadow-md rounded-lg p-6" onSubmit={formSubmit}>
        {/* Company Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" value={startup.name} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
          </div>     
          <div>
           <label htmlFor="description" className="block font-medium text-gray-700">Description</label>
            <textarea id="description" name="about" value={startup.aboutStartups.about} onChange={handleChange}  className="mt-1 block w-full h-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label htmlFor="service" className="block font-medium text-gray-700">Service</label>
            <input type="text" id="service" name="service" value={startup.service} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
          </div>
          <div>
           <label htmlFor="founded" className="block font-medium text-gray-700">founded</label>
            <input type="text" id="name" name="founded" value={startup.aboutStartups.founded} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
          </div>
        </div>
        {/* Website & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
           <label htmlFor="website" className="block font-medium text-gray-700">Website URL</label>
            <input type="url" id="website" name="website" value={startup.links.website} onChange={handleChange}  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>         
          <div>
            <label htmlFor="phone" className="block font-medium text-gray-700">Phone</label>
            <input type="number" id="name" name="phone" value={startup.aboutStartups.phone} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
          </div>
          <div>
            <label htmlFor="Logo" className="block font-medium text-gray-700">StartupLogo</label>
            <input type="file" id="Logo" name="tartUpLogo" onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
          </div>
        </div>
        {/* Employee Range & Industry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
           <label htmlFor="employees" className="block font-medium text-gray-700">Employee Range</label>
            <select id="employees" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300">
              <option>1</option>
              <option>10-50</option>
              <option>50-100</option>
              <option>100-500</option>
              <option>500-1000</option>
              <option>1000+</option>
            </select>
          </div>
          <div>
            <label htmlFor="industry" className="block font-medium text-gray-700">Industry</label>
            <select id="industry" value={startup.industry} name="industry" onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300">
             <option ></option>
              <option >Artificial Intelligence</option>
              <option>Agriculture</option>
              <option>Agri-Tech</option>
              <option>FinTech</option>
              <option>Clean Energy</option>
              <option >Construction</option>
              <option>Marketing</option>
              <option>Climate Change</option>
              <option>E-commerece</option>
              <option>Transportation/Logistics</option>
            </select>
          </div>
        </div>
        {/* Social Media */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
           <label htmlFor="twitter" className="block font-medium text-gray-700">Twitter (X) Link</label>
            <input type="url" id="twitter" name="x" value={startup.links.x} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label htmlFor="facebook" className="block font-medium text-gray-700">Facebook Page</label>
            <input type="url" id="facebook" name="facebook" value={startup.links.facebook} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label htmlFor="instagram" className="block font-medium text-gray-700">Instagram Page</label>
           <input type="url" id="instagram" name="instagram" value={startup.links.Instagram} onChange={handleChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>
        </div>
        {/* Address */}
        <div>
          <label htmlFor="address" className="block font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="location" value={startup.aboutStartups.location}onChange={handleChange}  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        {/* Team Member Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="team-name" className="block font-medium text-gray-700">Team Member Name</label>
            <input type="text" id="team-name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>
          <div>
            <label htmlFor="role" className="block font-medium text-gray-700">Role</label>
            <input type="text" id="role" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>
        </div>
        <div>
          <label htmlFor="bio" className="block font-medium text-gray-700">Bio</label>
          <textarea id="bio" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="linkedin" className="block font-medium text-gray-700">LinkedIn Profile</label>
          <input type="url" id="linkedin" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="profile-pic" className="block font-medium text-gray-700">Profile Picture</label>
          <input type="file" id="profile-pic" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        {/* Submit Button */}
        <div className="text-right">
          <button   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
            Submit
          </button>
        </div>
      </form>
    </section>
 </section>
);
}

export default UpdateStartup;
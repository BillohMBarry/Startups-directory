
function AddStartup() {
return (
  <section className="container mx-auto px-6 py-12">
    <h1 className="text-xl font-bold text-gray-900 mb-6">Add Startups</h1>   
    <form className="space-y-6 bg-white shadow-md rounded-lg p-6">
      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
          <input type="text" id="Startupname" name="name" autoComplete='true' className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
        </div>     
        <div>
          <label htmlFor="description" className="block font-medium text-gray-700">Description</label>
          <textarea id="description" className="mt-1 block w-full h-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="service" className="block font-medium text-gray-700">Service</label>
          <input type="text" id="service" name="service" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
        </div>
        <div>
          <label htmlFor="founded" className="block font-medium text-gray-700 mt-2">founded</label>
          <input type="text" id="found" name="founded" autoComplete='true' className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
        </div>
      </div>
      {/* Website & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address */}
        <div>
          <label htmlFor="address" className="block font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" autoCorrect='true' className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" autoComplete='true' className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>         
        <div>
          <label htmlFor="contact" className="block font-medium text-gray-700">Phone</label>
          <input type="number" id="contact" name="contact" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
        </div>
        <div>
          <label htmlFor="Startuplogo" className="block font-medium text-gray-700">StartupLogo</label>
          <input type="file" id="Startuplogo" name="StartUpLogo" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
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
          <select id="industry" name="industry" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300">
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
          <label htmlFor="website" className="block font-medium text-gray-700">Website URL</label>
          <input type="url" id="website" name="website" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="x" className="block font-medium text-gray-700">Twitter (X) Link</label>
          <input type="url" id="x" name="x" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="facebook" className="block font-medium text-gray-700">Facebook Page</label>
          <input type="url" id="facebook" name="facebook" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="instagram" className="block font-medium text-gray-700">Instagram Page</label>
          <input type="url" id="instagram" name="instagram" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
      </div>  
      {/* Founder Details */}
      <h3 className='text-gray-700 sm:text-lg'>Founder Profile</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
           <label htmlFor="firstName" className="block font-medium text-gray-700">Name</label>
          <input type="text" id='' name="firstName" autoComplete="given-name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label htmlFor="linkedin" className="block font-medium text-gray-700">LinkedIn Profile</label>
          <input type="url" id="linkedin" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
        </div>
      </div>
      <div>
        <label htmlFor="bio" className="block font-medium text-gray-700">Bio</label>
        <textarea id="bio" name="bio" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
      </div>
      <div>
        <label htmlFor="profile-pic" className="block font-medium text-gray-700">Profile Picture</label>
        <input type="file" id="profile-pic" name="profile-pic" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
      </div>
      {/* Submit Button */}
      <div className="text-right">
        <button aria-label="submit form"  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
          Submit
        </button>
      </div>
    </form>
  </section>
      
  
)}

export default AddStartup

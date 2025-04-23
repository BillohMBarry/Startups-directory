
function AddStartup() {
 return (
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-xl font-bold text-gray-900 mb-6">Add Startups</h1>
      
        <form className="space-y-6 bg-white shadow-md rounded-lg p-6">
          {/* Company Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">Startup Name</label>
              <input type="text" id="name" name="name" autoComplete="true" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
            </div>
            <div>
              <label htmlFor="description" className="block font-medium text-gray-700">Short Description</label>
              <textarea id="description" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
            </div>
            <div>
              <label htmlFor="service" className="block font-medium text-gray-700">Service</label>
              <input type="text" id="service" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
            </div>
            <div>
              <label htmlFor="founded" className="block font-medium text-gray-700">founded</label>
              <input type="date" name="found" id="founded" autoComplete="true" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
            </div>
            <div>
              <label htmlFor="Startuplogo" className="block font-medium text-gray-700">StartupLogo</label>
             <input type="file" id="Startuplogo" name="Startuplogo"  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
            </div>
          </div>
      
          {/* Website & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="website" className="block font-medium text-gray-700">Website URL</label>
              <input type="url"  id="web" name="webURL" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
            </div>
            <div>
              <label htmlFor="contactPhone" className="block font-medium text-gray-700">Phone</label>
              <input type="number" id="phone" name="Phone" autoComplete="true" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"  />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">Contact Email</label>
              <input type="email" id="email" name="email"  autoComplete="true" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
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
              <select id="industry" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300">
                <option>Artificial Intelligence</option>
                <option>Agriculture</option>
                <option>Agri-Tech</option>
                <option>FinTech</option>
                <option>Clean Energy</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
      
          {/* Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="twitter" className="block font-medium text-gray-700">Twitter (X) Link</label>
              <input type="url" id="twitter" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
            </div>
      
            <div>
              <label htmlFor="facebook" className="block font-medium text-gray-700">Facebook Page</label>
              <input type="url" id="facebook" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
            </div>
          </div>
      
          {/* Address */}
          <div>
            <label htmlFor="address" className="block font-medium text-gray-700">Address</label>
            <input type="text" id="address" autoComplete="true" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
          </div>
      
          {/* Team Member Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <h3>Founder Profile</h3>
            <div>
              <label htmlFor="firstName" className="block font-medium text-gray-700">Name</label>
              <input type="text" id="firstName" name="firstName" autoComplete="given-name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
            </div>
      
            <div>
              <label htmlFor="LastName" className="block font-medium text-gray-700">Role</label>
              <input type="text" id="LastName" autoComplete="family-name" className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all" aria-label="submit form">
              Submit
            </button>
          </div>
        </form>
      </section>
      
  
)}

export default AddStartup

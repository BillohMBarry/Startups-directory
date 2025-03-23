import { useState, useEffect, useRef} from "react"
import { ImagePlus, Trash2} from 'lucide-react';
import AddNewMemeber from "./AddNewMemeber";
function AddStartup() {
    const [shown, setShown] = useState(false)
    const [removeIteam, setremoveItem ] = useState(true)
    const [currentStep, setCurrentStep] = useState(1)
   
    const displayOthers = (event) => {
        event.preventDefault()
     setShown(preShown => !preShown)
    }
    // const removeMember = (event) => {
    //     event.preventDefault()
    //     setremoveItem(preIteam => !preIteam)
    // }
    // const sections = useRef(null)
    // useEffect(() => {
    //     if(shown && sections.current)
    //     sections.current.scrollIntoView({behavior: "smooth"})
    // }, [shown])
    const nextStep = (event) => {
        event.preventDefault()
        if(currentStep < 4)
        setCurrentStep(preStep => preStep + 1)
    }
    const goToPreviousStep = (event) => {
        event.preventDefault() 
        if(currentStep > 1) 
            setCurrentStep(preStep => preStep - 1)
    }
    // const goToStep = (step) => {
    //     setCurrentStep(step)
    // }
  return (
    <section className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 m-2 sm:m-5 flex flex-col md:flex-row">
       {/* className="container mx-auto px-4 py-8 flex justify-center flex-wrap  " */}
       <div className="mb-6 md:mb-0 md:mr-6 w-full md:w-1/4">
              <h5 className="text-gray-800 font-bold mb-4 text-lg">Add Startups</h5>
            <ul className="flex md:block space-x-2 md:space-x-0 overflow-x-auto pb-2 md:pb-0">
                <li className={`text-gray-800 py-2 px-3 rounded-md ${currentStep === 1 ? 'bg-gray-200 font-semibold' : ''}`} >Basic</li>
                <li className={`text-gray-800 py-2 px-3 rounded-md ${currentStep === 2 ? 'bg-gray-200 font-semibold' : ''}`}  >Location</li>
                <li className={`text-gray-800 py-2 px-3 rounded-md ${currentStep === 3 ? 'bg-gray-200 font-semibold' : ''}`}  >Team Information</li>
                <li className={`text-gray-800 py-2 px-3 rounded-md ${currentStep === 4 ? 'bg-gray-200 font-semibold' : ''}`} >Social Media</li>
                {/* <li className="text-gray-800">Funding Information</li> */}
            </ul>

       </div>
        <aside className="w-full md:w-3/4" >
            <form action="" className="w-full">
                
          
                { currentStep === 1 &&  (
                <>
                    {/* basic */}
                    <div className="bg-gray-700 p-4 rounded-md m-4">
                        <div className="flex justify-between items-center mb-2">
                        <h4 className="text-white text-lg font-medium" >Company Information</h4>
                        <span  className="text-gray-300 text-sm">1/5</span>

                        </div>
                        <br />
                        <label htmlFor="name" className="text-white block mb-1">Name of Startup</label>
                        <input type="text" name="name" id="name" className="bg-gray-500 text-white rounded-md p-2 w-full" />
                    </div>
                    <div className="bg-gray-700 p-4 rounded-md m-4">
                       <h4 className="text-white text-lg font-medium mb-1">Short description of Startup</h4>
                        <span className="text-gray-300 text-sm">Share a quick overview of your Startup</span>
                        <br />
                        <label htmlFor="name" className="text-white block mt-3 mb-1">Description</label>
                        <textarea name="description" id="description" className="bg-gray-500 text-white rounded-md p-2 w-full" rows={4}></textarea>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-md m-4">
                        <h4 className="text-white text-lg font-medium mb-1">Startup's Website</h4>
                        <span className="text-gray-300 text-sm">Startuo's website</span>
                        <br />
                        <label htmlFor="name" className="text-white block mt-3 mb-1">Website URL</label>
                        <input type="url" name="website" id="websiteURl" className="bg-gray-500 text-white rounded-md p-2 w-full" />
                    </div>
                    <div className="bg-gray-700 p-4 rounded-md m-4">
                        <h4  className="text-white text-lg font-medium mb-1">Startup's Contact Email</h4>
                        <span className="text-gray-300 text-sm">Contact us at</span>
                        <br />
                        <label htmlFor="name" className="text-white block mt-3 mb-1">Email</label>
                        <input type="email" name="email" id="email" className="bg-gray-500 text-white rounded-md p-2 w-full" />
                    </div>
                    <div className="bg-gray-700 p-4 rounded-md m-4">
                        <h4 className="text-white text-lg font-medium mb-1">Employee Range</h4>
                        <span className="text-gray-300 text-sm">Number of Employee</span>
                        <br />
                        <select name="" id="" className="bg-gray-500 text-white rounded-md p-2 w-full mt-3">
                            <option value="">1</option>
                            <option value="">10-50</option>
                            <option value="">50-10</option>
                            <option value="">100-500</option>
                            <option value="">500-1000</option>
                           <option value="">{'>'}1000</option>
                        </select>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-md m-4 scroll-auto">
                        <h4 className="text-white text-lg font-medium mb-1">Industry</h4>
                        <span className="text-gray-300 text-sm"> What category of industries does this startups belong to</span>
                        <br />
                        <select name="" id="" className="bg-gray-500 text-white rounded-md p-2 w-full mt-3">
                            <option value=""></option>
                            <option value="">Artificial Intelligence</option>
                            <option value="">Agriculture</option>
                            <option value="">Agri-Tech</option>
                            <option value="">Application Software</option>
                            <option value="">B2B</option>
                            <option value="">BlockChain</option>
                            <option value="">Brand Marketing</option>
                            <option value="">Construction</option>
                            <option value="">Clean Energy</option>
                            <option value="">Community</option>
                            <option value="">Consumer Goods</option>
                            <option value="">Digital Marketing</option>
                            <option value="">Ecommerece</option>
                            <option value="">E-learnig</option>
                            <option value="">E-HealthCare</option>
                            <option value="">Ed-Tech</option>
                            <option value="">FinTech</option>
                        </select>
                    </div>
                </>)}
                {  currentStep === 2 &&   (
                <>
                    {/* location */}
                    <div className="bg-gray-700 p-4 rounded-md m-4">
                       <h4 className="text-white text-lg font-medium mb-1"> Address, Block or street Number</h4> 
                       <p className="text-gray-300 text-sm">What street in freetown is the startup headquarted ?</p>
                        <br />
                        <label htmlFor="name" className="text-white block mb-1">Address</label>
                        <input type="text" name="name" id="name" className="bg-gray-500 text-white rounded-md p-2 w-full"  />
                    </div>
                </>)}
                {currentStep === 3 && (
                    <section className="w-full">
                        {/* team information */}
                        <>
                            <div className="bg-gray-700 p-4 rounded-md m-4" >
                                <h4 className="text-white text-lg font-medium mb-1">Name of team memeber</h4>
                                <p className="text-gray-300 text-sm">Enter the name of person</p>
                                <input type="text" className="bg-gray-500 text-white rounded-md p-2 w-full"  />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4" >
                            <h4  className="text-white text-lg font-medium mb-1">Role</h4>
                            <p className="text-gray-300 text-sm">what is the role of this team memeber in this company</p>
                            <input type="text" className="bg-gray-500 text-white rounded-md p-2 w-full"   />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-5">
                                <h4 className="text-white text-lg font-medium mb-1">Bio</h4>
                                <p className="text-gray-300 text-sm">Tell us about this team member</p>
                                <textarea name="" id="" className="bg-gray-500 text-white rounded-md p-2 w-full" rows={3}  />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4">
                            <h4 className="text-white text-lg font-medium mb-1">Linkedlin Profile URL</h4>
                            <p  className="text-gray-300 text-sm">Share link team member Linkedln profile</p>
                            <input type="url" className="bg-gray-500 text-white rounded-md p-2 w-full"  />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4" >
                                <h4 className="text-white text-lg font-medium mb-1">X Profile URL</h4>
                                <input type="url" className="bg-gray-500 text-white rounded-md p-2 w-full"  />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4">
                                <h4 className="text-white text-lg font-medium mb-1">Profile Picture</h4>
                                <p  className="text-gray-300 text-sm">Please add photo of this team mate</p> 
                                <ImagePlus size={30}  className="text-white mr-2"/>
                                <input type="file"  className="text-white "  />
                            </div>
                        </>
                     
                     {shown &&  
                        <>
                        
                            <div className="bg-gray-700 p-4 rounded-md m-4">
                                <h4 className="text-white text-lg font-medium mb-1">Name of team memeber</h4>
                               
                                <p className="text-gray-300 text-sm">Enter the name of person</p>
                                <input type="text" className="bg-gray-500 text-white rounded-md p-2 w-full" />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4">
                                <h4 className="text-white text-lg font-medium mb-1">Role</h4>
                                <p className="text-gray-300 text-sm">what is the role of this team memeber in this company</p>
                                <input type="text" className="bg-gray-500 text-white rounded-md p-2 w-full" />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4">
                                <h4 className="text-white text-lg font-medium mb-1">Bio</h4>
                                <p className="text-gray-300 text-sm">Tell us about this team member</p>
                                <textarea name="" id="" className="bg-gray-500 text-white rounded-md p-2 w-full" />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4">
                                <h4 className="text-white text-lg font-medium mb-1">Linkedlin Profile URL</h4>
                                <p className="text-gray-300 text-sm">Share link team member Linkedln profile</p>
                                <input type="url" className="bg-gray-500 text-white rounded-md p-2 w-full" />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4">
                                <h4 className="text-white text-lg font-medium mb-1">X Profile URL</h4>
                                <input type="url" className="bg-gray-500 text-white rounded-md p-2 w-full" />
                            </div>
                            <div className="bg-gray-700 p-4 rounded-md m-4">
                                <h4 className="text-white text-lg font-medium mb-1">Profile Picture</h4>
                                <p  className="text-gray-300 text-sm">Please add photo of this team mate</p>
                                <div className="flex items-center mt-3 ">
                                    <ImagePlus size={24} className="text-white mr-2" />
                                    <input type="file" className="text-white cursor-pointer"  />
                                </div>
                            </div>
                        </>}
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-md py-2 px-4 rounded m-3" onClick={displayOthers}>{shown ? "remove" : `Add another team member`}</button>
                    </section>
                 )}
                { currentStep === 4 &&  (
                <>
                    {/* social Media's */}
                    <div className="bg-gray-700 p-4 rounded-md m-4">
                      <h4  className="text-white text-lg font-medium mb-1">Company Social Media Information</h4>
                      
                      <p className="text-gray-300 text-sm">We Use this information to calculate metrics and bring your startup closer to investors</p>
                      <br />
                      <label htmlFor="name" className="text-white block mb-1">X formly Twitter lnk</label>
                      <input type="url" name="name" id="name" className="bg-gray-500 text-white rounded-md p-2 w-full"  />
                    </div>
                    <div className="bg-gray-700 p-4 rounded-md m-4">
                      <label htmlFor="name" className="text-white block mb-1">Facebook Page link</label>
                      <input type="url" name="name" id="name" className="bg-gray-500 text-white rounded-md p-2 w-full"  />
                    </div>
                </>)}
               
                <div className="flex justify-between ">
                   {currentStep > 1 && <button onClick={goToPreviousStep} className="bg-gray-500 hover:bg-blue-700 text-white font-md py-2 px-4 rounded m-3 cursor-pointer" >Back</button>}
                   <button onClick={nextStep} className="bg-gray-500 hover:bg-blue-700 text-white font-md py-2 px-4 rounded m-3 cursor-pointer">{currentStep === 4 ? "Submit" : "Next"}</button>
                </div>
            </form>
        </aside>
    </section>
  )
}

export default AddStartup

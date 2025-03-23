import { useState } from "react"

import { ImagePlus, Trash2 } from "lucide-react"
function AddNewMemeber() {
  const [teamMembers, setTeamMemebers] = useState([])
  const NewTeamMember = (event) => {
    event.preventDefault()
    setTeamMemebers([...teamMembers], {
        id: Date.now(),
        name: "",
        role: "",
        bio:"",
        linkedin: "",
        X: "",
        profilePicture: null 

    })
  }
  const removeTeamMember = (id) => {
    setTeamMemebers(teamMembers.filter(member => member.id !== id))
  }
  return (
    
        <section className="mt-6 pt-4 border-t border-gray-500">
            <button onClick={NewTeamMember}></button>
           {teamMembers.map((index,member) => (
             <div key={member.id}>
             <div className="flex justify-between items-center mb-4" >
                 <h3 className="text-lg font-semibold">Team member {index + 2}</h3>
                 <button 
                     type="button"
                     className="text-red-500 hover:text-red-700" 
                     onClick={() => removeTeamMember(member.id)}
                 >
                     <Trash2 size={24} />
                 </button>   
             </div>
             <div className="bg-gray-700 p-4 rounded-md m-4">
                 <h4 className="text-white text-lg font-medium mb-1">Name of team memeber</h4>
                 <p className="text-gray-300 text-sm">Enter the name of person</p>
                 <input 
                     type="text" 
                     className="bg-gray-500 text-white rounded-md p-2 w-full"
                     value={member.name}
                     onChange={(e) => updateTeamMember(member.id, 'name', e.target.value)}
                 />
             </div>
             <div className="bg-gray-700 p-4 rounded-md m-4">
                 <h4 className="text-white text-lg font-medium mb-1">Role</h4>
                 <p className="text-gray-300 text-sm">what is the role of this team memeber in this company</p>
                 <input 
                     type="text" 
                     className="bg-gray-500 text-white rounded-md p-2 w-full"
                     value={member.role}
                     onChange={(e) => updateTeamMember(member.id, 'role', e.target.value)}
                 />
             </div>
             <div className="bg-gray-700 p-4 rounded-md m-4">
                 <h4 className="text-white text-lg font-medium mb-1">Bio</h4>
                 <p className="text-gray-300 text-sm">Tell us about this team member</p>
                 <textarea 
                     className="bg-gray-500 text-white rounded-md p-2 w-full"
                     value={member.bio}
                     onChange={(e) => updateTeamMember(member.id, 'bio', e.target.value)}
                 />
             </div>
             <div className="bg-gray-700 p-4 rounded-md m-4">
                 <h4 className="text-white text-lg font-medium mb-1">Linkedlin Profile URL</h4>
                 <p className="text-gray-300 text-sm">Share link team member Linkedln profile</p>
                 <input 
                     type="url" 
                     className="bg-gray-500 text-white rounded-md p-2 w-full"
                     value={member.linkedin}
                     onChange={(e) => updateTeamMember(member.id, 'linkedin', e.target.value)}
                 />
             </div>
             <div className="bg-gray-700 p-4 rounded-md m-4">
                 <h4 className="text-white text-lg font-medium mb-1">X Profile URL</h4>
                 <input 
                     type="url" 
                     className="bg-gray-500 text-white rounded-md p-2 w-full"
                     value={member.twitter}
                     onChange={(e) => updateTeamMember(member.id, 'twitter', e.target.value)}
                 />
             </div>
             <div className="bg-gray-700 p-4 rounded-md m-4">
                 <h4 className="text-white text-lg font-medium mb-1">Profile Picture</h4>
                 <p className="text-gray-300 text-sm">Please add photo of this team mate</p>
                 <div className="flex items-center mt-3 ">
                     <ImagePlus size={24} className="text-white mr-2" />
                     <input 
                         type="file" 
                         className="text-white cursor-pointer"
                         onChange={(e) => updateTeamMember(member.id, 'profilePicture', e.target.files[0])}
                     />
                 </div>
             </div>
             </div>
           ))}
            
        </section>
  )
}

export default AddNewMemeber

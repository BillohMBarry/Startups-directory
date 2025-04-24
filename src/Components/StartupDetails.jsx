import StartupData from '../StartupsData/StartupData.json'
import ReviewModeration from './ReviewModeration';
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AiOutlineExport } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineX } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';

import Review from './Review';
function StartupDetails() {
    const {name} = useParams()
    const [startup, setStartup] = useState(null)
    const [moderationReview, setModerationReview] = useState(false)
    const [reviews, setReviews] = useState([])

    useEffect(() => {
      const getStartup =  StartupData.find((items) => items.name === name )
      setStartup(getStartup)
      if(getStartup && getStartup.reviews) {
        setReviews(getStartup.reviews)
      }
    }, [name]) 

    // Function to handle moderateReview status change
    const handleStatusChange = (reviewName, newStatus) => {
      setReviews(prevReviews => 
        prevReviews.map(review => 
          review.id === reviewName ? { ...review, status: newStatus } : review
        )
      );
    };
    const toggleModeration = () => {
      setModerationReview(preModerate => !preModerate)
    }
  return (
    <section className="container mx-auto px-4 py-8 ">
      <div className="min-w-full p-3">
        {startup && (
          <div className="bg-white shadow-md rounded-lg ">
            <div className="flex flex-wrap gap-7 m-3 p-3 ">
              <img src={startup.startUpLogo} alt={`${startup.name} logo`} className="w-30  p-2 rounded-md "/>
              <h1 className="font-medium text-center mt-3">{startup.name}</h1>
                <Link to={startup.links.website} className='flex flex-wrap font-medium mt-3 hover:underline'>
                  Visit Webiste
                  <AiOutlineExport size={30} />
                </Link>
            </div>
            <p className='p-3 text-gray-800 text-medium sm:text-lg'>{startup.service}</p>
            <div className='border-t-1  mt-3 p-3 '>
              <h1 className="font-bold text-gray-800 sm:text-lg">{`About ${startup.name}`}</h1>
              <p className='text-gray-800 text-medium sm:text-lg'>{startup.aboutStartups.about}</p>
              <div className="flex justify-between item-center flex-wrap mt-3">
                <div>
                  <h3 className="m-1 text-xl font-bold">Industry</h3>
                  <p className='text-gray-800 text-medium sm:text-lg'>{startup.industry}</p>
                </div>
                <div>
                  <h3 className="m-1 text-xl font-bold">Address</h3>
                  <address className='text-gray-800 text-medium sm:text-lg'>{startup.aboutStartups.location}</address> 
                  {/* <p className="text-gray-800 text-medium sm:text-lg">{startup.aboutStartups.location}</p> */}
                </div>
                <div>
                  <h3 className="m-1 text-xl font-bold">Phone</h3>
                  <p className='text-gray-800 text-medium sm:text-lg'>{startup.aboutStartups.phone ? `+${startup.aboutStartups.phone}` : "N/A"}</p>
                  <h3  className="text-xl font-bold">Operation Hours</h3>
                  <p className='text-gray-800 text-medium sm:text-lg'>
                    Mon-fri
                    {` ${startup.aboutStartups.operationHours.open} AM - ${startup.aboutStartups.operationHours.close} PM`}
                  </p>
                </div>
              </div>
              <div className='mt-4'>
               <Link to={`/updateStartup/${startup.name}`} className="bg-blue-600 text-white font-medium rounded px-1.5 p-2" aria-label='update startup'>Update Startup</Link> 
              </div>

            </div>
            <div className='border-t-1  mt-3 p-3 '>
              <h1 className="text-xl font-bold">Social Media</h1>
              <div className="flex mt-3">
                <Link to={startup.links.facebook} aria-label='facebook link'>
                  <AiOutlineFacebook size={30} />
                </Link>
                <Link to={startup.links.instagram} aria-label='instagram link'>
                  <AiOutlineInstagram size={30} />
                </Link>
                <Link to={startup.links.x} aria-label='twitter (x) link'>
                  <AiOutlineX size={30} />
                </Link>
              </div>
            </div>

            <div className="border-t-1  mt-3 p-3 ">
              <div className="flex justify-between flex-wrap">
                <h4 className="text-base font-medium">The reviews displayed here are placeholders used to demonstrate how review and moderation features works.</h4>
                <span className="underline cursor-pointer font-medium text-blue-600" onClick={toggleModeration} aria-labelledby='moderate review'>
                  {moderationReview ? "Back to Reviews" : "Moderate Review"}
                </span>
              </div>
              {reviews.map((startupReview, index) => (
                <div key={index} className='' >
                 {moderationReview  ? (
                  <ReviewModeration startupReview={startupReview} onStatusChange={handleStatusChange} />     
                  ) :(
                    <Review startupReview={startupReview} />  
                  )}
                   
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default StartupDetails

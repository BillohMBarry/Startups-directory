
import { useParams, Link } from 'react-router-dom'
import StartupData from './StartupData.json'
import { useState, useEffect } from 'react'
import { AiOutlineExport } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineX } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { IoStarOutline, IoStar } from "react-icons/io5";
function StartupDetails() {
    const {name} = useParams()
    const [setUps, SetsetUps] = useState(null)
    const numberRating = [1,2,3,4,5]
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [ratingText, setRatingText] = useState('')
    // const numberRating = [1,2,3,4,5]
    useEffect(() => {
        const getStartup =  StartupData.find((items) => items.name === name )
        SetsetUps(getStartup)
        // console.log("Names" , names)
    }, [name])  
    const handleRating = (rate) => {
      setRating(rate)
      switch (rate) {
      case 1:
      setRatingText("average")
      break;
      case 2:
      setRatingText("better")
      break;
      case 3: 
      setRatingText("okay")
      break
      case 4:
      setRatingText("good")
      break
      case 5:
      setRatingText("excellent")
      break
      default:
      setRatingText('')
      }
    }
  return (
    <section className="container mx-auto px-4 py-8 ">
      <div className="border min-w-full  p-3 shadow-md rounded-lg ">
        { setUps && (
          <>
            <div className="flex gap-7 m-3 p-3">
              <img src={setUps.startUpLogo} alt="" className="w-30  p-2 rounded-md "/>
              <h1 className=" text-center mt-3">{setUps.name}</h1>
              {setUps.links.map((getlinks,index) => (
              <div key={index}>
                
                <Link to={getlinks.website} className='flex  mt-3 hover:underline'>
                  Visit Webiste
                  <AiOutlineExport size={30} />
                </Link>
              </div>
              ))}
            </div>
            <p className='p-3'>{setUps.description}</p>
            <div className="border-t-1 mt-3 flex justify-between p-3">
              <div className=''>
                <h1>Total Fundings</h1>
                <span>$450,000,00</span>
              </div>
              <div>
                <h1>Industry</h1>
                <span>{setUps.industry}</span>
              </div>
              <div>
                <h1>Ranking</h1>
                <span>$450,000,00</span>
              </div>
            </div>
            <div className='border-t-1  mt-3 p-3'>
              <h1>{`About ${setUps.name}`}</h1>
              <p className=''>{setUps.aboutStartups}</p>
              <h3 className='m-1'>Address</h3>
              <p className=''>{setUps.location}</p>
            </div>
            <div className='border-t-1  mt-3 p-3 '>
              <h1>Social Media</h1>
              {setUps.links.map((getlinks,index) => (
              <div key={index} className="flex gap-2">
                <Link to={getlinks.facebook}>
                 <AiOutlineFacebook  size={30}/>
                </Link>
                <Link to={getlinks.instagram}>
                 <AiOutlineInstagram size={30}/>
                </Link>
                <Link to={getlinks.x}>
                 <AiOutlineX  size={30}/>
                </Link>
              </div>
              ))}
            </div>
          </>
        )}
        
      </div>
    </section>
  )
}

export default StartupDetails

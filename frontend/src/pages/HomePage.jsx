import { useEffect, useState } from 'react'
import TopNavbar from '../components/TopNavbar';
import RateLimitedUI from '../components/RateLimitedUI';
import axios from "axios"

function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchNotes = async () =>{
      try{
        // fetch method 
        // const res = await fetch("http://localhost:5001/api/v1/notes");
        // const data = await res.json();
        // axios method
        
        const res = await axios.get("http://localhost:5001/api/v1/notes");
        console.log(res.data);

      }
      catch(error){
        console.log("error fetching notes");

      }
    }
  })
  return (
    <div className='min-h-screen'>
        <TopNavbar/>
        { isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage

import { useEffect, useState } from 'react'
import TopNavbar from '../components/TopNavbar';
import RateLimitedUI from '../components/RateLimitedUI';
import axios from "axios"

function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const fetchNotes = async () =>{
      try{
        // fetch method 
        // const res = await fetch("http://localhost:3000/api/v1/notes");
        // const data = await res.json();
        // axios method
        
        const res = await axios.get("http://localhost:3000/api/v1/notes");
        setNotes(res.data);
        setIsRateLimited(false);
        console.log(res.data);

      }
      catch(error){
        console.log("error fetching notes");
        if(error.response.status === 429){
          setIsRateLimited(true);
        }
        else{

        }

      }
    };
    fetchNotes();
  }, [])
  return (
    <div className='min-h-screen'>
        <TopNavbar/>
        { isRateLimited && <RateLimitedUI/>}
    </div>
  )
}

export default HomePage

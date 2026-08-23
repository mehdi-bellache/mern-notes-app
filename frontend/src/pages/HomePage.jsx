import { useEffect, useState } from 'react'
import TopNavbar from '../components/TopNavbar';
import RateLimitedUI from '../components/RateLimitedUI';
import axios from "axios"
import toast from "react-hot-toast"

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
        if(error.response?.status === 429){
          setIsRateLimited(true);
        }
        else{
          toast.error("Failed to load notes")
        }

      }
      finally{
          setLoading(false);
        }
    };
    fetchNotes();
  }, [])
  return (
    <div className='min-h-screen'>
        <TopNavbar/>
        { isRateLimited && <RateLimitedUI/>}
        <div className='max-w-7xl mx-auto p-4 mt-6'>
          {true && <div className="text-center text-primary py-10"> Loading notes...</div>}
          </div>

          {notes.length > 0 && !isRateLimited && (
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {notes.map((note) =>(
                <NoteCard key= {note._id} note={note}/>
              ))}
            </div>
          )}
    </div>
  )
}

export default HomePage

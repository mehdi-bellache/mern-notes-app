import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { LoaderIcon } from 'lucide-react';

function NoteDetailPage() {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const {id }= useParams();

  useEffect(()=>{
    const fetchNote = async() =>{
      try{
        const res = await api.get(`/notes/${id}`)
        setNote(res.data);

      }
      catch(error){
        toast.error("Failed to fetch the note");
      }
      finally{
        setLoading(false);

      }
    }; fetchNote();
  }, [id])

  if(loading){
    return (
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className="animate-spin size-10"/>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container'></div>
      
    </div>
  )
}

export default NoteDetailPage

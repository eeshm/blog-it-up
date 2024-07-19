import React ,{useState,useEffect} from 'react'
import { Container, PostForm } from '../components'

function AddPost() {

  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <>
        <button className="btn btn-square mb-8">
          <span className="loading loading-spinner"></span>
        </button>
      </>
    );}
    else{
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )}
}

export default AddPost
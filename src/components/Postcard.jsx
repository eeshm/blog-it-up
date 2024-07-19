import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import Button from './Button'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
      <div className='transition transform hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none ..'>
        <div className='w-fit  rounded-xl p-4 bg-gray-300'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl  aspect-[3/3] object-fit mix-blend-normal' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
            <Button className="font-bold hover:bg-[#f97316] hover:text-white" textColor='text-[#f97316]' bgColor='bg-white'> Read about it </Button>
        </div>
        </div>
    </Link>
  )
}


export default PostCard


// In img we passed img src as featureImage as {id} is of full post and picture is returned by getFilePreview and will be passed in as url .
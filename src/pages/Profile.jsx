import React, { useEffect, useState } from 'react'
import Postview from '../components/Postview'
import { useStateContext } from '../context'
import { v4 as uuidv4 } from "uuid"
import Loader from '../components/Loader'


const Profile = () => {
  const {getUserPost,address,contract} = useStateContext();
  const [isLoading,setIsLoading] = useState(false);
  const[posts,setPosts] = useState([]);
  const fetchpost = async() =>{
    setIsLoading(true)
    const data = await getUserPost();
    setPosts(data);
    setIsLoading(false);

  }
  useEffect(()=>{
    if(contract) fetchpost();
    // console.log(posts)

    
  },[address,contract])

  return (
    isLoading ?  <Loader/>:
    (<div>
      {posts.map((post)=>
           <Postview
              key={uuidv4()}
              title={post.title}
              desc={post.description}
              owner={post.owner}
           />
      )
     }
    </div>)
  )
}

export default Profile
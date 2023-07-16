import React, { useState } from 'react'
import FormField from '../components/FormField';
import CustomButton from '../components/CustomButton';
import { useStateContext } from '../context';
import { useNavigate } from 'react-router-dom';
import Loader from "../components/Loader"
 
const CreatePost = () => {
    const navigate = useNavigate()
    const[isLoading ,setIsLoading]=useState(false);
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const{createPost,getPost} = useStateContext();
    // const data = getPost();
    
    const handleSubmit = async (e) =>{

        const form = {
            title:title,
            desc:desc,
        }
        
        e.preventDefault();
        setIsLoading(true)
        await createPost(form)
        setIsLoading(false);
        navigate('/');
    }
  return (
    <div className='flex justify-center items-center'>
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] w-4/6 sm:p-10 p-4">
    {isLoading && <Loader/>}
    <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
      <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Create New Post</h1>
    </div>

    <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
      <div className="flex flex-wrap gap-[40px]">
        <FormField 
          labelName="Title"
          placeholder="Title.."
          inputType="text"
          value={title}
          handleChange={(e) => setTitle(e.target.value)}
        />
      
      </div>
      <FormField 
            labelName="Description.."
            placeholder="Write your story"
            isTextArea
            value={desc}
            handleChange={(e) =>setDesc(e.target.value)}
          />
           <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Create New Post"
              styles="bg-[#1dc071]"
            />
          </div>

          </form>

      </div>
      </div>

  )
}

export default CreatePost
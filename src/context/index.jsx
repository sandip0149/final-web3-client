import React,{useContext , createContext} from 'react'
import {useAddress , useContract , useMetamask , useContractWrite} from '@thirdweb-dev/react'
import { ethers } from 'ethers'

const StateContext = createContext();

export const StateContextProvider = ({children}) =>{
    const {contract} = useContract('0x5002010D6Df4BcD98894Ba591Af82E9b2cbD746c');
    // const {mutateAsync: createPost} = useContractWrite(contract,'createPost');
    const address = useAddress();
    const connect = useMetamask();

    
    
    const { mutateAsync: createPost,   } = useContractWrite(contract, "createPost")

    const call = async (form) => {
      try {
        const data = await createPost({ args: [form.title, form.desc] });
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }

    const getPost = async() =>{
        const posts = await contract.call('getPost');
        console.log(posts);
        return posts;
    }

    const getUserPost = async() => {
        const allPost = await getPost();

        const filteredPost = allPost.filter((post) => post.owner === address);
        return filteredPost;
    }

    return (
         <StateContext.Provider
         value={{
            address,
            contract,
            connect,
            createPost:call,
            getPost,
            getUserPost
         }}
         >
            {children}

         </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);

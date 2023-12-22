import React from 'react';
import { Text } from '@chakra-ui/react';

const Review = (props: {id: number, text: string, createdAt: Date, userId: number, postId: number}) => {
  
  return (
    <div className='flex flex-row bg-white w-full px-6 py-3'>
      <img src="/girl.jpg" alt="" width={"50px"} height={"10px"}/>
      <div className='flex flex-col gap-8 w-full ml-7'>
        <div className='flex flex-row justify-between border-b border-black-50 w-full px-3 py-2'>
          <p>Alexia</p>
          <p>{new Date(props.createdAt).toString() || "18.12.2023"}</p>
        </div>
        <Text marginLeft={"10px"}>{props.text || "I had an bad experience with him"}</Text>
      </div> 
    </div>
  )
}

export default Review;
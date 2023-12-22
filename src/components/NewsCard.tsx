import React from 'react';

export interface NewsCardProps {
  image: string;
  title: string;
  content: string;
}

export interface NewsCardOptions extends NewsCardProps {
  id: number
}

const PostCard = (props: NewsCardProps) => {
  return (
      <div className='flex flex-row w-full mx-4 gap-4 p-10'>
        <img src={props.image} alt="" />
        <div className='flex flex-col gap-2 w-2/3'>
          <h3 className='text-2xl underline w-2/3 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>{props.title}</h3>
          <p className='w-2/3 font-sans font-family: ui-sans-serif'>{props.content}</p>
        </div>
      </div>
  )
}

export default PostCard;
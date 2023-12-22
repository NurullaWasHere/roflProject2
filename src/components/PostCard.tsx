import React, {FC} from 'react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export interface PostCardProps {
  id: number;
  image: string;
  name: string;
  age: number;
  height: number;
  bodyType: string;
  marriageStatus: string;
  hasCredit: boolean;
  description: string;
  createdAt: string;
  categoryId: number;
}

const PostCard: FC<PostCardProps> = (props) => {
  return (
    <div className='flex flex-row w-400 gap-4 p-10 bg-white border rounded-lg m-4'>
    <img src={props.image} alt="" className='border rounded-lg' width={"200px"}/>
    <div className='flex flex-col gap-4 w-2/3 items-center'>
      <h3 className='text-2xl underline w-1/2'>{props.name}</h3>
      <p className='w-full  font-sans font-family: ui-sans-serif'>{props.description}</p>
      <Link to={`/posts/${props.id}`}><Button width={"300px"}>Show</Button></Link>
    </div>
  </div>
  )
}

export default PostCard;
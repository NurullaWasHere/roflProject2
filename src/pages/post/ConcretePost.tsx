import React, {FC, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { PostCardProps } from '../../components/PostCard';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Input } from '@chakra-ui/react';
import Review from '../../components/Review';
import { axiosInstance } from '../../axios/axios';
import { useForm, Resolver } from "react-hook-form";

const ConcretePost: FC = () => {

  const { id } = useParams<{ id: string }>();
  const [post, setPost] = React.useState<PostCardProps>();
  const [reviews, setReviews] = React.useState<any[]>([]);
  const [reviewText, setReviewText] = React.useState<string>("");
  

  const onReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReviewText(event.target.value);
  }

  const onSubmit = async () => {
    console.log(id);
    await axiosInstance
      .post(`/posts/createReview`, {
        reviewText: reviewText,
        postId: id,
      })
      .then( ( res ) => {
        console.log(res.data)
      })

  }

  useEffect(() => {
    axiosInstance.get(`/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data.post)  
        setReviews(response.data.reviews)
      })
  }, []);

  return (
    <div className='flex flex-col items-center min-w-full min-h-full gap-12 bg-gradient-to-r from-purple-200 via-gray-200 to-gray-100'>
        <div className='flex flex-row items-center justify-center'>
          <Link to={'/posts'}><Button className='absolute left-0 top-0 mt-8 ml-8' position={"absolute"} left={0} top={0} marginTop={"15px"} marginRight={"12px"} backgroundColor={"white"} border={"0.5px"} borderColor={"gray"}>Back</Button> </Link> 
          <h1 className='text-4xl mt-5'>Concrete person</h1> 
        </div>
      <div className='flex flex-row gap-7 bg-gray-100 w-4/5 py-6 px-8 border rounded-xl'>
        <img src="/a1.jpg" height={"100px"} alt="" />
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex flex-row justify-between gap-5 items-center bg-white w-full px-4 py-3 border rounded-xl'>
            <h2 className='text-xl font-semibold'>Person name: </h2>
            <p>{post?.name}</p>
          </div>
          <div className='flex flex-row justify-between gap-5 items-center bg-white w-full px-4 py-3 border rounded-xl'>
            <h2 className='text-xl font-semibold'>Age: </h2>
            <p>{post?.age || 23}</p>
          </div>
          <div className='flex flex-row justify-between gap-5 items-center bg-white w-full px-4 py-3 border rounded-xl'>
            <h2 className='text-xl font-semibold'>Height: </h2>
            <p>{post?.height || 183} sm.</p>
          </div>
          <div className='flex flex-row justify-between gap-5 items-center bg-white w-full px-4 py-3 border rounded-xl'>
            <h2 className='text-xl font-semibold'>Body type: </h2>
            <p>{post?.bodyType || 'Normal'}</p>
          </div>
          <div className='flex flex-row justify-between gap-5 items-center bg-white w-full px-4 py-3 border rounded-xl'>
            <h2 className='text-xl font-semibold'>Marriage status: </h2>
            <p>{post?.marriageStatus ? "Married" : "Single"}</p>
          </div>
          <div className='flex flex-row justify-between gap-5 items-center bg-white w-full px-4 py-3 border rounded-xl'>
            <h2 className='text-xl font-semibold'>Has credit: </h2>
            <p>{post?.hasCredit || "Not defined"}</p>
          </div>
          <div className='flex flex-row justify-between gap-5 items-center bg-white w-full px-4 py-3 border rounded-xl'>
            <h2 className='text-xl font-semibold'>Description: </h2>
            <p>{post?.description || "Tall height very strange and might be violational"}</p>
          </div>
          <div className='flex flex-row justify-between gap-5 items-center bg-white w-full px-4 py-3 border rounded-xl'>
            <h2 className='text-xl font-semibold'>Category: </h2>
            <p>For date</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 items-center '>
        <h1 className='text-4xl'> Reviews </h1>
        <div>
          <Input sx={{
              "&::placeholder": {
                textAlign: "start",
              },
      }} onChange={onReviewChange} height={"300px"} width={"800px"} backgroundColor={"white"}></Input>
          <div className='flex flex-row items-center justify-between px-4 py-2 gap-4 '>
            <p className='underline'>Please, do not mension your personal details for remaining anonymous</p>
            <Button onClick={onSubmit} textColor={"blue"}> Left review </Button>
          </div>
        </div>
      </div>

      <div className='w-3/4 flex flex-col gap-8'>
        {reviews.map( el => {
          return <Review 
            id={el.id}
            text={el.text}
            createdAt={el.createdAt}
            userId={el.userId}
            postId={el.postId}
            />
        })}
      </div>
    </div>
  )
}

export default ConcretePost;
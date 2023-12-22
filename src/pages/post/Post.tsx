import React, { FC, useEffect } from "react";
import Header from "../../components/Header";
import { Input } from "@chakra-ui/react";
import PostCard, { PostCardProps } from "../../components/PostCard";
import PostsTests from './postTest.json';
import { axiosInstance } from "../../axios/axios";

const Post: FC = () => {

  return (
    <div className='flex flex-col items-center min-w-full min-h-full bg-gradient-to-r from-purple-200 via-gray-200 to-white'>
      <Header />
      <div className='flex flex-col items-center justify-center gap-12 mt-12 pt-3 bg-gradient-to-r from-purple-200 via-gray-200 to-gray-100'>
        <h1 className='text-4xl font-semibold'>Real-men stories</h1>
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-2xl font-bold w-full">Search</h2>
          <Input backgroundColor={"white"}></Input>
          <div className="flex flex-row items-center bg-blue-100 px-6 py-4 border rounded-lg gap-4">
            <h4>Marriage status: </h4>
            <select name="" id="" className="px-2 py-1 ">
              <option value="">Single</option>
              <option value="">Married</option>
              <option value="">Divorced</option>
            </select>
            <h4>Age-range: </h4>
            <select className="bg-white px-2 py-1" id="">
              <option value="">18-25</option>
              <option value="">26-35</option>
              <option value="">36-45</option>
              <option value="">46-55</option>
              <option value="">56-65</option>
              <option value="">65+</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-24'>
          {PostsTests.map( el => {
            return <PostCard 
              image={el.image}
              description={el.description} 
              name={el.name}
              age={el.age}
              marriageStatus={el.marriageStatus}
              bodyType={el.bodyType}
              height={el.height}
              hasCredit={el.hasCredit}
              createdAt={el.createdAt}
              categoryId={el.categoryId}
              id={el.id}
              />
          })}
        </div>
      </div>
    </div>
  )
}

export default Post;
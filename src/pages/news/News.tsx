import React from 'react';
import Header from '../../components/Header';
import NewsCard, {NewsCardOptions} from '../../components/NewsCard';
import testDataJson from './testData.json';

const News = () => {

  const testText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis minus itaque ex? Possimus iste ratione enim, aut cumque sint atque soluta. Soluta dolorum voluptatibus enim placeat doloremque nostrum odio!';


  return (
    <div className='flex flex-col items-center w-screen h-screen' style={{ backgroundImage: "url('./background.png')" }}>
      <Header />
      <div className='flex flex-col items-center justify-center gap-12'>
        <h1 className='text-6xl font-semibold pt-12'>Date News</h1>
        <div className='grid grid-cols-2 gap-8'>
          {testDataJson.map( el => {
            return <NewsCard image={el.image} content={el.content} title={el.title}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default News;
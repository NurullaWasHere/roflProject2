import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Login from './pages/auth/AuthPage';
import { ChakraProvider } from '@chakra-ui/react';
import Register from './pages/auth/Registet';
import Landing from './pages/landing/Landing';
import News from './pages/news/News';
import Post from './pages/post/Post';
import ConcretePost from './pages/post/ConcretePost';

function App() {
  return (
    <ChakraProvider>
<     div className='flex flex-col items-center min-h-full min-w-screen' style={{ backgroundImage: "url('./background.png')" }}>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register}/>
          <Route path="/" Component={Landing} />
          <Route path='/blog' Component={News}></Route>
          <Route path='/posts' Component={Post}></Route>
          <Route path='/posts/:id' Component={ConcretePost}></Route>
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;

import { link } from 'fs';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const headerComponents = ['Home', 'Blog', 'Story'];
  const [clicked, setClicked] = useState<boolean>(false);

  const linkMap = new Map<string, string>();

  const onClickMyAccount = () => {
    setClicked(!clicked);
  }

  const navigate = useNavigate();

  const onClickLogOut = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    setClicked(!clicked);
    navigate('/login');
  }

  linkMap.set('Home', '/');
  linkMap.set('Blog', '/blog');
  linkMap.set('Story', '/posts'); 

  return (
    <div className='flex flex-row justify-center items-center gap-64 pt-11'>
      <Link to={"/"} className='cursor-pointer hover:scale-105 ransition-transform delay-70'>
        <div className='flex flex-row'>
          <h1 className='text-2xl font-bold text-opacity-70'>EMPOW</h1>
          <h1 className='text-2xl font-bold text-pink-500	text-opacity-70'>HER</h1>
        </div>
      </Link>
      <div className='flex flex-row gap-14 cursor-pointer'>
        {headerComponents.map((component) => {
          return (
            <Link to={linkMap.get(component) as string}>
              <h1 className='flex flex-row items-center text-xl font-semibold cursor-pointer transition-transform delay-50 hover:scale-105'>{component}</h1>
            </Link>
          )
        })}
        <div className='flex flex-col gap-3 items-center'>
        <h1 onClick={onClickMyAccount} className='flex flex-row items-center text-xl font-semibold cursor-pointer transition-transform delay-50 hover:scale-105'>My Account</h1>
        {clicked && <p onClick={onClickLogOut} className='transition-transform duration-300 ease-in-out transform scale-100 hover:scale-105 focus:outline-none'>Log out</p>}
        </div>
      </div>
    </div>
  )
}

export default Header;
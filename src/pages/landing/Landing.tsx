import { SVGProps } from 'react';

// ...

type MySVGImageProps = {
  id: string;
  width: string;
  height: string;
  xlinkHref: string;
};

import React, { FC } from "react";
import Header from "../../components/Header";
import { Button } from "@chakra-ui/react";
import GuardDateText from "../../components/GuardDateText";
import { Link } from "react-router-dom";

const Landing: FC = () => {
  return (
    <div className="w-full flex flex-col bg-white h-full gap-8" style={{ backgroundImage: "url('./background.png')" }}>
      <Header />
      <div className="flex flex-row my-auto justify-center items-center mt-5 ml-8">
        <div className="flex flex-col gap-5 items-center">
          <GuardDateText />
          <p className="w-2/3 pb-5 text-xl font-medium">Discover a safer dating experience at GuardDate. Our user-friendly design prioritizes women's safety. Get tailored tips and tools, empowering you to make informed choices and feel confident on your dates. Join us in creating a secure space for every woman navigating the world of romance.</p>
          <Link to={'/register'}>
              <Button width={400} backgroundColor={"#272F54"} color={"white"} fontSize={22} border={0.5} borderRadius={12} _hover={{
              backgroundColor: "#272F58",     transform: "scale(1.05)",
              transition: "transform 0.3s ease-in-out",
            }}>Join now</Button>
          </Link>
        </div>
          <img src="./girl.jpg" alt="" width={"40%"} className='mr-12'/>
      </div>
    </div>
  )
}



export default Landing;
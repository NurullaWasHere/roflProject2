import { FC, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { axiosInstance } from "../../axios/axios";
import React from "react";
import { Button, Input } from "@chakra-ui/react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import GuardDatetext from "../../components/GuardDateText";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
  name: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email && values.password ? values : {},
    errors: !values.email || !values.password ?
      {
        email: {
          type: 'required',
          message: ' Invalid',
        },
      }
      : {}
  };
};


const Register: FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });
  const navigate = useNavigate();

  const onSubmit = async (result: {email: string, password: string, name: string}) => {
    await axiosInstance
      .post("/auth/register", {
        email: result.email,
        password: result.password,
        name: result.name
      })
      .then( ( res ) => {
        console.log(res.data.data);
        const response = res.data.data;
        if(response)  {
          navigate('/login')
        }
      });
  };

  return (


    <div className="w-full flex flex-col items-center h-full" style={{ backgroundImage: "url('./background.png')" }}>
      <Header />
      <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg shadow-lg w-screen h-screen">
          <GuardDatetext />
          <div className="flex flex-row items-center gap-3 text-opacity-80 pb-5">
              <h3 className="font-semibold text-xl">Already have an account?</h3>
              <Link to={'/login'}>
              <h3 className="transition-transform delay-50 hover:scale-105 cursor-pointer text-blue-900 font-semibold text-xl underline">Login here</h3>
              </Link>
          </div>
          <div className="flex flex-col gap-5 items-center mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center mx-auto">
            <Input {...register("name", { required: "Укажите телефон", min: 4 })} placeholder="Username" width={"400px"} backgroundColor={"#DFEBFF"} borderColor={"black"} borderRadius={15} border={0.5} fontWeight={"bold"}/>
            <Input {...register("email", { required: "Укажите телефон", min: 4 })} placeholder="Email address" width={"400px"} backgroundColor={"#DFEBFF"} borderColor={"black"} borderRadius={15} border={0.5} fontWeight={"bold"}/>
            <Input {...register("password", { required: "Укажите телефон", min: 4 })} placeholder="Password" width={"400px"} backgroundColor={"#DFEBFF"} borderColor={"black"} borderRadius={15} border={0.5} fontWeight={"bold"}/>
            <Button type="submit" width={"200px"} backgroundColor={"#DFEBFF"} borderColor={"black"} borderRadius={15} fontWeight={"bold"} fontSize={22}>Register</Button>
            </form>
          </div>
      </div>
    </div>
    )
  }
export default Register;
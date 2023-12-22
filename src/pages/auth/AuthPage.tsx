import { FC, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { axiosInstance } from "../../axios/axios";
import React from "react";
import { Button, Input } from "@chakra-ui/react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import GuardDateText from "../../components/GuardDateText";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
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


const Login: FC = () => {

  const [isError, setError] = useState<String>("")
  const [isValid, setValid] = useState<String>('')
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver });

  const onSubmit = async (result: {email: string, password: string}) => {
    await axiosInstance
      .post("/auth/login", {
        email: result.email,
        password: result.password
      })
      .then( ( res ) => {
        console.log(res.data, '----------1');
        const { token, user } = res.data.data;
        if(!token){
          window.localStorage.removeItem('token');
          setError("error")
        }
        if (token) {
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("userId", user.id);

          setValid('valid')
          navigate('/posts')
        }
      });
  };

  return (
    <div className="w-full flex flex-col  items-center h-full" style={{ backgroundImage: "url('./background.png')" }}>
      <Header />
      <div className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg shadow-lg w-screen h-screen">
          <GuardDateText />
          <div className="flex flex-row items-center gap-3 text-opacity-80 pb-5">
              <h3 className="font-semibold text-xl">New here?</h3>
              <Link to={'/register'}>
              <h3 className="transition-transform delay-50 hover:scale-105 cursor-pointer text-blue-900 font-semibold text-xl underline">Create an Account</h3>
              </Link>
          </div>
          <div className="flex flex-col gap-5 items-center mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 items-center mx-auto">
            <Input {...register("email", { required: "Укажите телефон", min: 4 })} placeholder="Email address" width={"400px"} backgroundColor={"#DFEBFF"} borderColor={"black"} borderRadius={15} border={0.5} fontWeight={"bold"}/>
            <Input {...register("password", { required: "Укажите телефон", min: 4 })} placeholder="Password" width={"400px"} backgroundColor={"#DFEBFF"} borderColor={"black"} borderRadius={15} border={0.5} fontWeight={"bold"}/>
            <Button type="submit" width={"200px"} backgroundColor={"#DFEBFF"} borderColor={"black"} borderRadius={15} fontWeight={"bold"} fontSize={22}>Log in</Button>
            </form>
          </div>
      </div>
    </div>
    )
  }
export default Login
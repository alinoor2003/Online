"use client";

import './login.css';
import { toast } from 'react-toastify';

import { useState } from 'react';
import {useRouter} from 'next/navigation'


import { useForm } from 'react-hook-form';
import auth from '@/apis/auth';
import { Provider, useDispatch } from 'react-redux';
import { setUser } from '@/store/auth';
import { meraStore } from '@/store/store';
import ReduxProvider from '@/components/reduxProvider/reduxProvider';
import axios from 'axios';

export default()=>{

  return <ReduxProvider>
            <Login></Login>
        </ReduxProvider>

}
  
 function Login(){

  let dispatch = useDispatch();
  let meraRoute = useRouter()

  let [users, setUsers] = useState([])
  
  let {register, handleSubmit, formState:{errors}} = useForm();

  function signUpKardo(data){

     axios.post('/api/signup', data) .then(function(resp){
      console.log(resp.data);
      if(resp.data.success){
        toast.success("signup successfully")
      }
      // localStorage.setItem('token', resp.data.token)
    })

    // users.push(data);
    // setUsers([...users])


    // toast.success("login hogya wa")
    // toast.error("login hogya wa") 
    // toast.warn("login hogya wa")
    // toast.info("login hogya wa")

  }


    return <div className="wrapper fadeInDown">
    <div id="formContent">
      {/* Tabs Titles */}
      {/* Icon */}
      <div className="fadeIn first">
        <img
          src="http://danielzawadzki.com/codepen/01/icon.svg"
          id="icon"
          alt="User Icon"
        />
      </div>
      {/* Login Form */}
      <form onSubmit={handleSubmit(signUpKardo)}>
        <input
                          //        yahan single validation h
          {...register('user_email', {required:true})}
          type="text"
          id="login"
          className="fadeIn second"          
          placeholder="login"
        />
        {/* single validation per error show krna */}
        {/* {errors.user_email ? <div style={ {color:'red'} }>This field is required</div> :null} */}
        
        {/* multiple validations per error */}
        {errors.user_email && errors.user_email.type == "required" ? <div style={ {color:'red'} }>This field is required</div> :null}
        {errors.user_email && errors.user_email.type == "pattern" ? <div style={ {color:'red'} }>Please enter a valid email</div> :null}
        {errors.user_email && errors.user_email.type == "validate" ? <div style={ {color:'red'} }>2 emails already hogyin</div> :null}
        
        <input
                                          // yahan multiple validations h
          {...register('user_password', {required:true, minLength:6})}
          type="text"
          id="password"
          className="fadeIn third"          
          placeholder="password"
        />
        {/* multiple validations case m type bhi check krni hogi */}
        {errors.user_password && errors.user_password.type =="required" ? <div style={ {color:'red'} }>This field is required</div> :null }
        {errors.user_password && errors.user_password.type =="minLength" ? <div style={ {color:'red'} }>Please enter atleast 6 letters</div> :null }
        

        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
      </form>
      {/* Remind Passowrd */}
      <div id="formFooter">
        <a className="underlineHover" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
    <table>
      {
        users.map((user)=>{
          return <tr>
            <td>{user.user_name}</td>
            <td>{user.user_email}</td>
            <td>{user.user_password}</td>
          </tr>
        })
      }
      </table>
  </div>
  

}
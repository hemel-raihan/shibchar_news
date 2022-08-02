import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Axios() {
  const router = useRouter();

      //get token string
      function getToken(){

        if (typeof window !== 'undefined') {
          const tokenString = localStorage.getItem('token');
          const userToken = JSON.parse(tokenString);
          return userToken;
        }


    }
    //get user string
    function getUser(){
      if (typeof window !== 'undefined') {

        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
      }
    }

    // function getStatus(){
    //   if (typeof window !== 'undefined') {

    //     const token_status = localStorage.getItem('status');
    //     return token_status;
    //   }
    // }

  const [user,setUser] = useState(getUser());
  const [token,setToken] = useState(getToken());
  //const [status,setStatus] = useState(getStatus());

  function saveToken(token,user){
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const storeToken = localStorage.setItem('token',JSON.stringify(token));
      const storeUser = localStorage.setItem('user',JSON.stringify(user));
      //const storeStatus = localStorage.setItem('status',success_status);

      setToken(storeToken);
      setUser(storeUser);
      //setStatus(storeStatus);

      router.push("/admin/dashboard");

    }
    //console.log(user,token);
  }

  function logout(){
    localStorage.clear();
     //router.push("admin/login");
  }

    const http = axios.create({
        // baseURL:"http://hotel.api",
        headers:{
            "Content-Type":"application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${token}`
        }
    });

  return {
    http,
    saveToken,
    logout,
    token,
    user,
    getToken
  };
}
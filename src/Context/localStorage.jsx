 import { useState,useEffect } from "react";
 export function useLocalStorage(key,initialvalue){
  const[arr,setarr]=useState(()=>{
     return JSON.parse(localStorage.getItem(key)) || initialvalue
   })
    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(arr));
  }, [key, arr]);
  return [arr,setarr]
}
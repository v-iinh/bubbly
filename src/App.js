import React, {useEffect} from "react";
import Login from "./components/Login";
import { useStateProvider } from "./utils/StateProvider"

export default function App() {
  const [{token}, dispatch] = useStateProvider()
  useEffect(()=> {
    const hash = window.location.hash; 
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1]
      dispatch({action:reducerCases.SET_TOKEN, token})
    }
  },[token, dispatch])

  return (
    <div>
      <Login />
    </div>);
}

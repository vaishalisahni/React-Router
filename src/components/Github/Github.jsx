import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/vaishalisahni')
    //     .then(response=>response.json())
    //     .then(data=> {
    //         console.log(data);
    //         setData(data)
    // })
    // },[])
  return (
    <div className='text-center m-4 bg-grey-600 text-white p-4 text-3xl '>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="git pic" />
    </div>
  )
}

export default Github

export const githubInfoLoader= async ()=>{
    const response = await fetch('https://api.github.com/users/vaishalisahni');
    return response.json()
}

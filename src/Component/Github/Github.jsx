/*eslint-disable*/
import { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
    const data = useLoaderData()
//     const [data, setData] = useState({});

//     useEffect(() => {
//        fetch('https://api.github.com/users/codejstar')
//          .then(res => res.json())
//          .then(data => {
//             //  console.log(data)
//              setData(data)
//             }
// )}, []);
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-around items-center'>
        <img className=" rounded-full" src={data.avatar_url} alt="Git picture" width={300} loading="lazy"/>
        Github followers: {data.followers}
    </div>
    <div className="flex justify-around flex-wrap font-bold text-2xl m-3">
        <div>user id: {data.id}</div>
        <div>type is: {data.type}</div>
        <div>name is: {data.name || "none"}</div>
        <div>Github following: {data.following}</div>
        <div>login: {data.login}</div>
    </div>
    </>
  )
}

export default Github

//optimize way to call a api in react without lacking the page few seconds
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/codejstar')
    return response.json()
}
import { useParams } from "react-router-dom"

const User = () => {
    const {userid} = useParams()
  return (
    <>
    <h1 className=" text-lg text-center my-5 text-black-500 font-bold bg-gray-600">User : {userid}</h1>
    </>
  )
}

export default User
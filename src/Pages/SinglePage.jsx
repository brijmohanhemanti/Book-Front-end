import { Link, useNavigate, useParams } from "react-router-dom"
import NavBar from "../Componenets/NavBar"
import axios from "axios"
import { useEffect, useState } from "react"

function SinglePage (){
    const {id}=useParams()       ////yo  id ma lagna lai garinxa yo yaha yesri garda app.jsx ma pani single page ma id thapnu paxa ani mtra hunxa yo mtlb dynamic banaunu parxa
    const [book,setBook]=useState({})       //data store bhado
    const fetchBook= async ()=>{
        const response= await axios.get("http://localhost:4500/api/books/" + id)      //api call backend lai
        setBook(response.data.datas)       //yo bhado ma haleko lag bhaner usestate ma
    }

    useEffect(()=>{
        fetchBook()          //pge load huda yo fun oad huna lai
    },[])

    const navigate = useNavigate()
    const deleteBook = async ()=>{
        const response =await axios.delete("http://localhost:4500/api/books/" + id)
        if(response.status===200){
            navigate("/")
        }else{
            alert("something went wrong!!!")
        }
    }





    return(
        <>
        <NavBar/>
        <div className="max-w-md mx-auto rounded-lg shadow-lg mt-5 dark:bg-gray-700 dark:shadow-blue-100">
  <div className="px-6 py-4">
    <div className="flex flex-col w-24">
      <h2 className="font-bold text-xl dark:text-gray-100">{book.bookName}</h2>
      <div className="border-2 border-blue-500 mb-3 text" />
    </div>
    <div className="text-gray-500 dark:text-gray-200">
      <p>{book.bookAuthor}</p>
    
    </div>
  </div>
  <div className="bg-gray-100 px-6 py-3 rounded-t-lg dark:bg-blue-100">
    <h2 className="font-bold text-2xl mb-2">{book.bookPrice}</h2>

    <button onClick={deleteBook} className="bg-blue-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700">DELETE</button>
    <Link to={`/edit-book/${book.id}`}>     
    <button className="bg-blue-600 px-4 py-2 mt-3 rounded font-semibold text-white hover:bg-blue-700 float-right">EDIT</button>
    </Link>
  </div>
</div>
    


        </>
    )
}

export default SinglePage
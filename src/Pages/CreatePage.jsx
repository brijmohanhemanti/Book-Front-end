import { useState } from "react"
import NavBar from "../Componenets/NavBar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function CreatePage (){
    const navigate=useNavigate()
    //frist approch yasri garna milxa
    // const[bookName,setBookName]=useState("")
    // const[bookPrice,setBookPrice]=useState("")
    // const[bookAuthor,setBookAuthor]=useState("")
    //yesri garda deraii banaunu parxa ani input tag ma [onChange={(event)=>setBookName(event.target.value)}] akhnu parxa

    //second approch
    const [bookData,setBookData]=useState({        //yo bhado ma yo data store hunxa....
        bookName:"",
        bookPrice:"",
        bookAuthor:""
    })


    const handelChange=(event)=>{
        let {name,value}=event.target
        setBookData({
            ...bookData,            //yo 3 ota dot ley aagadi ko data lai keii gardaiinaa
            [name]:value
        })
    }

    const sumbitData= async (event)=>{
        event.preventDefault()
        const response = await axios.post("http://localhost:4500/api/books/",bookData)
        if(response.status===200){
            alert("Book Created Sucessfully!!")
            navigate("/")
        }else{
            alert("Somthing Went wrong!!!")
        }

    }

    
    return(
        <>
        <NavBar/>
 <form onSubmit={sumbitData} className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-6">Create Book Form</h2>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
      Book Name
    </label>
    <input onChange={handelChange} name="bookName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your Book Name" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="author">
      Book Author
    </label>
    <input onChange={handelChange} name="bookAuthor" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="author" type="text" placeholder="Enter your Author" />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
      Book Price
    </label>
    <input onChange={handelChange} name="bookPrice" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="Enter your price" />
  </div>
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button>
</form>

        </>
    )
}

export default CreatePage
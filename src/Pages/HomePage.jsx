import { useEffect, useState } from "react"
import Card from "../Componenets/Card"
import NavBar from "../Componenets/NavBar"
import axios from "axios"

function HomePage (){
    const[books,setBooks]=useState([])      //yaha save bhako data
    const fetchBooks = async ()=>{
        const response= await axios.get("http://localhost:4500/api/books/")           // yesley backend connect garxa call api garxa
        setBooks(response.data.datas)  //yesley dATA save gareko useState ma
    }

    useEffect(()=>{       //yesley page load huda use hunxa
        fetchBooks()
    },[])
    
    return(
        <div>
        <NavBar/>
        <div className="flex flex-wrap max-w-7xl mx-auto ">
            {
            books.map(function(book){        //yo loop gareko kati card xa mtlb book teti ota auto aauxa
                return(
                    <Card book={book} key={book.id}/>
                )
            })
            } 
        </div>
        </div>
    )
}

export default HomePage



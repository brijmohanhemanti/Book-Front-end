import { Link } from "react-router-dom"

function Card ({book}) {
    return(                     //yo  link  ma singlr page ko ku id ma janxa tesoko lagi


      //ani yati paxi mathi ko fun ma book rakhne haii yo book chaii home page baat aauxa ani muni jsx ma book.booname k k hunxa taii hunxa rakhne haii
        <Link to={`/single-book/${book.id}`}>          
<div className="flex px-3 py-3 text-fuchsia-800 ">
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{book.bookName}</div>       
      <p className="text-gray-700 text-base">{book.bookAuthor}</p>
    </div>
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{book.bookPrice}</span>
    
    </div>
  </div>
</div>
        </Link>
    )
}

export default Card
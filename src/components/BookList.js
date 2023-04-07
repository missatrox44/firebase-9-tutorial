import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function BookList({ books }) {
  const handleClick = async (id) => {
    // console.log(id)
    //get reference to specific document in book collection, 3 args
    const docRef = doc(db, "books", id);
    await deleteDoc(docRef);
  };

  //take in books prop, map through books
  //output li tag for each book, key is book.id
  //output book title inside book title
  //handleClick is asynchronous function
  return (
    <div className="book-list">
      <h3>Click on a book title to delete it</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id} onClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

//

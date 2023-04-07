import { useEffect, useState } from "react";
import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const [books, setBooks] = useState(null);

  //fetch data from firestore
  useEffect(() => {
    // create reference to collection
    //1st arg: database we want to connect to 
    //2nd arg: name of collection
    const ref = collection(db, 'books')

    //reach to books collections
    getDocs(ref)
    .then((snapshot) => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({id: doc.id, ...doc.data()})
      })
      setBooks(results)
    }) 
  }, []);

  return (
    <div>
      {/* pass in books as props to booklist. only renders if books exist */}
      {books && <BookList books={books} />}
      {/* add new book */}
      <BookForm />
    </div>
  );
}

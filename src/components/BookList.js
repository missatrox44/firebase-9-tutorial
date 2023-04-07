export default function BookList({ books }) {

  const handleClick = async (id) => {
    console.log(id)
  }

  //take in books prop, map through books
  //output li tag for each book, key is book.id 
  //output book title inside book title
  //handleClick is asynchronous function 
  return (
    <div className="book-list">
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => handleClick(book.id)}>{book.title}</li>
        ))}
      </ul>
    </div>
  )
}

//
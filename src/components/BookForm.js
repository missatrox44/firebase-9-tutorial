import { useState } from 'react'

export default function BookForm() {
  //keep track of what user is typing in
  const [newBook, setNewBook] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(newBook)

    setNewBook('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        {/* when user types in, will update newBook value */}
        <input 
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      {/* when clicked, submit form */}
      <button>Add</button>
    </form>
  )
}

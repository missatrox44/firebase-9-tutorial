import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const { documents: books } = useCollection('books')

  return (
    <div>
      {/* pass in books as props to booklist. only renders if books exist */}
      {books && <BookList books={books} />}
      {/* add new book */}
      <BookForm />
    </div>
  );
}

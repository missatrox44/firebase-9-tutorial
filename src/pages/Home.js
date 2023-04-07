import BookList from "../components/BookList";
import BookForm from "../components/BookForm";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();
  //only fetch books of currently logged in user
  const { documents: books } = useCollection("books", ["uid", "===", user.uid]);

  return (
    <div>
      {/* pass in books as props to booklist. only renders if books exist */}
      {books && <BookList books={books} />}
      {/* add new book */}
      <BookForm />
    </div>
  );
}

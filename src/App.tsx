import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import "./App.css";
import Book from "./components/Book";
import Form from "./components/Form";

function App() {
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [input, setInput] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input) {
      try {
        const config = { headers: { Accept: "application/json" } };
        const apiKey = "AIzaSyB8TV6exhvhmXPnrfaWGDldZdIFgbayByY";
        let url =
          "https://www.googleapis.com/books/v1/volumes?q=" +
          input +
          "&key=" +
          apiKey;
        const book = await axios.get(url);
        let numOfBooks = book.data.items.length;
        let bookPicker = Math.floor(Math.random() * numOfBooks);
        //console.log(book.data.items);
        let randomBook = book.data.items[bookPicker].volumeInfo;
        setBookTitle(randomBook.title);
        setAuthor(randomBook.authors);
        setImgUrl(randomBook.imageLinks.smallThumbnail);
      } catch (e) {
        setBookTitle("No books available!!");
      }
    } else {
      setBookTitle("");
      setAuthor("");
      setImgUrl("");
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <h1>What Should I Read Today?</h1>
      <p>
        Submit a genre, author, or any other key word and a book will be picked
        for you.
      </p>
      <Form name={input} onSubmit={handleSubmit} onChange={handleChange} />
      <Book title={bookTitle} author={author} imgUrl={imgUrl} />
    </div>
  );
}

export default App;

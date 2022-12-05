import { useEffect, useState } from "react";
import Hero from "../hero/Hero";
import BookCard from "../book-card/BookCard";
import "./Main.css";

const Main = () => {
  const [booksArr, setBooksArr] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/main/v1/products/list/")
      .then((response) => response.json())
      .then((data) => setBooksArr(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(booksArr);

  return (
    <main>
      <Hero />

      <section className="books">
        <div className="container">
          {booksArr.map(({ id, name, author__name, year, language }) => (
            <BookCard key={id} name={name} author={author__name} year={year} language={language} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;
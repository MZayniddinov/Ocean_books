import React from "react";
import { Link } from "react-router-dom";
import c from "./BookCard.module.css";

const BookCard = ({ id, name, author, year, language, image }) => {
  const whichLangBook = text => {
    if(text === "EN"){
      return "English"
    }else if (text === "RU"){
      return "Russian"
    }else {
      return "O'zbekcha"
    }
  }
  return (
    <div className={c["book-card"]}>
      <Link to={`/detail/${id}`}>
        <img
          src={image}
          alt="This is cover of book"
          className={c["book-card-img"]}
        />
      </Link>
      <h2 className={c["book-card-title"]}>{name}</h2>
      <div className={c["book-card-about"]}>
        <ul>
          <li>
            <strong>Muallif:</strong> {author}
          </li>
          <li>
            <strong>Chop etilgan yil:</strong> {year}
          </li>
          <li>
            <strong>Til:</strong> {whichLangBook(language)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BookCard;
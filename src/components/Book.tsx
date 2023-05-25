interface Props {
  title: string;
  author: string;
  imgUrl: string;
}

function Book({ title, author, imgUrl }: Props) {
  return (
    <div className="book">
      <img src={imgUrl}></img>
      <div className="description">
        <p className="title">{title}</p>
        {title && title !== "No books available" && (
          <p className="author">by {author}</p>
        )}
      </div>
    </div>
  );
}

export default Book;

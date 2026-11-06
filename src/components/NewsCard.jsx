/** A single news card: image on top, title and description below. */
export default function NewsCard({ item }) {
  const { title, description, image } = item;
  return (
    <article className="card news-card">
      {/* Decorative image; the title already describes the content. */}
      <img className="news-card__image" src={image} alt="" loading="lazy" />
      <div className="news-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

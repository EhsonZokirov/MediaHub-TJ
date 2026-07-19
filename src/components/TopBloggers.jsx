import BloggerCard from "./BloggerCard";
import bloggersData from "../data/bloggers";

function TopBloggers() {
  const topBloggers = bloggersData.slice(0, 3);

  return (
    <section className="top-bloggers">

      <div className="section-header">
        <div>
          <span className="section-label">
            MEDIAHUB TJ
          </span>

          <h2>
            Популярные блогеры
          </h2>
        </div>

        <a href="/bloggers" className="view-all">
          Смотреть всех →
        </a>
      </div>


      <div className="blogger-grid">

        {topBloggers.map((blogger) => (
          <BloggerCard
            key={blogger.id}
            blogger={blogger}
          />
        ))}

      </div>

    </section>
  );
}

export default TopBloggers;
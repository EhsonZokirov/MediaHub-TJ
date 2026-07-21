import { useState } from "react";
import BloggerCard from "./BloggerCard";
import bloggersData from "../data/bloggers";
import Search from "./Search";
import Filter from "./Filter";

function Bloggers() {
  const [bloggers, setBloggers] = useState(bloggersData);
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");

  function searchBloggers(text) {
    const searchText = text.toLowerCase().trim();

    const result = bloggersData.filter((blogger) => {
      const nameMatch = blogger.name
        .toLowerCase()
        .includes(searchText);

      const tagsMatch = blogger.tags?.some((tag) =>
        tag.toLowerCase().includes(searchText)
      );

      return nameMatch || tagsMatch;
    });

    setBloggers(result);
  }

  const filtered = bloggers.filter((blogger) => {
    return (
      (category === "" || blogger.category === category) &&
      (gender === "" || blogger.gender === gender)
    );
  });

  return (
    <main className="bloggers-page">

      {/* HEADER */}
      <section className="bloggers-hero">
        <div className="bloggers-hero-content">

          <span className="section-label">
            MEDIAHUB TJ / CREATORS
          </span>

          <h1>
            Найди блогера
            <br />
            <span>для своей рекламы</span>
          </h1>

          <p>
            Исследуй блогеров Таджикистана,
            сравнивай аудиторию и находи подходящего
            автора для продвижения своего бренда.
          </p>

        </div>
      </section>

      {/* BLOGGERS */}
      <section className="bloggers">

        <div className="bloggers-section-header">
          <div>
            <span className="section-label">
              КАТАЛОГ БЛОГЕРОВ
            </span>

            <h2>
              Все блогеры
            </h2>
          </div>

          <span className="bloggers-count">
            Найдено: {filtered.length}
          </span>
        </div>

        <Search onSearch={searchBloggers} />

        <Filter
          setCategory={setCategory}
          setGender={setGender}
        />

        <div className="blogger-grid">

          {filtered.length > 0 ? (

            filtered.map((blogger) => (
              <BloggerCard
                key={blogger.id}
                blogger={blogger}
              />
            ))

          ) : (

            <div className="no-bloggers">
              <h3>Блогеры не найдены</h3>

              <p>
                Попробуйте изменить поисковый запрос
                или фильтры.
              </p>
            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default Bloggers;
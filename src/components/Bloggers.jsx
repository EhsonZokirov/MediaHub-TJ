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
    <section className="bloggers">
      <h2>Популярные блогеры</h2>

      <Search onSearch={searchBloggers} />

      <Filter
        setCategory={setCategory}
        setGender={setGender}
      />

      <div className="blogger-grid">
        {filtered.map((blogger) => (
          <BloggerCard
            key={blogger.id}
            blogger={blogger}
          />
        ))}
      </div>
    </section>
  );
}

export default Bloggers;
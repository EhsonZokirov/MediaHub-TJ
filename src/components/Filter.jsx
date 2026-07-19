function Filter({ setCategory, setGender }) {
    return (
      <div className="filters">
  
        <div className="filter-group">
          <span className="filter-title">
            Категория
          </span>
  
          <button onClick={() => setCategory("")}>
            Все
          </button>
  
          <button onClick={() => setCategory("Вайнер")}>
            Вайнеры
          </button>
  
          <button onClick={() => setCategory("Lifestyle")}>
            Lifestyle
          </button>
        </div>
  
  
        <div className="filter-group">
          <span className="filter-title">
            Пол
          </span>
  
          <button onClick={() => setGender("")}>
            Все
          </button>
  
          <button onClick={() => setGender("Мужчина")}>
            Мужчины
          </button>
  
          <button onClick={() => setGender("Женщина")}>
            Женщины
          </button>
        </div>
  
      </div>
    );
  }
  
  export default Filter;
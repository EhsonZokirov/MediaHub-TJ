import { useState } from "react";


function Search({ onSearch }) {

  const [value, setValue] = useState("");


  function handleChange(e) {

    setValue(e.target.value);

    onSearch(e.target.value);

  }


  return (

    <div className="search">

      <input
        type="text"
        placeholder="Поиск блогера..."
        value={value}
        onChange={handleChange}
      />

    </div>

  );

}


export default Search;
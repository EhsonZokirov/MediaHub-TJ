import { useParams, Link } from "react-router-dom";

import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaEye,
  FaHeart,
  FaChartLine
} from "react-icons/fa";

import bloggers from "../data/bloggers";


function BloggerProfile() {

  const { id } = useParams();


  const blogger = bloggers.find(
    item => item.id === Number(id)
  );


  if (!blogger) {

    return (

      <div className="profile-page">

        <h1>
          Блогер не найден
        </h1>

      </div>

    );

  }


  return (

    <div className="profile-page">


      <Link
        to="/"
        className="back-button"
      >
        ← Назад к блогерам
      </Link>


      <div className="profile-card">


        {/* HEADER */}

        <div className="profile-header">


          <img
            src={blogger.image}
            alt={blogger.name}
          />


          <div className="profile-title">


            <div className="profile-name">

              <h1>
                {blogger.name}
              </h1>


              <span className="verified">
                ✓
              </span>

            </div>


            <p>
              {blogger.city}
            </p>


            <span className="profile-category">
              {blogger.category}

            </span>


          </div>


        </div>


        {/* DESCRIPTION */}

        <div className="profile-description">


          <h2>
            О блогере
          </h2>


          <p>
            {blogger.description}
          </p>


        </div>


        {/* SOCIAL NETWORKS */}

        <div className="profile-section">


          <h2>
            Социальные сети
          </h2>


          <div className="profile-stats">


            <div className="profile-stat">

              <FaInstagram />

              <span>
                Instagram
              </span>

              <strong>
                {blogger.instagram}
              </strong>

            </div>


            <div className="profile-stat">

              <FaTiktok />

              <span>
                TikTok
              </span>

              <strong>
                {blogger.tiktok}
              </strong>

            </div>


            <div className="profile-stat">

              <FaYoutube />

              <span>
                YouTube
              </span>

              <strong>
                {blogger.youtube}
              </strong>

            </div>


          </div>


        </div>


        {/* STATISTICS */}

        <div className="profile-section">


          <h2>
            Средние показатели
          </h2>


          <div className="analytics">


            <div>

              <FaEye />

              <span>
                Средние просмотры
              </span>

              <strong>
                {blogger.views}
              </strong>

            </div>


            <div>

              <FaHeart />

              <span>
                Средние лайки
              </span>

              <strong>
                {blogger.likes}
              </strong>

            </div>


            <div>

              <FaChartLine />

              <span>
                Вовлечённость аудитории
              </span>

              <strong>
                {blogger.engagement}
              </strong>

            </div>


          </div>


        </div>


        {/* AD FORMATS */}

        <div className="profile-section">


          <h2>
            Форматы рекламы
          </h2>


          <div className="formats">


            {blogger.formats.map(

              (format, index) => (

                <span
                  key={index}
                >
                  {format}
                </span>

              )

            )}


          </div>


        </div>


        {/* PRICE */}

        <div className="price-box">


          <span>
            Стоимость рекламы
          </span>


          <strong>
            от {blogger.price} сом
          </strong>


        </div>


        <button
          className="contact-button"
        >
          Заказать рекламу
        </button>


      </div>


    </div>

  );

}


export default BloggerProfile;
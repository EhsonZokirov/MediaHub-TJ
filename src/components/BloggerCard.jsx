import { Link } from "react-router-dom";

import {
  FaInstagram,
  FaTiktok,
  FaYoutube
} from "react-icons/fa";


function BloggerCard({ blogger }) {

  return (

    <div className="blogger-card">

      <div className="blogger-image-wrapper">

        <img
          src={blogger.image}
          alt={blogger.name}
        />

        <span className="category-badge">
          {blogger.category}
        </span>

      </div>


      <div className="blogger-info">

        <div className="name-row">

          <h3>
            {blogger.name}
          </h3>

          <span className="verified">
            ✓
          </span>

        </div>


        <p className="location">
          {blogger.city}
        </p>


        <div className="social-stats">

          <div className="social-item">

            <FaInstagram />

            <span>
              Instagram
            </span>

            <strong>
              {blogger.instagram}
            </strong>

          </div>


          <div className="social-item">

            <FaTiktok />

            <span>
              TikTok
            </span>

            <strong>
              {blogger.tiktok}
            </strong>

          </div>


          <div className="social-item">

            <FaYoutube />

            <span>
              YouTube
            </span>

            <strong>
              {blogger.youtube}
            </strong>

          </div>

        </div>


        <div className="card-bottom">

          <div>

            <span>
              Реклама от
            </span>

            <strong>
              {blogger.price} сом
            </strong>

          </div>


          <Link
            to={`/blogger/${blogger.id}`}
            className="details-button"
          >
            Подробнее
          </Link>

        </div>

      </div>

    </div>

  );

}


export default BloggerCard;
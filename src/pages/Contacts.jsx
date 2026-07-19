import Navbar from "../components/Navbar";
function Contacts() {
  return (
    <>
      <Navbar />

      <main className="contacts-page">

        <section className="contacts-hero">
          <span className="contacts-label">
            MEDIAHUB TJ
          </span>

          <h1>
            Свяжитесь с нами
          </h1>

          <p>
            Есть вопросы, предложения или хотите добавить блогера?
            Мы всегда на связи.
          </p>
        </section>


        <section className="contacts-content">

          <div className="contact-info">

            <div className="contact-card">
              <span className="contact-icon">📱</span>

              <div>
                <h3>Instagram</h3>
                <p>@mediahub.tj</p>
              </div>
            </div>


            <div className="contact-card">
              <span className="contact-icon">✉️</span>

              <div>
                <h3>Email</h3>
                <p>mediahub.tj@gmail.com</p>
              </div>
            </div>


            <div className="contact-card">
              <span className="contact-icon">📍</span>

              <div>
                <h3>Локация</h3>
                <p>Душанбе, Таджикистан</p>
              </div>
            </div>

          </div>


          <div className="contact-form">

            <h2>Напишите нам</h2>

            <input
              type="text"
              placeholder="Ваше имя"
            />

            <input
              type="text"
              placeholder="Ваш Instagram или телефон"
            />

            <textarea
              placeholder="Ваше сообщение"
              rows="5"
            />

            <button>
              Отправить сообщение
            </button>

          </div>

        </section>

      </main>
    </>
  );
}

export default Contacts;
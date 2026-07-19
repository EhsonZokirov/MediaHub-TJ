import Navbar from "../components/Navbar";

function SMM() {
  return (
    <>
      <Navbar />

      <main className="smm-page">

        <section className="smm-hero">

          <span className="section-label">
            MEDIAHUB TJ
          </span>

          <h1>
            Продвигайте свой бизнес
            <br />
            с помощью блогеров
          </h1>

          <p>
            Найдите подходящего автора для рекламы,
            продвижения бренда и создания контента.
          </p>

          <a
            href="/contacts"
            className="smm-button"
          >
            Обсудить сотрудничество
          </a>

        </section>


        <section className="smm-services">

          <h2>
            Что мы предлагаем
          </h2>


          <div className="smm-grid">

            <div className="smm-card">
              <span>01</span>

              <h3>
                Подбор блогера
              </h3>

              <p>
                Найдём автора, который подходит
                именно вашей целевой аудитории.
              </p>
            </div>


            <div className="smm-card">
              <span>02</span>

              <h3>
                Реклама у блогеров
              </h3>

              <p>
                Поможем подобрать блогеров
                для эффективной рекламной кампании.
              </p>
            </div>


            <div className="smm-card">
              <span>03</span>

              <h3>
                Создание контента
              </h3>

              <p>
                Создание качественного фото- и видеоконтента
                для продвижения вашего бренда.
              </p>
            </div>

          </div>

        </section>


        <section className="smm-cta">

          <h2>
            Хотите продвинуть свой бизнес?
          </h2>

          <p>
            Свяжитесь с нами, и мы поможем подобрать
            подходящее решение.
          </p>

          <a
            href="/contacts"
            className="smm-button"
          >
            Связаться с нами
          </a>

        </section>

      </main>
    </>
  );
}

export default SMM;
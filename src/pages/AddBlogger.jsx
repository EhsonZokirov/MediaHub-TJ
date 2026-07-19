import Navbar from "../components/Navbar";

function AddBlogger() {
    return (
        <> <Navbar />


            <main className="add-blogger-page">

                <section className="add-blogger-hero">

                    <span className="section-label">
                        MEDIAHUB TJ
                    </span>

                    <h1>
                        Добавьте себя
                        <br />
                        в каталог блогеров
                    </h1>

                    <p>
                        Представьте себя брендам и рекламодателям.
                        Заполните форму, чтобы попасть в каталог MediaHub TJ.
                    </p>

                </section>


                <section className="add-blogger-form-section">

                    <form className="add-blogger-form">

                        <div className="form-header">
                            <span className="form-number">
                                01
                            </span>

                            <div>
                                <h2>
                                    Основная информация
                                </h2>

                                <p>
                                    Расскажите немного о себе
                                </p>
                            </div>
                        </div>


                        <div className="form-grid">

                            <div className="form-group">
                                <label>
                                    Имя или псевдоним
                                </label>

                                <input
                                    type="text"
                                    placeholder="Например: M-Favik"
                                />
                            </div>


                            <div className="form-group">
                                <label>
                                    Город
                                </label>

                                <input
                                    type="text"
                                    placeholder="Например: Душанбе"
                                />
                            </div>


                            <div className="form-group">
                                <label>
                                    Пол
                                </label>

                                <select defaultValue="">
                                    <option value="" disabled>
                                        Выберите пол
                                    </option>

                                    <option value="male">
                                        Мужчина
                                    </option>

                                    <option value="female">
                                        Женщина
                                    </option>
                                </select>
                            </div>


                            <div className="form-group">
                                <label>
                                    Категория контента
                                </label>

                                <select defaultValue="">
                                    <option value="" disabled>
                                        Выберите категорию
                                    </option>

                                    <option value="viner">
                                        Вайнер
                                    </option>

                                    <option value="lifestyle">
                                        Lifestyle
                                    </option>

                                    <option value="beauty">
                                        Beauty
                                    </option>

                                    <option value="fashion">
                                        Fashion
                                    </option>

                                    <option value="food">
                                        Food
                                    </option>

                                    <option value="gaming">
                                        Gaming
                                    </option>
                                </select>
                            </div>

                        </div>


                        <div className="form-divider" />


                        <div className="form-header">
                            <span className="form-number">
                                02
                            </span>

                            <div>
                                <h2>
                                    Социальные сети
                                </h2>

                                <p>
                                    Добавьте ссылки на свои аккаунты
                                </p>
                            </div>
                        </div>


                        <div className="form-grid">

                            <div className="form-group">
                                <label>
                                    Instagram
                                </label>

                                <input
                                    type="text"
                                    placeholder="@username"
                                />
                            </div>


                            <div className="form-group">
                                <label>
                                    TikTok
                                </label>

                                <input
                                    type="text"
                                    placeholder="@username"
                                />
                            </div>


                            <div className="form-group">
                                <label>
                                    YouTube
                                </label>

                                <input
                                    type="text"
                                    placeholder="Ссылка на канал"
                                />
                            </div>


                            <div className="form-group">
                                <label>
                                    Стоимость рекламы
                                </label>

                                <input
                                    type="text"
                                    placeholder="Например: от 500 сомони"
                                />
                            </div>

                        </div>


                        <div className="form-divider" />


                        <div className="form-group">
                            <label>
                                Расскажите о себе
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Опишите себя и свой контент..."
                            />
                        </div>


                        <button
                            type="submit"
                            className="add-blogger-button"
                        >
                            Отправить заявку
                        </button>

                    </form>

                </section>

            </main>
        </>


    );
}

export default AddBlogger;

import {} from 'react';
import "./Home.css";

const Home = () => {

  const specialtiesOBJ = [
    {
      img: "../public/oncologo.png",
      title: "Oncology",
    },
    {
      img: "../public/endocriono.png",
      title: "Endocrinology",
    },
    {
      img: "../public/tramatologia.png",
      title: "Traumatology",
    },
    {
      img: "../public/Oftalmologo.png",
      title: "Ophthalmologist",
    },
    {
      img: "../public/medicoInterno.png",
      title: "Internal Physcian",
    },
    {
      img: "../public/ginecologo.png",
      title: "Gynaecology",
    },
  ];

  const loadSpecieltes = () => {
    return specialtiesOBJ.map((obj, index) => {
      return (
        <>
          <div key={index} className="especiality-img">
            <img className="imagen" src={obj.img} />
            <h3>{obj.title}</h3>
          </div>
        </>
      );
    });
  }
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">MediCare</div>
        <img className="logotipo" src="../public/logotipo.png"></img>
      </header>

      <main className="main-content">
        <div className="banner">
          <div className="banner-image">
          </div>
          <div className="banner-text">
            <h1>Welcome to MediCare!</h1>
            <p>Log in as a doctor or patient</p>
            <div className="banner-buttons">
              <button className="register-banner-button">Register</button>
              <button className="access-banner-button">Log in</button>
            </div>
          </div>
        </div>

        <section className="specialties">
          <h2>Medical Specialities</h2>
          <div className="specialties">{loadSpecieltes()}</div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/">Specialities</a>
          <a href="/">Contact</a>
        </div>
        <div></div>
        <div className="footer-info">
          <img src="../public/llamar.png" />
          <p>998-725-255</p>
        </div>
        <div className="footer-info">
          <img src="../public/localizacion.png" />
          <p>Luis Morote 8, Las Palmas de Gran Canaria</p>
        </div>
        <div className="footer-info">
          <img src="../public/correo.png" />
          <p>medicare@hospital.com</p>
        </div>
      </footer>
      <div className="final">
        <hr />
        <p>© 2024 MediCare | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Home;
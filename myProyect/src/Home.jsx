import {useState} from 'react';
import "./Home.css";

const Home = () => {
const [showLogin, setShowLogin] = useState(false);

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
          <div className="banner-image"></div>
          <div className="banner-text">
            <h1>Welcome to MediCare!</h1>
            <p>Log in as a doctor or patient</p>
            <div className="banner-buttons">
              <button className="register-banner-button">Register</button>
              <button className="access-banner-button" onClick={() => setShowLogin(true)}>
              Log in</button>
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
        <div>
          <img className="logotipo" src="../public/logotipo.png"></img>
          <p className='logo-test'>This is our website to access medical services in an easy and simple way, you can consult and request your changes.</p>
        </div>
        <div className='footer-img'>
          <img src='../public/instagram.png' />
          <img src='../public/x.png' />
          <img src='../public/facebook.png' />
        </div>
        
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
    
      {showLogin && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Welcome</h2>
            <form>
              <input type="text" placeholder="Email" className="input-field" />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <div className="links">
              <a href="https://accounts.google.com/v3/signin/recoveryidentifier?ard=AHwGkRlCdvbl0AEXUjNnXxa8ho21NVUrW6V8vV3werBju8Vj4AKOJonOfCS09rLSszKeF-MCowRcQuxdgSGG5PBwFz1Ppd7WENTvCrUeCa2vHzK0Ht3p6FM&fpOnly=1&hl=en&service=mail&flowName=GlifWebSignIn&dsh=S-468234728%3A1733264926697843&ddm=1" target="_blank" rel="noopener noreferrer">Forgot your password?</a>
              <a href="#register">Don't have an account?   Register</a>
            </div>
            <button
              className="close-button" onClick={() => setShowLogin(false)}
            > Close </button>
          </div>
        </div>
      )}

    </div>
  );
};



export default Home;


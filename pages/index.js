import Head from 'next/head'
import { Button, Container} from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Solaremea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pageContain">
        <header className="header">
          <div className="contain">
            <a className="logo" href="https://solaremea.net/">
                SOLAREMEA
            </a>
            <nav className="mainNav">
              <ul className="nav">
                <li>
                  <span className="navItem">Solutions</span>
                </li>
                <li>
                  <span className="navItem">Company</span>
                </li>
                <li>
                  <span className="navItem">Resources</span>
                </li>
              </ul>
            </nav>
            <a href="/login" className="loginBtn">Log In</a>
          </div>
        </header>

        <section className="head">
          <div className="bg">
            <img src="/head.jpg" alt="background image solaremea"></img>
          </div>
          <div className="contain headContent">
            <h1 className="huge">Join the solar energy revolution</h1>
            <p>We're transforming access to renewable energy with simple, powerful solar solutions.</p>
            <a>Learn More</a>
          </div>
        </section>

        <section className="bodyContent">
          <nav className="pageNav blockContain">
            <ul>
              <li><a href="#solutions" className="subNav">Solutions</a></li>
              <li><a href="#getstarted" className="subNav">Get Started</a></li>
              <li><a href="#about" className="subNav">About</a></li>
              <li><a href="#featured" className="subNav">Featured</a></li>
              <li><a href="#contact" className="subNav">Contact</a></li>
            </ul>
          </nav>
          <div className="contain">
          </div>
        </section>

      </div>
    </>
  )
}

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
          <div className="headContent contain">
            <h1 className="huge">Join the solar energy revolution</h1>
            <p className="underP">We're transforming access to renewable energy with simple, powerful solar solutions.</p>
            <a className="btnRound">Learn More</a>
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
            <div className="solutions">
              <div className="solutionsPresentation">
                <h2>Solutions</h2>
                <p className="underP">Our innovative community solar & project development solutions make solar possible for households, businesses, property owners, and more.</p>
              </div>
              
              <div class="row">
                <div class="col-lg">
                  <div className="content">
                    <div className="heading">
                      <img style={{marginRight: '1.5em'}} src="https://bluewavesolar.com/resources/img/icons/community_solar.min.svg" alt="Community Solar"/>
                      <h3 style={{margin: '0'}}className="mainTitle">Community Solar</h3>
                    </div>
                    <p className="underP">Breaking down barriers to solar benefits. Homeowners, businesses, and towns can enjoy savings by signing up for a community solar share. No rooftop panels required!</p>
                    <a className="btnRound">Learn More</a>
                    <ul className="solutionLinks">
                      <li>
                        <img src="https://bluewavesolar.com/resources/img/icons/solutions/person.min.svg" alt="Community Solar Project Services"/>
                        <div>
                          <a>Community Solar Project Services</a>
                          <p>You develop the project, let our team acquire and manage the customers.</p>
                        </div>  
                      </li>
                      <li>
                        <img src="https://bluewavesolar.com/resources/img/icons/solutions/person.min.svg" alt="Community Solar Sales Partners"/>
                        <div>
                          <a>Community Solar Sales Partners</a>
                          <p>Broaden your customer base with access to the solar solution for more people in more places.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg" style={{textAlign: "center"}}>
                  <img class="mainImg" src="/community_solar.jpg" alt="Community_solar"/>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

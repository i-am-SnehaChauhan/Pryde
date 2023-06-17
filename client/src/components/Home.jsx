import React from 'react'
import "../index.css"
const Home = () => {
  return (
    <>
  {/*========== SCROLL TOP ==========*/}
  <a href="#" className="scrolltop" id="scroll-top">
    <i className="bx bx-up-arrow-alt scrolltop__icon" />
  </a>
  {/*========== HEADER ==========*/}
  <header className="l-header" id="header">
    <nav className="nav bd-container">
      <a href="#home" className="nav__logo">
        Devcation 2022
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#about" className="nav__link ">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#theme" className="nav__link ">
              Theme
            </a>
          </li>
          <li className="nav__item">
            <a href="#events" className="nav__link">
              Events
            </a>
          </li>
          {/* <li class="nav__item"><a href="#timeline" class="nav__link">Timeline</a></li> */}
          <li className="nav__item">
            <a href="#sponsors" className="nav__link">
              Sponsors
            </a>
          </li>
          <a href="#sponsors" className="nav__link"></a>
          <li className="nav__item">
            <a href="#sponsors" className="nav__link" />
            <a href="./view/team.html" className="nav__link">
              Team
            </a>
          </li>
          <li className="nav__item">
            <a href="/accounts" className="nav__link">
              Login
            </a>
          </li>
          <li>
            <i className="bx bx-toggle-left change-theme" id="theme-button" />
          </li>
        </ul>
      </div>
      <div className="nav__toggle" id="nav-toggle">
        <i className="bx bx-grid-alt" />
      </div>
    </nav>
  </header>
  <main className="l-main">
    {/*========== Welcome ==========*/}
    <section className="home" id="home">
      <div className="home__container bd-container bd-grid">
        <div className="home__img">
          <img src="./img/pingu.png" alt="" />
        </div>
        <div className="home__data">
          <h1 className="home__title">Welcome to Devcation'22</h1>
          <p className="home__description">
            Devcation is a week-long technical festival organized by GDSC
            IGDTUW. <br /> A triathlon, which includes a designathon, ideathon,
            and hackathon along with various knowledge-imparting and
            recreational sessions.
          </p>
        </div>
      </div>
    </section>
    {/*========== About Devcation ==========*/}
    <section className="share section bd-container" id="about">
      <div className="share__container bd-grid">
        <div className="share__data">
          <h2 className="section-title-center">
            About <br /> Devcation 2022 🌍{" "}
          </h2>
          <p className="share__description">
            This event will act as a platform to attain knowledge and work on
            projects in real-time and gain mentorship from the experts. It will
            help beginners to kickstart their technical journey.
          </p>
        </div>
        <div className="share__img">
          <img src="./img/world.png" alt="" />
        </div>
      </div>
    </section>
    {/* ================ About GDSC IGDTUW ================= */}
    <section className="share section bd-container" id="learn_more">
      <div className="share__container bd-grid">
        <div className="share__data">
          <img src="./img/GDSC.png" alt="" />
        </div>
        <div className="share__img about__GDSC">
          <h2 className="section-title-center">
            About <br /> GDSC IGDTUW 🌍{" "}
          </h2>
          <p className="share__description">
            GDSC IGDTUW is a community interested in exploring new technology.
            Our club promotes various Google technologies and aims to help the
            students to nurture their passion for technology and build projects
            that positively impact the society.
          </p>
        </div>
      </div>
    </section>
    {/* =============Theme UN SDG============ */}
    <section className="share section bd-container" id="theme">
      <div className="share__container bd-grid">
        <div className="share__data">
          <h2 className="section-title-center">Theme 🌟</h2>
          <p className="share__description">
            The Sustainable Development Goals or Global Goals are a collection
            of 17 interlinked global goals designed to be a "blueprint to
            achieve a better and more sustainable future for all". The SDGs were
            set up in 2015 by the United Nations General Assembly and are
            intended to be achieved by the year 2030.
          </p>
        </div>
        <div className="share__img">
          <img src="./img/SDG.png" alt="" />
        </div>
      </div>
    </section>
    {/*========== CATEGORIES ==========*/}
    <section className="decoration section bd-container" id="events">
      <h2 className="section-title">Events</h2>
      <div className="decoration__container bd-grid">
        <div className="decoration__data">
          <img
            src="./img/Design.png"
            alt=""
            className="decoration__img"
            id="apple_render"
          />
          <h3 className="decoration__title">Design 'n' Solve</h3>
          {/*<a href="./view/designsolve.html" class="button button-link">Details</a>*/}
          <div className="button">
            <a
              href="./view/designsolve.html"
              className="button-link"
              style={{ color: "white" }}
            >
              Details
            </a>
          </div>
          <div className="button">
            <a
              href="https://dare2compete.com/hackathon/designnsolve-devcation-indira-gandhi-delhi-technical-university-for-women-igdtuw-delhi-266079"
              className="button-link"
              style={{ color: "white" }}
            >
              Register
            </a>
          </div>
        </div>
        <div className="decoration__data">
          <img
            src="./img/Ideate.png"
            alt=""
            className="decoration__img"
            id="burger_render"
          />
          <h3 className="decoration__title">Ideate 'n' Solve</h3>
          <div className="button">
            <a
              href="./view/ideatesolve.html"
              className="button-link"
              style={{ color: "white" }}
            >
              Details
            </a>
          </div>
          <div className="button">
            <a
              href="https://dare2compete.com/hackathon/ideatensolve-devcation-266047"
              className="button-link"
              style={{ color: "white" }}
            >
              Register
            </a>
          </div>
        </div>
        <div className="decoration__data">
          <img
            src="./img/Hack.png"
            alt=""
            className="decoration__img"
            id="milk_render"
          />
          <h3 className="decoration__title">Hack 'n' Solve</h3>
          <div className="button">
            <a
              href="./view/hacksolve.html"
              className="button-link"
              style={{ color: "white" }}
            >
              Details
            </a>
          </div>
          <div className="button">
            <a
              href="./view/hacksolve.html"
              className="button-link"
              style={{ color: "white" }}
            >
              Register
            </a>
          </div>
          {/*<div 
                    class="apply-button" 
                    data-hackathon-slug="hack-n-solve" 
                    data-button-theme="light"
                    style="height: 44px; width: 312px"
                  ></div>*/}
        </div>
      </div>
    </section>
    {/* =============Timeline=============

    <div id="timeline">
<section class="intro">
  <div class="container">
    <h1>Event Timeline </h1>
  </div>
</section>

<section class="timeline">
  <ul>
    <li>
      <div>
        <h1>04th March 2022</h1>
        <p>Opening Ceremony</p>
      </div>
    </li>
    <li>
      <div>
        <h1>05th March 2022</h1>
        <p>Design 'n' Solve</p>
      </div>
    </li>
    <li>
      <div>
        <h1>06th March 2022</h1>
        <p>Ideate 'n' Solve</p>
      </div>
    </li>
    <li>
      <div>
        <h1>07th March 2022 - 11th March 2022</h1>
        <p>Workshop and Fun Events</p>
      </div>
    </li>
    <li>
      <div>
        <h1>12th March 2022 - 13th March 2022</h1>
        <p>Hack 'n' Solve</p>
      </div>
    </li>
    <li>
      <div>
        <h1>14th March 2022</h1>
        <p>Results and Closing Ceremony</p>
      </div>
    </li>
    <!--<li>
                      <div>
                        <h1>1957</h1> <p>In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h1>1967</h1> <p>Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h1>1977</h1> <p>Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h1>1985</h1> <p>In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h1>2000</h1> <p>In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</p>
                      </div>
                    </li>
                    <li>
                      <div>
                        <h1>2005</h1> <p>In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</p>
                      </div>
                    </li>*/}
    {/* ==========Speakers========== */}
    <section className="share section bd-container" id="speakers">
      <div className="share__container bd-grid">
        <div className="share__img">
          <img src="./img/Speaker.png" alt="" />
        </div>
        <div className="share__data">
          <h2 className="section-title-center"> Checkout The Schedule </h2>
          <a href="./view/schedule.html" className="button">
            Here!
          </a>
          {/* <a href="#" class="button">Learn More</a> */}
        </div>
      </div>
    </section>
    {/* ==========Sponsors============ */}
    <section id="sponsors" className="section ">
      <div className="sponsor-container ">
        <h1 className="section-title">Title Sponsor ⚡</h1>
        <section className="customer-logos slider">
          <div className="slide">
            <a title="Devfolio" href="https://devfolio.co/">
              <img
                src="./img/Sponsor Logos/Title Sponsor/Devfolio_Logo-Colored.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Polygon" href="https://polygon.com/">
              <img
                src="./img/Sponsor Logos/Title Sponsor/Polygon_Logo-Colored.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="HoverRobotix" href="https://hoverrobotix.com/">
              <img
                src="./img/Sponsor Logos/Title Sponsor/HoverRobotix-logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Mentro" href="https://mentro.tech/">
              <img
                src="./img/Sponsor Logos/Title Sponsor/mentro-logo-01.png"
                alt=""
              />
            </a>
          </div>
        </section>
      </div>
      <div className="sponsor-container">
        <h1 className="section-title">Platinum Sponsor 💫</h1>
        <section className="customer-logos slider">
          <div className="slide">
            <a title="Tezos" href="https://tezos.com/">
              <img
                src="img\Sponsor Logos\Platinum Sponsor\Tezos_Logo-Colored.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Filecoin" href="https://filecoin.io/">
              <img
                src="img\Sponsor Logos\Platinum Sponsor\Filecoin Coloured White Text.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Celo" href="https://celo.org/">
              <img
                src="img\Sponsor Logos\Platinum Sponsor\Celo Logo Color.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="GeeksForGeeks" href="https://geeksforgeeks.org/">
              <img
                src="img\Sponsor Logos\Platinum Sponsor\gfg-new-logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Digital Ocean" href="https://www.digitalocean.com/">
              <img
                src="img\Sponsor Logos\Platinum Sponsor\DO_Logo_Vertical_Blue.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Postman" href="https://www.postman.com/">
              <img
                src="img\Sponsor Logos\Platinum Sponsor\postman-logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Lumos Labs" href="https://www.lumoslabs.co/">
              <img
                src="img\Sponsor Logos\Platinum Sponsor\lumos-logo.png"
                alt=""
              />
            </a>
          </div>
        </section>
      </div>
      <div className="sponsor-container">
        <h1 className="section-title">Gold Sponsor 🥇</h1>
        <section className="customer-logos slider">
          <div className="slide">
            <a title="Lead Learners" href="https://www.leadlearners.ca/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\Leading_Learners_Logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Voiceflow" href="https://www.voiceflow.com/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\Voiceflow_Logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Taskade" href="https://taskade.com/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\taskade-logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Interview Buddy" href="https://interviewbuddy.in/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\logo-of-interviewbuddy.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Interview Cake" href="https://interviewcake.com/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\interview-cake.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Coding Ninjas" href="https://www.codingninjas.com/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\coding-ninjas-logo-white.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Wolfram" href="https://wolfram.com/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\wolfram-language-text-logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title=".XYZ" href="https://gen.xyz/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\xyz-logo-color.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="Divya Gera Foundation"
              href="https://instagram.com/divyagerafoundation_"
            >
              <img src="img\Sponsor Logos\Gold Sponsor\dgf logo.png" alt="" />
            </a>
          </div>
          <div className="slide">
            <a title="Alan AI" href="https://alan.app/">
              <img
                src="img\Sponsor Logos\Gold Sponsor\alan-logo-horizontal-color.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="symbl.ai" href="https://symbl.ai/">
              <img src="img\Sponsor Logos\Gold Sponsor\Symbl_logo.png" alt="" />
            </a>
          </div>
        </section>
      </div>
      <div className="sponsor-container">
        <h1 className="section-title">Silver Sponsor 🥈</h1>
        <section className="customer-logos slider">
          <div className="slide">
            <a title="Echo3D" href="https://www.echo3d.co/">
              <img
                src="img\Sponsor Logos\Silver Sponsor\echo3D - Logo 2021 - Black.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Rosenfeld" href="https://rosenfeldmedia.com/">
              <img
                src="img\Sponsor Logos\Silver Sponsor\rosenfeld-logo.gif"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="Art Of Problem Solving"
              href="https://artofproblemsolving.com/"
            >
              <img
                src="img\Sponsor Logos\Silver Sponsor\AoPS_Main_Logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Cybrancee" href="https://cybrancee.com/">
              <img
                src="img\Sponsor Logos\Silver Sponsor\Cybrancee-logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="WrapCart" href="https://www.wrapcart.com/">
              <img
                src="img\Sponsor Logos\Silver Sponsor\WrapCart_Logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="1password" href="https://1password.com">
              <img
                src="img\Sponsor Logos\Silver Sponsor\1P-wordmark.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Sketch" href="http://www.sketch.com/">
              <img
                src="img\Sponsor Logos\Silver Sponsor\Sketch-Logo-Light.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Clerky" href="https://www.clerky.com/">
              <img
                src="img\Sponsor Logos\Silver Sponsor\Clerky_Logo.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Axure" href="https://www.axure.com/">
              <img
                src="img\Sponsor Logos\Silver Sponsor\Axure_Logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Fueler" href="https://fueler.io/">
              <img
                src="img\Sponsor Logos\Silver Sponsor\fueler_logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="Cisco" href="https://www.cisco.com/c/en_in/index.html">
              <img src="img/Sponsor Logos/Silver Sponsor/Cisco.png" alt="" />
            </a>
          </div>
          <div className="slide">
            <a title="GitHub" href="https://github.com/">
              <img src="img/Sponsor Logos/Silver Sponsor/GitHub.png" alt="" />
            </a>
          </div>
        </section>
      </div>
      <div className="sponsor-container">
        <h1 className="section-title">Community Partner 🌐</h1>
        <section className="customer-logos slider">
          <div className="slide">
            <a title="Heiphen" href="https://heiphen.com/">
              <img
                src="img\Sponsor Logos\Community Partner\heipehn-dark.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="Technoliterati IGDTUW"
              href="https://www.linkedin.com/company/technoliterati-igdtuw/mycompany/"
            >
              <img
                src="img\Sponsor Logos\Community Partner\TLit logo - Charanjeev Kaur.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="GeeksForGeeks IGDTUW"
              href="https://instagram.com/geeksforgeeks.igdtuw?utm_medium=copy_link"
            >
              <img
                src="img\Sponsor Logos\Community Partner\GFG_official logo - GFG Igdtuw.jfif"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="GDSC NSUT"
              href="https://www.linkedin.com/company/dscnsut/"
            >
              <img
                src="img\Sponsor Logos\Community Partner\GDSC_NSUT.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="GDSC GLAU"
              href="https://www.linkedin.com/company/gdsc-glau/"
            >
              <img
                src="img\Sponsor Logos\Community Partner\GDSC_GLA.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="GDSC DIEMS"
              href="https://www.linkedin.com/in/gdsc-diems-4ab938220/"
            >
              <img
                src="img\Sponsor Logos\Community Partner\GDSC_DIEMS.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="Thapar ACM"
              href="https://www.linkedin.com/company/thapar-acm-student-chapter/mycompany/"
            >
              <img
                src="img\Sponsor Logos\Community Partner\thapar_ACM.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="ACM IGDTUW"
              href="https://www.linkedin.com/company/acm-student-chapter-igdtuw"
            >
              <img
                src="img\Sponsor Logos\Community Partner\ACM- IGDTUW Student Chapter.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="Mozilla Firefox Club VIT Bhopal"
              href="https://www.linkedin.com/company/mozilla-firefox-club-vit-bhopal/"
            >
              <img
                src="img\Sponsor Logos\Community Partner\Mozilla Firefox VIT-Bhopal.jpeg"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a
              title="Eduhub Community"
              href="https://www.linkedin.com/company/eduhub-community"
            >
              <img
                src="img\Sponsor Logos\Community Partner\eduhub.png"
                alt=""
              />
            </a>
          </div>
          <div className="slide">
            <a title="MLSA" href="https://studentambassadors.microsoft.com/">
              <img src="img\Sponsor Logos\Community Partner\MLSA.png" alt="" />
            </a>
          </div>
        </section>
      </div>
      <div className="sponsor-container">
        <h1 className="section-title">Streaming and Media Partner 🎥</h1>
        <div className="sponsor-logo">
          <a title="Streamyard" href="https://streamyard.com/">
            <img
              src="img\Sponsor Logos\Streaming and Media Partner\streamyard-logo.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="sponsor-container">
        <h1 className="section-title">Certificate Partner 📜</h1>
        <div className="sponsor-logo">
          <a title="Give My Certificate" href="https://givemycertificate.com/">
            <img
              src="img\Sponsor Logos\Certificate Partner\gmc_logo.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
    {/*========== FOOTER (Socials) ==========*/}
    <section className="footer " id="contact_us">
      <div className="footer__container bd-container bd-grid">
        <div className="footer__social">
          <h2 className="footer__title" style={{ color: "white" }}>
            Contact us at:
          </h2>
          <div className="footer__icons">
            <a
              href="https://www.instagram.com/gdsc_igdtuw/"
              className="footer__logo"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="https://twitter.com/gdsc_igdtuw" className="footer__logo">
              <i className="fa-brands fa-twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/dscigdtuw/mycompany/"
              className="footer__logo"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
            <a
              href="https://www.youtube.com/c/DSCIGDTUW"
              className="footer__logo"
            >
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/*========== SCROLL REVEAL ==========*/}
  {/*========== MAIN JS ==========*/}
  {/* Timeline.js */}
  {/* Sponsors */}
</>

  )
}

export default Home
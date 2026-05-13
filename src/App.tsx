import './index.css';

const PHONE = '+91-9876543210';
const WHATSAPP = '919876543210';

export default function App() {
  return (
    <>
      {/* NAV */}
      <nav className="navbar">
        <a href="#hero" className="nav-logo">🎺 Bach Band</a>
        <ul className="nav-links">
        <li><a href="#trolley-band">Trolley Band</a></li>

            <li><a href="#pickup-band">Pickup Band</a></li>

    <li><a href="#digital-ratha">Digital Ratha</a></li>
                    <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">Hamare Baare Mein</a></li>

        </ul>
        <a href={`tel:${PHONE}`} className="nav-cta">📞 Abhi Call Karein</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-badge">✦ Shaadi & Events ✦</span>
          <h1>Bach <span>Band</span></h1>
          <p className="hero-tagline">शादी और इवेंट्स के लिए बेस्ट बैंड — हर पल को यादगार बनाएं 🎵</p>
          <div className="hero-btns">
            <a href={`tel:${PHONE}`} className="btn-primary" id="hero-call-btn">📞 Book Now – Call Karein</a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="btn-outline" id="hero-whatsapp-btn">💬 WhatsApp Karein</a>
          </div>
        </div>
        <div className="scroll-hint">
          <span>SCROLL</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

     



 <section className="feature-section" id="trolley-band">
  <div className="feature-content">
    
    <div className="feature-text">
      <span className="section-label">✦ Trolley Band ✦</span>

      <h2 className="section-title">
        Royal Trolley Band Experience
      </h2>

      <p>
        Hamara trolley band shaadi aur baraat ko ek royal touch deta hai.
        Stylish lighting, live music aur grand entry ke saath har baraat
        ko yaadgaar banaya jata hai.
      </p>
 
    </div>

    {/* VIDEO SECTION */}
    <div className="feature-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="trolley-video"
      >
        <source src="/trolley-band-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

  </div>
</section>



<section className="feature-section dark" id="pickup-band">
  <div className="feature-content reverse">
        {/* TEXT */}
    <div className="feature-text">
      <span className="section-label">✦ Pickup Band ✦</span>

      <h2 className="section-title">
        Modern Pickup Band
      </h2>

      <p>
        Pickup band ek modern aur stylish option hai jahan live performers,
        DJ setup aur lighting ek saath available hota hai.
      </p>

   
    </div>

    {/* VIDEO */}
    <div className="feature-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="pickup-video"
      >
        <source src="/pickup-band-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

 

  </div>
</section>




<section className="feature-section" id="digital-ratha">
  <div className="feature-content">

    {/* TEXT */}
    <div className="feature-text">
      <span className="section-label">✦ Digital Ratha ✦</span>

      <h2 className="section-title">
        Digital Rath
      </h2>

      <p>
        Hamara digital ratha LED screens, premium sound system aur modern
        lighting effects ke saath aapki wedding procession ko next level
        par le jata hai.
      </p>

  
    </div>

    {/* VIDEO */}
    <div className="feature-video">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls
        className="digital-ratha-video"
      >
        <source src="/digital-ratha-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

  </div>
</section>

      {/* SERVICES */}
      <section className="services" id="services">
        <span className="section-label">✦ Hamari Services ✦</span>
        <h2 className="section-title">Kya Kya Offer Karte Hain?</h2>
        <div className="section-line" />
        <div className="services-grid">
          <div className="service-card" id="service-shaadi">
            <span className="service-icon">💍</span>
            <h3>Shaadi Band</h3>
            <p>
              Dulha-dulhan ki shaadi ko sangeet se bhar dijiye. Traditional aur modern
              dhun bajane mein mahir — pheras se lekar vidaai tak, har pal mein jaan dal dein.
            </p>
            <span className="service-tag">Most Popular</span>
          </div>
          <div className="service-card" id="service-baraat">
            <span className="service-icon">🐴</span>
            <h3>Baraat Band</h3>
            <p>
              Dulhe raja ki baraat ko yaadgaar banaiye humari energetic brass band performance se.
              Full uniformed musicians ke saath ek grand aur festive baraat procession.
            </p>
            <span className="service-tag">Grand Experience</span>
          </div>
          <div className="service-card" id="service-dj-combo">
            <span className="service-icon">🎧</span>
            <h3>DJ + Band Combo</h3>
            <p>
              Live band ki dhadkan aur DJ ki modern beats ek saath! Perfect for sangeet
              ceremony, reception aur mehendi — dance floor ko garam rakhne ka best tarika.
            </p>
            <span className="service-tag">Best Value</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="gallery" id="gallery">
        <span className="section-label">✦ Hamari Gallery ✦</span>
        <h2 className="section-title">Kuch Khaas Moments</h2>
        <div className="section-line" />
        <div className="gallery-grid">
          {[
            { src: '/hero_band.png', label: 'Grand Baraat Night' },
            { src: '/gallery_baraat.png', label: 'Baraat Procession' },
            { src: '/gallery_stage.png', label: 'Stage Performance' },
            { src: '/gallery_dj_band.png', label: 'DJ + Band Combo' },
          ].map((item, i) => (
            <div className="gallery-item" key={i}>
              <img src={item.src} alt={item.label} loading="lazy" />
              <div className="gallery-overlay"><span>🎺</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <span className="section-label">✦ Humse Miliye ✦</span>
          <h2 className="section-title">Aaj Hi Book Karein</h2>
          <div className="section-line" />
          <div className="contact-card">
            <p>
              Apni shaadi ya event ke liye abhi humse contact karein. Hum aapke budget aur
              requirements ke hisaab se best package taiyar karenge. <br />
              <strong style={{ color: 'var(--gold)' }}>Booking limited hai — jaldi karein! 🎵</strong>
            </p>
            <div className="contact-btns">
              <a href={`tel:${PHONE}`} className="btn-call" id="contact-call-btn">
                <span>📞</span> Call Karein
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Namaste%2C%20mujhe%20Bach%20Band%20book%20karna%20hai`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
                id="contact-whatsapp-btn"
              >
                <span>💬</span> WhatsApp Karein
              </a>
            </div>
            <div className="contact-info">
              <div className="contact-info-item">
                <span className="icon">📍</span>
                <strong>Location</strong>
                <span>Delhi – NCR, India</span>
              </div>
              <div className="contact-info-item">
                <span className="icon">📞</span>
                <strong>{PHONE}</strong>
                <span>Subah 9 baje – Raat 9 baje</span>
              </div>
              <div className="contact-info-item">
                <span className="icon">🎺</span>
                <strong>Events</strong>
                <span>Shaadi, Baraat, Corporate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
        {/* ABOUT */}
      <section className="about" id="about">
        <span className="section-label">✦ Hamare Baare Mein ✦</span>
        <h2 className="section-title">25+ Saal Ki Sangeet Seva</h2>
        <div className="section-line" />
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src="/gallery_stage.png" alt="Bach Band performing at a shaadi" />
            <div className="about-badge">
              <strong>25+</strong>
              <span>Saal Ka Anubhav</span>
            </div>
          </div>
          <div className="about-text">
            <h3>Apni Shaadi Ko Aur Bhi Khaas Banaiye</h3>
            <p>
              Bach Band ek premium wedding aur events band hai jo pichhle 25+ saalon se
              Delhi-NCR aur poore India mein apni shandar performances ke liye mashoor hai.
            </p>
            <p>
              Hamare experienced musicians shaadi, baraat, engagement, aur corporate events
              mein apni full energy aur dedication ke saath perform karte hain — har moment
              ko ek unforgettable yaad mein badal dete hain.
            </p>
            <p>
              Traditional dhol-nagada se lekar modern DJ combo tak, hum aapki har zaroorat
              ke liye taiyar hain.
            </p>
            <div className="about-stats">
              <div className="stat"><strong>500+</strong><span>Events</span></div>
              <div className="stat"><strong>25+</strong><span>Saal</span></div>
              <div className="stat"><strong>20+</strong><span>Musicians</span></div>
              <div className="stat"><strong>100%</strong><span>Satisfaction</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} <span>Bach Band</span> — Sabse Khaas, Sabse Behtar 🎵</p>
      </footer>
    </>
  );
}

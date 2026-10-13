import { useState } from 'react'
import './App.css'

const advisor = {
  name: 'Mariana López',
  role: 'Asesora de seguros',
  whatsapp: '5215550000000',
  email: 'hola@tudominio.com',
}

const insuranceOptions = [
  {
    number: '01',
    icon: '✳',
    title: 'Seguro de vida',
    description: 'Cuida el futuro de las personas que más quieres.',
  },
  {
    number: '02',
    icon: '⌂',
    title: 'Seguro de auto',
    description: 'Muévete con respaldo ante los imprevistos del camino.',
  },
  {
    number: '03',
    icon: '+',
    title: 'Gastos médicos',
    description: 'Encuentra opciones para cuidar tu salud y tu tranquilidad.',
  },
  {
    number: '04',
    icon: '▧',
    title: 'Hogar y más',
    description: 'Protección para tu casa, tu negocio y lo que has construido.',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

function ShieldIllustration() {
  return (
    <div className="hero-visual" aria-label="Ilustración de protección y tranquilidad" role="img">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-sun" />
      <svg className="visual-shield" viewBox="0 0 320 360" fill="none" aria-hidden="true">
        <path
          d="M160 20 278 66v91c0 83-49 143-118 183C91 300 42 240 42 157V66L160 20Z"
          fill="#E4F0E9"
          stroke="#173B35"
          strokeWidth="3"
        />
        <path
          d="M160 48 254 84v72c0 65-36 113-94 149-58-36-94-84-94-149V84l94-36Z"
          fill="#F7F5EE"
          stroke="#98B7A8"
          strokeWidth="2"
        />
        <path
          d="m112 175 32 32 66-70"
          stroke="#D77951"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="13"
        />
      </svg>
      <div className="visual-note">
        <span className="note-icon">✓</span>
        <span>
          <strong>Respaldo a tu medida</strong>
          <small>Asesoría cercana, de persona a persona</small>
        </span>
      </div>
      <span className="visual-spark spark-one">✳</span>
      <span className="visual-spark spark-two">✳</span>
    </div>
  )
}

function App() {
  const [coverage, setCoverage] = useState('')
  const [name, setName] = useState('')

  const whatsappUrl = `https://wa.me/${advisor.whatsapp}`

  function handleSubmit(event) {
    event.preventDefault()

    const message = `Hola, soy ${name}. Me interesa recibir información sobre ${coverage}.`
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={`${advisor.name}, inicio`}>
          <span className="brand-mark">c</span>
          <span className="brand-name">
            <strong>{advisor.name}</strong>
            <small>{advisor.role}</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#seguros">Seguros</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#sobre-mi">Sobre mí</a>
        </nav>
        <a className="header-cta" href={`${whatsappUrl}?text=${encodeURIComponent('Hola, quiero conocer mis opciones de seguro.')}`} target="_blank" rel="noreferrer">
          Hablemos <ArrowIcon />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow"><span /> ASESORÍA PERSONAL, SIN COMPLICACIONES</div>
            <h1>La tranquilidad de saber que <em>estás protegido.</em></h1>
            <p className="hero-description">
              Soy {advisor.name}. Te ayudo a encontrar un seguro que tenga sentido para ti, tu familia y tus planes.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contacto">
                Encuentra tu seguro <ArrowIcon />
              </a>
              <a className="text-link" href="#como-funciona">Conoce cómo te acompaño</a>
            </div>
            <div className="hero-trust">
              <span className="trust-icon">♡</span>
              <span>Una persona real para resolver tus dudas.<br /><strong>Estoy aquí para ayudarte.</strong></span>
            </div>
          </div>
          <ShieldIllustration />
          <div className="hero-caption"><span>01 / 03</span><span className="caption-line" /><span>Protección para lo que importa</span></div>
        </section>

        <section className="intro-strip" aria-label="Nuestra forma de trabajar">
          <div className="intro-inner">
            <p>No tienes que saberlo todo sobre seguros.<br /><strong>Para eso estoy aquí.</strong></p>
            <div className="intro-detail">
              <span className="detail-symbol">↗</span>
              <span>Te explico tus opciones<br />con claridad y sin presión.</span>
            </div>
            <div className="intro-detail">
              <span className="detail-symbol">♡</span>
              <span>Recomendaciones pensadas<br />para tu situación.</span>
            </div>
            <div className="intro-detail">
              <span className="detail-symbol">◎</span>
              <span>Acompañamiento antes<br />y después de contratar.</span>
            </div>
          </div>
        </section>

        <section className="insurance-section section-wrap" id="seguros">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> OPCIONES PARA CADA ETAPA</div>
              <h2>Protección que<br /><em>va contigo.</em></h2>
            </div>
            <p>Cuéntame qué quieres cuidar. Revisamos juntos las alternativas y encontramos la que mejor se adapte a ti.</p>
          </div>
          <div className="insurance-grid">
            {insuranceOptions.map((option) => (
              <a className="insurance-card" href="#contacto" key={option.number} onClick={() => setCoverage(option.title)}>
                <span className="card-number">{option.number}</span>
                <span className="card-icon" aria-hidden="true">{option.icon}</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <span className="card-arrow" aria-label={`Consultar sobre ${option.title}`}><ArrowIcon /></span>
              </a>
            ))}
          </div>
        </section>

        <section className="process-section" id="como-funciona">
          <div className="process-inner section-wrap">
            <div className="process-heading">
              <div className="eyebrow eyebrow-light"><span /> SIMPLE, COMO DEBE SER</div>
              <h2>Tu seguro, paso<br />a paso y <em>a tu ritmo.</em></h2>
              <p>Sin letras chiquitas en la conversación. Solo orientación clara para que decidas con confianza.</p>
              <a className="button button-light" href="#contacto">Empecemos a conversar <ArrowIcon /></a>
            </div>
            <div className="process-steps">
              <article className="step">
                <span>01</span>
                <div><h3>Me cuentas</h3><p>Platicamos sobre lo que quieres proteger y lo que necesitas.</p></div>
              </article>
              <article className="step">
                <span>02</span>
                <div><h3>Revisamos opciones</h3><p>Te presento alternativas y te explico cada detalle con calma.</p></div>
              </article>
              <article className="step">
                <span>03</span>
                <div><h3>Tú decides</h3><p>Eliges con toda la información. Yo te acompaño en el proceso.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="sobre-mi">
          <div className="about-stamp" aria-hidden="true"><span>CONTIGO<br />EN CADA<br />PASO</span><span>✳</span></div>
          <div className="about-copy">
            <div className="eyebrow"><span /> HOLA, SOY {advisor.name.toUpperCase()}</div>
            <h2>Los seguros son personales.<br /><em>La asesoría también.</em></h2>
            <p>Mi trabajo es escucharte, ayudarte a entender tus opciones y estar disponible cuando tengas preguntas. Porque sentirte protegido también empieza por sentirte acompañado.</p>
            <a className="text-link" href={`mailto:${advisor.email}`}>Conoce más de mi forma de trabajar <ArrowIcon /></a>
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-inner section-wrap">
            <div className="contact-copy">
              <div className="eyebrow eyebrow-light"><span /> EL PRIMER PASO ES UNA PLÁTICA</div>
              <h2>Hablemos de lo<br />que <em>te importa.</em></h2>
              <p>Déjame tus datos y te contacto por WhatsApp para orientarte, sin compromiso.</p>
              <div className="contact-direct">
                <span>¿Prefieres escribirme directamente?</span>
                <a href={`${whatsappUrl}?text=${encodeURIComponent(`Hola ${advisor.name}, me gustaría recibir asesoría sobre seguros.`)}`} target="_blank" rel="noreferrer">Abrir WhatsApp <ArrowIcon /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="contact-name">¿Cómo te llamas?</label>
              <input id="contact-name" name="name" autoComplete="name" placeholder="Tu nombre" value={name} onChange={(event) => setName(event.target.value)} required />
              <label htmlFor="contact-coverage">¿Qué te gustaría proteger?</label>
              <select id="contact-coverage" name="coverage" value={coverage} onChange={(event) => setCoverage(event.target.value)} required>
                <option value="" disabled>Selecciona una opción</option>
                {insuranceOptions.map((option) => <option key={option.number} value={option.title}>{option.title}</option>)}
                <option value="Otra opción">Todavía no lo sé</option>
              </select>
              <button className="button button-form" type="submit">Quiero recibir asesoría <ArrowIcon /></button>
              <small>Al continuar, se abrirá WhatsApp con tu mensaje listo para enviar.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">c</span>
          <span className="brand-name"><strong>{advisor.name}</strong><small>{advisor.role}</small></span>
        </a>
        <p>Asesoría cercana para proteger lo que importa.</p>
        <div className="footer-links">
          <a href="#seguros">Seguros</a>
          <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
          <span>© {new Date().getFullYear()} {advisor.name}</span>
        </div>
      </footer>
    </>
  )
}

export default App

import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header'

import Background from '../../assets/pattern1_com.jpg'
import Logo_cap from '../../assets/logo_cap.png'

const Privacidad = () => (
<div id="gracias" style={{ backgroundImage: 'url(' + Background + ')' }}>
<div className="indexContent">
    <div className="cap" style={{
      height: '100vh',
      width: '100%',
      backgroundImage: 'url(' + Background + ')',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundAttachment: 'fixed',
      boxShadow: 'inset 0px 11px 16px -10px #333, inset 0px -11px 16px -10px #333'
    }}>
      <div>
        <img src={Logo_cap} alt={"Logo de la Guinda"} style={{
          width: '400px',
          display: 'block',
          margin: '0 auto'
        }} />
        <span className="slogan" style={{
          textAlign: 'center',
          color: '#fff',
          fontWeight: 200,
          marginTop: '30px',
          fontSize: '1.4em',
          display: 'block',
          fontSize: '1.5em',
          textShadow: '0px 0px 15px black'
        }}>Gracias! En breve nos pondremos en contacto contigo.</span>

        <Link to="/" style={{ textAlign: 'center',
                              color: '#fff',
                              marginTop: '50px',
                              display: 'block',
                              padding: '20px',
                              fontSize: '1.2em'
                              }}>Volver al inicio</Link>
      </div>
      <div>

      </div>

    </div>
</div>
</div>

)

export default Privacidad
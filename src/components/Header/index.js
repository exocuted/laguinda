import React from 'react'
import Link from 'gatsby-link'

import Logo_cap from '../../../assets/logo_cap.png'

let Header = () => (
  <div
    style={{
      background: '#ad152e',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          La Guinda
        </Link>
      </h1>
    </div>
  </div>
)

Header = () => (
  <div className="header">
  <Link to="/">
  <img src={Logo_cap} alt={"Logo de la Guinda"} style={{
          width: '400px',
          display: 'block',
          margin: '0 auto'
        }} />
  </Link>
  </div>
)

export default Header

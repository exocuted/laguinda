import React from 'react'
import Link from 'gatsby-link'

let Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
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
  <div className="header"></div>
)

export default Header

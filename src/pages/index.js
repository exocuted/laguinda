import React from 'react'
import Link from 'gatsby-link'

import Background from '../../assets/pattern1_com.jpg'
import Logo_cap from '../../assets/logo_cap.png'

// PROCESS
import Seeds from '../../assets/test1.jpg'
import Sprouts from '../../assets/test2.jpg'
import Plant from '../../assets/test3.jpg'

import Jfb from '../../assets/port/jfb.png'
import LogoFruitiver from '../../assets/port/logofruitiver.jpg'
import Foto from '../../assets/port/fotolg.jpg'
import Social from '../../assets/port/sociallg.jpg'

import c1 from '../../assets/clients/c1.png'
import c2 from '../../assets/clients/c2.png'
import c3 from '../../assets/clients/c3.png'
import c4 from '../../assets/clients/c4.png'
import c5 from '../../assets/clients/c5.png'
import c6 from '../../assets/clients/c6.png'

import Xavi from '../../assets/people/c1.jpg'
import Eneko from '../../assets/people/c2.jpg'

import concrete from '../../assets/png/cpr.png'

import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

const IndexPage = () => (
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
    }}>Lo hacemos simple, pero significativo</span>
    </div>
    <div>
    
    </div>
    
  </div>
  <div className="intro" style={{
    padding: '100px 0px'
  }}>
    <div className="container">
    <div className="row justify-content-md-center">
    <div className="col-md-10">
    
    <h1 className="desc" style={{
      fontWeight: 600,
      textAlign: 'center',
      fontSize: '1.8em'

    }}>Somos un equipo de creativos empeñados en comunicar de forma efectiva, basándonos en una metodología ágil, digital y comprometida.</h1>
    <hr />
    </div>
    </div>

    <div className="row process">
    <div className="col-md-4">
      <div className="imgWrapper">
      <img src={Seeds} />
      </div>
      <h3>Ideas</h3>
      <p>Las ideas son el principio de todo gran proyecto; te ayudaremos a que lleguen con el mensaje adecuado.</p>
      </div>
      <div className="col-md-4">
      <div className="imgWrapper">
      <img src={Sprouts} />
      </div>
      <h3>Creación</h3>
      <p>Crear contenido es nuestra especialidad y nuestra pasión, y nos esforzaremos al máximo para que no pase desapercibido.</p>
      </div>
      <div className="col-md-4">
      <div className="imgWrapper">
      <img src={Plant} />
      </div>
      <h3>Difusión</h3>
      <p>Difundiremos el mensaje al público adecuado para que tu proyecto crezca, usando los formatos oportunos para alcanzar los objetivos que te propongas.</p>
      </div>
    </div>
    </div>
  </div>

  <div className="que-hacemos container-fluid">
  
    <div className="servicios">
      <div className="row serv-web">
      <div className="col-md-5 order-md-1 order-sm-1" style={{
        backgroundImage: 'url('+ Jfb +')',
        backgroundSize: 'cover',
        minHeight: '475px'
      }}>
        
      </div>
        <div className="col-md-7 tc order-md-2 order-sm-2">
          <div className="textWrapper">
          <h3>Desarrollo web</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <span className="typistWrapper">
          <TypistLoop interval={5000}>
            {[
              'Wordpress',
              'E-commerce',
              'Landing pages',
              'Desarrollo a medida'
            ].map(text => <Typist key={text} startDelay={2000}>{text}</Typist>)}
          </TypistLoop>
          </span>
          <ul>
            <li>Wordpress</li>
            <li>E-commerce</li>
            <li>Landing pages</li>
            <li>Desarrollo a medida</li>
          </ul>
          </div>
        </div>
      </div>


      <div className="row serv-foto">
      <div className="col-md-5 order-md-2 order-sm-1"  style={{
        backgroundImage: 'url('+ Foto +')',
        backgroundSize: 'cover',
        minHeight: '475px'
      }}>
        
      </div>
        <div className="col-md-7 tc order-md-1 order-sm-2">
          <div className="textWrapper">
          <h3>Fotografía</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <span className="typistWrapper">
          <TypistLoop interval={3000}>
            {[
              'Comercial',
              'Eventos',
              'Books corporativos',
              'Producto'
            ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
          </TypistLoop>
          <ul>
            <li>Comercial</li>
            <li>Eventos</li>
            <li>Books corporativos</li>
            <li>Producto</li>
          </ul>
          </span>
        </div>
        </div>
      </div>

      <div className="row serv-design">
      <div className="col-md-5 order-md-1 order-sm-1" style={{
        backgroundImage: 'url('+ LogoFruitiver +')',
        backgroundSize: 'cover',
        minHeight: '475px'
      }}>
        
      </div>
        <div className="col-md-7 tc order-md-2 order-sm-2">
          <div className="textWrapper">
          <h3>Diseño gráfico</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <ul>
            <li>Experiencia de usuario (UI/UX)</li>
            <li>Creación de contenidos</li>
            <li>Branding</li>
            <li>Comunicación visual online y offline</li>
          </ul>
          <span className="typistWrapper">
          <TypistLoop interval={5000}>
            {[
              'Experiencia de usuario (UI/UX)',
              'Creación de contenidos',
              'Branding',
              'Comunicación visual online y offline'
            ].map(text => <Typist key={text} startDelay={2000}>{text}</Typist>)}
          </TypistLoop>
          </span>
          </div>
        </div>
      </div>

        <div className="row serv-social">
        <div className="col-md-5 order-md-2 order-sm-1" style={{
          backgroundImage: 'url('+ Social +')',
          backgroundSize: 'cover',
          minHeight: '475px'
        }}>
          
        </div>
          <div className="col-md-7 tc order-md-1 order-sm-2">
            <div className="textWrapper">
            <h3>Social media</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <ul>
              <li>Creación y gestión de contenidos</li>
              <li>Analítica</li>
              <li>Comunicación y engagement</li>
              <li>Planificación de acciones</li>
            </ul>
            <span className="typistWrapper">
          <TypistLoop interval={5000}>
            {[
              'Creación y gestión de contenidos',
              'Analítica',
              'Comunicación y engagement',
              'Planificación de acciones'
            ].map(text => <Typist key={text} startDelay={2000}>{text}</Typist>)}
          </TypistLoop>
          </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  <div className="container-fluid quienes-somos" style={{
    backgroundImage: 'url('+ concrete +')',
    padding: '100px 0px'
  }}>
    <h2 style={{ fontSize: '2.1em' }}>Conócenos</h2>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="pwrap">
          <img src={Xavi} />
          </div>
          <h3>Xavier Berrocal</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="col-md-6">
          <div className="pwrap">
          <img src={Eneko} />
          </div>
          <h3>Eneko Sarasola</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid clientes-home">
  <h2 style={{textAlign: 'center', fontSize: '2.1em'}}>Conoce a algunos de nuestros clientes</h2>
            <div className="row">
              
              <div className="col-md-2">
              <img src={c1} />
              </div>
              <div className="col-md-2">
              <img src={c2} />
              </div>
              <div className="col-md-2">
              <img src={c3} />
              </div>
              <div className="col-md-2">
              <img src={c4} />
              </div>
              <div className="col-md-2">
              <img src={c5} />
              </div>
              <div className="col-md-2">
              <img src={c6} />
              </div>
            </div>
  </div>

  <div className="container contact-home">
    <h2 className="text-center">¿Te gusta como trabajamos? Contáctanos!</h2>
  </div>

  </div>
)

export default IndexPage

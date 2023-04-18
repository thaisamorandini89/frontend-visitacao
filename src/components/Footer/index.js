import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBRipple
} from 'mdb-react-ui-kit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f2f2f2' }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://www.franca.sp.gov.br/images/FOTOS_DA_CIDADE/catedral-aerea.png' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://www.franca.sp.gov.br/images/FOTOS_DA_CIDADE/fontenossasenhora.png' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://www.franca.sp.gov.br/images/Observatrio-3.png' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://www.franca.sp.gov.br/images/FOTOS_DA_CIDADE/parquefernandocosta.png' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://www.franca.sp.gov.br/images/FOTOS_DA_CIDADE/pedrocao.png' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://www.franca.sp.gov.br/images/FOTOS_DA_CIDADE/relogio-do-sol.png' className='w-100' />
                <a href='#!'>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#1d293f', display: 'flex', justifyContent: 'center' }}>
        <div style={{marginRight: '10px'}}>
          <label style={{marginRight: '10px'}}>© 2023 Copyright:</label> 
          <a className='text-white' href='https://www.franca.sp.gov.br/'>
            Prefeitura Municipal de Franca
          </a>
        </div>
        <div>
          <a href='https://www.facebook.com/prefeituradefranca' style={{marginRight: '10px'}}>
              <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://www.instagram.com/prefeituradefranca' style={{marginRight: '10px'}}>
              <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}
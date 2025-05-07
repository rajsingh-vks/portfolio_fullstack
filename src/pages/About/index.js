import React, { } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import profile from '../../assets/profile_.jpg';
import { BsGlobe, BsLinkedin, BsGithub } from "react-icons/bs";

function About() {

  return (
    <div className='about my-5'>
      <Container>
        <div className='about_content'>
          <Row>
            <Col sm={2}>
              <div className='text-center'>
                <Image src={profile} alt="profile" className='profile_img' />
                <div className='country my-3'>
                  <BsGlobe style={{ marginRight: '5px' }} /> India
                </div>
                <div className='language d-flex'>
                  <div className='language_wrapper'>English</div>
                  <div className='language_wrapper'>Hindi</div>
                </div>
              </div>
            </Col>
            <Col sm={{ span: 9, offset: 1 }}>
              <h1>Raj Singh</h1>
              <h2><span>Full Stack Developer & Designer</span></h2>
              <div className='language d-flex mt-3 mb-4'>
                <div className='language_wrapper'><BsGithub size={16} style={{ verticalAlign: 'text-top', marginRight: 4 }} /> GitHub</div>
                <div className='language_wrapper'><BsLinkedin size={16} style={{ verticalAlign: 'text-top', marginRight: 4 }} /> LinkedIn</div>
              </div>
              <p>Develop & Design engineer with a passion for transforming complex challenges into simple, elegant solutions.
                User interfaces, interactive experiences, and the convergence of design and develop.</p>
            </Col>
          </Row>
          <div className='mt-4'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <h2 style={{ borderBottom: ' #979797 solid 1px' }}><b>Work Experience</b></h2>
              </Col>
            </Row>
          </div>
          <div className='my-3'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <div className='d-flex'>
                  <div>
                    <h5>Maveric Systems</h5>
                    <h6 style={{ color: '#4DE9DC' }}>Senior Software Engineer</h6>
                  </div>
                  <div className='ms-auto'>
                    <p>1st August 2022 – 1st July 2024</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='my-3'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <div className='d-flex'>
                  <div>
                    <h5>Innoraft Solutions Pvt. Ltd. </h5>
                    <h6 style={{ color: '#4DE9DC' }}>Frontend Developer</h6>
                  </div>
                  <div className='ms-auto'>
                    <p>23rd August 2021 – 29th July 2022</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='my-3'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <div className='d-flex'>
                  <div>
                    <h5>InfoEdge India</h5>
                    <h6 style={{ color: '#4DE9DC' }}>Senior Designer</h6>
                  </div>
                  <div className='ms-auto'>
                    <p>1st August 2019 – 20th August 2021</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='my-3'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <div className='d-flex'>
                  <div>
                    <h5>Mitiz Technology</h5>
                    <h6 style={{ color: '#4DE9DC' }}>UI/UX Designer</h6>
                  </div>
                  <div className='ms-auto'>
                    <p>1st June 2017 – 31th July 2019</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='mt-4'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <h2 style={{ borderBottom: ' #979797 solid 1px' }}><b>Studies</b></h2>
              </Col>
            </Row>
          </div>
          <div className='my-3'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <div className='d-flex'>
                  <div>
                    <h4>Executive Post Graduate Certification</h4>
                    <h6 style={{ color: '#4DE9DC' }}>Full Stack Development - Intellipaat by IIT Roorkee</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='my-3'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <div className='d-flex'>
                  <div>
                    <h4>Executive Post Graduate Certification</h4>
                    <h6 style={{ color: '#4DE9DC' }}>Full Stack Development - Intellipaat by IIT Roorkee</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className='my-3'>
            <Row>
              <Col sm={{ span: 9, offset: 3 }}>
                <div className='d-flex'>
                  <div>
                    <h4>Web Designer Trainee</h4>
                    <h6 style={{ color: '#4DE9DC' }}>IPWT</h6>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
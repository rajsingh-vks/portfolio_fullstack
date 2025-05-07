import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";
import cover from '../../assets/cover-01.jpg';
import avatar from '../../assets/avatar.jpg';

function Work() {

    return (
        <>
            <div className='work'>
                <Container>
                    <div className='content'>
                        <div className='neutral-background-medium'>
                            <Image src={cover} alt="avatar" width={'100%'} />
                        </div>
                        <div className='content_wrapper my-5'>
                            <Row>
                                <Col sm={6}>
                                    <h1>Building an adaptive design system for Archlight Portfolio</h1>
                                </Col>
                                <Col sm={6}>
                                    <Image src={avatar} alt="avatar" className='avatar_img mb-4' />
                                    <p>In this Portfolio, I developed a flexible and scalable design system of portfolio by using Next.js for front-end development and Figma for design collaboration.</p>
                                    <Link to="/work" className='content_button'>
                                        Read Case Study <BsChevronRight />
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                        <div className='neutral-background-medium'>
                            <video autoPlay muted loop className='video_player'>
                                <source src="/portfolio_.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <span className='video_overlay'></span>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Work
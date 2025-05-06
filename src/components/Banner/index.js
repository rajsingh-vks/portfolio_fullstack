import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";
import profile from '../../assets/profile_pic.jpg';
import avatar from '../../assets/avatar.jpg';

function Banner() {
    return (
        <>
            <div className='banner'>
                <Container>
                    <div className='content'>
                        <Row>
                            <Col sm={7}>
                                <h1>Design and Development Engineer | Builder</h1>
                                <p>I'm Raj, a design and develop engineer, where Innovative and results-driven engineer with experience in design, development, and construction. Skilled in transforming concepts into functional structures and products. Adept at managing all phases of engineering and building projects with a focus on efficiency and quality.</p>
                                <Link to="/about" className='content_button'>
                                    <Image src={avatar} alt="avatar" />
                                    About myself <BsChevronRight />
                                </Link>
                            </Col>
                            <Col sm={5}>
                               <div className='banner_profile'>
                                <Image src={profile} alt="profile" className='profile_img' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Banner
import React from 'react';
import { Container } from 'react-bootstrap';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <div className='d-flex my-4'>
                        <span>© 2025 /Raj Singh</span>
                        <ul className='ms-auto'>
                            <li><Link to="https://www.linkedin.com/in/raj-singh-11731010b/" target='_blank'><BsGithub /></Link></li>
                            <li><Link to="https://github.com/rajsingh-vks" target='_blank'><BsLinkedin /></Link></li>
                        </ul>
                    </div>
                </Container>
            </footer>
        </>
    );
}

export default Footer;
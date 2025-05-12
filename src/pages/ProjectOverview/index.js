import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import cover from '../../assets/cover-01.jpg';

function ProjectOverview() {
    return (
        <>
            <div className='work'>
                <Container>
                    <div className='content'>
                        <Row>
                            <Col sm={{ span: 8, offset: 2 }} className='my-4'>
                                <h1><b>Building an adaptive design system for Archlight Portfolio</b></h1>
                            </Col>
                        </Row>
                        <div className='neutral-background-medium'>
                            <Image src={cover} alt="avatar" width={'100%'} />
                        </div>
                        <Row>
                            <Col sm={{ span: 8, offset: 2 }} className='my-4'>
                                <h3 className='my-4'><b>Overview</b></h3>
                                <p>In this Portfolio, I developed a flexible and scalable design system of portfolio by using Next.js for front-end development and Figma for design collaboration. The goal was to create a reusable component library that not only adheres to consistent design principles but is also easily extendable for future needs. The design system was aimed at improving the overall developer experience while maintaining visual consistency across multiple projects library.</p>
                                <h3 className='my-4'><b>Key Features</b></h3>
                                <ul>
                                    <li><strong>Reusable Component Library</strong>: Built a collection of modular, customizable UI components using React (Next.js) that follow atomic design principles.</li>
                                    <li><strong>Design-System Driven Development</strong>: Integrated Figma design tokens directly into development workflow to ensure pixel-perfect implementation and consistency.</li>
                                    <li><strong>Theming &amp; Customization</strong>: Enabled light/dark mode and theme variations through a token-based theming architecture.</li>
                                    <li><strong>Scalable Architecture</strong>: Structured codebase for scalability and maintainability, allowing for easy integration into multiple future projects.</li>
                                    <li><strong>Performance Optimization</strong>: Utilized Next.js features such as dynamic imports, image optimization, and server-side rendering (SSR) to ensure high performance.</li>
                                    <li><strong>Accessibility Compliance</strong>: Designed with WCAG standards in mind to ensure usability for all users, including screen reader support and keyboard navigation.</li>
                                    <li><strong>Design-Dev Sync with Figma</strong>: Leveraged Figma libraries and variants to mirror components exactly as coded, reducing design-developer handoff friction.</li>
                                    <li><strong>Storybook Integration</strong>: Documented and showcased components in an interactive format using Storybook for ease of use and collaboration.</li>
                                </ul>
                                <h3 className='my-4'><b>Technologies Used</b></h3>
                                <ul>
                                    <li><strong>Next.js</strong>: For fast, server-rendered React applications.</li>
                                    <li><strong>Figma</strong>: For creating and managing design assets and prototypes.</li>
                                    <li><strong>Styled-Components </strong>: For styling React components with a modular, themable approach.</li>
                                    <li><strong>Storybook</strong>: For building an interactive, documented component library.</li>
                                </ul>
                                <h3 className='my-4'><b>Challenges and Learnings</b></h3>
                                <p>One key challenge was balancing the need for flexibility with the desire to maintain design consistency. The solution involved creating well-defined design tokens and establishing clear guidelines for when and how components could be customized. Additionally, setting up effective collaboration workflows between designers and developers using Figma and Git was a learning experience that greatly improved the process.</p>
                                <h3 className='my-4'><b>Outcome</b></h3>
                                <p>The design system is now actively used across multiple projects library, leading to faster development cycles, fewer design inconsistencies, and improved collaboration between design and development teams. It has become a foundation for scaling our products efficiently while ensuring a cohesive user experience. </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ProjectOverview;
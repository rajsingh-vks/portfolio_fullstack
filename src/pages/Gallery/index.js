import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//import data from "./project";
import data from "./data";

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories + 'All'
    const categories = ['All', ...new Set(data.map((item) => item.category))];

    // Filter data based on selected category
    const filteredData =
        selectedCategory === 'All'
            ? data
            : data.filter((item) => item.category === selectedCategory);

    return (
        <div className='gallery my-5'>
            <div className='container-fluid'>
                {/* Filter Buttons */}
                <Row>
                    <Col sm={12}>
                        <div className='category d-flex p-1 mb-5'>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className='category_buttton py-1 px-3'
                                    style={{
                                        backgroundColor: selectedCategory === cat ? '#333' : 'transparent',
                                        color: selectedCategory === cat ? '#fff' : '#fff',
                                        borderColor: selectedCategory === cat ? 'rgba(149, 149, 149, 0.3019607843)' : 'rgba(0, 0, 0, 0)'
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </Col>
                    <Col sm={12}>
                        <Row>
                            {filteredData.map((item) => (
                                <Col sm={3}>
                                    <div className="project text-center mb-4" key={item.id}>
                                        <img
                                            className="project_img p-3"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                        <h6 className="py-3 mb-0">{item.title}</h6>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>

                {/* Filtered Results */}

                {/* <Row>
                    {data.projects.map((project) => (
                        <Col sm={3}>
                            <div
                                key={project._id}
                                className="project text-center mb-4"
                            >
                                <a href={`/project/${project._id}`} className="m-auto">
                                    <img
                                        className="project_img p-3"
                                        src={project.image}
                                        alt={project.name}
                                    />
                                    <h6 className="py-3 mb-0">{project.name}</h6>
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row> */}
            </div>
        </div>
    );
}

export default Gallery;
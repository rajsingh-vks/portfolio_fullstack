import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
//import data from "./project";
import data from "./data";

function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredData, setFilteredData] = useState(data);
    const [loading, setLoading] = useState(false);

    // Get unique categories + 'All'
    const categories = ['All', ...new Set(data.map((item) => item.category))];

    // Filter data based on selected category
    // const filteredData =
    //     selectedCategory === 'All'
    //         ? data
    //         : data.filter((item) => item.category === selectedCategory);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            const filtered =
                selectedCategory === 'All'
                    ? data
                    : data.filter((item) => item.category === selectedCategory);
            setFilteredData(filtered);
            setLoading(false);
        }, 1000); // simulate loading delay

        return () => clearTimeout(timer);
    }, [selectedCategory]);

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
                        {
                            loading ? (
                                <div className="text-center my-5 w-100">
                                    <Spinner animation="border" variant="dark" />
                                </div>
                            ) : (
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
                            )
                        }
                    </Col>
                </Row>
                {/* Filtered Results */}
            </div>
        </div>
    );
}

export default Gallery;
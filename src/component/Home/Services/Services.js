import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Using mock data since original API is down
        const mockServices = [
            {
                _id: '1',
                title: 'Basic Driving Course',
                description: 'Learn the fundamentals of driving in urban and rural environments.',
                image: 'https://via.placeholder.com/150'
            },
            {
                _id: '2',
                title: 'Advanced Driving Course',
                description: 'Sharpen your skills with advanced techniques and defensive driving.',
                image: 'https://via.placeholder.com/150'
            },
            {
                _id: '3',
                title: 'Refresher Course',
                description: 'Perfect for those returning to driving after a long break.',
                image: 'https://via.placeholder.com/150'
            }
        ];
        setServices(mockServices);
    }, []);

    return (
        <div className="container services">
            <div className="service-desc text-center">
                <h1 className="services-headline">
                    <span className="brand-color">Our Driving</span> Services
                </h1>
                <div className="py-3">
                    <p>
                        The school offers the following services for teenage first-time drivers, new adult learners, and existing drivers with expired or lapsed licenses.
                    </p>
                </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center service-items">
                {services.map(service => (
                    <ServiceDetail service={service} key={service._id} />
                ))}
            </div>
        </div>
    );
};

export default Services;

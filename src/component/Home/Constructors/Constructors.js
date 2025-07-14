import React, { useEffect, useState } from 'react';
import Constructor from '../Constructor/Constructor';

const Constructors = () => {
    const [constructors, setConstructors] = useState([]);

    useEffect(() => {
        // Mock constructor data since original API is down
        const mockConstructors = [
            {
                _id: '1',
                name: 'Ravi Shrestha',
                title: 'Senior Driving Instructor',
                bio: '10+ years of experience in defensive driving.',
                image: 'https://via.placeholder.com/150'
            },
            {
                _id: '2',
                name: 'Mina Thapa',
                title: 'Instructor - Manual & Automatic',
                bio: 'Specialist in beginner training and road safety.',
                image: 'https://via.placeholder.com/150'
            },
            {
                _id: '3',
                name: 'Bikash Adhikari',
                title: 'Traffic Rules Expert',
                bio: 'Certified traffic educator with a friendly teaching style.',
                image: 'https://via.placeholder.com/150'
            }
        ];
        setConstructors(mockConstructors);
    }, []);

    return (
        <div className="container services">
            <div className="service-desc text-center">
                <h1 className="services-headline">Our <span className="brand-color">Expert Trainers</span></h1>
                <div className="py-3">
                    <p>
                        The school offers experienced instructors for first-time teenage drivers, new adult learners, and returning drivers with expired licenses.
                    </p>
                </div>
            </div>
            <hr />

            <section className="doctors">
                <div className="container">
                    <div className="row">
                        {constructors.map(constructor => (
                            <Constructor key={constructor._id} constructor={constructor} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Constructors;

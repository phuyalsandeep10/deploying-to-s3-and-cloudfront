import React, { useEffect, useState } from 'react';
import './Review.css';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Review = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        // Fallback mock data since Heroku API is dead
        const mockReview = [
            {
                _id: '1',
                name: 'John Doe',
                profession: 'Businessman',
                comment: 'This driving school is excellent. The instructors are professional and friendly.',
                image: 'https://via.placeholder.com/50'
            },
            {
                _id: '2',
                name: 'Jane Smith',
                profession: 'Student',
                comment: 'I gained confidence behind the wheel. Highly recommended!',
                image: 'https://via.placeholder.com/50'
            },
            {
                _id: '3',
                name: 'Raj Kumar',
                profession: 'Software Engineer',
                comment: 'Very informative classes and practical sessions. I passed my test on the first try!',
                image: 'https://via.placeholder.com/50'
            }
        ];
        setReview(mockReview);
    }, []);

    return (
        <div className="container services">
            <div className="service-desc text-center">
                <h1 className="services-headline">
                    What <span className="brand-color">Clients Say</span> <br /> About Us
                </h1>
                <div className="py-3">
                    <p>
                        The school offers a variety of services for first-time teenage drivers, new adult learners, and existing drivers with expired or lapsed licenses.
                    </p>
                </div>
            </div>
            <hr />

            <div className="d-flex flex-wrap justify-content-center service-items">
                {review.map((rev) => (
                    <ReviewDetail rev={rev} key={rev._id} />
                ))}
            </div>
        </div>
    );
};

export default Review;

// Import necessary modules and components
import React, {useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/pages/_plants.scss';
import Footer from './Footer';
import Navbar from './Navbar';
// Sample Data
const popularPlants = [
    { id: 1, image: './images/1.jpg', title: 'Fiddle Leaf Fig' },
    { id: 2, image: './images/2.jpg', title: 'Snake Plant' },
    { id: 3, image: './images/3.jpg', title: 'Peace Lily' },
    { id: 4, image: './images/4.jpg', title: 'Monstera Deliciosa' },
];

// Carousel Item Component
const CarouselItem = ({ image, title, isActive }) => (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
        <div className="product-card card mx-auto">
            <img
                src={image}
                alt={title}
                className="card-img-top"
                loading="lazy"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    </div>
);

// Weekly Others Component
const WeeklyOthers = () => (
    <div className="weekly_others">
    <h2>Other Popular Plants</h2>
    <div id="horizontalCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            {popularPlants.map((plant, index) => (
                <CarouselItem
                    key={plant.id}
                    image={plant.image}
                    title={plant.title}
                    isActive={index === 0}
                />
            ))}
        </div>
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#horizontalCarousel"
            data-bs-slide="prev"
            aria-label="Previous popular plants"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#horizontalCarousel"
            data-bs-slide="next"
            aria-label="Next popular plants"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>
</div>
);

// Catalogue Component
const Catalogue = () => {
    const [data,setData] = useState({
        counts : "",
        main : {
            features : [],
            title : "",
        },
        plantlists : [
            {
                plantimg : "",
                rating : "",
                title : "",
            }
            ,
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
            {
                plantimg : "",
                rating : "",
                title : "",
            },
        ],
    })

    useEffect(() => {
        fetch('http://localhost:8080/Plants')
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          });
      },);

    //<finish>
    const navigate = useNavigate();
    const plantCatalogue = [
        { id: 1, image: data.plantlists[0].plantimg, title: data.plantlists[0].title, rating: data.plantlists[0].rating},
        // { id: 2, image: data.plantlists[1].plantimg, title: data.plantlists[1].title, rating: Number(data.plantlists[2].rating) },
        // { id: 3, image: data.plantlists[2].plantimg, title: data.plantlists[2].title, rating: Number(data.plantlists[3].rating) },
        // { id: 4, image: data.plantlists[3].plantimg, title: data.plantlists[3].title, rating: Number(data.plantlists[4].rating) },
        // { id: 5, image: data.plantlists[4].plantimg, title: data.plantlists[4].title, rating: Number(data.plantlists[5].rating) },
        // { id: 6, image: data.plantlists[5].plantimg, title: data.plantlists[5].title, rating: Number(data.plantlists[6].rating) },
        // { id: 7, image: data.plantlists[6].plantimg, title: data.plantlists[6].title, rating: Number(data.plantlists[7].rating) },
        // { id: 8, image: data.plantlists[7].plantimg, title: data.plantlists[7].title, rating: Number(data.plantlists[8].rating) },
        // { id: 9, image: data.plantlists[8].plantimg, title: data.plantlists[8].title, rating: Number(data.plantlists[9].rating)},
        // { id: 10, image: data.plantlists[9].plantimg, title: data.plantlists[9].title, rating: Number(data.plantlists[10].rating) },
        // { id: 11, image: data.plantlists[10].plantimg, title: data.plantlists[10].title, rating: Number(data.plantlists[11].rating) },
        // { id: 12, image: data.plantlists[11].plantimg, title: data.plantlists[11].title, rating: Number(data.plantlists[12].rating) },
        // { id: 13, image: data.plantlists[12].plantimg, title: data.plantlists[12].title, rating: Number(data.plantlists[13].rating) },
        // { id: 14, image: data.plantlists[13].plantimg, title: data.plantlists[13].title, rating: Number(data.plantlists[14].rating) },
        // { id: 15, image: data.plantlists[14].plantimg, title: data.plantlists[14].title, rating: Number(data.plantlists[15].rating) },
    ];

    const handleSeeMoreClick = (plantId) => {
        navigate(`/post/${plantId}`); // Navigate to Post.js with plantId as a parameter
    };

    return (
        <section className="catalogue">
            <h2>Catalogue</h2>
            <div className="row">
                {plantCatalogue.map((plant) => (
                    // <div class="row gx-0 gy-2">
                    <div key={plant.id} className="col-md-3 d-flex justify-content-center">
                        <div className="product-card card pt-3 pb-3" style={{ height: '90%' }}>
                            <img
                                src={plant.image}
                                alt={plant.title}
                                className="card-img-top"
                                loading="lazy"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{plant.title}</h5>
                                <div className="star-rating">
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={`star ${index < plant.rating ? 'filled' : ''}`}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                </div>
                                <button
                                    className="btn btn-outline-primary"
                                    onClick={() => handleSeeMoreClick(plant.id)}
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    </div>
                    // </div>
                ))}
            </div>
        </section>  
    );
};

// <edit>
// Plants Component
const Plants = () => {
    const [data, setData] = useState({
        counts: "",
        main: {
            plantimg : "",
            title : "",
            features: {
                climate : "",
                size : "",
                season : "",
                f1 : "",
                f2 : "",
            },
            description : "",
        },
    });

    useEffect(() => {
        fetch('http://localhost:8080/Plants')
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          });
      },);

    return (
        <div className="plants-page">
            {/* Header Section */}
            <Navbar />


            {/* Main Section */}
            <main className="product-page">
                <h1 className="title-text">
                    Find Your <br />
                    Perfect Plant
                    <img src="/images/plant_icon.png" alt="Plant Icon" className="plant-icon" />
                </h1>
                <section className="Weekly_frame">
                    <h2>Plant of the Week</h2>
                    <hr className="custom-hr" />
                    <div className="weekly_plant">
                        <div className="image_frame">
                            <img src={data.main.image} alt="Echinocereus Cactus" className="top_plant" />
                            <img src="/images/crown.png" alt="Crown" className="crown_image" />
                        </div>
                        <div className="info_frame">
                            <h2>{data.main.title}</h2>
                            <div className="tags">
                                <span className="badge bg-success">Indoor</span>
                                <span className="badge bg-success">Cactus</span>
                            </div>
                            <hr className="custom-hr" />
                            <h4>Features</h4>
                            <ul>
                                <li>Size: {data.main.features.size}</li>
                                <li>Season: {data.main.features.season}</li>
                                <li>Climate : {data.main.features.climate}</li>
                                <li>{data.main.f1}</li>
                                <li>{data.main.features.f2}</li>
                            </ul>
                            <h4>{data.main.description}</h4>
                            <p>The Echinocereus Cactus is known for its beauty and resilience. Perfect for indoor and outdoor settings.</p>
                        </div>
                        <WeeklyOthers />
                    </div>
                    
                </section>
                
                <Catalogue />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Plants;

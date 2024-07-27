'use client'
import React from 'react';
import { Container, Typography, Card, CardContent, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const itemData = [
    {
        header: 'Our Special Offers',
        description: 'Check out our amazing special offers!',
        img1: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        img2: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
        title1: 'Special Offer 1',
        title2: 'Special Offer 2',
        author1: 'Author 1',
        author2: 'Author 2',
    },
    {
        header: 'Popular Dishes',
        description: 'Discover our most popular dishes.',
        img1: 'https://images.unsplash.com/photo-1546069901-eacef0df6022',
        img2: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
        title1: 'Dish 1',
        title2: 'Dish 2',
        author1: 'Author 1',
        author2: 'Author 2',
    },
    // Add more items as needed
];



export default function Offers() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container id = "offers" className='p-5 w-full' maxWidth={false}>
            <div className="custom-slider-container">
                <Slider {...settings}>
                    {itemData.map((item, index) => (
                        <div key={index} className="slider-item">
                            <Typography variant="h2" align="center" gutterBottom>
                                {item.header}
                            </Typography>
                            <Typography variant="body1" align="center" paragraph>
                                {item.description}
                            </Typography>
                            <div className={isSmallScreen ? 'flex flex-col items-center' : 'flex justify-center'}>
                                <Card sx={{ maxWidth: 300, m: 2 }} >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '100%', height: 200 }}
                                        image={item.img1}
                                        alt={item.header + ' - Dish 1'}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Dish 1
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Description of Dish 1
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 300, m: 2 }} >
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '100%', height: 200 }}
                                        image={item.img2}
                                        alt={item.header + ' - Dish 2'}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Dish 2
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Description of Dish 2
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <style jsx global>{`
                .custom-slider-container {
                    width: 100%;
                    overflow: hidden;
                    padding-bottom: 40px; /* Add space for dots */
                }
                .slick-slider {
                    width: 100%;
                }
                .slick-list {
                    margin: 0 -10px;
                }
                .slick-slide > div {
                    padding: 0 10px;
                }
                .slider-item {
                    outline: none;
                }
                /* Ensure dots are visible */
                .slick-dots {
                    bottom: -30px;
                    z-index: 1;
                }
                .slick-dots li button:before {
                    font-size: 12px;
                    color: #000;
                    opacity: 0.25;
                }
                .slick-dots li.slick-active button:before {
                    opacity: 0.75;
                }
            `}</style>
        </Container>
    );
}
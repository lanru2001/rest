import { React, useContext, useEffect} from 'react';
import { AuthContext } from '../../context';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import banner from '../../imgs/banner.jpg';
import { device } from '../../constants/devices';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import Aos from 'aos';
import "aos/dist/aos.css";

import '../../App.css';

import img1 from '../../imgs/menu_1.png';
import img2 from '../../imgs/menu_2.png';
import img3 from '../../imgs/menu_3.png';
import img4 from '../../imgs/menu_4.png';

import reviewer_1 from '../../imgs/reviewer_1.png';
import reviewer_2 from '../../imgs/reviewer_2.png';
import reviewer_3 from '../../imgs/reviewer_3.png';
import reviewer_4 from '../../imgs/reviewer_4.png';
import reviewer_5 from '../../imgs/reviewer_5.png';
import reviewer_6 from '../../imgs/reviewer_6.png';

SwiperCore.use([ Navigation, Pagination]);

const Root = styled.div`
    width: 100%;
    background: #fefff8;
`;

const SlideUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(250px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Banner = styled.section`
    width: 100%;
    height: 800px;
    background: url(${banner}) no-repeat center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
        position: absolute;
        z-index: 1;
        font-size: 100px;
        color: white;
        margin-left: 16px;
        font-family: 'Permanent Marker', cursive;
        animation: ${SlideUp} 2.1s ease;
    };

    &::after {
        content: '';
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    };

    @media ${device.mobileXS} {
        h1 {
            font-size: 80px;
        }
    };

    @media ${device.mobileL} {
        h1 {
            font-size: 90px;
        }
    };
    @media ${device.tablet} {
        h1 {
            font-size: 100px;
            text-align: center;
        }
    };
`;

const MainBody = styled.main`
    display: flex;
    flex-direction: column;
`;

const Intro = styled.section`
    @media ${device.mobileXS} {
        display: flex;
        flex-direction: column;
        align-items: center;
    };
    @media ${device.laptop} {
        height: 600px;
    }
`;

const Title = styled.h2`
    margin-top: 80px;
    margin-bottom: 80px;
    border-left: 12px solid #a3dea2;
    border-radius: 8px;
    padding-left: 16px;
    font-size: 24px;
    font-family: 'Permanent Marker', cursive;
`;

const Description = styled.p`
    @media ${device.mobileXS} {
        width: 80%;
        padding: 10px 10px;
        line-height: 2;
    };
`;

const Action = styled(Link)`
    @media ${device.mobileXS} {
        width: 85%;
        height: 100px;
        padding: 26px;
        margin-top: 500px;
        background: #fece35;
        border-radius: 8px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #fefff8;
        line-height: 1;
        transition: transform 0.5s;
        z-index: 1;
        animation: ${SlideUp} 2.5s ease;
    };

    @media ${device.mobileS} {
        padding: 26px;
    };

    @media ${device.mobileM} {
        line-height: 1.5;
    };

    @media ${device.tablet} {
        width: 60%;
        line-height: 2;
    };
    @media ${device.laptopL} {
        width: 30%;
        margin-top: 400px;
    };

    &:hover {
        color: #fefff8;
        text-decoration: none;
        transform: scale(1.1);
    };
`;

const RecommendMenu = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${device.mobileXS} {
        img {
            width: 100%;
            height: 100%;
        };
    };

    @media ${device.tablet} {
        img {
            width: 50%;
            height: 50%;
        };
    };

    @media ${device.laptopL} {
        img {
            width: 25%;
            height: 25%;
        };
    };
`;

const DishImage = styled.img``;

const Reviews = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Reviewer = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 8px;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    position: relative;

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;

const ReviewerImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

const ReviwerInfo = styled.h6`
    &::after {
        content: '${(props) => props.$date}';
        padding-left: 20px;
        color: green;
    };
`;

const ReviewerContent = styled.p`
    padding: 20px;
    position: absolute;
    top: 140px;
`;

const Location = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactInfo = styled.div`
  width: 80%;
  margin: 40px 0;
  padding: 20px;
  background: rgba(254, 206, 53, 0.2);
  border-radius: 8px;
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  
  @media ${device.mobileXS} {
    width: 90%;
  }

  h3 {
    color: #a3dea2;
    margin-bottom: 20px;
  }

  p {
    margin: 10px 0;
    line-height: 1.6;
  }
`;

export default function HomePage() {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <Root>
            <Banner>
                <h1>Modern American restaurant</h1>
                <Action to={ user ? "/reserve" : "/login"}>Reserve my table today</Action>
            </Banner>
            <MainBody>
                <Intro>
                    <Title data-aos="fade-up">About Us?</Title>
                    <Description data-aos="fade-up">Welcome to Taj Restaurant. We are an American restaurant, and we offer exceptional service and a very warm, inviting atmosphere. We are an established restaurant with the vision of creating a fine dining experience that will enlighten the diversity of American cuisine, Taj Restaurant offers a menu filled with a variety of favorites and original dishes crafted from the finest ingredients. Our team provides guests with great meals, whether you are enjoying a casual lunch or celebrating a special occasion. At Taj Restaurant, we believe in the power of good food to bring people together, and we aim to make every visit a great experience.</Description>
                </Intro>
                <RecommendMenu>
                    <Title data-aos="fade-up">Chef's special</Title>
                    <ImageContainer data-aos="fade-up">
                        <DishImage src={img1} alt=""/>
                        <DishImage src={img2} alt=""/>
                        <DishImage src={img3} alt=""/>
                        <DishImage src={img4} alt=""/>
                    </ImageContainer>
                </RecommendMenu>

                <Reviews>
                    <Title data-aos="fade-up">What do people think of us</Title>
                    <Swiper
                    data-aos="fade-up" 
                    tag="section" 
                    wrapperTag="ul" 
                    navigation={{ clickable: true }} 
                    pagination={{ clickable: true }} 
                    spaceBetween={0} 
                    breakpoints={{
                        280: {width: 280, slidesPerView: 1},
                        768: {width: 768, slidesPerView: 2},
                        1024: {width: 1024, slidesPerView: 3},
                        1440: {width: 1440, slidesPerView: 3} 
                    }}>
                        <SwiperSlide key={1} tag="li">
                            <Reviewer>
                                <ReviewerImg src={reviewer_1} />
                                <ReviwerInfo $date="04/20/2025">
                                    Smith Tom
                                </ReviwerInfo>
                                <ReviewerContent>I found Taj Restaurant while walking in the area, and I'm so glad I found it. The food was very delicious, with a good number of portions and great flavors. The staff was friendly and attentive, they made sure we had everything we needed. I'll be coming back!
                                </ReviewerContent>
                            </Reviewer>
                        </SwiperSlide>

                        <SwiperSlide key={2} tag="li">
                            <Reviewer>
                                <ReviewerImg src={reviewer_2} />
                                <ReviwerInfo $date="04/24/2025">
                                    Robinson Sheffield
                                </ReviwerInfo>
                                <ReviewerContent>We chose Taj Restaurant for our family reunion, and it happened to be the perfect choice. The menu had everything you could think of, from kids to grandparents, and the atmosphere was cozy and welcoming. Everyone left happy and very full, and we're already planning when to visit again.
                                </ReviewerContent>
                            </Reviewer>
                        </SwiperSlide>

                        <SwiperSlide key={3} tag="li">
                            <Reviewer>
                                <ReviewerImg src={reviewer_3} />
                                <ReviwerInfo $date="05/01/2025">
                                    Fred knight
                                </ReviwerInfo>
                                <ReviewerContent>Dining at the Taj Restaurant was a great experience. The service was top-notch, with staff going out of their way to accommodate our preferences. The food was fresh and flavorful, and the presentation was beautiful. Highly recommend! 
                                </ReviewerContent>
                            </Reviewer>
                        </SwiperSlide>

                        <SwiperSlide key={4} tag="li">
                            <Reviewer>
                                <ReviewerImg src={reviewer_4} />
                                <ReviwerInfo $date="05/02/2025">
                                    Peige Marcus
                                </ReviwerInfo>
                                <ReviewerContent>Taj Restaurant offers excellent value for money. The prices are very reasonable considering the quality and portion sizes. I've tried almost everything on the menu, and each one has been delicious. It's become my go-to spot for a satisfying meal.
                                </ReviewerContent>
                            </Reviewer>
                        </SwiperSlide>

                        <SwiperSlide key={5} tag="li">
                            <Reviewer>
                                <ReviewerImg src={reviewer_5} />
                                <ReviwerInfo $date="04/28/2025">
                                    Eniola  Ola
                                </ReviwerInfo>
                                <ReviewerContent>If you love American cuisine, Taj Restaurant is a must-visit. The menu features a fantastic variety of dishes, all well prepared. The ambiance is relaxed and elegant, making it a great place for both casual dinners and special occasions.
                                </ReviewerContent>
                            </Reviewer>
                        </SwiperSlide>

                        <SwiperSlide key={6} tag="li">
                            <Reviewer>
                                <ReviewerImg src={reviewer_6} />
                                <ReviwerInfo $date="04/19/2025">
                                    Ella Richy
                                </ReviwerInfo>
                                <ReviewerContent>What impressed me most about Taj Restaurant was the menu and how well put together it was. From classic burgers to unique chef specials, there's something for everyone. The flavors were spot-on, and the dessert selection was good.
                                </ReviewerContent>
                            </Reviewer>
                        </SwiperSlide>
                    </Swiper>
                </Reviews>

                <Location>
                    <Title data-aos="fade-up">Where are we</Title>
                    <ContactInfo data-aos="fade-up">
                        <h3>Visit Us</h3>
                        <p>Address: Jaguar Hall, 2705 Houston Hwy, Victoria, TX 77901</p>
                        <p>Contact us: 01-1234-56789</p>
                        <p>Opening hours: Tuesday ~ Sunday 11:00 ~ 22:00</p>
                        <p>Email: softwareengineeringgroupone@gmail.com</p>
                    </ContactInfo>
                    <iframe 
                        title="ourlocation" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6991.8988503212395!2d-96.97829582397871!3d28.810580975972005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266e5209f1e09%3A0x56dae0cff3720d4a!2sUHV!5e0!3m2!1sen!2sus!4v1746314495729!5m2!1sen!2sus%22" 
                        allowFullScreen="" 
                        loading="lazy" 
                        style={{width: '100%', height: '450px', border: '0'}}
                        data-aos="fade-up"
                    >
                    </iframe>
                </Location>
            </MainBody>
        </Root>
    )
}

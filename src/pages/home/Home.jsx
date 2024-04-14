import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import './styles.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'
import { styled } from 'styled-components'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

import slide2 from '../../assets/images/main/slide-2.png'
import slide3 from '../../assets/images/main/slide-3.png'
import Container from '../../components/layout/Container'
import CounterApp from '../../components/counter/CounterApp'

function Home() {
    return (
        <div>
            <CounterApp />
            <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SlideStyle>
                        <h2>2023, 창립 25주년</h2>
                        <p>
                            임직원의 노고로 큰 성장을 이루어낸 네이버시스템
                            <br />
                            저력을 바탕으로 미래를 만들어 갑니다.
                        </p>
                        <a href="/introduce/company" class="pageMove" tabindex="-1">
                            자세히 보기
                        </a>
                        <div className="visualBg">
                            <motion.div
                                initial={{ opacity: 0, top: 300 }}
                                animate={{ opacity: 1, top: 0 }}
                                transition={{ duration: 1 }}
                                className="path1"
                            />
                            <motion.div
                                initial={{ opacity: 0, top: -300 }}
                                animate={{ opacity: 0.5, top: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="path2"
                            />
                        </div>
                    </SlideStyle>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideStyle>
                        <h2>2023, 창립 25주년</h2>
                        <p>
                            임직원의 노고로 큰 성장을 이루어낸 네이버시스템
                            <br />
                            저력을 바탕으로 미래를 만들어 갑니다.
                        </p>
                        <a href="/introduce/company" class="pageMove" tabindex="-1">
                            자세히 보기
                        </a>
                        <div className="visualBg">
                            <img src={slide2} alt="" />
                        </div>
                    </SlideStyle>
                </SwiperSlide>
                <SwiperSlide>
                    <SlideStyle>
                        <h2>2023, 창립 25주년</h2>
                        <p>
                            임직원의 노고로 큰 성장을 이루어낸 네이버시스템
                            <br />
                            저력을 바탕으로 미래를 만들어 갑니다.
                        </p>
                        <a href="/introduce/company" class="pageMove " tabindex="-1">
                            자세히 보기
                        </a>
                        <div className="visualBg">
                            <img src={slide3} alt="" />
                        </div>
                    </SlideStyle>
                </SwiperSlide>
            </Swiper>
            <Container>
                <h2>1999</h2>
                <strong>즐겁고 이로운 내일을 만드는 이웃</strong>
                <p>
                    네이버시스템은 모바일 솔루션 기업에서 빅데이터, 사물인터넷, GIS, 클라우드를 통합적으로 구현할 수
                    있는 <br /> 플랫폼 전문기업으로 성장하며 교통, 도시 등의 공공 및 보안, 미디어 전문 분야에서 시장을
                    주도하고 있습니다.
                </p>
            </Container>
        </div>
    )
}

const SlideStyle = styled.div`
    ${tw`relative mx-auto max-w-7xl`}
    padding: 200px 0;
    h2 {
        ${tw`text-3xl text-5xl font-normal`}
    }
    p {
        ${tw`text-lg mt-7`}
    }
    a {
        ${tw`block w-full py-4 mt-10 text-center text-white transition duration-150 ease-linear rounded bg-primary hover:rounded-br-full hover:rounded-tl-full`}
        width: 375px;
        border-radius: 3px;
        transition: all 0.3s;
        &:hover {
            border-radius: 56px 0;
        }
    }
    .visualBg {
        ${tw`absolute top-0 right-0 mt-10`}
    }
    .path1 {
        ${tw`absolute -rotate-45 translate-y-6 rounded-full -top-5 right-9 bg-primary`}
        width: 800px;
        height: 377px;
    }
    .path2 {
        ${tw`absolute -rotate-45 translate-y-6 rounded-full opacity-50 -top-5 -right-40 bg-secondary`}
        width: 800px;
        height: 377px;
    }
`
export default Home

import React, { useState, useRef, useEffect } from 'react';
import img1 from "../../slide1.png";
import img2 from "../../slide2.png";
import img3 from "../../slide3.png";
import './Slider.scss';
import Slide from './Slide';



export default function Slider() {
    // 전체 슬라이드 개수(총3개. 배열의 길이로 계산)
    const TOTAL_SLIDES = 2;

    // 현재슬라이드
    const [currentSlide, setCurrentSlide] = useState(0);

    // 슬라이드 REF
    const slideRef: any = useRef(null);

    /**
     * 다음 슬라이드로 이동한다.
     */
    const NextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            // 더 이상 넘어갈 슬라이드가 없으면 1번째 사진으로 넘어간다.
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    /**
     * 이전 슬라이드로 이동한다.
     */
    const PrevSlide = () => {
        if (currentSlide === 0) {
            // 마지막 사진으로 넘어간다.
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    /**
     * 최초호출 함수
     */
    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);

    return (
        <div className="container">
            <div className="slider-container" ref={slideRef}>
                <Slide img={img1} />
                <Slide img={img2} />
                <Slide img={img3} />
                <img className="arrow-left" onClick={PrevSlide} src="/assets/image/about/arrow-left.svg" alt="arrow-left" />
                <img className="arrow-right" onClick={NextSlide} src="/assets/image/about/arrow-right.svg" alt="arrow-right" />
            </div>
        </div>
    );
}
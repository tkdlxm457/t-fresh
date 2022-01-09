import React, { useEffect, useRef, useState } from 'react';
import './About.scss';
import Slider from './Slider';


const About = () => {
    return (
        <>
            <section className="content-container">
                <div className="first">
                    <div className="container">
                        <Slider />
                    </div>
                </div>

                <div className="second">
                    <div className="container">
                        <div className="lead-container">
                            <p className="lead">대한민국 No.1 Cold-Chain Platform</p>
                            <p className="lead-desc">팀프레시는 국내 유일 Door to Door Cold Chain 통합물류 서비스를 제공합니다. 입출고 – 주문처리 - 새벽배송 전 과정에 신선도 유지를 위한 설비/역량을 보유하고 있습니다. </p>
                        </div>
                    </div>
                </div>

                <div className="third">
                    <div className="container">
                        <div className="card-title-container">
                            <h1 className="card-title">TIMF BUSINESS</h1>
                            <hr></hr>
                        </div>
                        <div className="card-container"></div>
                    </div>
                </div>

                <div className="business">
                    <div className="container">
                        <div className="card-box">
                            <div className="card">
                                <img className="img" src="/assets/image/about/card1.png" alt="card1" />
                                <div className="card-bottom">
                                    <h4 className="card-title">새벽배송</h4>
                                    <p className="card-desc">
                                        팀프레시는 당일 입고 및 출고를 원칙으로 새벽배송 망을 운영 중입니다.
                                        배송 기사님들은 팀프레시 배송매니저 앱을 사용해 아침 7시까지 배송을 완료합니다.
                                    </p>
                                    <a className="card-btn" href="/company/timf/timfInfo.do">더 알아보기</a>
                                </div>
                            </div>
                            <div className="card">
                                <img className="img" src="/assets/image/about/card2.png" alt="card2" />
                                <div className="card-bottom">
                                    <h4 className="card-title">화물주선</h4>
                                    <p className="card-desc">
                                        화물주선은 화물차량이 필요한 곳에 차량을 보내드리는 서비스입니다.
                                        팀프레시의 데이터베이스를 활용해 차량의 원활한 수급이 가능하도록 도와드립니다.
                                    </p>
                                    <a className="card-btn" href="/company/timf/timfInfo.do">더 알아보기</a>
                                </div>
                            </div>
                            <div className="card">
                                <img className="img" src="/assets/image/about/card3.png" alt="card3" />
                                <div className="card-bottom">
                                    <h4 className="card-title">풀필먼트</h4>
                                    <p className="card-desc">
                                        풀필먼트는 재고관리, 주문처리, CS 업무 등을 자체적으로 해결하기 어려운 기업을 위한 서비스입니다.
                                        각 화주사별 요구사항을 매뉴얼화해 관리합니다.
                                    </p>
                                    <a className="card-btn" href="/company/timf/timfInfo.do">더 알아보기</a>
                                </div>
                            </div>
                            <div className="card">
                                <img className="img" src="/assets/image/about/card4.png" alt="card4" />
                                <div className="card-bottom">
                                    <h4 className="card-title">그로서리</h4>
                                    <p className="card-desc">
                                        급식·외식·온라인 커머스 등의 고객사에 식자재를 공급하는 서비스입니다.
                                        기존 물류망을 활용해 식자재를 일괄 공급함으로써 비용 효율화가 가능하도록 합니다.
                                    </p>
                                    <a className="card-btn" href="/company/timf/timfInfo.do">더 알아보기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fourth">
                    <hr></hr>
                    <div className="container">
                        <div className="notice">
                            <h2>공지사항</h2>
                            <div className="notice-box">
                                <div className="notice-title">
                                    <h5>Notice</h5>
                                    <a href="/notice/notice/noticeList.do">
                                        <img className="img" src="/assets/image/about/iconPlus.png" alt="더보기" />
                                    </a>
                                </div>
                                <hr></hr>
                                <div className="notice-item">
                                    <a className="notice-item-title">
                                        [공고] 신주발행 공고(제3자 배정방식)
                                    </a>
                                    <a className="notice-item-day">
                                        <img className="img" src="/assets/image/about/iconClock.png" alt="더보기" />
                                        2021-09-15
                                    </a>
                                </div>
                                <div className="notice-item">
                                    <a className="notice-item-title">
                                        [공고] 신주발행 공고(제3자 배정방식)
                                    </a>
                                    <a className="notice-item-day">
                                        <img className="img" src="/assets/image/about/iconClock.png" alt="더보기" />
                                        2021-09-15
                                    </a>
                                </div>
                                <div className="notice-item">
                                    <a className="notice-item-title">
                                        [공고] 신주발행 공고(제3자 배정방식)
                                    </a>
                                    <a className="notice-item-day">
                                        <img className="img" src="/assets/image/about/iconClock.png" alt="더보기" />
                                        2021-09-15
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="notice">
                            <h2>보도자료</h2>
                            <div className="notice-box">
                                <div className="notice-title">
                                    <h5>Timf News</h5>
                                    <a href="/notice/notice/noticeList.do">
                                        <img className="img" src="/assets/image/about/iconPlus.png" alt="더보기" />
                                    </a>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>

                <div className="connect">
                    <div className="container">
                        <div className="connect-title">
                            <h2>Connect</h2>
                        </div>
                        <div className="connect-sns">
                            <a href="https://www.facebook.com/teamfresh.timf">
                                <img className="img" src="/assets/image/about/facebook.svg" alt="페이스북" />
                            </a>
                            <a href="https://www.youtube.com/watch?v=vlXzU-1Oec4">
                                <img className="img" src="/assets/image/about/youtube.svg" alt="유튜브" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

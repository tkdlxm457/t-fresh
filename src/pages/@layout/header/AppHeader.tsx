import { useHistory } from 'react-router-dom';
import './AppHeader.scss';

const AppHaeder = () => {

    /**
     * router Hook
     */
    const histroy = useHistory();

    return (
        <>
            <header className="header-container">
                <div className="header">
                    <div className='top'>
                        <img
                            className="logo"
                            src="/assets/image/logo.png"
                            alt="logo"
                            onClick={(event) => {
                                event.preventDefault();
                                histroy.push('/about');
                                window.scrollTo(0, 0);
                            }} />
                        <nav className="nav">

                            <div className="nav-menu">
                                <ul className="main-menu-list">
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/about">회사소개</a>
                                        <div className="sub-menu-list">
                                            <a className="sub-menu-item" href="/about">회사소개</a>
                                            <a className="sub-menu-item" href="/about">협력사 소개</a>
                                            <a className="sub-menu-item" href="/about">고객사 소개</a>
                                            <a className="sub-menu-item" href="/about">오시는 길</a>
                                        </div>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/business">사업소개</a>
                                        <div className="sub-menu-list">
                                            <a className="sub-menu-item" href="/business">새벽배송</a>
                                            <a className="sub-menu-item" href="/business">화물주선</a>
                                            <a className="sub-menu-item" href="/business">풀필먼트</a>
                                            <a className="sub-menu-item" href="/business">그로서리</a>
                                        </div>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/notice">공지사항</a>
                                        <div className="sub-menu-list">
                                            <a className="sub-menu-item" href="/notice">공지사항</a>
                                            <a className="sub-menu-item" href="/notice">인재채용</a>
                                            <a className="sub-menu-item" href="/notice">서비스 소개</a>
                                        </div>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/pressrelease">보도자료</a>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/solutions">배송지역검색</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default AppHaeder;

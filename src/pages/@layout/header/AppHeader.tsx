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
                                        <a className="main-menu-item" href="/company/timf/timfInfo.do">회사소개</a>
                                        <div className="sub-menu-list">
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">회사소개</a>
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">협력사 소개</a>
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">고객사 소개</a>
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">오시는 길</a>
                                        </div>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/company/timf/timfInfo.do">사업소개</a>
                                        <div className="sub-menu-list">
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">새벽배송</a>
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">화물주선</a>
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">풀필먼트</a>
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">그로서리</a>
                                        </div>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/company/timf/timfInfo.do">공지사항</a>
                                        <div className="sub-menu-list">
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">공지사항</a>
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">인재채용</a>
                                            <a className="sub-menu-item" href="/company/timf/timfInfo.do">서비스 소개</a>
                                        </div>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/company/timf/timfInfo.do">보도자료</a>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/solutions">배송지역검색</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="hamburger">
                                <input className="input" id="hamburger" type="checkbox"></input>
                                <label htmlFor="hamburger">
                                    <img src="/assets/image/toggle.svg" />
                                </label>
                                <ul className="main-menu-list">
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/company/timf/timfInfo.do">회사소개</a>

                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/company/timf/timfInfo.do">사업소개</a>

                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/company/timf/timfInfo.do">공지사항</a>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/company/timf/timfInfo.do">보도자료</a>
                                    </li>
                                    <li className="main-menu-toggle">
                                        <a className="main-menu-item" href="/solutions">배송지역검색</a>
                                    </li>
                                </ul>
                            </div> */}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default AppHaeder;

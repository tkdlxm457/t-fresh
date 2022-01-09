import { useLocation } from 'react-router-dom';
import './AppFooter.scss';

const AppFooter = () => {

    /**
     * 경로명
     */
    const { pathname } = useLocation();


    return (
        <>
            <footer
                className="footer"
                style={{ display: (pathname === '/solutions') ? 'none' : '' }}>
                <div className="container">
                    <div className="contact">
                        <div className="contact-desc">
                            <hr></hr>
                            <h5>Timf</h5>
                            <hr></hr>
                            <p>상호명: (주)팀프레시</p>
                            <p>사업자등록번호: 561-88-01138</p>
                            <p>대표자: 이성일</p>
                        </div>
                        <div className="contact-desc">
                            <hr></hr>
                            <h5>Contact us</h5>
                            <hr></hr>
                            <p>Tel: 02-423-0525</p>
                            <p>Fax: 02-3432-0525</p>
                            <p>E-mail: info@timf.co.kr</p>
                            <p>서울특별시 송파구 위례성대로 12길 15-1</p>
                            <br />
                            <p>영업 및 제휴 문의: </p>
                            <p>E-mail: sales@timf.co.kr</p>
                        </div>
                        <div className="contact-desc">
                            <hr></hr>
                            <h5>Others</h5>
                            <hr></hr>
                            <a><p>인재채용</p></a>
                            <a><p>서비스 소개</p></a>
                            <a><p>개인정보 처리방침</p></a>
                            <a><p>위치기반 서비스 이용약관</p></a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <hr></hr>
                        <h5><a>©</a>TeamFresh All right reserved</h5>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default AppFooter;

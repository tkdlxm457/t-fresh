import React, { Dispatch, MutableRefObject, useEffect, useRef } from 'react';
import './Solutions.scss';
import DaumPostcode from 'react-daum-postcode';
import { SetStateAction } from 'react';


const Solutions = () => {
    // 다음 포스트코드 API 화면 show 여부
    const [isDaumPostCodeShow, setIsDaumPostCodeShow]: [boolean, any] = React.useState(true);

    // 우편주소
    const [zoneCode, setZoneCode]: [string, any] = React.useState('');

    // 상세주소
    const [address, setAddress]: [string, any] = React.useState('');

    // 성공 모달 ref 객체
    const successModalRef: MutableRefObject<any | undefined> = useRef();

    // 실패 모달 ref 객체
    const failModalRef: MutableRefObject<any | undefined> = useRef();

    const isDeliveryAddress = () => {
        fetch('https://tmsapi.teamfresh.co.kr/api/delivery/searchDeliveryAreaForTest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'charset': 'utf-8'
            },
            body: JSON.stringify({
                'addrBasic': address,
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.resultCode && res.resultCode !== "0000") {
                    throw { resultCode: res.resultCode, resultMsg: res.resultMsg };
                }

                if (res.result.delyverYn === "1") {
                    successModalRef.current.showModal();
                    // 배송성공 모달
                }
                else {
                    failModalRef.current.showModal();
                    // 배송실패 모달
                }

            })
            .catch(res => {
                if (res.resultCode && res.resultCode !== "0000") {
                    alert(`team fresh API 요청 중 예상치 못한 에러가 발생했습니다. 
                    code -> ${res.resultCode}
                    msg -> ${res.resultMsg}`);
                }
                else {
                    alert(`team fresh API 요청 중 예상치 못한 에러가 발생했습니다.`)
                }
            });
    }

    /**
     * 조회 된 주소클릭 콜백 함수다.
     * 
     * @param data 주소입력 결과 데이터
     */
    const handleComplete = (data: { zonecode: string, address: string; addressType: string; bname: string; buildingName: string; }) => {
        // 클릭 된 주소를 구한다.
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        // 상세주소 입력 step을 위해 zone, address값을 보관한다.
        setZoneCode(data.zonecode);
        setAddress(fullAddress);

        // 상세주소 입력 단계로 이동한다.
        setIsDaumPostCodeShow(!isDaumPostCodeShow);
    };



    return (
        <>
            <dialog ref={successModalRef}>
                <form method="dialog">
                    <div className="modal-top">
                        <h4>새벽배송가능</h4>
                    </div>
                    <div className="modal-middle">
                        <div className="modal-middle-content">
                            <img src="/assets/image/soluctions/success.png" alt="success" />
                            <h1>새벽배송가능 지역입니다.</h1>
                            <p>다음날 아침 7시 이전에 도착합니다.</p>
                            <p style={{ color: "red" }}>(관공서/학교/병원/시장/공단/도서산간지역 배송불가)</p>
                        </div>
                    </div>
                    <div className="modal-bottom">
                        <button className="close-button">확인</button>
                    </div>
                </form>
            </dialog>

            <dialog ref={failModalRef}>
                <form method="dialog">
                    <div className="modal-top">
                        <h4>새벽배송불가능</h4>
                    </div>
                    <div className="modal-middle">
                        <div className="modal-middle-content">
                            <img src="/assets/image/soluctions/fail.png" alt="fail" />
                            <h1>새벽배송불가 지역입니다.</h1>
                            <p>
                                지번주소(구 주소)로 검색하셨다면
                                <br />
                                도로명 주소로 다시 시도해 주세요.
                            </p>
                        </div>
                    </div>
                    <div className="modal-bottom">
                        <button className="close-button">확인</button>
                    </div>
                </form>
            </dialog>

            <div className="container" >
                {isDaumPostCodeShow ? <DaumPostcode
                    onComplete={handleComplete}
                    style={{ height: '100vh' }}
                    autoClose={false}
                />
                    :
                    <div className="address">
                        <div className="header">
                            <a className="header-btn">
                                <img onClick={setIsDaumPostCodeShow.bind(!isDaumPostCodeShow)} className="img" src="/assets/image/soluctions/backIcon.png" alt="backIcon" />
                            </a>
                            <h4 className="desc">다시 주소 검색하기</h4>
                            <hr></hr>
                        </div>
                        <div className="top">
                            <input className="zone-code" type='text' id="zoneCode" name="zoneCode" placeholder="zonecpde들어가고 변경 불가" value={zoneCode} disabled />
                            <input className="road-address" type='text' id="roadAddress" name="roadAddress" placeholder="fullAddress들어가고 변경불가" value={address} disabled />
                            <input type="text" placeholder="나머지 주소를 입력해주세요" /><br />
                            <a className="" href='#' onClick={isDeliveryAddress}>주소입력</a>
                        </div>
                        <div className="bottom">
                            <p>
                                <strong>새벽배송 지역 중 배송 불가 장소 안내</strong>
                                <br />
                                <br />
                                관공서/학교/병원/시장/공단/도서산간지역
                                <br />
                                <br />
                            </p>
                            <hr></hr>
                            <br />
                            가락동농수산물도매시장
                            <br />
                            가천대학교
                        </div>
                    </div>
                }
            </div>

        </>
    );
};

export default Solutions;


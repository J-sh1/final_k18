import axios from "axios";
import { useEffect, useState } from "react";
import './MyCapture.css';


const MyCapture = ({ sessionId, missingIdx }) => {
    const [captures, setCaptures] = useState([]);
    const [missing_idx, set_missing_idx] = useState(missingIdx);

    useEffect(() => {
        axios.post('/get_user_captures', {
            session_id: sessionId,
            missing_idx: missing_idx
        })
            .then(response => {
                console.log('실종자idx 넘기기 성공:', response.data);
                alert("등록 성공(포스터 생성 시 완료까지 시간이 소요됩니다)")
            })
            .catch(error => {
                console.error('실종자 idx 넘기기 실패')

            });

    }, [sessionId]);

    return (
        <div className="Mypage_capture_all">
            <div className="Mypage_capture_all_title">
                캡처 목록
            </div>
            <div className="Mypage_capture_all_grid" >
                {captures.map(capture => (
                    <div className="Mypage_capture_all_grid_item" key={capture.CAPTURE_IDX}>
                        <img src={capture.CAPTURE_PATH} alt={capture.MISSING_NAME} />
                    </div>
                ))}
            </div>

            {/* user가 가진 전체 캡처 나오게 하기*/}





        </div>
    )
}
export default MyCapture;
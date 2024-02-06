import { Link, useNavigate, useParams } from "react-router-dom"
import './A.css'
import { useEffect, useState } from "react"
import axios from "axios"

interface QuestInfo {
    id: string;
    title: string;
    content: string;
    multiplechoice: string;
    imgPath: string;
    category: string;
}

const A1: React.FC = () => {
    const [quest, setQuest] = useState<QuestInfo | null>(null);
    const { id, category } = useParams<{ id: string, category: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchQuestData = async () => {
            try {
                // localstorage에 저장했던 토큰 가져오기
                const token = localStorage.getItem('token');

                // 헤더에 토큰 추가
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                };

                // 서버에 사용자 정보 달라고 get 요청 보내기
                const response = await axios.get(`http://localhost:8080/examples/find/${id}/${category}`, config);
                setQuest(response.data);  // 요청 완료시 reponse변수에 서버에서 받은 사용자 정보가 저장될 것

            } catch (error) { // get 실패시 console 메시지 출력
                console.error('Error fetching data:', error);
                // navigate('/Login')
            }
        };

        fetchQuestData();
    }, [navigate, id, category]);  // id 추가

    if (!quest) {
        return <div>Loading...</div>;
    }

    

    return (
        <>
            <div className="A1">
                <div className="leftNav">
                    <Link to='/A1' className="Nav">수와 연산</Link>
                    <Link to='/A1' className="Nav">문자와 식</Link>
                    <Link to='/A1' className="Nav">함수</Link>
                    <Link to='/A1' className="Nav">기하</Link>
                    <Link to='/A1' className="Nav">확률과 통계</Link>
                </div>
                <div>
                <div key={quest.id}>
                    <p>{quest.id}</p>
                    <p>{quest.title}</p>
                    <p>{quest.content}</p>
                    <p>{quest.multiplechoice}</p>
                    <p>{quest.imgPath}</p>
                    <p>{quest.category}</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default A1;
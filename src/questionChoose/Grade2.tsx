import { Link } from 'react-router-dom'
import './Grade.css'

const Grade2 = () => {

    return (
        <>
            <div className='Grade'>
                <div className="leftNav">
                    <Link to='/Grade1' className="Nav" id='Q1'>1학년 문제</Link><br />
                    <Link to='/Grade2' className="Nav">2학년 문제</Link><br />
                    <Link to='/Grade3' className="Nav">3학년 문제</Link>
                </div>
                <div className='Level'>
                    <Link to='/' className="A">수와 연산2</Link>
                    <Link to='/' className="B">문자와 식2</Link>
                    <Link to='/' className="C">함수2</Link>
                    <Link to='/' className="D">기하2</Link>
                    <Link to='/' className="E">확률과 통계2</Link>
                </div>
            </div>
        </>
    )
}

export default Grade2
import { Link } from "react-router-dom";

const TotalGrade = () => {
    return (
        <>
            <div className="leftNav">
                <Link to='/Grade1' className="Nav">1학년 문제</Link><br />
                <Link to='/Grade2' className="Nav">2학년 문제</Link><br />
                <Link to='/Grade3' className="Nav">3학년 문제</Link>
            </div>
        </>
    )
}

export default TotalGrade;
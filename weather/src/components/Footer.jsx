import "./Footer.css";

const Footer = ({ onChangeCity }) => {
    return <div className="Footer">
        <div className="author">
            Author: KangWook Kim
            <br />
            created: 2026-02-05
        </div>
        <div className="select_wrapper">
            <div>지역선택</div>
            <select onChange={(e) => {
                onChangeCity(e);
            }}>
                <option value="incheon">인천</option>
                <option value="seosan">서산</option>
                <option value="seoul">서울</option>
                <option value="busan">부산</option>
                <option value="jeju">제주</option>
                <option value="gangwon">강원</option>
            </select>
        </div>
    </div>
}

export default Footer
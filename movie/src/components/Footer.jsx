import "./Footer.css";

const Footer = ({ page, setPage, data, totalPage }) => {

    const onIncreaseButton = () => {
        if (page >= totalPage) return;
        setPage(page + 1);
    }

    const onDecreaseButton = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return <div className="Footer">
        <div className="Footer_wrapper">
            <div className="left"><button onClick={onDecreaseButton}>{"<"}</button></div>
            <div className="center">{page}/{totalPage}</div>
            <div className="right"><button onClick={onIncreaseButton}>{">"}</button></div>
        </div>
        <div className="copy">Copyright 2026. 김강욱</div>
    </div>
}

export default Footer;
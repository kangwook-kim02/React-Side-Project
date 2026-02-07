import "./Footer.css";

const Footer = ({ page, setPage, data }) => {

    const onIncreaseButton = () => {
        if (data.length === 0) return;
        setPage(page + 1);
    }

    const onDecreaseButton = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    return <div className="Footer">
        <div className="left"><button onClick={onDecreaseButton}>{"<"}</button></div>
        <div className="center">{page}</div>
        <div className="right"><button onClick={onIncreaseButton}>{">"}</button></div>
    </div>
}

export default Footer;
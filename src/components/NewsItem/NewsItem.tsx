import { Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";

type PropTypes = {
    // newsEl: object;
    id: number;
    title: string;
    time: number;
    by: string;
    score: number;
    kids: any[];
    descendants: number;
};

const NewsItem: React.FC<PropTypes> = ({ id, title, time, by, score, kids, descendants }) => {
    const gridStyle: React.CSSProperties = {
        width: "100%",
        margin: 10,
    };

    const newsElement: React.CSSProperties = {
        width: "100%",
        textAlign: "center",
        borderRadius: "40px",
        padding: 0,
    };

    //Конвертация timeStamp в человеческий вид времени
    const convertToTime = (timeStamp: number) => {
        let date = new Date(timeStamp * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();
        let seconds = "0" + date.getSeconds();

        let day = "0" + date.getDate();
        let month = "0" + (date.getMonth() + 1);
        let year = "0" + date.getFullYear();
        return (
            hours +
            ":" +
            minutes.substr(-2) +
            ":" +
            seconds.substr(-2) +
            " | " +
            day.substr(-2) +
            "." +
            month.substr(-2) +
            "." +
            year.substr(-4)
        );
    };

    return (
        <NavLink
            to={{
                pathname: `${id}`,
            }}
            style={gridStyle}
        >
            <Card
                hoverable
                title={title}
                style={newsElement}
                headStyle={{ backgroundColor: "#504444", color: "white", border: "1px black solid" }}
                // headStyle={{ backgroundColor: "#4D4D4D", color: "white", border: "1px black solid" }}
                bodyStyle={{ backgroundColor: "#FFFFFF", border: "1px black solid" }}
            >
                <Row style={{ fontWeight: "bold", fontSize: "16px" }}>
                    <Col span={8}>Рейтинг:</Col>
                    <Col span={8}>Автор: </Col>
                    <Col span={8}>Опубликовано:</Col>
                </Row>
                <Row>
                    <Col span={8}>{score > 10 ? "🔥 " + score : score}</Col>
                    <Col span={8}>{by}</Col>
                    <Col span={8}>{convertToTime(time)}</Col>
                </Row>
                {/* Количество комментариев : {descendants}
                <p> ....</p> */}
                {/* <p>Kids : {kids} </p> */}
            </Card>
        </NavLink>
    );
};

export default NewsItem;

import { Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import { cardHeadBackground } from "../styles/cssVariables";
import { convertTimestampToDate } from "../utils/dateConverter";

type PropTypes = {
    id: number;
    title: string;
    time: number;
    by: string;
    score: number;
};

const NewsItem: React.FC<PropTypes> = ({ id, title, time, by, score }) => {
    const gridStyle: React.CSSProperties = {
        width: "100%",
        margin: "10px 0px",
    };

    const newsElement: React.CSSProperties = {
        width: "100%",
        textAlign: "center",
        borderRadius: "40px",
        padding: 0,
    };

    return (
        <NavLink to={`${id}`} style={gridStyle}>
            <Card
                hoverable
                title={title}
                style={newsElement}
                headStyle={{ backgroundColor: cardHeadBackground, color: "white", border: "0px black solid" }}
                bodyStyle={{ backgroundColor: "#FFFFFF", border: "1px black solid" }}
            >
                <Row style={{ fontWeight: "bold", fontSize: "16px" }}>
                    <Col span={8}>Автор: </Col>
                    <Col span={8}>Опубликовано:</Col>
                    <Col span={8}>Рейтинг:</Col>
                </Row>
                <Row>
                    <Col span={8}>{by}</Col>
                    <Col span={8}>{convertTimestampToDate(time)}</Col>
                    <Col span={8}>{score > 10 ? "🔥 " + score : "⭐ " + score}</Col>
                </Row>
            </Card>
        </NavLink>
    );
};

export default NewsItem;

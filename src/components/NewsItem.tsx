import { Card, Col, Row } from "antd";
import { NavLink } from "react-router-dom";
import { cardHeadBackground } from "../utils/cssVariables";
import { convertToTime } from "../utils/dateConverter";

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
                headStyle={{ backgroundColor: cardHeadBackground, color: "white", border: "1px black solid" }}
                bodyStyle={{ backgroundColor: "#FFFFFF", border: "1px black solid" }}
            >
                <Row style={{ fontWeight: "bold", fontSize: "16px" }}>
                    <Col span={8}>Автор: </Col>
                    <Col span={8}>Опубликовано:</Col>
                    <Col span={8}>Рейтинг:</Col>
                </Row>
                <Row>
                    <Col span={8}>{by}</Col>
                    <Col span={8}>{convertToTime(time)}</Col>
                    <Col span={8}>{score > 10 ? "🔥 " + score : "⭐ " + score}</Col>
                </Row>
                {/* Количество комментариев : {descendants} */}
            </Card>
        </NavLink>
    );
};

export default NewsItem;

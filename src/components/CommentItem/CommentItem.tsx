import { Button, Card, Row } from "antd";
import React from "react";
import { useState } from "react";
import Responses from "../Comments/Responses";

type PropTypes = {
    by: string;
    time: number;
    text: string;
    kids: [];
};

const CommentItem: React.FC<PropTypes> = ({ by, time, text, kids }) => {
    const [isChildVisible, changeChildVisible] = useState(false);

    //показать/скрыть ответы
    const toggleShowChildrenComments = () => {
        changeChildVisible(!isChildVisible);
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

    //вычисление сколько времени назад был опубликован комментарий
    const timeDifference = (current: number) => {
        var msPerMinute = 60;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = Number(Date.now()) / 1000 - current;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed) + numWord(Math.round(elapsed), ["секунду", "секунды", "секунд"]);
        } else if (elapsed < msPerHour) {
            return (
                Math.round(elapsed / msPerMinute) +
                numWord(Math.round(elapsed / msPerMinute), ["минуту", "минуты", "минут"])
            );
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + numWord(Math.round(elapsed / msPerHour), ["час", "часа", "часов"]);
        } else if (elapsed < msPerMonth) {
            return (
                "примерно " +
                Math.round(elapsed / msPerDay) +
                numWord(Math.round(elapsed / msPerDay), ["день", "дня", "дней"])
            );
        } else if (elapsed < msPerYear) {
            return (
                "примерно " +
                Math.round(elapsed / msPerMonth) +
                numWord(Math.round(elapsed / msPerMonth), ["месяц", "месяца", "месяцев"])
            );
        } else {
            return (
                "примерно " +
                Math.round(elapsed / msPerYear) +
                numWord(Math.round(elapsed / msPerYear), ["год", "года", "лет"])
            );
        }
    };

    //склонение времени комментария
    function numWord(value: number, words: string[]) {
        value = Math.abs(value) % 100;
        var num = value % 10;
        if (value > 10 && value < 20) return " " + words[2] + " назад";
        if (num > 1 && num < 5) return " " + words[1] + " назад";
        if (num === 1) return " " + words[0] + " назад";
        return " " + words[2] + " назад";
    }

    return (
        <>
            <Card
                title={by + " | " + timeDifference(time)}
                // style={{ marginLeft: 50, marginTop: 10 }}
                // style={{ marginLeft: 50, marginTop: 10 }}
                extra={convertToTime(time)}
                headStyle={{ backgroundColor: "#FFFFFF" }}
                // headStyle={{ backgroundColor: "#FFFFFF", border: "1px black solid" }}
                bodyStyle={{ padding: 5 }}
            >
                <Row>
                    <p style={{ wordWrap: "break-word", overflow: "hidden" }}>{text}</p>
                </Row>

                {kids ? (
                    <>
                        <Row
                            style={{
                                justifyContent: "end",
                                paddingRight: 20,
                            }}
                        >
                            <Button
                                style={
                                    isChildVisible
                                        ? { backgroundColor: "#A5A5A5", color: "FFFFFF", fontSize: 12 }
                                        : { backgroundColor: "#453E3E", color: "white", fontSize: 12 }
                                }
                                onClick={() => toggleShowChildrenComments()}
                            >
                                {isChildVisible ? <> скрыть ответы </> : <>показать ответы ({kids.length}) </>}
                            </Button>
                        </Row>
                    </>
                ) : null}
            </Card>
            {isChildVisible ? (
                // <div style={{ backgroundColor: "#A5A5A5", marginLeft: 50, paddingTop: -30 }}>
                // <div style={{ backgroundColor: "#A5A5A5" }}>
                <div style={{ backdropFilter: "blur(1)", backgroundColor: "rgba(33, 124, 147, 0.30)" }}>
                    <Responses key={kids.length} commentsIDs={kids} visible={isChildVisible} />
                </div>
            ) : null}
        </>
    );
};

export default CommentItem;

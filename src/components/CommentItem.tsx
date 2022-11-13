import { Button, Card, Row } from "antd";
import React from "react";
import { useState } from "react";
import { convertTimestampToDate } from "../utils/dateConverter";
import { timeDifference } from "../utils/timeDifference";
import Responses from "./Responses";

type PropTypes = {
    by: string;
    time: number;
    text: string;
    kids: [];
    isDeleted: boolean;
};

const CommentItem: React.FC<PropTypes> = ({ by, time, text, kids, isDeleted }) => {
    const [isChildVisible, changeChildVisible] = useState(false);

    //показать/скрыть ответы
    const toggleShowChildrenComments = () => {
        changeChildVisible(!isChildVisible);
    };

    return (
        <>
            <Card
                title={isDeleted ? "Неизвестный автор | " + timeDifference(time) : by + " | " + timeDifference(time)}
                extra={convertTimestampToDate(time)}
                headStyle={{ backgroundColor: "#FFFFFF" }}
                bodyStyle={{ padding: 5 }}
            >
                <Row>
                    <p style={{ wordWrap: "break-word", overflow: "hidden" }}>
                        {isDeleted ? <i>Комментарий удалён</i> : text}
                    </p>
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
                <div style={{ backdropFilter: "blur(1)", backgroundColor: "rgba(33, 124, 147, 0.30)" }}>
                    <Responses key={kids.length} commentsIDs={kids} visible={isChildVisible} />
                </div>
            ) : null}
        </>
    );
};

export default CommentItem;

// import { Avatar, Col, Comment, Row } from "antd";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CommentItem from "./CommentItem";

type PropTypes = {
    commentsIDs: number[];
    visible: boolean;
};

interface Response {
    by: string;
    id: number;
    time: number;
    text: string;
    kids: [];
    deleted: boolean;
}

const Responses: React.FC<PropTypes> = ({ commentsIDs, visible }) => {
    const { currentResponses } = useTypedSelector((state) => state.response);
    const { fetchResponses } = useActions();

    let [localResponses, setLocalResponses] = useState<Response[]>([]);

    const setResponses = async () => {
        fetchAllResponses();
        setLocalResponses(currentResponses.sort((a, b) => b - a));
    };

    const fetchAllResponses = async () => {
        await fetchResponses(commentsIDs);
    };

    useEffect(() => {
        setResponses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    if (currentResponses.length !== 0 && localResponses.length === 0) {
        setResponses();
    }
    return (
        <>
            <ul>
                {currentResponses ? (
                    localResponses.map((response: Response) => {
                        return (
                            <li>
                                <CommentItem
                                    key={response.id}
                                    by={response.by}
                                    time={response.time}
                                    text={response.text}
                                    kids={response.kids}
                                    isDeleted={response.deleted}
                                />
                            </li>
                        );
                    })
                ) : (
                    <>
                        <Spin />
                        Оказывается нет ответов :)
                    </>
                )}
            </ul>
        </>
    );
};

export default Responses;

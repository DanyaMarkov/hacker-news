// import { Avatar, Col, Comment, Row } from "antd";
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CommentItem from "../CommentItem/CommentItem";

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
    // const { currentResponses, loading, error } = useTypedSelector((state) => state.response);
    const { currentResponses } = useTypedSelector((state) => state.response);
    const { fetchResponses } = useActions();

    let [localResponses, setLocalResponses] = useState<Response[]>([]);

    // const setResponses = useCallback(() => {
    const setResponses = () => {
        setLocalResponses(currentResponses);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        localResponses = [...currentResponses.sort((a, b) => b - a)];
        console.log("localResponses" + localResponses);
    };

    useEffect(() => {
        fetchResponses(commentsIDs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setResponses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible]);

    // if (loading) {
    //     return (
    //         <h1>
    //             <Spin />
    //             ⠀Идёт загрузка ответов
    //         </h1>
    //     );
    // }
    // if (error) {
    //     return <h1>{error}</h1>;
    // }

    if (currentResponses.length !== 0 && localResponses.length === 0) {
        setResponses();
    }
    return (
        <>
            <ul>
                {currentResponses ? (
                    localResponses
                        .sort((a: any, b: any) => b - a)
                        .map((response: Response) => {
                            if (response.deleted) {
                                return null;
                            }

                            return (
                                <li>
                                    <CommentItem
                                        key={response.id}
                                        by={response.by}
                                        time={response.time}
                                        text={response.text}
                                        kids={response.kids}
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

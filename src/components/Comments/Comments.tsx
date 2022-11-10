// import { Avatar, Col, Comment, Row } from "antd";
import { Spin } from "antd";
import React from "react";
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CommentItem from "../CommentItem/CommentItem";

type PropTypes = {
    commentsIDs: number[];
};

interface Comment {
    by: string;
    id: number;
    time: number;
    text: string;
    kids: [];
    deleted: boolean;
}

const Comments: React.FC<PropTypes> = ({ commentsIDs }, props) => {
    const { currentComments, loading, error } = useTypedSelector((state) => state.comment);

    const { fetchComments } = useActions();
    useEffect(() => {
        fetchComments(commentsIDs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
            <h1>
                <Spin />
                ⠀Идёт загрузка комментариев
            </h1>
        );
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <>
            {/* <ul style={{ listStyleType: "none" }}> */}
            {/* <ul style={{ listStyleType: "none" }}> */}
            <ul>
                {currentComments && currentComments.length > 0 ? (
                    //реверс массива чтобы сверху были новые комментарии
                    currentComments.map((comment: Comment) => {
                        if (comment.deleted) {
                            return null;
                        }

                        return (
                            <li>
                                <CommentItem
                                    key={comment.id}
                                    by={comment.by}
                                    time={comment.time}
                                    text={comment.text}
                                    kids={comment.kids}
                                />
                            </li>
                        );
                    })
                ) : (
                    <h4>без комментариев</h4>
                )}
            </ul>
        </>
    );
};

export default Comments;

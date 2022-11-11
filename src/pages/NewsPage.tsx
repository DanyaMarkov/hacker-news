import { BackTop, Button, Descriptions, PageHeader, Spin } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import type {} from "redux-thunk/extend-redux";
import Comments from "../components/Comments";
import { convertToTime } from "../utils/dateConverter";

const NewsPage: React.FC = () => {
    const navigate = useNavigate();
    const { currentNews, loading, error } = useTypedSelector((state) => state.newsPage);
    const { fetchNewsInformation, fetchComments } = useActions();
    const { id } = useParams();

    useEffect(() => {
        fetchNewsInformation(Number(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Возвращает доменное имя вместо целой ссылки
    const returnDomain = (url: string) => {
        let u = new URL(url);
        return "[" + u.hostname + "]";
    };

    //обновление списка комментариев
    const updateComments = () => {
        fetchComments(currentNews.kids);
    };

    if (loading) {
        return (
            <h1>
                <Spin />
                ⠀Идёт загрузка новости
            </h1>
        );
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <Button style={{ backgroundColor: "#483C3C", color: "white" }} onClick={() => navigate("/")}>
                Назад
            </Button>

            {currentNews ? (
                <>
                    <PageHeader
                        ghost={false}
                        style={{ marginTop: "10px" }}
                        title={currentNews.title}
                        extra={[<Button onClick={() => updateComments()}>Обновить комментарии</Button>]}
                    >
                        <Descriptions size="small" column={3}>
                            <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label="Автор">
                                {currentNews.by}
                            </Descriptions.Item>

                            <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label="Опубликовано">
                                {convertToTime(currentNews.time)}
                            </Descriptions.Item>
                            <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label="Ссылка на новость:">
                                <a target="_blank" rel="noreferrer" href={currentNews.url}>
                                    {currentNews.url ? returnDomain(currentNews.url) : "Ссылка отсутствует"}
                                </a>
                            </Descriptions.Item>
                            <Descriptions.Item labelStyle={{ fontWeight: "bold" }} label="Количество комментариев">
                                {currentNews.descendants}
                            </Descriptions.Item>
                        </Descriptions>
                    </PageHeader>

                    {currentNews.kids ? (
                        <>
                            <Comments commentsIDs={currentNews.kids} />
                        </>
                    ) : (
                        <h3> Комментарии отсутствуют</h3>
                    )}
                </>
            ) : null}
            {/* К началу (верху) страницы */}
            <BackTop />
        </div>
    );
};

export default NewsPage;

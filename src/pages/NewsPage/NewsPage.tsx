import { Button, Descriptions, PageHeader, Spin } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import type {} from "redux-thunk/extend-redux";
import Comments from "../../components/Comments/Comments";
// import TreeComments from "../../components/TreeComments/TreeComments";
// import TreeCommentsCopy from "../../components/TreeComments/TreeComments copy";

const returnDomain = (url: string) => {
    let u = new URL(url);
    return "[" + u.hostname + "]";
};

const NewsPage: React.FC = (props: any) => {
    const navigate = useNavigate();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { currentNews, loading, error, comments } = useTypedSelector((state) => state.newsPage);

    const { fetchNewsInformation, fetchComments } = useActions();
    const { id } = useParams();
    let idNews = Number(id);

    //функционал
    useEffect(() => {
        fetchNewsInformation(idNews);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

    //обновление списка комментариев
    const updateComments = () => {
        fetchComments(currentNews.kids);
    };

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
                        // onBack={() => window.history.back()}
                        title={currentNews.title}
                        extra={[<Button onClick={() => updateComments()}>Обновить комментарии</Button>]}
                    >
                        <Descriptions size="small" column={3}>
                            <Descriptions.Item label="Автор">{currentNews.by}</Descriptions.Item>

                            <Descriptions.Item label="Опубликовано">
                                {convertToTime(currentNews.time)}
                            </Descriptions.Item>
                            <Descriptions.Item label="Ссылка на новость:">
                                <a target="_blank" rel="noreferrer" href={currentNews.url}>
                                    {currentNews.url ? returnDomain(currentNews.url) : "Ссылка отсутствует"}
                                </a>
                            </Descriptions.Item>
                            <Descriptions.Item label="Количество комментариев">
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
        </div>
    );
};

export default NewsPage;

import { BackTop, Button, Col, Row, Spin } from "antd";
import { useEffect } from "react";
import "antd/dist/antd.css";
import { useTypedSelector } from "../hooks/useTypedSelector";
import type {} from "redux-thunk/extend-redux";
import { useActions } from "../hooks/useActions";
import NewsItem from "../components/NewsItem";

const NewsList: React.FC = () => {
    const { newsList, loading, error } = useTypedSelector((state) => state.news);
    const { fetchNews } = useActions();

    useEffect(() => {
        fetchNews();

        //Обновление списка новостей каждые 60 секунд
        let updateFetchEvery60Seconds = setInterval(() => fetchNews(), 60000);
        //Сброс таймера при закрытии страницы
        return () => {
            clearInterval(updateFetchEvery60Seconds);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
            <>
                <Row justify="space-between" align="middle">
                    <Col>
                        <h1 style={{ color: "black" }}>Новости</h1>
                        {/* <Button onClick={() => navigate("/33344426")}>большая новость</Button> */}
                    </Col>
                    <Col>
                        <Button disabled type="primary" onClick={() => fetchNews()}>
                            Обновить список
                        </Button>
                    </Col>
                </Row>
                <h1 style={{ color: "black" }}>
                    <Spin />
                    ⠀Идёт загрузка последних новостей..
                </h1>
            </>
        );
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <>
            <Row justify="space-between" align="middle">
                <Col>
                    <h1 style={{ color: "black" }}>Новости</h1>
                </Col>
                <Col>
                    <Button style={{ backgroundColor: "#F9F9F9", color: "black" }} onClick={() => fetchNews()}>
                        Обновить список
                    </Button>
                </Col>
            </Row>
            <Row>
                {newsList.length > 0
                    ? newsList?.map((newsEl) => {
                          return (
                              <NewsItem
                                  key={newsEl.id}
                                  id={newsEl.id}
                                  title={newsEl.title}
                                  by={newsEl.by}
                                  score={newsEl.score}
                                  time={newsEl.time}
                                  kids={newsEl.kids}
                                  descendants={newsEl.descendants}
                              />
                          );
                      })
                    : null}
            </Row>
            {/* К началу (верху) страницы */}
            <BackTop />
        </>
    );
};

export default NewsList;

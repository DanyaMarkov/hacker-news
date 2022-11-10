import { Route, Routes } from "react-router-dom";
import NewsList from "./pages/NewsList";
import NewsPage from "./pages/NewsPage";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";

const App: React.FC = () => {
    return (
        <>
            <Layout style={{ backgroundColor: "#DCDCDC" }}>
                <Header className="header" style={{ padding: "0 350px", backgroundColor: "#ff641c" }}>
                    <h2 style={{ color: "black", fontWeight: "bold" }}>HackerNews</h2>

                    <Menu theme="dark" mode="horizontal" />
                </Header>
                <Content
                    className="site-layout"
                    style={{ padding: "0 350px", marginTop: 10, backgroundColor: "#DCDCDC" }}
                >
                    <div
                        className="site-layout-background"
                        style={{ padding: 14, minHeight: "calc(100vh - 144px)", backgroundColor: "#DCDCDC" }}
                    >
                        <Routes>
                            <Route path="/" element={<NewsList />} />
                            <Route path="/:id" element={<NewsPage />} />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center", backgroundColor: "#DCDCDC", color: "black" }}>
                    HackerNews for AvitoTech ©2022 Created by Daniil Markov
                </Footer>
            </Layout>
        </>
    );
};

export default App;

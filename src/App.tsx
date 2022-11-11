import { Route, Routes } from "react-router-dom";
import NewsList from "./pages/NewsList";
import NewsPage from "./pages/NewsPage";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import { Header } from "antd/lib/layout/layout";
import { contentBackground, orange } from "./utils/cssVariables";

const App: React.FC = () => {
    return (
        <>
            <Layout style={{ backgroundColor: "#DCDCDC" }}>
                <Header className="header" style={{ padding: "0 350px", backgroundColor: orange }}>
                    <h2 style={{ color: "black", fontWeight: "bold" }}>HackerNews</h2>
                </Header>
                <Content className="site-layout" style={{ padding: "0 350px", marginTop: 10 }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 14, minHeight: "calc(100vh - 144px)", backgroundColor: contentBackground }}
                    >
                        <Routes>
                            <Route path="/" element={<NewsList />} />
                            <Route path="/:id" element={<NewsPage />} />
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: "center", backgroundColor: contentBackground, color: "black" }}>
                    HackerNews for AvitoTech ©2022 Created by Daniil Markov
                </Footer>
            </Layout>
        </>
    );
};

export default App;

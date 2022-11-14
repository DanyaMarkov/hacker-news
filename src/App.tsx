import { Switch, Route, NavLink } from "react-router-dom";
import NewsList from "./pages/NewsList";
import NewsPage from "./pages/NewsPage";
import Layout, { Content, Footer } from "antd/lib/layout/layout";
import { Header } from "antd/lib/layout/layout";
import { ContentStyle, FooterStyle, HeaderStyle, LayoutStyle, LogoStyle } from "./styles/AppStyles";

const App: React.FC = () => {
    return (
        <Layout style={LayoutStyle}>
            <Header style={HeaderStyle}>
                <NavLink to="/" style={LogoStyle}>
                    HackerNews
                </NavLink>
            </Header>
            <Content style={ContentStyle}>
                <Switch>
                    <Route exact path="/" component={NewsList} />
                    <Route path="/:id" component={NewsPage} />
                </Switch>
            </Content>
            <Footer style={FooterStyle}>
                <span>HackerNews for AvitoTech ©2022 Created by Daniil Markov</span>
            </Footer>
        </Layout>
    );
};

export default App;

import { orange, contentBackground } from './cssVariables';

export const LayoutStyle: React.CSSProperties = {
    backgroundColor: contentBackground,
};

export const HeaderStyle: React.CSSProperties = {
    backgroundColor: orange,
};

export const LogoStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    maxWidth: "1200px",
    margin: "0px auto",
    fontSize: "2em",
    color: "black",
    fontWeight: "bold",
};

export const ContentStyle: React.CSSProperties = {
    margin: "0px auto",
    width: "100%",
    maxWidth: "1260px",
    padding: "15px 35px",
    backgroundColor: contentBackground,
    minHeight: "calc(100vh - 134px)",
};

export const FooterStyle: React.CSSProperties = {
    textAlign: "center", 
    backgroundColor: contentBackground, 
    color: "black"
};
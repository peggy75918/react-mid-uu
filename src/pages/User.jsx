import Header from "../components/Header"
import UserContent from "../components/UserContent";
import Footer from "../components/Footer"
function User() {
    return (
        <div className="mainLayout">
            <Header className="layoutHeader" />
            <UserContent className="layoutContent" />
            <Footer className="layoutFooter" />
        </div>
    );
}

export default User
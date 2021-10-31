import "./Layout.scss";

function Layout(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default Layout;
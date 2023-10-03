import React from "react"

export default class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { color: 'red', mark: 45 }
        console.log("constructor")
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState((prevState) => ({ mark: prevState.mark + 1 }));
        }, 2000); // Increment the mark every 2 seconds
    }

    componentWillUnmount() {
        clearInterval(this.timer); // Clear the interval when the component unmounts
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("getDerivedStateFromProps")
    //     return { color: props.color }
    // }
    shouldComponentUpdate() {
        return true;
    }
    func = () => {
        this.setState({ color: "hara" })
    }
    render() {
        console.log('render');
        return (
            <nav className={`navbar navbar-expand-lg bg-${this.props.text} navbar-${this.props.text}`}>
                {this.state.color}
                {this.props.color}
                {this.props.mark}
                {this.state.mark}

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button type="button" className="btn btn-primary" onClick={this.props.darkmode}></button>
                            <button type="button" className="btn btn-primary" onClick={this.func}></button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}
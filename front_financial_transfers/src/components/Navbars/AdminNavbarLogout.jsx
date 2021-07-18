import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
    constructor(props) {
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
            sidebarExists: false
        };
    }

    mobileSidebarToggle(e) {
        if (this.state.sidebarExists === false) {
            this.setState({
                sidebarExists: true
            });
        }
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function() {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    }

    render() {
        return (
        <Navbar fluid>
            <Navbar.Header>
            <Navbar.Brand>
                <i style={{fontSize:'x-large', verticalAlign:'middle'}} className='pe-7s-science'></i>
                <span style={{color:'#777', paddingLeft:"10px"}}>{this.props.brandText}</span>
            </Navbar.Brand>
            <Navbar.Toggle onClick={this.mobileSidebarToggle} />
            </Navbar.Header>
            <Navbar.Collapse>
            
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Header;

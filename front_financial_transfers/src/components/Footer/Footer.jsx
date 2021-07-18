import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Grid fluid>
                    <nav className="pull-left">
                        <ul>
                            <li>
                                {<a href="#">Versão: 1.0.0</a>}
                            </li>
                            <li>
                                {<a href="#">Manual</a>}
                            </li>
                            <li>
                                {<a href="https://github.com/PMACS-ORG" target="_blank">GitHub</a>}
                            </li>
                        </ul>
                    </nav>

                    {
                    <p className="copyright pull-right">
                        &copy; {new Date().getFullYear()}{" "}
                        <a href="#">
                            Financial Transfer
                        </a>
                    </p>
                    }


                </Grid>
            </footer>
        );
    }
}

export default Footer;

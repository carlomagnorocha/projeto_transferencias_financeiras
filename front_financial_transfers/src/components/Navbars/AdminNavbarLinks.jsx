import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { refreshUserSession } from 'actions/userLogedIn.js';
import { withRouter } from 'react-router-dom';
import { longStackSupport } from "q";
import "assets/css/general.css";


class AdminNavbarLinks extends Component {
    isLoggedIn(){
        if(this.props.user === undefined){
            return false;
        }
        else{
            return true;
        }
    }

    logOut(){
        this.props.refreshUserSession(undefined, undefined)
        this.props.history.push('/');
    }

    goToChangePass() { // depreciado
        this.props.refreshUserSession(undefined, undefined)
        this.props.history.push(`/pmacs/recuperacaoSenha?userName=${this.props.user.userName}&id=${this.props.user.id}`);
    }

    goToMyAccount() {
        this.props.history.push(`/pmacs/userArea`);
    }

    render() {

    /*
    const notification = (
        <div>
            <i className="fa fa-globe" />
            <b className="caret" />
            <span className="notification">5</span>
            <p className="hidden-lg hidden-md">Notification</p>
        </div>
    );
    */

    return (
        <div>
            <Nav>
              {/*
              <NavItem eventKey={1} href="#">
                  <i className="fa fa-dashboard" />
                  <p className="hidden-lg hidden-md">Dashboard</p>
              </NavItem>
              */}

              {/*
              <NavDropdown
                  eventKey={2}
                  title={notification}
                  noCaret
                  id="basic-nav-dropdown"
              >
                  <MenuItem eventKey={2.1}>Notification 1</MenuItem>
                  <MenuItem eventKey={2.2}>Notification 2</MenuItem>
                  <MenuItem eventKey={2.3}>Notification 3</MenuItem>
                  <MenuItem eventKey={2.4}>Notification 4</MenuItem>
                  <MenuItem eventKey={2.5}>Another notifications</MenuItem>
              </NavDropdown>
              */}

              {/*
              <NavItem eventKey={3} href="#">
                  <i className="fa fa-search" />
                  <p className="hidden-lg hidden-md">Search</p>
              </NavItem>
              */}

            </Nav>
            <Nav pullRight>

              {/*
              <NavItem eventKey={1} href="#">
                  Account
              </NavItem>
              */}

              {this.isLoggedIn() ? (
                  <>
                  <NavItem href="#" class='navItemUserIcon'>
                      <i className="fa fa-user-o" />
                  </NavItem>
                  <NavDropdown
                      eventKey={2}
                      title={this.props.user.firstName}
                      id="basic-nav-dropdown-right"
                  >
                      <MenuItem eventKey={2.1}>
                          <span style={{fontSize:'12px'}}><label>Nome:</label> {this.props.user.firstName} {this.props.user.lastName}</span>
                      </MenuItem>
                      <MenuItem eventKey={2.2}>
                          <span style={{fontSize:'12px'}}><label>CPF: </label> {this.props.user.userName}</span>
                      </MenuItem>
                      {this.props.user.cns 
                      ? 
                      <MenuItem eventKey={2.3}>
                          <span style={{fontSize:'12px'}}><label>CNS: </label> {this.props.user.cns}</span>
                      </MenuItem> 
                      : 
                      null
                      }
                      
                      <MenuItem divider />
                      <MenuItem eventKey={2.4} onClick={()=> this.goToMyAccount()}>
                          <i className="fa fa-cog" />
                          Configurações
                      </MenuItem>
                      {/* 
                      <MenuItem eventKey={2.2} onClick={()=> this.logOut()}>
                          <i className="fa fa-sign-out" />
                          Sair
                      </MenuItem>
                      */}
                  </NavDropdown>
                  </>
              ) : (
                  <NavItem></NavItem>
              )}

              {this.isLoggedIn() ? (
                  <>
                    <NavItem href="#" class='navItemUserIcon' onClick={()=> this.logOut()}>
                        <i className="fa fa-sign-out" />
                    </NavItem>
                    <NavItem eventKey={3} onClick={()=> this.logOut()}>
                        Sair
                    </NavItem>
                  </>
              ) : (
                  <NavItem></NavItem>
              )}
            </Nav>
        </div>
    );}
}

//export default AdminNavbarLinks;

const mapStateToProps = store => ({
  user: store.userSessionState.user
});

const mapDispatchToProps = dispatch => bindActionCreators({ refreshUserSession }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (AdminNavbarLinks));

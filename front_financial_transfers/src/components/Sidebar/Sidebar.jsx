import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Utils from 'general/Utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { refreshUserSession } from 'actions/userLogedIn.js';

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import { PMACS_ADMIN_ROLE } from 'variables/constants.js';

const openSinal = "pe-7s-angle-right";
const closeSinal = "pe-7s-angle-down";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.iSubmenu = React.createRef();
        this.ulSubmenu = React.createRef();
        this.state = {
            width: window.innerWidth
        };

        this.openCloseSubmenu = this.openCloseSubmenu.bind(this);
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    openCloseSubmenu(e) {
        if(this.iSubmenu.current.className === openSinal){
            this.iSubmenu.current.className = closeSinal;
            this.ulSubmenu.current.style.display = "block";
        }
        else{
            this.iSubmenu.current.className = openSinal;
            this.ulSubmenu.current.style.display = "none";
        }
    }

    render() {
        const sidebarBackground = {
            backgroundImage: "url(" + this.props.image + ")"
        };

        console.log(Utils.hasRoles(this.props.user, [PMACS_ADMIN_ROLE]))
        return (
            <div
                id="sidebar"
                className="sidebar"
                data-color={Utils.hasRoles(this.props.user, [PMACS_ADMIN_ROLE]) ? 'blue' : this.props.color}
                //data-color={this.props.color}
                //data-image={this.props.image}
            >
                {this.props.hasImage ? (
                    <div className="sidebar-background" style={sidebarBackground} />
                ) : (
                    null
                )}
              <div className="logo" style={{paddingBottom:'3px'}}>
                  <a
                      href="/"
                      className="simple-text logo-mini"
                  >
                      <div className="logo-img">
                        {/*<i style={{fontSize:'x-large', verticalAlign:'middle'}} className='pe-7s-science'></i>*/}
                      </div>
                  </a>
                  
                  <a
                      href="/"
                      className="simple-text logo-normal"
                  >
                      <span style={{fontSize:'35px', fontWeight:'bold', textTransform:'none'}}>pMACS</span>
                  </a>
              </div>
              <div className="sidebar-wrapper">
                    <ul className="nav">
                        {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
                        {/* 
                        {this.props.routes.map((prop, key) => {
                            if (!prop.redirect)
                                if(prop.visibleInMenu === undefined || prop.visibleInMenu){
                                    if(prop.onRoles === undefined || Utils.hasRoles(this.props.user, prop.onRoles)){
                                        if(prop.offRoles === undefined || !Utils.hasRoles(this.props.user, prop.offRoles)){
                                            return (
                                                <li
                                                    className={
                                                        prop.upgrade
                                                            ? "active active-pro"
                                                            : this.activeRoute(prop.layout + prop.path)
                                                    }
                                                    key={key}
                                                >
                                                    {prop.submenu 
                                                        ? 
                                                        <>
                                                            <NavLink
                                                                style={{width:"80%", float:"left", marginRight:"0", paddingRight:"0"}}
                                                                to={prop.layout + prop.path}
                                                                className="nav-link"
                                                                activeClassName="active"
                                                            >
                                                                <i className={prop.icon} />
                                                                <p>{prop.name}</p>
                                                            </NavLink>
                                                            <div style={{paddingTop:"15px"}}>
                                                                <p onClick={this.openCloseSubmenu} style={{cursor:"pointer"}}>
                                                                    <i ref={this.iSubmenu} style={{margin:"0"}} className="pe-7s-angle-right" />
                                                                </p>
                                                            </div>
                                                            <ul ref={this.ulSubmenu} className="nav" style={{display:"none", marginTop:"40px"}}>
                                                                {prop.submenu.map((prop, key) => {
                                                                    return (
                                                                        <li
                                                                            className={
                                                                                prop.upgrade
                                                                                    ? "active active-pro"
                                                                                    : this.activeRoute(prop.layout + prop.path)
                                                                            }
                                                                            key={key}
                                                                        >
                                                                            <NavLink
                                                                                style={{padding:"0 0 0 85px"}}
                                                                                to={prop.layout + prop.path}
                                                                                className="nav-link"
                                                                                activeClassName="active"
                                                                            >
                                                                                <p style={{textTransform:"none"}}>{prop.name}</p>
                                                                            </NavLink>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </>
                                                        : 
                                                        <NavLink
                                                            to={prop.layout + prop.path}
                                                            className="nav-link"
                                                            activeClassName="active"
                                                        >
                                                            <i className={prop.icon} />
                                                            <p>{prop.name}</p>
                                                        </NavLink>
                                                    }
                                                    
                                                </li>
                                            );
                                        }
                                    }
                                }
                          return null;
                      })}
                      */
                        
                        Utils.hasRoles(this.props.user, [PMACS_ADMIN_ROLE]) 
                        ? 
                        <>
                            <li>
                                <NavLink
                                    to='/pmacs/adminArea/principal'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='pe-7s-home' />
                                    <p style={{fontSize:'11px'}}>Principal</p>
                                </NavLink>
                            </li>
                            <li style={{fontSize:'11px', paddingLeft:'10px', backgroundColor:'rgb(89 93 218 / 67%)'}}>ACESSO</li>
                            <li>
                                <NavLink
                                    to='/pmacs/adminArea/users'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='fa fa-user' />
                                    <p style={{fontSize:'11px'}}>Usuários</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/pmacs/adminArea/roles'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='fa fa-users' />
                                    <p style={{fontSize:'11px'}}>Perfis</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/pmacs/adminArea/scripts'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='fa fa-code' />
                                    <p style={{fontSize:'11px'}}>Scripts</p>
                                </NavLink>
                            </li>
                            <li style={{fontSize:'11px', paddingLeft:'10px', backgroundColor:'rgb(89 93 218 / 67%)'}}>INTEGRAÇÃO</li>
                            <li>
                                <NavLink
                                    to='/pmacs/adminArea/inconsistenciasLog'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='fa fa-random' />
                                    <p style={{fontSize:'11px'}}>Log Inconsistências</p>
                                </NavLink>
                            </li>
                            <li style={{fontSize:'11px', paddingLeft:'10px', backgroundColor:'rgb(89 93 218 / 67%)'}}>CONFIGURAÇÕES</li>
                            <li>
                                <NavLink
                                    to='/pmacs/configuracao/termo'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='fa fa-file-text-o' />
                                    <p style={{fontSize:'11px'}}>Termo de Uso</p>
                                </NavLink>
                            </li>
                        </>
                        : 
                        <>
                            <li>
                                <NavLink
                                    to='/pmacs/home'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='pe-7s-home' />
                                    <p style={{fontSize:'11px'}}>Principal</p>
                                </NavLink>
                            </li>
                            <li style={{fontSize:'11px', paddingLeft:'10px', backgroundColor:'rgb(0 0 0 / 37%)'}}>TRANSFERÊNCA DE DADOS</li>
                            <li>
                                <NavLink
                                    to='/pmacs/uploadEsus'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='pe-7s-cloud-upload' />
                                    <p style={{fontSize:'11px'}}>Arquivo led esus</p>
                                </NavLink>
                            </li>
                            <li style={{fontSize:'11px', paddingLeft:'10px', backgroundColor:'rgb(0 0 0 / 37%)'}}>INTEGRAÇÂO</li>
                            <li>
                                <NavLink
                                    to='/pmacs/inconsistencias'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='pe-7s-note2' />
                                    <p style={{fontSize:'11px'}}>CADASTROS INCONSISTENTES</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/pmacs/downloadEsus'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='pe-7s-cloud-download' />
                                    <p style={{fontSize:'11px'}}>EXPORTAR DADOS</p>
                                </NavLink>
                            </li>
                            <li style={{fontSize:'11px', paddingLeft:'10px', backgroundColor:'rgb(0 0 0 / 37%)'}}>APLICAÇÔES</li>
                            <li>
                                <NavLink
                                    to='/pmacs/extratorDados'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='fa fa-cube' />
                                    <p style={{fontSize:'11px'}}>Extrator</p>
                                </NavLink>
                            </li>
                            <li style={{fontSize:'11px', paddingLeft:'10px', backgroundColor:'rgb(0 0 0 / 37%)'}}>API MOBILE</li>
                            <li>
                                <NavLink
                                    to='/pmacs/configuracao/apimobile'
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className='fa fa-cog' />
                                    <p style={{fontSize:'11px'}}>Configurações</p>
                                </NavLink>
                            </li>
                        </>
                    }
                  </ul>
              </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    user: store.userSessionState.user,
    sessionTime: store.userSessionState.sessionTime,
    users: store.userSessionState.users
});

const mapDispatchToProps = dispatch => bindActionCreators({ refreshUserSession }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Sidebar);

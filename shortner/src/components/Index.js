import React from "react";
import MenuItem from "./MenuItem";
import FormAction from "./FormAction";

function IndexBody() {
    return (
        <div className="container-fluid pad2zero">
            <div className="row" id="screenPane">
                <div className="col-lg-2"></div>
                <div className="col-sm-12 col-md-12 col-lg-8 pad2zero">
                    <div id="screenInnerWrap">
                        <FormAction />
                    </div>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    );
}

function Index() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bd-white fixed-top nav-style" id="navPane">
                <div className="row nav-wrapper">
                    <div className="col-lg-2"></div>
                    <div className="col-sm-12 col-md-12 col-lg-8 nav-inner-wrapper">
                        <div className="menu-wrapper">
                            <div className="float-l">
                                <span className="top-menus text-left logo-wrapper">
                                    <i className="fa fa-link"></i>
                                    &nbsp;urlShortner
                                </span>
                            </div>
                            <div className="menu-container-style">
                                <MenuItem iconClass="fa fa-user-plus" color="#17a2b8"  menuDesc="Sign Up"  />
                                <MenuItem iconClass="fa fa-sign-in" color="#28a745"  menuDesc="Sign In"  />
                                <MenuItem iconClass="fa fa-user" color=""  menuDesc="Account"  />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </nav>
            <IndexBody />
        </div>
    )
}

export default Index;
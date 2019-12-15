/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components

// core components
// import AuthNavbar from "components/Navbars/AuthNavbar.jsx";

import routes from "routes.js";

class Customer extends React.Component {
//   componentDidMount() {
//     document.body.classList.add("bg-default");
//   }
//   componentWillUnmount() {
//     document.body.classList.remove("bg-default");
//   }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/customer") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <>
              <Switch>{this.getRoutes(routes)}</Switch>
      </>
    );
  }
}

export default Customer;

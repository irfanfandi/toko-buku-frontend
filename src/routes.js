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
import Register from "views/Register/RegisterApp.js";
import Login from "views/Login/LoginApp.js";
import Logout from "views/Logout/Logout.js";
import Customer from "views/Customer/home.js";
import Index from "views/Penjualan.js";
import Tables from "views/Kategori/KategoriApp.js";
import Icons from "views/Buku/BukuApp.js";
import BukuAdd from "views/Buku/BukuAdd.js"


var routes = [
  {
  path: "/index",
  name: "Penjualan",
  icon: "ni ni-money-coins text-primary",
  component: Index,
  layout: "/admin"
},
{
  path: "/tables",
  name: "Master Kategori",
  icon: "ni ni-ungroup text-red",
  component: Tables,
  layout: "/admin"
},
{
  path: "/icons",
  name: "Master Buku",
  icon: "ni ni-book-bookmark text-blue",
  component: Icons,
  layout: "/admin"
},
{
  path: "/BukuAdd",
  // name: "Tambah",
  // icon: "ni ni-book-bookmark text-blue",
  component: BukuAdd,
  layout: "/admin"
},

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/logout",
    name: "Logout",
    icon: "ni ni-key-25 text-info",
    component: Logout,
    layout: "/auth"
  },
  {
    path: "/register",
    // name: "Register",
    // icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },

  {
    path: "/customer",
    component: Customer,
    layout: "/customer"
  }


];
export default routes;

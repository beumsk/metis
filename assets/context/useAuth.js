// ./assets/js/components/Home.js

import React, { createContext, useContext, useState } from "react";

import ReactCookie from "react-cookie";
import {
  Routes,
  Route,
  Switch,
  Navigate,
  Link,
  withRouter,
} from "react-router-dom";
import axios from "axios";

const AuthContext = createContext(null);

let useAuth = () => useContext(AuthContext);

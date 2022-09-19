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

export const sendGetRequest = async () => {
  try {
    const resp = await axios.get(`/api/getUser`, {
      withCredentials: true,
    });
    console.log(resp.data);
    return resp.data;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const AuthContext = createContext({
  user: {
    email:
      sendGetRequest() && sendGetRequest().user
        ? sendGetRequest().user.email
        : null,
    password:
      sendGetRequest() && sendGetRequest().password
        ? sendGetRequest().user.password
        : null,
  },
});

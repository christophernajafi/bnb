import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-widgets/dist/css/react-widgets.css";
import dateFnsLocalizer from "react-widgets-date-fns";
import ScrollToTop from "./app/layout/ScrollToTop";

dateFnsLocalizer();

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import * as React from "react";
import * as ReactDOM from "react-dom";
ReactDOM.render(
  <div>
    <div>
      <a href="tel:1-234-567-8900">Link with tel in href</a>
      <a href="/link">Link with URL in href</a>
    </div>
    <div>
      <a href="/link">Link with URL in href</a>
    </div>
  </div>,
  document.getElementById("root")
);

import * as React from "react";
import * as ReactDOM from "react-dom";
ReactDOM.render(
  <div>
    {/* react-a11y-anchors fails in one of my private projects,
        but works fine in this repo */}
    <a href="tel:1-234-567-8900">Link with tel in href</a>
    <a href="/link">Link with URL in href</a>
  </div>,
  document.getElementById("root")
);

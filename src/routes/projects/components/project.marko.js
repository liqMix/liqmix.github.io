// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/liq-website$1.0.0/src/routes/projects/components/project.marko",
    components_helpers = require("marko/dist/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<h1 class=\"name\"><button onclick=\"location.href='" +
    marko_escapeXmlAttr(input.repo.html_url) +
    "'\" class=\"title\">" +
    marko_escapeXml(input.repo.name) +
    "</button></h1><p class=\"desc\">" +
    marko_escapeXml(input.repo.description) +
    "</p>");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "h1.name {\r\n  }\r\n  p.desc {\r\n    font-size: 1em;\r\n    font-style: normal;\r\n    font-weight: 100;\r\n  }\r\n  button.title {\r\n    font-size: 1em;\r\n    padding: 0.25em;\r\n    font-weight: 750;\r\n  }",
          virtualPath: "./project.marko.css",
          path: "./project.marko"
        }
    ],
    id: "/liq-website$1.0.0/src/routes/projects/components/project.marko"
  };

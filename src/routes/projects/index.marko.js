// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/liq-website$1.0.0/src/routes/projects/index.marko",
    components_helpers = require("marko/dist/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_fetch = require("node-fetch"),
    fetch = module_fetch.default || module_fetch,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    project_template = require("./components/project.marko"),
    marko_loadTag = marko_helpers.t,
    project_tag = marko_loadTag(project_template),
    marko_dynamicTag = marko_helpers.d,
    await_tag = marko_loadTag(require("marko/dist/core-tags/core/await/renderer")),
    site_layout_template = require("../../components/site-layout"),
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  var request = fetch('https://api.github.com/users/liqmix/repos', {
    method: 'get',
    headers: {
      'Accept': 'application/vnd.github.baptiste-preview+json'
    }}).then((response) => {return response.json()})

  site_layout_tag({
      title: {
          renderBody: function(out) {
            out.w("Projects");
          }
        },
      content: {
          renderBody: function(out) {
            await_tag({
                _provider: request,
                _name: "request",
                then: {
                    renderBody: function(out, response) {
                      var $for$0 = 0;

                      marko_forEach(response.reverse(), function(r) {
                        var $keyScope$0 = "[" + (($for$0++) + "]");

                        out.w("<div class=\"project\">");

                        project_tag({
                            repo: r
                          }, out, __component, "6" + $keyScope$0);

                        out.w("</div>");
                      });
                    }
                  },
                catch: {
                    renderBody: function(out, err) {
                      marko_dynamicTag(out, err, null, null, null, null, __component, "8");
                    }
                  }
              }, out, __component, "3");
          }
        }
    }, out, __component, "0");
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
          code: "div.project{\r\n    margin-bottom: 2.5em;\r\n  }",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/liq-website$1.0.0/src/routes/projects/index.marko",
    tags: [
      "./components/project.marko",
      "marko/dist/core-tags/core/await/renderer",
      "../../components/site-layout"
    ]
  };

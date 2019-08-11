// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/liq-website$1.0.0/src/index.marko",
    components_helpers = require("marko/dist/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    site_layout_template = require("./components/site-layout"),
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  site_layout_tag({
      title: {
          renderBody: function(out) {
            out.w("Home");
          }
        },
      content: {
          renderBody: function(out) {
            out.w("<section><h2>Welcome</h2><p> This is my personal page containing various projects I have either created or contributed to, as well as links to my profiles on several platforms.</p><p>In addition, an interface to my Midi-Genes program is provided, allowing remote execution and then downloading of the generated midi files.</p></section>");
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
    id: "/liq-website$1.0.0/src/index.marko",
    tags: [
      "./components/site-layout"
    ]
  };

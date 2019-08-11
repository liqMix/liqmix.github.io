// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_componentType = "/liq-website$1.0.0/src/components/site-layout/index.marko",
    components_helpers = require("marko/dist/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/dist/core-tags/components/component-globals-tag")),
    asset_var_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/asset-var/renderer")),
    marko_attr = marko_helpers.a,
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/dist/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/dist/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en-US\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width\"><title>");

  marko_dynamicTag(out, input.title, null, null, null, null, __component, "5");

  out.w("</title>");

  lasso_head_tag({}, out, __component, "6");

  out.w("</head><body>");

  component_globals_tag({}, out);

  out.w("<header><h2>Brady Young</h2><h3>liqMix</h3>");

  asset_var_tag({
      values: [
          require.resolve("./logo.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          " alt=\"liqMix\" class=\"logo\">");
      }
    }, out, __component, "25");

  out.w("<h1>");

  marko_dynamicTag(out, input.title, null, null, null, null, __component, "13");

  out.w("</h1><nav class=\"menu\"><button onclick=\"location.href='/'\">Home</button><button onclick=\"location.href='/projects'\">Projects</button><button onclick=\"location.href='/midi-genes'\">Midi-Genes</button><button onclick=\"location.href='https://www.github.com/liqMix/'\">GitHub</button><button onclick=\"location.href='https://www.linkedin.com/in/liqmix/'\">LinkedIn</button><button onclick=\"location.href='https://liqmix-public.s3-us-west-2.amazonaws.com/Resume.pdf'\">Resume</button></nav></header><div class=\"content\">");

  marko_dynamicTag(out, input.content, null, null, null, null, __component, "22");

  out.w("</div>");

  lasso_body_tag({}, out, __component, "23");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    e_: true,
    f_: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/liq-website$1.0.0/src/components/site-layout/index.marko",
    tags: [
      "@lasso/marko-taglib/taglib/head-tag",
      "marko/dist/core-tags/components/component-globals-tag",
      "@lasso/marko-taglib/taglib/asset-var/renderer",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/dist/core-tags/components/init-components-tag",
      "marko/dist/core-tags/core/await/reorderer-renderer"
    ]
  };

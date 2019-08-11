// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              note: "C",
              scale: "major",
              bpm: "120",
              pop_size: "5000",
              epochs: "5000",
              mut_rate: "0.05",
              id: Math.floor(Math.random() * 10000),
              submit: false
            };
        },
        handleSubmit: function() {
          this.state.submit = true;
        },
        handleChange: function(event, el) {
          var val = parseInt(el.value);

          if (el.min) {
            var min = parseInt(el.min);

            var max = parseInt(el.max);

            if (min && (val < min)) {
              el.value = el.min;
            }

            if (max && (val > max)) {
              el.value = el.max;
            }
          }

          this.state[el.name] = el.value;
        }
      },
    marko_componentType = "/liq-website$1.0.0/src/routes/midi-genes/index.marko",
    components_helpers = require("marko/dist/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    site_layout_template = require("../../components/site-layout"),
    site_layout_tag = marko_loadTag(site_layout_template),
    marko_attr = marko_helpers.a,
    _preserve_tag = marko_loadTag(require("marko/dist/core-tags/components/preserve-tag")),
    midi_getter_template = require("./components/midi-getter.marko"),
    midi_getter_tag = marko_loadTag(midi_getter_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<head><title>Midi-Genes</title>");

  lasso_head_tag({}, out, __component, "2");

  out.w("</head>");

  site_layout_tag({
      title: {
          renderBody: function(out) {
            out.w("Midi-Genes");
          }
        },
      content: {
          renderBody: function(out) {
            out.w("<div class=\"disclaimer\">Please wait until your request has finished before making another.<br>BPM can be between 30 and 300.<br>Population and epochs can be between 2 and 50000.</div>");
          }
        }
    }, out, __component, "3");

  if (!state.submit) {
    out.w("<div class=\"titles\"><p class=\"title\">Note</p><p class=\"title\">Scale</p><p class=\"title\">BPM</p><p class=\"title\">Population Size</p><p class=\"title\">Epochs</p><p class=\"title\">Mutation Rate</p></div><div class=\"selections\">");

    var $key$0 = __component.c_("17");

    _preserve_tag({
        key: $key$0,
        renderBody: function(out) {
          out.w("<select name=\"note\"" +
            marko_attr("value", state.note) +
            "><option value=\"C\">C</option><option value=\"C#\">C#</option><option value=\"D\">D</option><option value=\"D#\">D#</option><option value=\"E\">E</option><option value=\"F\">F</option><option value=\"F#\">F#</option><option value=\"G\">G</option><option value=\"G#\">G#</option><option value=\"A\">A</option><option value=\"A#\">A#</option><option value=\"B\">B</option></select>");
        }
      }, out);

    var $key$1 = __component.c_("30");

    _preserve_tag({
        key: $key$1,
        renderBody: function(out) {
          out.w("<select name=\"scale\"" +
            marko_attr("value", state.scale) +
            "><option value=\"major\">Major</option><option value=\"minor\">Minor</option></select>");
        }
      }, out);

    out.w("<input name=\"bpm\" type=\"number\" min=\"30\" max=\"300\"" +
      marko_attr("value", state.bpm) +
      "><input name=\"pop_size\" type=\"number\" min=\"2\" max=\"50000\"" +
      marko_attr("value", state.pop_size) +
      "><input name=\"epochs\" type=\"number\" min=\"2\" max=\"50000\"" +
      marko_attr("value", state.epochs) +
      "><input name=\"mut_rate\" type=\"number\" min=\"0.0\" max=\"1.0\" step=\"0.01\"" +
      marko_attr("value", state.mut_rate) +
      "></div><br><button class=\"submit\">Generate</button>");
  } else {
    midi_getter_tag({
        tosend: state
      }, out, __component, "39");
  }
}

marko_template._ = marko_renderer(render, {
    f_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "div.disclaimer {\r\n    font-style: normal;\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n    text-align: center;\r\n  }\r\n\r\n  div.titles {\r\n    margin-top: 2em;\r\n    margin-bottom: 0em;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  p.title {\r\n    margin: 0em 1em;\r\n  }\r\n\r\n  div.selections {\r\n    font-size: 1em;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 1em;\r\n  }\r\n  select {\r\n    margin: 0em 1em;\r\n  }\r\n  input {\r\n    margin: 0em 1em;\r\n  }\r\n  select:focus {\r\n    border: 2px solid #5a2e0f;\r\n  }\r\n  input:focus {\r\n    border: 2px solid #5a2e0f;\r\n  }\r\n\r\n  button.submit {\r\n    display: block;\r\n    text-align: center;\r\n    margin: auto;\r\n  }",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/liq-website$1.0.0/src/routes/midi-genes/index.marko",
    component: "./",
    tags: [
      "@lasso/marko-taglib/taglib/head-tag",
      "../../components/site-layout",
      "marko/dist/core-tags/components/preserve-tag",
      "./components/midi-getter.marko"
    ]
  };

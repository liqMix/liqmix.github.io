// Compiled using marko@4.18.11 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/dist/html").t(__filename),
    marko_component = {
    onCreate: function () {
        this.state = {
            response: null,
            error: null,
            link: null
        };
    },
    onMount: function () {
        this.sendRequest(this.input.tosend);
    },
    sendRequest: function (input) {
        var request = fetch('https://ngtdt9lmch.execute-api.us-west-2.amazonaws.com/test/midiCaller', {
            method: 'post',
            body: JSON.stringify(input)
        }).then(response => {
            this.state.response = JSON.stringify(response);
            this.checkFile(input.id);
        }).catch(error => {
            this.state.error = error;
        });
    },
    checkFile: function (id) {
        var link = 'https://s3-us-west-2.amazonaws.com/midigenes.generated/output' + id + '.mid';
        var request = new XMLHttpRequest();
        var self = this;
        request.open('GET', link);
        request.send();
        request.onload = function () {
            if (request.status !== 200) {
                setTimeout(function () {
                    request.open('GET', link);
                    request.send();
                }, 2000);
            } else {
                self.state.link = link;
            }
        };
    }
},
    marko_componentType = "/liq-website$1.0.0/src/routes/midi-genes/components/midi-getter.marko",
    components_helpers = require("marko/dist/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/dist/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"page\"><br><br>Note: " +
    marko_escapeXml(input.tosend.note) +
    " Scale: " +
    marko_escapeXml(input.tosend.scale) +
    " BPM: " +
    marko_escapeXml(input.tosend.bpm) +
    "<br>Population-Size: " +
    marko_escapeXml(input.tosend.pop_size) +
    " Epochs: " +
    marko_escapeXml(input.tosend.epochs) +
    " Mutation Rate: " +
    marko_escapeXml(input.tosend.mut_rate) +
    "<br><br>");

  if (state.link) {
    out.w("<button onclick=\"location.href='" +
      marko_escapeXmlAttr(state.link) +
      "'\">Download</button>");
  } else if (state.error) {
    out.w("<p class=\"status\">" +
      marko_escapeXml(state.error) +
      "</p>");
  } else {
    out.w("<p class=\"status\">Generating...</p>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    f_: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "div.page {\r\n    text-align: center;\r\n  }",
          virtualPath: "./midi-getter.marko.css",
          path: "./midi-getter.marko"
        }
    ],
    id: "/liq-website$1.0.0/src/routes/midi-genes/components/midi-getter.marko",
    component: "./midi-getter.marko"
  };

var express = require('express');
var router = express.Router();
const axios = require('axios')
const { JSDOM } = require('jsdom')
const dom = new JSDOM('')
global.window = dom.window
global.DOMParser = window.DOMParser
const { JsonToMjml } = require('easy-email-core');
const mjml = require('mjml-browser')
let newHtml = ''
/* GET users listing. */
router.get('/', function(req, res, next) {
  // const mjmldata = JsonToMjml({
  //   data: originData,
  //   context: originData,
  //   mode: 'production',
  // });
  res.header('Content-Type', 'text/html')
  // const html = mjml(mjmldata).html
  // console.log(html)
  res.send(newHtml)
});

router.post("/informHerb", function(req, res, next) {
  console.log(req.body)
  // originData = req.body
  res.send({
    code: 0,
    result: 'ok!'
  })
});

router.post("/json2html", function(req, res, next) {
  // console.log(JSON.stringify(req.body.content))
  const content = req.body.content
  if (!content?.type || !content?.children || !content?.data.value || !content?.attributes) {
    res.send({
      code: 1,
      msg: 'content格式不正确, 格式: {"type": "page", "children": [], "data": {"value": {}}, "attributes": {}}',
      result: {
        content: '',
        mjml: '',
        html: '',
      }
    })
    return
  }
  const mjmldata = JsonToMjml({
    data: content,
    context: content,
    mode: 'production',
  });
  const html = mjml(mjmldata).html
  res.send({
    code: 0,
    result: {
      content: content,
      mjml: mjmldata,
      html,
    }
  })
  newHtml = html
});

module.exports = router;
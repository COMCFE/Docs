(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{519:function(t,e,s){"use strict";s.r(e);var a=s(23),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"短信验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#短信验证码","aria-hidden":"true"}},[t._v("#")]),t._v(" 短信验证码")]),t._v(" "),s("h2",{attrs:{id:"验证码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证码","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证码")]),t._v(" "),s("p",[s("strong",[t._v("方式")])]),t._v(" "),s("p",[s("code",[t._v("POST")])]),t._v(" "),s("p",[s("strong",[t._v("路径")])]),t._v(" "),s("p",[s("code",[t._v("/api/v1/verification/code")])]),t._v(" "),s("p",[s("strong",[t._v("参数")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("仅支持手机号,已授权用户不需要传手机号")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("scene")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("场景: register-注册 forget-pass-忘记密码 login-登录 pay-pass-设置支付密码 cash-提现")])])])]),t._v(" "),s("p",[s("strong",[t._v("响应")])]),t._v(" "),s("p",[s("code",[t._v("Status code 200")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发送成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"验证码是否有效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证码是否有效","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证码是否有效")]),t._v(" "),s("p",[s("strong",[t._v("方式")])]),t._v(" "),s("p",[s("code",[t._v("POST")])]),t._v(" "),s("p",[s("strong",[t._v("路径")])]),t._v(" "),s("p",[s("code",[t._v("/api/v1/verification/code/valid")])]),t._v(" "),s("p",[s("strong",[t._v("参数")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("必须")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("phone")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("手机号，如用户是已登录不需传递")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("code")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("验证码")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("scene")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("验证场景")])])])]),t._v(" "),s("p",[s("strong",[t._v("响应")])]),t._v(" "),s("p",[s("code",[t._v("Status code 200")])]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"发送成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" /*bool "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("-验证成功*/\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])},[],!1,null,null,null);n.options.__file="code.md";e.default=n.exports}}]);
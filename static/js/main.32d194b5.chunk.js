(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){e.exports=n(67)},43:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(6),r=n.n(c),l=(n(43),n(28)),s=n(29),i=n(37),u=n(36),m=n(35),d=(n(66),"https://api.etherscan.io/api?apikey=1ZXJGJFBZ64U8CFFXFGZA7SUUP182FPU3W&address=0xa145ac099e3d2e9781c9c848249e2e6b256b030d&module=account&"),h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={tokens:[],balance:0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(d+"action=tokentx&startblock=0&endblock=999999999&sort=asc").then((function(e){return e.json()})).then((function(t){return e.setState({tokens:t.result})})),fetch(d+"action=balance&tag=latest").then((function(e){return e.json()})).then((function(t){return e.setState({balance:t.result})}))}},{key:"render",value:function(){var e=this.state,t=e.tokens,n=e.balance,a={columns:[{label:"TokenName",field:"tokenName",sort:"asc"},{label:"tokenSymbol",field:"tokenSymbol",sort:"asc"},{label:"Value",field:"value",sort:"asc"}],rows:t};return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",null,o.a.createElement("h2",{className:"mb-4"},"Ether"),o.a.createElement("p",{className:"mb-4"},n/Math.pow(10,18))),o.a.createElement(m.c,{striped:!0,bordered:!0,small:!0,data:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.32d194b5.chunk.js.map
(this["webpackJsonpreact-test-app"]=this["webpackJsonpreact-test-app"]||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var n=i(0),l=i.n(n),o=i(6),c=i.n(o),s=(i(12),i(2)),a=i(4),r=i(3),u=i(1),d=(i(13),0),h=function e(t,i,n){Object(u.a)(this,e),this.id=t,this.matched=!1,this.emoji=i,this.mask=n,this.isOpen=!1},k=function(e,t){return Math.floor(Math.random()*t+e)};function g(e){return l.a.createElement("button",{id:e.tile.id,onClick:function(t){return e.onClick(t)},className:(e.tile.matched,"item")},e.tile.isOpen?e.tile.emoji:e.tile.mask)}var m=function(e){Object(a.a)(i,e);var t=Object(r.a)(i);function i(e){return Object(u.a)(this,i),console.log("rendering body"),t.call(this,e)}return Object(s.a)(i,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},this.props.tiles.map((function(t,i){return l.a.createElement(g,{key:i,tile:t,onClick:function(t){return e.props.onClick(t)}})})))}}]),i}(l.a.Component),f=function(e){Object(a.a)(i,e);var t=Object(r.a)(i);function i(e){var n;return Object(u.a)(this,i),(n=t.call(this,e)).state={name:"dilli",click1TileId:-1,click2TileId:-1,clickCounter:0,maxTileCount:40,tiles:[]},n}return Object(s.a)(i,[{key:"calculateTileCount",value:function(){console.log("calulating tile count");var e=window.innerWidth,t=window.innerHeight,i=5;return t>900?(console.log(t,"desktop h"),i=12):t>801&&t<=899?(console.log(t,"tablets h"),i=10):t>641&&t<=800?(console.log(t,"ipad h"),i=8):t>481&&t<=640?(console.log(t,"phone h"),i=8):t>320&&t<=480?(console.log(t,"phone h"),i=6):(console.log(t,"unknown phone h"),i=5),e>1025?(console.log(e,"desktop w"),d=15*i):e>801&&e<=1024?(console.log(e,"tablets w"),d=12*i):e>641&&e<=800?(console.log(e,"ipad w"),d=10*i):e>320&&e<=640?(console.log(e,"phone w"),d=5*i):(console.log(e,"unknown phone w"),d=5*i),console.log("new tile count",d),d%2===0?d:d+1}},{key:"buildTileData",value:function(){var e=this.calculateTileCount();console.log("build tile data",e);for(var t=[],i="\n    \ud83d\udd25,\ud83d\ude48,\u2764\ufe0f,\ud83d\udc36,\ud83e\udd8a,\ud83e\udd81,\ud83e\udd9a,\ud83e\udda9,\ud83d\udca3,\ud83c\udf88,\ud83d\udc8e,\u260e\ufe0f,\ud83d\uddff,\ud83c\udf49,\ud83c\udf4b,\ud83c\udf4e,\ud83e\udd6d,\ud83c\udf55,\ud83c\udf5f,\ud83c\udf82,\ud83d\udc2c,\n    \ud83e\udd8b,\ud83c\udf37,\ud83c\udf41,\ud83c\udf1e,\ud83c\udf08,\ud83c\udfdd\ufe0f,\u26bd,\ud83c\udfad,\ud83d\ude0d,\ud83e\udd20,\ud83e\udd21,\ud83d\udc7b,\ud83d\udc78,\ud83e\uddd9,\ud83e\uddde,\ud83e\udd84,\ud83c\udf6b,\ud83c\udf6d,\ud83d\udc90,\ud83c\udf0a,\n    \ud83e\uddd9\u200d\u2640\ufe0f,\ud83e\uddda\u200d\u2640\ufe0f,\ud83e\uddde\u200d\u2640\ufe0f,\ud83d\udc18,\ud83d\udc30,\ud83d\udc3b,\ud83d\udc28,\ud83d\udc27,\ud83d\udd4a\ufe0f,\ud83e\udda2,\ud83e\udd9c,\ud83d\udc22,\ud83e\udd88,\ud83d\udc1d,\ud83d\udc1e,\ud83c\udf0a,\u2603\ufe0f,\ud83c\udf1c,\ud83c\udf40,\ud83e\udd80,\ud83c\udf3b,\n    \ud83d\udc8c,\ud83e\udded,\u231b,\u26f1\ufe0f,\ud83e\udde8,\ud83c\udf80,\ud83c\udf81,\ud83e\ude81,\ud83e\uddf8,\ud83d\udd0b,\ud83d\udd11,\ud83d\udd12,\ud83d\udd2b,\ud83e\uddf2,\ud83d\uded2,\ud83e\udddb\u200d\u2640\ufe0f,\ud83d\udc69\u200d\ud83c\udf73,\ud83e\udd17,\ud83d\udc7d,\ud83e\udd7a\n    ".split(",").splice(0,e/2),n=i.slice(),l=0;l<e;l++){var o=0!==i.length?k(0,i.length):k(0,n.length),c=0!==i.length?i[o]:n[o];0!==i.length?i.splice(o,1):n.splice(o,1),t.push(new h(l,c,"\ud83d\ude1c"))}this.setState({tiles:t},(function(){return console.log("tiles are built by builder")}))}},{key:"matchTiles",value:function(e,t){console.log("made copy of tiles");var i=this.state.tiles.slice();i[e].isOpen=!0,console.log("matchig tiles",this.state.click1TileId,this.state.click2TileId),-1!==this.state.click1TileId&&-1!==this.state.click2TileId?this.state.tiles[this.state.click1TileId].emoji===this.state.tiles[this.state.click2TileId].emoji?(i[this.state.click1TileId].matched=!0,i[this.state.click2TileId].matched=!0,console.log("tile matched"),this.setState({click1TileId:-1,click2TileId:-1},(function(){return console.log("matched tiles closed")}))):(console.log("tile not matched"),i[this.state.click1TileId].matched=!1,i[this.state.click2TileId].matched=!1,this.state.clickCounter%2===1?(this.setState({click2TileId:-1},(function(){return console.log("click1 tile closed")})),i[this.state.click2TileId].isOpen=!1):(i[this.state.click1TileId].isOpen=!1,this.setState({click1TileId:-1},(function(){return console.log("click1 tile closed")})))):console.log("tile match cancelled"),this.setState({tiles:i},(function(){console.log("tiles updated for click event id",t),console.log("##################################################")}))}},{key:"handleClick",value:function(e){var t=this,i=e.target.id;this.state.tiles[i].isOpen?console.warn("click on invalid tile"):this.setState({clickCounter:this.state.clickCounter+1},(function(){console.log("******************************************************"),console.log("for click id",t.state.clickCounter,t.state.clickCounter%2,t.state.clickCounter%2===0),t.state.clickCounter%2===1?(console.log("seting click1 tile id"),t.setState({click1TileId:i},(function(){console.log("click1tileid set"),t.matchTiles(i,t.state.clickCounter)}))):(console.log("seting click2 tile id"),t.setState({click2TileId:i},(function(){console.log("click2tileid set"),t.matchTiles(i,t.state.clickCounter)})))}))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){console.log("window resize"),e.buildTileData()})),window.addEventListener("load",(function(){console.log("window resize"),e.buildTileData()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",(function(){console.log("window resize"),e.buildTileData()})),window.addEventListener("load",(function(){console.log("window resize"),e.buildTileData()}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(m,{className:"center-me",tiles:this.state.tiles,onClick:function(t){return e.handleClick(t)}}))}}]),i}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,i){e.exports=i(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c6f3cd06.chunk.js.map
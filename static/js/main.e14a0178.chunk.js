(this.webpackJsonptaptap=this.webpackJsonptaptap||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var n=i(0),l=i.n(n),c=i(6),a=i.n(c),o=(i(12),i(2)),s=i(4),r=i(3),d=i(1),u=(i(13),function e(t,i,n){Object(d.a)(this,e),this.id=t,this.matched=!1,this.emoji=i,this.mask=n,this.isOpen=!1}),h=function(e,t){return Math.floor(Math.random()*t+e)};function m(e){return l.a.createElement("button",{id:e.tile.id,onClick:function(t){return e.onClick(t)},className:(e.tile.matched,"item")},e.tile.isOpen?e.tile.emoji:e.tile.mask)}var k=function(e){Object(s.a)(i,e);var t=Object(r.a)(i);function i(e){return Object(d.a)(this,i),console.log("rendering body"),t.call(this,e)}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},this.props.tiles.map((function(t,i){return l.a.createElement(m,{key:i,tile:t,onClick:function(t){return e.props.onClick(t)}})})))}}]),i}(l.a.Component),f=function(e){Object(s.a)(i,e);var t=Object(r.a)(i);function i(e){var n;return Object(d.a)(this,i),(n=t.call(this,e)).state={name:"taptap by Dilli",click1TileId:-1,click2TileId:-1,clickCounter:0,matchCounter:0,tiles:[],timerHandle:void 0,maxTileNumber:25},n}return Object(o.a)(i,[{key:"buildTileData",value:function(){var e=this.state.maxTileNumber,t=Math.floor(e/2),i=[],n="\n    \ud83d\udd25,\ud83d\ude48,\u2764\ufe0f,\ud83d\udc36,\ud83e\udd8a,\ud83e\udd81,\ud83d\udca3,\ud83c\udf88,\ud83d\ude1c,\u260e\ufe0f,\ud83d\uddff,\ud83c\udf49,\ud83c\udf4b,\ud83c\udf4e,\ud83c\udf55,\ud83c\udf5f,\ud83c\udf82,\ud83d\udc2c,\n    \ud83e\udd8b,\ud83c\udf37,\ud83c\udf41,\ud83c\udf1e,\ud83c\udf08,\ud83c\udfdd\ufe0f,\u26bd,\ud83c\udfad,\ud83d\ude0d,\ud83e\udd20,\ud83d\udc7b,\ud83d\udc78,\ud83e\uddd9,\ud83e\uddde,\ud83e\udd84,\ud83c\udf6b,\ud83c\udf6d,\ud83d\udc90,\ud83c\udf0a,\n    \ud83e\uddd9\u200d\u2640\ufe0f,\ud83e\uddda\u200d\u2640\ufe0f,\ud83e\uddde\u200d\u2640\ufe0f,\ud83d\udc18,\ud83d\udc30,\ud83d\udc3b,\ud83d\udc28,\ud83d\udc27,\ud83d\udd4a\ufe0f,\ud83d\udc22,\ud83e\udd88,\ud83d\udc1d,\ud83d\udc1e,\ud83c\udf0a,\u2603\ufe0f,\ud83c\udf1c,\ud83c\udf40,\ud83e\udd80,\ud83c\udf3b,\n    \ud83d\udc8c,\u231b,\u26f1\ufe0f,\ud83c\udf80,\ud83c\udf81,\ud83d\udd0b,\ud83d\udd11,\ud83d\udd12,\ud83d\udd2b,\ud83d\uded2,\ud83e\udddb\u200d\u2640\ufe0f,\ud83d\udc69\u200d\ud83c\udf73,\ud83e\udd17,\ud83d\udc7d\n    ".split(","),l=[],c=[],a=Math.floor(Math.random()*n.length);c=(l=(l=n.length-a>=t?n.slice(a):n.slice(a-t)).slice(0,t)).slice();for(var o=0;o<e;o++){var s=0!==l.length?h(0,l.length):h(0,c.length),r=0!==l.length?l[s]:c[s];0!==l.length?l.splice(s,1):c.splice(s,1),i.push(new u(o,void 0===r?"\ud83e\udd21":r,"\ud83d\udc8e"))}this.setState({tiles:i},(function(){return console.log("tiles are built by builder")}))}},{key:"matchTiles",value:function(e,t){var i=this;console.log("made copy of tiles");var n=this.state.tiles.slice();n[e].isOpen=!0,console.log("matchig tiles",this.state.click1TileId,this.state.click2TileId),-1!==this.state.click1TileId&&-1!==this.state.click2TileId?this.state.tiles[this.state.click1TileId].emoji===this.state.tiles[this.state.click2TileId].emoji?(n[this.state.click1TileId].matched=!0,n[this.state.click2TileId].matched=!0,console.log("tile matched"),this.setState({click1TileId:-1,click2TileId:-1,matchCounter:this.state.matchCounter+1},(function(){console.log("checking match",i.state.matchCounter,Math.floor(i.state.maxTileNumber/2),i.state.timerHandle),i.state.matchCounter===Math.floor(i.state.maxTileNumber/2)&&(console.log("match stopped;",i.state.matchCounter,Math.floor(i.state.maxTileNumber/2),i.state.timerHandle),console.log("clearning interval",i.state.timerHandle),document.getElementById("result").innerHTML='<span>\ud83c\udf89\ud83c\udf89\ud83c\udf89Congratulations\ud83c\udf89\ud83c\udf89\ud83c\udf89<br>\ud83d\udc4fYou\'ve completed\ud83d\udc4f</span>\n            <br><button id="btnReplay" onclick="window.location.reload()">Replay</button>',window.clearInterval(i.state.timerHandle))}))):(console.log("tile not matched"),n[this.state.click1TileId].matched=!1,n[this.state.click2TileId].matched=!1,this.state.clickCounter%2===1?(this.setState({click2TileId:-1},(function(){return console.log("click1 tile closed")})),n[this.state.click2TileId].isOpen=!1):(n[this.state.click1TileId].isOpen=!1,this.setState({click1TileId:-1},(function(){return console.log("click1 tile closed")})))):console.log("tile match cancelled"),this.setState({tiles:n},(function(){console.log("tiles updated for click event id",t),console.log("##################################################")}))}},{key:"initTimer",value:function(e){var t=this,i=document.getElementById(e),n=window.setInterval((function(){i.innerText=""===i.innerText?0:parseInt(i.innerText)+1}),1e3);this.setState({timerHandle:n},(function(){return console.log("timer handle is set",n,t.state.timerHandle)}))}},{key:"handleClick",value:function(e){var t=this,i=e.target.id;this.state.tiles[i].isOpen?console.warn("click on invalid tile"):this.setState({clickCounter:this.state.clickCounter+1},(function(){1===t.state.clickCounter&&(t.initTimer("timer"),console.log("timer started")),console.log("******************************************************"),console.log("for click id",t.state.clickCounter,t.state.clickCounter%2,t.state.clickCounter%2===0),t.state.clickCounter%2===1?(console.log("seting click1 tile id"),t.setState({click1TileId:i},(function(){console.log("click1tileid set"),t.matchTiles(i,t.state.clickCounter)}))):(console.log("seting click2 tile id"),t.setState({click2TileId:i},(function(){console.log("click2tileid set"),t.matchTiles(i,t.state.clickCounter)})))}))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){console.log("window resize"),e.buildTileData()})),window.addEventListener("load",(function(){console.log("window resize"),e.buildTileData()}))}},{key:"componentWillUnmount",value:function(){var e=this;window.removeEventListener("resize",(function(){console.log("window resize"),e.buildTileData()})),window.addEventListener("load",(function(){console.log("window resize"),e.buildTileData()}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("header",{id:"header"},"Find matches"),l.a.createElement(k,{className:"center-me",tiles:this.state.tiles,onClick:function(t){return e.handleClick(t)}}),l.a.createElement("div",{id:"info-container"},l.a.createElement("p",{id:"clicks-container"}," Clicks: ",l.a.createElement("span",{id:"clicks"},this.state.clickCounter)),l.a.createElement("p",{id:"matches-container"}," Matches: ",l.a.createElement("span",{id:"matches"},this.state.matchCounter)),l.a.createElement("p",{id:"timer-container"},"Timer: ",l.a.createElement("span",{id:"timer"},"0")),l.a.createElement("p",{id:"result-container"},l.a.createElement("span",{id:"result"}))))}}]),i}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,i){e.exports=i(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e14a0178.chunk.js.map
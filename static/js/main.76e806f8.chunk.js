(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(21),a(9)),i=a(10),s=a(13),u=a(11),m=a(14),h=a(28),f=a(30),d=a(31),g=a(27),p=a(6),E=function(e){var t,a=e.history;e.loadImages;return r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),a.push("/search/".concat(t.value)),t.value=""}},r.a.createElement("input",{type:"search",name:"search",placeholder:"Search",required:!0,ref:function(e){return t=e}}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement("svg",{fill:"#fff",height:"24",viewBox:"0 0 23 23",width:"24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}))))},v=a(29),w=function(){return r.a.createElement("nav",{className:"main-nav"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.a,{to:"/cat"},"Cats")),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/dog"},"Dogs")),r.a.createElement("li",null,r.a.createElement(v.a,{to:"/computer"},"Computers"))))},b=function(e){var t=e.source;return r.a.createElement("li",null,r.a.createElement("img",{src:t,alt:""}))},y=function(){return r.a.createElement("li",{className:"not-found"},r.a.createElement("h3",null,"No Results Found"),r.a.createElement("p",null,"You search did not return any results. Please try again."))},j=function(e){var t,a=e.images;return t=e.finishedLoading?0===a.length?r.a.createElement(y,null):a.map(function(e){return r.a.createElement(b,{source:e.image,key:e.id})}):r.a.createElement("h3",null,"Loading..."),r.a.createElement("div",{className:"photo-container"},r.a.createElement("h2",null,"Results"),r.a.createElement("ul",null,t))},k="a235f7a6f0001cf068cb9fd98e13f1c2",L=Object(p.a)(),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={images:[],finishedLoading:!0},a.loadImages=function(e){a.setState({finishedLoading:!1});fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(k,"&format=json&tags=").concat(e,"&page=1&per_page=").concat(16,"&nojsoncallback=1")).then(function(e){return e.json()}).then(function(e){return e.photos.photo}).then(function(e){return a.setState({images:e.map(function(e){return{image:"https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg"),id:e.id}})})}).then(function(){return a.setState({finishedLoading:!0})}).catch(function(e){return console.log(e)}).catch(function(){return a.setState({finishedLoading:!0})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=function(t){var a=Object(h.a)(t.pathname,{path:"/search/:tag"})||Object(h.a)(t.pathname,{path:"/:tag"});console.log(a),a&&e.loadImages(a.params.tag)};t(L.location),L.listen(t)}},{key:"render",value:function(){var e=this;return r.a.createElement(f.a,{history:L},r.a.createElement("div",{className:"container"},r.a.createElement(E,{history:L,loadImages:this.loadImages}),r.a.createElement(w,null),r.a.createElement(d.a,null,r.a.createElement(g.a,{exact:!0,path:"/",render:function(){return r.a.createElement("h3",null,"search an Item")}}),r.a.createElement(g.a,{exact:!0,path:"/:tag",render:function(){return r.a.createElement(j,{images:e.state.images,finishedLoading:e.state.finishedLoading})}}),r.a.createElement(g.a,{exact:!0,path:"/search/:tag",render:function(){return r.a.createElement(j,{images:e.state.images,finishedLoading:e.state.finishedLoading})}}),r.a.createElement(g.a,{render:function(){return r.a.createElement("h3",null,"Error 404: this path does not exist")}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.76e806f8.chunk.js.map
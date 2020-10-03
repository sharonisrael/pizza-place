(this["webpackJsonppizza-place"]=this["webpackJsonppizza-place"]||[]).push([[0],{51:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"addPizza",(function(){return O})),t.d(n,"removePizza",(function(){return P})),t.d(n,"resetPizzas",(function(){return j}));var r=t(0),l=t.n(r),c=t(13),i=t.n(c),o=(t(56),t(5)),u=t(49),s=t(23),m=t(10);var p=function(){return l.a.createElement(u.a,{bg:"primary",variant:"dark"},l.a.createElement(s.a,{className:"mr-auto"},l.a.createElement(s.a.Link,{href:"/pizzas"},"Pizzas"),l.a.createElement(s.a.Link,{href:"/cart"},l.a.createElement("img",{src:"/images/online_cart_empty.png",height:"50",alt:"cart"})),l.a.createElement(s.a.Link,{href:"/contact"},"Contact Us")),l.a.createElement(m.a,{variant:"outline-info"},"Sign in"))},z=t(28),d=t(29),E=t(34),f=t(32),h=function(e){Object(E.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("h2",null,"Page not found")}}]),t}(r.Component),v=t(22),g=t(19);var b=function(e){return l.a.createElement(g.a,{key:e.pizza.id,style:{margin:"10px"}},l.a.createElement(g.a.Img,{variant:"top",src:e.pizza.image,style:{height:"250px",width:"300px",padding:"10px"}}),l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Title,null,e.pizza.name),l.a.createElement(g.a.Text,null,e.pizza.description),l.a.createElement(m.a,{variant:"primary",onClick:function(){return e.addPizza(e.pizza)},style:{margin:"10px"}},"Add"),l.a.createElement(m.a,{variant:"primary",onClick:function(){return e.removePizza(e.pizza)},style:{margin:"10px"}},"Remove")))},y=t(17);function O(e){return{type:"ADD_PIZZA",pizza:e}}function P(e){return{type:"REMOVE_PIZZA",pizza:e}}function j(){return{type:"RESET_PIZZAS"}}var _=t(8),x=t(39),k=t.n(x),w=t(45);function S(e){return C.apply(this,arguments)}function C(){return(C=Object(w.a)(k.a.mark((function e(a){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.ok){e.next=2;break}return e.abrupt("return",a.json());case 2:if(400!==a.status){e.next=7;break}return e.next=5,a.text();case 5:throw t=e.sent,new Error(t);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){throw console.error("API call failed. "+e),e}var A=function(e){Object(E.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={catalog_pizzas:[]},e.addPizza=function(a){e.props.actions.addPizza(a)},e.removePizza=function(a){e.props.actions.removePizza(a)},e.formatTotal=function(){return Object(v.a)(e.props.pizzas).reduce((function(e,a){return e+a.price}),0)},e.isOrderPizzasDisabled=function(){return 0===e.props.pizzas.length},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;(console.log("getAllPizzas api/all_pizzas"),fetch("http://localhost:3001/pizzas/api/all_pizzas").then(S).catch(N)).then((function(a){console.log(a.length),e.setState({catalog_pizzas:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Pizzas"),l.a.createElement("hr",null),l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},this.state.catalog_pizzas.map((function(a){return l.a.createElement("div",{key:a.id},l.a.createElement(b,{pizza:a,addPizza:e.addPizza,removePizza:e.removePizza}))}))),l.a.createElement("br",null),l.a.createElement(m.a,{href:"/cart",variant:"success",style:{margin:"10px"},disabled:this.isOrderPizzasDisabled()},"Order pizza"),l.a.createElement("span",null,"Total ",this.formatTotal(),"$"))}}]),t}(l.a.Component);var I=Object(y.b)((function(e){return{pizzas:e.pizzas}}),(function(e){return{actions:Object(_.b)(n,e)}}))(A),Z=t(31),D=t(18),R=t(50),T=t(46);var M=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"List of pizzas"),l.a.createElement(T.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Pizza"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,e.pizzas.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("th",null,e.name),l.a.createElement("th",null,e.price))})))))};function J(e){var a="form-group";return e.error.length>0&&(a+=" has-error"),l.a.createElement("div",{className:a},l.a.createElement("label",{htmlFor:e.id},e.label),l.a.createElement("div",{className:"field"},l.a.createElement("input",{id:e.id,type:"text",onChange:e.onChange,name:e.name,className:"form-control",value:e.value})),e.error&&l.a.createElement("div",{className:"alert alert-danger"},e.error))}J.defaultProps={error:""};var L=J;var F=function(e){return l.a.createElement("form",{onSubmit:e.onSubmit},l.a.createElement(L,{id:"full_name",label:"Full name",onChange:e.onChange,name:"full_name",value:e.order.full_name}),l.a.createElement(L,{id:"address",label:"Address",onChange:e.onChange,name:"address",value:e.order.address}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"payment"},"Payment"),l.a.createElement("div",{className:"field"},l.a.createElement("select",{id:"payment",name:"payment",onChange:e.onChange,value:e.order.payment||"",className:"form-control"},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"1"},"On phone"),l.a.createElement("option",{value:"2"},"On delivery")))),l.a.createElement("input",{type:"submit",value:"Order",className:"btn btn-lg btn-success",disabled:function(){var a=e.order.full_name,t=e.order.address;return 0===a.length||0===t.length}()}),l.a.createElement(m.a,{variant:"danger btn-lg",style:{margin:"10px"},onClick:e.onReset},"Reset"))};var B=Object(y.b)((function(e){return{pizzas:e.pizzas}}),(function(e){return{actions:Object(_.b)(n,e)}}))((function(e){var a=Object(r.useState)({full_name:"",address:"",payment:1}),t=Object(R.a)(a,2),n=t[0],c=t[1];return l.a.createElement("div",{style:{width:"400px"}},l.a.createElement("h1",null,"Cart"),l.a.createElement("hr",null),l.a.createElement(F,{order:n,onChange:function(e){c(Object(D.a)(Object(D.a)({},n),{},Object(Z.a)({},e.target.name,e.target.value)))},onSubmit:function(a){a.preventDefault(),console.log("Issue order: "+JSON.stringify(n)),e.actions.resetPizzas(),e.history.push("/")},onReset:function(){e.actions.resetPizzas()}}),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement(M,{pizzas:e.pizzas}))})),V=t(47),U=function(){return l.a.createElement("div",null,l.a.createElement(V.a,null,l.a.createElement("h1",null,"Pizza place"),l.a.createElement("img",{src:"/images/pizza-place.jpg",alt:"place",rounded:"true",style:{height:"250px"}}),l.a.createElement("p",null,"We are always happy to serve you pizza ",l.a.createElement("br",null),"Better order from the web"),l.a.createElement("p",null,l.a.createElement(m.a,{href:"/pizzas",variant:"primary"},"Order pizza"))))};var X=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(p,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:I}),l.a.createElement(o.a,{path:"/pizzas",exact:!0,component:I}),l.a.createElement(o.a,{path:"/cart",component:B}),l.a.createElement(o.a,{path:"/contact",component:U}),l.a.createElement(o.a,{component:h})))},W=t(37),$={pizzas:[]};var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$.pizzas,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PIZZA":var t=1;e.length>0&&(t=Math.max.apply(Math,e.map((function(e){return e.id})))+1);var n=Object(D.a)(Object(D.a)({},a.pizza),{},{id:t}),r=[].concat(Object(v.a)(e),[n]);return r;case"REMOVE_PIZZA":var l=Object(v.a)(e),c=l.findIndex((function(e){return e.name===a.pizza.name}));return c>=0&&l.splice(c,1),l;case"RESET_PIZZAS":var i=[];return i;default:return e}},G=Object(_.c)({pizzas:q}),H=t(48),K=t.n(H);var Q=function(e){var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,t=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),n=Object(_.e)(G,t,a(Object(_.a)(K()())));return n.subscribe((function(){return function(e){try{var a=JSON.stringify(e);localStorage.setItem("state",a)}catch(t){}}(n.getState())})),n}();i.a.render(l.a.createElement(y.a,{store:Q},l.a.createElement(W.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(X,null)))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.e617e9f1.chunk.js.map
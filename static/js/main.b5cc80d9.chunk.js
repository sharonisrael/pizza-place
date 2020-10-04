(this["webpackJsonppizza-place"]=this["webpackJsonppizza-place"]||[]).push([[0],{49:function(e,a,t){e.exports=t(66)},66:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"addPizza",(function(){return O})),t.d(n,"removePizza",(function(){return P})),t.d(n,"resetPizzas",(function(){return _}));var r=t(0),l=t.n(r),i=t(13),c=t.n(i),o=(t(54),t(5)),u=t(47),m=t(23),s=t(10);var p=function(){return l.a.createElement(u.a,{bg:"primary",variant:"dark"},l.a.createElement(m.a,{className:"mr-auto"},l.a.createElement(m.a.Link,{href:"/#/pizzas"},"Pizzas"),l.a.createElement(m.a.Link,{href:"/#/cart"},l.a.createElement("img",{src:"/pizza-place/images/online_cart_empty.png",height:"50",alt:"cart"})),l.a.createElement(m.a.Link,{href:"#/contact"},"Contact Us")),l.a.createElement(s.a,{variant:"outline-info"},"Sign in"))},z=t(28),d=t(29),E=t(34),f=t(32),v=function(e){Object(E.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("h2",null,"Page not found")}}]),t}(r.Component),h=t(19),g=t(20);var b=function(e){return l.a.createElement(g.a,{key:e.pizza.id,style:{margin:"10px"}},l.a.createElement(g.a.Img,{variant:"top",src:"/pizza-place"+e.pizza.image,style:{height:"250px",width:"300px",padding:"10px"}}),l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Title,null,e.pizza.name),l.a.createElement(g.a.Text,null,e.pizza.description),l.a.createElement(s.a,{variant:"primary",onClick:function(){return e.addPizza(e.pizza)},style:{margin:"10px"}},"Add"),l.a.createElement(s.a,{variant:"primary",onClick:function(){return e.removePizza(e.pizza)},style:{margin:"10px"}},"Remove")))},y=t(17);function O(e){return{type:"ADD_PIZZA",pizza:e}}function P(e){return{type:"REMOVE_PIZZA",pizza:e}}function _(){return{type:"RESET_PIZZAS"}}var j=t(8),S=[{id:100,name:"Napolitana",image:"/images/pizza_napolitana.jpg",description:"Pizza with tomatoe sauce and olives",price:40,order_date:(new Date).toJSON},{id:101,name:"Vegetables",image:"/images/pizza_vegetables.jpg",description:"Pizza with vegetables and special sauce",price:50,order_date:(new Date).toJSON}],w=function(e){Object(E.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(z.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={catalog_pizzas:[]},e.addPizza=function(a){e.props.actions.addPizza(a)},e.removePizza=function(a){e.props.actions.removePizza(a)},e.formatTotal=function(){return Object(h.a)(e.props.pizzas).reduce((function(e,a){return e+a.price}),0)},e.isOrderPizzasDisabled=function(){return 0===e.props.pizzas.length},e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(this.props.pizzas);if(e.length>0){var a=e.reduce((function(e,a){return new Date(e.order_date)>new Date(a.order_date)?e:a})),t=new Date-new Date(a.order_date);Math.ceil(t/6e4)>10&&this.props.actions.resetPizzas()}this.setState({catalog_pizzas:S})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Pizzas"),l.a.createElement("hr",null),l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},this.state.catalog_pizzas.map((function(a){return l.a.createElement("div",{key:a.id},l.a.createElement(b,{pizza:a,addPizza:e.addPizza,removePizza:e.removePizza}))}))),l.a.createElement("br",null),l.a.createElement(s.a,{href:"#/cart",variant:"success",style:{margin:"10px"},disabled:this.isOrderPizzasDisabled()},"Order pizza"),l.a.createElement("span",null,"Total ",this.formatTotal(),"$"))}}]),t}(l.a.Component);var x=Object(y.b)((function(e){return{pizzas:e.pizzas}}),(function(e){return{actions:Object(j.b)(n,e)}}))(w),D=t(31),N=t(18),C=t(48),k=t(44);var A=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"List of pizzas"),l.a.createElement(k.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Pizza"),l.a.createElement("th",null,"Price"))),l.a.createElement("tbody",null,e.pizzas.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("th",null,e.name),l.a.createElement("th",null,e.price))})))))};function I(e){var a="form-group";return e.error.length>0&&(a+=" has-error"),l.a.createElement("div",{className:a},l.a.createElement("label",{htmlFor:e.id},e.label),l.a.createElement("div",{className:"field"},l.a.createElement("input",{id:e.id,type:"text",onChange:e.onChange,name:e.name,className:"form-control",value:e.value})),e.error&&l.a.createElement("div",{className:"alert alert-danger"},e.error))}I.defaultProps={error:""};var Z=I;var R=function(e){return l.a.createElement("form",{onSubmit:e.onSubmit},l.a.createElement(Z,{id:"full_name",label:"Full name",onChange:e.onChange,name:"full_name",value:e.order.full_name}),l.a.createElement(Z,{id:"address",label:"Address",onChange:e.onChange,name:"address",value:e.order.address}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"payment"},"Payment"),l.a.createElement("div",{className:"field"},l.a.createElement("select",{id:"payment",name:"payment",onChange:e.onChange,value:e.order.payment||"",className:"form-control"},l.a.createElement("option",{value:""}),l.a.createElement("option",{value:"1"},"On phone"),l.a.createElement("option",{value:"2"},"On delivery")))),l.a.createElement("input",{type:"submit",value:"Order",className:"btn btn-lg btn-success",disabled:function(){var a=e.order.full_name,t=e.order.address;return 0===a.length||0===t.length}()}),l.a.createElement(s.a,{variant:"danger btn-lg",style:{margin:"10px"},onClick:e.onReset},"Reset"))};var T=Object(y.b)((function(e){return{pizzas:e.pizzas}}),(function(e){return{actions:Object(j.b)(n,e)}}))((function(e){var a=Object(r.useState)({full_name:"",address:"",payment:1}),t=Object(C.a)(a,2),n=t[0],i=t[1];return l.a.createElement("div",{style:{width:"400px"}},l.a.createElement("h1",null,"Cart"),l.a.createElement("hr",null),l.a.createElement(R,{order:n,onChange:function(e){i(Object(N.a)(Object(N.a)({},n),{},Object(D.a)({},e.target.name,e.target.value)))},onSubmit:function(a){a.preventDefault(),e.actions.resetPizzas(),e.history.push("//pizza-place")},onReset:function(){e.actions.resetPizzas()}}),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement(A,{pizzas:e.pizzas}))})),M=t(45),J=function(){return l.a.createElement("div",null,l.a.createElement(M.a,null,l.a.createElement("h1",null,"Pizza place"),l.a.createElement("img",{src:"/pizza-place/images/pizza-place.jpg",alt:"place",rounded:"true",style:{height:"250px"}}),l.a.createElement("p",null,"We are always happy to serve you pizza ",l.a.createElement("br",null),"Better order from the web"),l.a.createElement("p",null,l.a.createElement(s.a,{href:"/pizzas",variant:"primary"},"Order pizza"))))};var L=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement(p,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:x}),l.a.createElement(o.a,{path:"/pizzas",exact:!0,component:x}),l.a.createElement(o.a,{path:"/cart",component:T}),l.a.createElement(o.a,{path:"/contact",component:J}),l.a.createElement(o.a,{component:v})))},F=t(37),V={pizzas:[]};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.pizzas,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PIZZA":var t=1;e.length>0&&(t=Math.max.apply(Math,e.map((function(e){return e.id})))+1);var n=Object(N.a)(Object(N.a)({},a.pizza),{},{id:t,order_date:(new Date).toJSON()}),r=[].concat(Object(h.a)(e),[n]);return r;case"REMOVE_PIZZA":var l=Object(h.a)(e),i=l.findIndex((function(e){return e.name===a.pizza.name}));return i>=0&&l.splice(i,1),l;case"RESET_PIZZAS":var c=[];return c;default:return e}},U=Object(j.c)({pizzas:B}),X=t(46),W=t.n(X);var $=function(e){var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d,t=function(){try{var e=localStorage.getItem("pizza_state");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),n=Object(j.e)(U,t,a(Object(j.a)(W()())));return n.subscribe((function(){return function(e){try{var a=JSON.stringify(e);localStorage.setItem("pizza_state",a)}catch(t){}}(n.getState())})),n}();c.a.render(l.a.createElement(y.a,{store:$},l.a.createElement(F.a,{basename:"/pizza-place"},l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b5cc80d9.chunk.js.map
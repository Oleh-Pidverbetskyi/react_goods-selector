(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(2),s=c.n(a),o=c(3),u=c(4),l=c(6),d=c(5),i=(c(12),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={selectedProducts:["Jam"]},e}return Object(u.a)(c,[{key:"addProduct",value:function(e){this.setState((function(t){return t.selectedProducts.push(e)}))}},{key:"deleteProduct",value:function(e){this.setState((function(t){return{selectedProducts:t.selectedProducts.filter((function(t){return t!==e}))}}))}},{key:"clearProduct",value:function(){this.setState({selectedProducts:[]})}},{key:"render",value:function(){var e=this,t=this.state.selectedProducts;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App__title"},this.state.selectedProducts.length?"Selected products: ".concat(t):"No Products selected"),r.a.createElement("button",{className:"App__btn-close",type:"button",onClick:function(){return e.clearProduct()}},"Remove selected products"),r.a.createElement("ul",{className:"List"},i.map((function(t){return e.state.selectedProducts.includes(t)?r.a.createElement("li",{className:"List__product",key:t},t,":",r.a.createElement("button",{className:"List__btn",type:"button",onClick:function(){return e.deleteProduct(t)}},"Delete Product")):r.a.createElement("li",{className:"List__product",key:t},t,":",r.a.createElement("button",{className:"List__btn",type:"button",onClick:function(){return e.addProduct(t)}},"Add product"))}))))}}]),c}(r.a.Component);s.a.render(r.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,c){e.exports=c(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.177f6168.chunk.js.map
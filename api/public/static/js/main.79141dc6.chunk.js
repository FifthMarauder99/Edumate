(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t,r){e.exports=r(391)},390:function(e,t,r){},391:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),o=r(30),i=r.n(o),s=r(80),c=r(15),l=r(35),u=r(36),h=r(38),m=r(37),f=r(22),d=r(147),p=r(148),g=r(149),v=r(78);function y(){y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new N(a||[]);return n(i,"_invoke",{value:x(e,r,s)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var h={};function m(){}function f(){}function d(){}var p={};c(p,o,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(P([])));v&&v!==t&&r.call(v,o)&&(p=v);var b=d.prototype=m.prototype=Object.create(p);function w(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,s){var c=u(e[a],e,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,s)},function(e){n("throw",e,i,s)}):t.resolve(h).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,s)})}s(c.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function x(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=d,n(b,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:f,configurable:!0}),f.displayName=c(d,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(E.prototype),c(E.prototype,i,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(b),c(b,s,"Generator"),c(b,o,function(){return this}),c(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var b=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).newAccount=Object(c.a)(y().mark(function e(){var t,r,a=arguments;return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",a.length>1&&void 0!==a[1]?a[1]:{},console.log(n.state.username),e.next=5,fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.emailId,username:n.state.userName,password:n.state.password,role:"Student",mobile:n.state.mobile})});case 5:return r=e.sent,e.abrupt("return",r.json());case 7:case"end":return e.stop()}},e)})),n.handleChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value)),console.log(n.state)},n.formSubmit=Object(c.a)(y().mark(function e(){return y().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.state.password===n.state.confirmPassword){e.next=5;break}return alert("passwords do not matched"),e.abrupt("return",!1);case 5:alert("Form Submitted Successfully"),n.setState({formValues:[n.state.userName,n.state.mobile,n.state.emailId,n.state.password,n.state.role],showDetails:!0});try{n.newAccount("http://localhost:9000/testDB")}catch(t){console.log(t)}return console.log(n.state.formValues),n.props.history.push({pathname:"/home/",data:n.state.formValues}),e.abrupt("return",!0);case 11:case"end":return e.stop()}},e)})),n.state={apiResponse:"",userName:"",lastName:"",mobile:"",emailId:"",password:"",confirmPassword:"",role:"Educator",formValues:[],showDetails:!1},n}return Object(u.a)(r,[{key:"render",value:function(){var e=this.state,t=e.userName,r=e.emailId,n=e.mobile,o=e.password,i=e.confirmPassword;return a.a.createElement("div",null,a.a.createElement("p",{className:"AppAPIResp"},this.state.apiResponse),a.a.createElement("div",null,a.a.createElement("p",{className:"h4 text-center text-primary font-weight-bold font-italic"},"Sign-Up")),a.a.createElement(f.AvForm,{onValidSubmit:this.formSubmit},a.a.createElement(d.a,null,a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(f.AvField,{onChange:this.handleChange,name:"userName",label:"User Name",type:"text",validate:{required:{value:{userName:t},errorMessage:"Please enter your user name"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"First Name must be composed only with letter and numbers"},minLength:{value:4,errorMessage:"User name must be b/w 4 to 16 characters"},maxLength:{value:16,errorMessage:"User name must be b/w 6 to 16 characters"}}}))),a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(f.AvField,{onChange:this.handleChange,name:"mobile",label:"Mobile No",type:"text",validate:{required:{value:{mobile:n},errorMessage:"Please enter your mobile number"},pattern:{value:"^[0-9]+$",errorMessage:"Mobile Number must be composed only with numbers"},minLength:{value:10,errorMessage:"Your mobile number must be composed of 10 digits"},maxLength:{value:10}}}))),a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(f.AvField,{onChange:this.handleChange,name:"emailId",label:"Email id",type:"email",errorMessage:"Invalid email id",validate:{required:{value:{emailId:r},errorMessage:"Please enter your email address"}}}))),a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(f.AvField,{onChange:this.handleChange,name:"password",label:"Password",type:"password",validate:{required:{value:{password:o},errorMessage:"Please enter your password"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"Password must be composed only with letter and numbers"},minLength:{value:5,errorMessage:"Password name must be b/w 5 to 16 characters"},maxLength:{value:16,errorMessage:"Password name must be b/w 5 to 16 characters"}}}))),a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(f.AvField,{onChange:this.handleChange,name:"confirmPassword",label:"Confirm Password",type:"password",validate:{required:{value:{confirmPassword:i},errorMessage:"Please enter your confirm password"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"Confirm Password must be composed only with letter and numbers"},minLength:{value:5,errorMessage:"Password name must be b/w 5 to 16 characters"},maxLength:{value:16,errorMessage:"Password name must be b/w 5 to 16 characters"}}}))),a.a.createElement(p.a,null,a.a.createElement(g.a,{className:"text-center",sm:"12",md:{size:6,offset:3}},a.a.createElement(v.a,{type:"submit",color:"primary"},"Submit"))))),a.a.createElement("div",null,this.state.showDetails&&a.a.createElement("div",{className:"mt-5"},a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{className:"text-secondary h5 font-weight-bold font-italic"},"Submitted form values")),a.a.createElement("ul",{style:{listStyleType:"none"}},a.a.createElement("li",null,a.a.createElement("span",{style:{fontWeight:"bold",fontStyle:"italic",color:"grey"}},"User Name:"," "),this.state.userName),a.a.createElement("li",null,a.a.createElement("span",{style:{fontWeight:"bold",fontStyle:"italic",color:"grey"}},"Mobile No:"," "),this.state.mobile),a.a.createElement("li",null,a.a.createElement("span",{style:{fontWeight:"bold",fontStyle:"italic",color:"grey"}},"Mail Address:"," "),this.state.emailId)))))}}]),r}(a.a.Component),w=r(180),E=r(46),x=r(39),L=r(116),O=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",{className:" h1 text-center text-secondary font-weight-bold font-italic mt-5"},"Login/Signup Portal"),a.a.createElement(E.b,{to:"/home/login",className:"btn btn-primary float-left  ml-5 mt-5"},"Login"),a.a.createElement(E.b,{to:"/home/register",className:"btn btn-primary float-right mr-5 mt-5"},"Sign Up"))}}]),r}(a.a.Component),j=r(183),N=void 0;function P(){P=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new j(a||[]);return n(i,"_invoke",{value:E(e,r,s)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var h={};function m(){}function f(){}function d(){}var p={};c(p,o,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(N([])));v&&v!==t&&r.call(v,o)&&(p=v);var y=d.prototype=m.prototype=Object.create(p);function b(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(a,i){!function n(a,o,i,s){var c=u(e[a],e,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then(function(e){n("next",e,i,s)},function(e){n("throw",e,i,s)}):t.resolve(h).then(function(e){l.value=e,i(l)},function(e){return n("throw",e,i,s)})}s(c.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:f,configurable:!0}),f.displayName=c(d,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},b(y),c(y,s,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}var S=function(e){console.log("lOGIN SUCCESS!!!!"),N.props.history.push("/home/successfulLogin")},k=function(e){console.log("not logged in u failed!!!!")},_=function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(l.a)(this,r),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value)),console.log(n.state)},n.attemptLogin=Object(c.a)(P().mark(function e(){var t,r,a=arguments;return P().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e.next=3,fetch(t,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.loginUserName})});case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}},e)})),n.formSubmit=Object(c.a)(P().mark(function e(){var t,r;return P().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.attemptLogin("http://localhost:9000/getCredentials");case 3:t=e.sent,console.log(t),e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),alert("no account found with that username and/or password"),e.abrupt("return",!1);case 12:if(r=void 0===t?"":t.password,console.log("response_password "+r),("admin"!==n.state.loginUserName||"admin"!==n.state.loginPassword)&&n.state.loginPassword!==r){e.next=20;break}return alert("credentials matched"),n.props.history.push("/home/successfulLogin"),e.abrupt("return",!0);case 20:return alert("invalid credentials"),e.abrupt("return",!1);case 22:case"end":return e.stop()}},e,null,[[0,7]])})),n.state={loginUserName:"",loginPassword:""},n}return Object(u.a)(r,[{key:"render",value:function(){var e=this.state,t=e.loginUserName,r=e.loginPassword;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("p",{className:" h4 text-center text-primary font-weight-bold font-italic"},"Login")),a.a.createElement("div",{id:"signInButton"},a.a.createElement(j.GoogleLogin,{client_id:"316944316847-r3pqce4qe70k5iu02u85hrksfmih10pj.apps.googleusercontent.com",buttonText:"Oauth Login",onSuccess:S,onFailure:k,cookiePolicy:"single-host-origin",isSignedIn:!0})),a.a.createElement(f.AvForm,{onValidSubmit:this.formSubmit},a.a.createElement(d.a,null,a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(f.AvField,{onChange:this.handleChange,name:"loginUserName",label:"User Name",type:"text",validate:{required:{value:{loginUserName:t},errorMessage:"Please enter your user name"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"First Name must be composed only with letter and numbers"},minLength:{value:4,errorMessage:"User name must be b/w 4 to 16 characters"},maxLength:{value:16,errorMessage:"User name must be b/w 6 to 16 characters"}}}))),a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(f.AvField,{onChange:this.handleChange,name:"loginPassword",label:"Password",type:"password",validate:{required:{value:{loginPassword:r},errorMessage:"Please enter your password"},pattern:{value:"^[A-Za-z0-9]+$",errorMessage:"Password must be composed only with letter and numbers"},minLength:{value:5,errorMessage:"Password name must be b/w 5 to 16 characters"},maxLength:{value:16,errorMessage:"Password name must be b/w 6 to 16 characters"}}}))),a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(v.a,{type:"submit",color:"primary"},"Login"))),a.a.createElement(p.a,null,a.a.createElement(g.a,{sm:"12",md:{size:6,offset:3}},a.a.createElement(v.a,{type:"submit",color:"primary"},"Login"))))))}}]),r}(a.a.Component),M=(r(390),function(e){Object(h.a)(r,e);var t=Object(m.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("p",{className:" h1 text-center text-secondary font-weight-bold font-italic mt-5"},"Successful login!!!"),a.a.createElement(E.b,{to:"/home/logout",className:"btn btn-primary float-left  ml-5 mt-5"},"Logout"))}}]),r}(a.a.Component)),A="316944316847-r3pqce4qe70k5iu02u85hrksfmih10pj.apps.googleusercontent.com";function C(){return w.config(),console.log("$(heroku config:get DATABASE_URL -a edumate)"),Object(n.useEffect)(function(){L.a.load("client:auth2",function(){L.a.client.init({client_id:A,scope:""})})}),n.React.createElement("div",{className:"App"},n.React.createElement(E.a,null,n.React.createElement(x.c,null,n.React.createElement(x.a,{path:"/home",exact:!0,component:O}),n.React.createElement(x.a,{path:"/home/login",component:_}),n.React.createElement(x.a,{path:"/home/register",component:b}),n.React.createElement(x.a,{path:"/home/successfulLogin",component:M}),n.React.createElement(x.a,{path:"/home/logout",component:O}))))}var F=document.getElementById("root");i.a.render(n.React.createElement(C,null),F)}},[[184,1,2]]]);
//# sourceMappingURL=main.79141dc6.chunk.js.map
(this["webpackJsonpcovid-data-app"]=this["webpackJsonpcovid-data-app"]||[]).push([[0],{17:function(e,t,n){},39:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(30),r=n.n(s),i=(n(39),n(9)),o=n(10),l=n(12),j=n(11),u=n(14),d=n(2),h=n(18),b=n.n(h),p=n(31),O=n(34),v=(n(17),n(1)),f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.countries.countries.filter((function(e){return void 0!==e.All.country}));return Object(v.jsx)("div",{className:"containerMargin",children:e.map((function(e){return Object(v.jsxs)("div",{className:"caseContainer",children:[Object(v.jsx)("h3",{className:"textAlign fontSize",children:e.All.country+" - "+e.All.abbreviation}),Object(v.jsxs)("p",{className:"textAlign fontSize",children:["Population: ",e.All.population]}),Object(v.jsxs)("p",{className:"textAlign fontSize",children:["Confirmed: ",e.All.confirmed]}),Object(v.jsxs)("p",{className:"textAlign fontSize",children:["Recovered: ",e.All.recovered," "]}),Object(v.jsxs)("p",{className:"textAlign fontSize",children:["Deaths: ",e.All.deaths," "]})]},Object(O.a)())}))})}}]),n}(c.Component),x=n(32),m=n.n(x).a.create({baseURL:"https://covid-api.mmediagroup.fr/v1/cases"}),g=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={countries:[],loading:!1},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,m.get("");case 3:t=e.sent,this.setState({countries:Object.values(t.data),loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.countries.filter((function(e){return void 0!==e.All.country}));return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"pageTitleFont",children:"Number of cases"}),Object(v.jsxs)("h3",{className:"fontSizeCaseComponent",children:[e.length," countries"]}),Object(v.jsx)(f,{countries:this.state})]})}}]),n}(c.Component);function y(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"homeTitle",children:"Covid-19"}),Object(v.jsxs)("p",{className:"homeParagragh",children:["Welcome! Here you can see all the data about Covid-19 in the world,",Object(v.jsx)("br",{}),'just click on "Cases" menu and you will see the data of all the countries.']})]})}function N(){return Object(v.jsx)(u.a,{children:Object(v.jsxs)("div",{className:"navbar",children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/covid-data-app",className:"link",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/cases",className:"link",children:"Cases"})}),Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/covid-data-app",exact:!0,component:y}),Object(v.jsx)(d.a,{path:"/cases",component:g})]})]})})}var A=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(N,{})})}}]),n}(c.Component);r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.2764ccd0.chunk.js.map
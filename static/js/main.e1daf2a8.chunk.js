(this["webpackJsonpcovid-19-estimator"]=this["webpackJsonpcovid-19-estimator"]||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(12),s=a.n(l),o=(a(18),a(3)),r=a(4),c=a(6),u=a(5),d=(a(19),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement("h1",null,"covid-19 estimator"),i.a.createElement("p",null,"A novelty COVID-19 infections estimator. This is an eligibility assessment for the ",i.a.createElement("a",{href:"https://buildforsdg.andela.com/"},"#BuildforSDG")," program")))}}]),a}(i.a.Component)),m=a(2),p=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={visual:!0},n.handleCollapse=n.handleCollapse.bind(Object(m.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(m.a)(n)),n}return Object(r.a)(a,[{key:"handleCollapse",value:function(){this.setState({visual:!1})}},{key:"handleUpdate",value:function(){this.setState({visual:!0})}},{key:"render",value:function(){return"default"!==this.props.onEstimate()&&this.state.visual?i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{htmlFor:"goEstimate"},i.a.createElement("button",{name:"goEstimate","data-go-estimate":"",type:"submit",onClick:this.handleCollapse},"Collapse")),i.a.createElement("ul",null,this.props.onEstimate())):i.a.createElement("label",{htmlFor:"goEstimate"},i.a.createElement("button",{name:"goEstimate","data-go-estimate":"",type:"submit",onClick:this.handleUpdate},"Estimate"))}}]),a}(n.Component),h=function(e){var t,a={},n={};a.currentlyInfected=10*e.reportedCases,n.currentlyInfected=50*e.reportedCases,"days"===e.periodType?t=Math.pow(2,Math.trunc(e.timeToElapse/3)):"weeks"===e.periodType?t=Math.pow(2,Math.trunc(7*e.timeToElapse/3)):"months"===e.periodType&&(t=Math.pow(2,Math.trunc(30*e.timeToElapse/3))),a.infectionsByRequestedTime=a.currentlyInfected*t,n.infectionsByRequestedTime=n.currentlyInfected*t,a.severeCasesByRequestedTime=.15*a.infectionsByRequestedTime,n.severeCasesByRequestedTime=.15*n.infectionsByRequestedTime;var i=.35*e.totalHospitalBeds,l=a.severeCasesByRequestedTime,s=n.severeCasesByRequestedTime;a.hospitalBedsByRequestedTime=Math.trunc(i-l),n.hospitalBedsByRequestedTime=Math.trunc(i-s);var o=.05*n.infectionsByRequestedTime,r=.02*n.infectionsByRequestedTime;a.casesForICUByRequestedTime=Math.trunc(.05*a.infectionsByRequestedTime),n.casesForICUByRequestedTime=Math.trunc(o),a.casesForVentilatorsByRequestedTime=Math.trunc(.02*a.infectionsByRequestedTime),n.casesForVentilatorsByRequestedTime=Math.trunc(r);var c=e.region.avgDailyIncomePopulation,u=e.region.avgDailyIncomeInUSD,d=n.infectionsByRequestedTime,m=0;return"days"===e.periodType?m=e.timeToElapse:"weeks"===e.periodType?m=7*e.timeToElapse:"months"===e.periodType&&(m=30*e.timeToElapse),a.dollarsInFlight=Math.trunc(a.infectionsByRequestedTime*c*u/m),n.dollarsInFlight=Math.trunc(d*c*u/m),{impact:a,severeImpact:n}},y=a(7),v=a(8),E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={population:""},n.state={timeToElapse:""},n.state={reportedCases:""},n.state={totalHospitalBeds:""},n.state={periodType:"days"},n.handleEstimate=n.handleEstimate.bind(Object(m.a)(n)),n.handlePop=n.handlePop.bind(Object(m.a)(n)),n.handleTime=n.handleTime.bind(Object(m.a)(n)),n.handleReport=n.handleReport.bind(Object(m.a)(n)),n.handleBeds=n.handleBeds.bind(Object(m.a)(n)),n.handlePeriod=n.handlePeriod.bind(Object(m.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(r.a)(a,[{key:"handleEstimate",value:function(){var e="default";if(void 0!==this.state.display){for(var t=this.state.display,a=[],n=0,l=Object.values(t);n<l.length;n++){var s=l[n];a.push(Object.entries(s))}for(var o=0,r=a;o<r.length;o++){e=r[o].map((function(e){return i.a.createElement("li",{key:e.toString()},e[0]," is ",e[1]," ")}))}}return e}},{key:"handlePop",value:function(e){this.setState({population:e.target.value})}},{key:"handleTime",value:function(e){this.setState({timeToElapse:e.target.value})}},{key:"handleReport",value:function(e){this.setState({reportedCases:e.target.value})}},{key:"handleBeds",value:function(e){this.setState({totalHospitalBeds:e.target.value})}},{key:"handlePeriod",value:function(e){this.setState({periodType:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state;void 0===t.region&&(t.region={name:"Africa",avgAge:19.7,avgDailyIncomeInUSD:5,avgDailyIncomePopulation:.71}),e.preventDefault(),t.population=parseInt(t.timeToElapse),t.timeToElapse=parseInt(t.timeToElapse),t.reportedCases=parseInt(t.reportedCases),t.totalHospitalBeds=parseInt(t.totalHospitalBeds),this.setState({display:h(t)})}},{key:"render",value:function(){return i.a.createElement("form",{className:"estimator",onSubmit:this.handleSubmit},i.a.createElement(y.a,{icon:v.e,size:"2x"}),i.a.createElement("label",{htmlFor:"population"},"population",i.a.createElement("input",{name:"population","data-population":"",type:"number",value:this.state.value,onChange:this.handlePop,required:!0,placeholder:"Example: 1000"})),i.a.createElement(y.a,{icon:v.c,size:"2x"}),i.a.createElement("label",{htmlFor:"timeToElapse"},"timeToElapse",i.a.createElement("input",{name:"timeToElapse","data-time-to-elapse":"",type:"number",value:this.state.value,onChange:this.handleTime,required:!0,placeholder:"Example: 5"})),i.a.createElement(y.a,{icon:v.b,size:"2x"}),i.a.createElement("label",{htmlFor:"reportedCases"},"reportedCases",i.a.createElement("input",{name:"reportedCases","data-reported-cases":"",type:"number",value:this.state.value,onChange:this.handleReport,required:!0,placeholder:"Example: 8"})),i.a.createElement(y.a,{icon:v.d,size:"2x"}),i.a.createElement("label",{htmlFor:"totalHospitalBeds"},"totalHospitalBeds",i.a.createElement("input",{name:"totalHospitalBeds","data-total-hospital-beds":"",type:"number",value:this.state.value,onChange:this.handleBeds,placeholder:"Example: 500",required:!0})),i.a.createElement(y.a,{icon:v.a,size:"1x"}),i.a.createElement("label",{htmlFor:"periodType"},"periodType",i.a.createElement("select",{name:"periodType","data-period-type":"",value:this.state.value,onChange:this.handlePeriod,required:!0},i.a.createElement("option",{value:"days"},"days "),i.a.createElement("option",{value:"weeks"},"weeks"),i.a.createElement("option",{value:"months"},"months"))),i.a.createElement(p,{onEstimate:this.handleEstimate}))}}]),a}(i.a.Component),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("footer",null,i.a.createElement("p",null,"Made with \u2764 by Haile Lagi \u24b82020 for #SDG"))}}]),a}(i.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement(E,null),i.a.createElement(b,null))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.e1daf2a8.chunk.js.map
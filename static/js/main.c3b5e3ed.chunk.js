(this.webpackJsonprankingball=this.webpackJsonprankingball||[]).push([[0],{204:function(e){e.exports=JSON.parse('{"104000":"Featured","104001":"Soccer","104002":"Baseball","104003":"Football","104004":"Basketball","104005":"Hockey","105000":"Featured","105001":"LOL","105002":"CS:GO","105003":"DOTA","105004":"Battle Grounds","MyGame":"My Game"}')},205:function(e){e.exports=JSON.parse('{"104000":"\ucd94\ucc9c","104001":"\ucd95\uad6c","104002":"\uc57c\uad6c","104003":"\ubbf8\uc2dd\ucd95\uad6c","104004":"\ub18d\uad6c","104005":"\ud558\ud0a4","105000":"\ucd94\ucc9c","105001":"LOL","105002":"\uce74\uc2a4","105003":"\ub3c4\ud0c0","105004":"\ubc30\uadf8","MyGame":"\ub0b4\uac8c\uc784"}')},212:function(e,a,t){e.exports=t(442)},438:function(e,a,t){},439:function(e,a,t){},440:function(e,a,t){},441:function(e,a,t){},442:function(e,a,t){"use strict";t.r(a);t(213),t(222);var n=t(0),c=t.n(n),l=t(128),s=t.n(l),r=t(443),m=t(131),o=t(204),i=t(205),u=t(53),p=t(54),E=t(55),g=t(56),d=t(52),h=t(14);var N=function(){return c.a.createElement("header",{className:"top"},c.a.createElement("h1",{className:"logo"},c.a.createElement("div",{className:"home-logo"}),c.a.createElement("div",{className:"sub-logo"}),c.a.createElement("div",{className:"goto-gdc"})),c.a.createElement("div",{className:"infor-player login"},c.a.createElement("span",{className:"noti"}),c.a.createElement("span",{className:"guide"}),c.a.createElement("span",{className:"inbox"}),c.a.createElement(d.b,{to:"/login"},c.a.createElement("span",{className:"my-infor"}))))};var v=function(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-txt"},c.a.createElement("p",null,"\xa9 RankingBall Inc. 200 Spectrum Center Dr ste 300, Irvine, CA, 92618, USA | ",c.a.createElement("a",{href:"mailto:support@rankingball.com"},"support@rankingball.com")," | ",c.a.createElement("a",{href:"#terms"},"Terms of Use")," | ",c.a.createElement("a",{href:"#policy"},"Privacy Policy")),c.a.createElement("p",null,"COPYRIGHT \xa9 2018 RANKINGBALL Inc. ALL RIGHTS RESERVED")))},b=t(48),f=t.n(b),y=t(80),k=t(81),O=t.n(k),C="https://dev.rankingball.com:13001/";function j(e){switch(e){case 1:return"my";case 104001:return"soccer";case 104012:return"mlb";case 104003:return"nfl";case 104004:return"nba";case 104012:return"kbo";case 105001:return"lol";case 105002:return"cs";case 105003:return"dota";case 105004:return"pubg"}}function w(e){switch(e){case 104001:return"SOCCER";case 104002:return"MLB";case 104003:return"NFL";case 104004:return"NBA";case 104012:return"KBO";case 105001:return"LOL";case 105002:return"CS";case 105003:return"DOTA";case 105004:return"PUBG"}}function S(e,a){return e.reduce((function(e,a){var t=new Date(a.st).toLocaleDateString("en-US").split("/"),n=t.splice(-1)[0];t.splice(0,0,n);var c=t.join("");return(e[c]=e[c]||[]).push(a),e}),{})}var L=t(444),M=function(e){Object(g.a)(t,e);var a=Object(E.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){var e=this.props,a=e.t,t=e.gametype;return c.a.createElement("span",null,a(t))}}]),t}(n.Component),x=Object(L.a)("common")(M),A=function(e){Object(g.a)(t,e);var a=Object(E.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={isLoading:!0,topmenu:[]},n.getTopMenu=Object(y.a)(f.a.mark((function e(){var a,t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(C+"/menu/103001");case 2:a=e.sent,t=a.data.result,n.setState({topmenu:t,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),n}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getTopMenu()}},{key:"getMatchChangeClick",value:function(e,a){var t=localStorage.getItem("gametype");104002==e?(localStorage.setItem("gametype",104012),void 0==e?this.props.onChange(t,a):this.props.onChange(104012,a)):(localStorage.setItem("gametype",e),void 0==e?this.props.onChange(t,a):this.props.onChange(e,a))}},{key:"render",value:function(){var e=this,a=this.state,t=a.isLoading,l=a.topmenu,s=localStorage.getItem("gametype");return c.a.createElement("div",null,t?c.a.createElement("div",{className:"loader"},c.a.createElement("span",{className:"loader-text"},"Loading...")):c.a.createElement("div",{className:"top-type-menu"},c.a.createElement("ul",{className:"type-tab type-104002-bg"},c.a.createElement("li",{onClick:function(){return e.getMatchChangeClick(1,106001)}},c.a.createElement("div",null,c.a.createElement("span",null,"MyGame"))),l.map((function(a){return c.a.createElement("li",{key:a.game_type,id:a.game_type,gametype:a.game_type,display:a.web_pro_display_yn,order:a.web_pro_order,onClick:function(){return e.getMatchChangeClick(a.game_type,106001)}},c.a.createElement("div",null,c.a.createElement(n.Suspense,{fallback:"loading"},c.a.createElement(x,{gametype:a.game_type}))))})),c.a.createElement("li",null,c.a.createElement("div",null,c.a.createElement("span",null,"SWEEPSTAKES")))),c.a.createElement("div",{className:"top-sub-menubox"},c.a.createElement("ul",{id:"topMenuType",className:"top-sub-menu hi"},c.a.createElement("li",{className:"106001",onClick:function(){return e.getMatchChangeClick(s,106001)}},"Upcoming ",s),c.a.createElement("li",{className:"106002",onClick:function(){return e.getMatchChangeClick(s,106002)}},"Live ",s),c.a.createElement("li",{className:"106003",onClick:function(){return e.getMatchChangeClick(s,106003)}},"History ",s)))))}}]),t}(n.Component),I=t(65),T=t.n(I),D=t(66);var G=function(e){e.id,e.gameid;var a=e.gametype,t=e.homeabbr,n=e.awayabbr,l=e.hometeam,s=e.awayteam,r=e.gp,m=e.cc,o=e.ln,i=e.hs,u=e.as,p=e.st;return c.a.createElement("div",{className:"match-box "+j(a)},c.a.createElement("div",{className:"match-top"},c.a.createElement("div",{className:"league-box"},c.a.createElement("div",null,c.a.createElement("p",{className:"i-"+a}),c.a.createElement("span",null,o)),c.a.createElement("p",null,c.a.createElement(T.a,{format:"hh:mm A z"},p))),c.a.createElement("span",{className:"join"},"JOINED"),c.a.createElement("span",{className:"match-time"},c.a.createElement(D.a,{date:p,renderer:function(e){return c.a.createElement("div",null,e.days?e.days+"d ":"",Object(D.b)(e.hours),":",Object(D.b)(e.minutes),":",Object(D.b)(e.seconds))}})),c.a.createElement("div",{className:"stats-box"},c.a.createElement("span",{className:"stream"}),c.a.createElement("span",{className:"live"}),c.a.createElement("span",{className:"lineup"}),c.a.createElement("span",{className:"btn-stats off"},"Game Stats"))),c.a.createElement("div",{className:"match-bottom"},104001===a&&c.a.createElement("div",{className:"soccer-team-box"},c.a.createElement("div",{className:"home"},c.a.createElement("span",{className:"t-team home"},l," "),c.a.createElement("span",{className:"score"},c.a.createElement("em",null,"(",i,")"))),c.a.createElement("div",{className:"away"},c.a.createElement("span",{className:"t-team away"},s," "),c.a.createElement("span",{className:"score"},c.a.createElement("em",null,"(",u,")")))),104002===a||104012===a&&c.a.createElement("div",{className:"team-box"},c.a.createElement("div",null,c.a.createElement("span",{className:"t-logo logo-"+w(104012)+"-"+n}),c.a.createElement("span",{className:"t-team home"},s," ",c.a.createElement("em",null,"(",u,")"))),c.a.createElement("div",null,c.a.createElement("span",{className:"t-logo logo-"+w(104012)+"-"+t}),c.a.createElement("span",{className:"t-team away"},l," ",c.a.createElement("em",null,"(",i,")")))),104003===a||104004===a||105001===a&&c.a.createElement("div",{className:"team-box"},c.a.createElement("div",null,c.a.createElement("span",{className:"t-logo logo-"+w(a)+"-"+t}),c.a.createElement("span",{className:"t-team away"},t," ",c.a.createElement("em",null,"(",i,")"))),c.a.createElement("div",null,c.a.createElement("span",{className:"t-logo logo-"+w(a)+"-"+n}),c.a.createElement("span",{className:"t-team home"},n," ",c.a.createElement("em",null,"(",u,")")))),c.a.createElement("div",{className:"total-box"},c.a.createElement("p",{className:"t-prize"},"GUARANTEED PRIZE"),c.a.createElement("div",{className:"t-sum"},c.a.createElement("span",{className:"asset-121002"},r?r.toLocaleString():0)),c.a.createElement("p",{className:"t-total"},"TOTAL ",c.a.createElement("span",null,m)," CONTESTS"))))};var B=function(e){var a=e.key,t=e.id,n=(e.gameid,e.gametype),l=e.homeabbr,s=e.awayabbr,r=e.hometeam,m=e.awayteam,o=(e.gp,e.cc,e.ln),i=(e.hs,e.as,e.st),u=e.gs;return c.a.createElement("div",{id:t,key:a,className:"match-live-list "+j(n)},104001===n&&c.a.createElement("div",{className:"match-live"},c.a.createElement("div",{className:"tm-first"},c.a.createElement("span",{className:"t-first"},r),c.a.createElement("span",{className:"t-board"},"2")),c.a.createElement("div",{className:"tm-infor"},c.a.createElement("span",null,c.a.createElement("em",{className:"i-"+n}),w(n)," - ",o),c.a.createElement("span",null,c.a.createElement(T.a,{format:"MM D hh:mm A z"},i)),c.a.createElement("span",null,u)),c.a.createElement("div",{className:"tm-second"},c.a.createElement("span",{className:"t-board"},"1"),c.a.createElement("span",{className:"t-second"},m))),104002===n||104012===n&&c.a.createElement("div",{className:"match-live"},c.a.createElement("div",{className:"tm-first"},c.a.createElement("span",{className:"t-first"},l),c.a.createElement("span",{className:"t-logo logo-"+w(n)+"-"+l}),c.a.createElement("span",{className:"t-board"},"2")),c.a.createElement("div",{className:"tm-infor"},c.a.createElement("span",null,c.a.createElement("em",{className:"i-"+n}),w(n)," - ",o),c.a.createElement("span",null,c.a.createElement(T.a,{format:"MM D hh:mm A z"},i)),c.a.createElement("span",null,u)),c.a.createElement("div",{className:"tm-second"},c.a.createElement("span",{className:"t-board"},"1"),c.a.createElement("span",{className:"t-logo logo-"+w(n)+"-"+s}),c.a.createElement("span",{className:"t-second"},s))),104003===n||104004===n||105001===n&&c.a.createElement("div",{className:"match-live"},c.a.createElement("div",{className:"tm-first"},c.a.createElement("span",{className:"t-first"},l),c.a.createElement("span",{className:"t-logo logo-"+w(n)+"-"+l}),c.a.createElement("span",{className:"t-board"},"2")),c.a.createElement("div",{className:"tm-infor"},c.a.createElement("span",null,c.a.createElement("em",{className:"i-"+n}),w(n)," - ",o),c.a.createElement("span",null,c.a.createElement(T.a,{format:"MM D hh:mm A z"},i)),c.a.createElement("span",null,u)),c.a.createElement("div",{className:"tm-second"},c.a.createElement("span",{className:"t-board"},"1"),c.a.createElement("span",{className:"t-logo logo-"+w(n)+"-"+s}),c.a.createElement("span",{className:"t-second"},s))))},_=(t(438),function(e){Object(g.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={isLoading:!0,matchs:[],submenu:106001},e.getMatch=Object(y.a)(f.a.mark((function a(){var t,n,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.a.get(C+"/game/106001/103001/105001?type=code");case 2:t=a.sent,n=t.data.result,c=S(n),e.setState({matchs:c,isLoading:!1});case 6:case"end":return a.stop()}}),a)}))),e.getMatchChange=function(){var a=Object(y.a)(f.a.mark((function a(t,n){var c,l,s;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.setState({isLoading:!0}),a.next=3,O.a.get(C+"game/"+"".concat(n)+"/103001/"+"".concat(t)+"?type=code");case 3:c=a.sent,l=c.data.result,s=S(l),e.setState({matchs:s,submenu:n,isLoading:!1}),console.log(s);case 8:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}(),e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getMatch()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.matchs;return void 0===localStorage.getItem("gametype")&&localStorage.setItem("gametype",105001),c.a.createElement("div",{className:"content"},c.a.createElement(A,{onChange:this.getMatchChange}),a?c.a.createElement("div",{className:"loader"},c.a.createElement("span",{className:"loader-text"},"Loading...")):c.a.createElement("div",null,Object.keys(t).length<1&&Object.getOwnPropertyNames(t)<1?c.a.createElement("div",{className:"no-list"},c.a.createElement("div",{className:"txt1"},"no data")):c.a.createElement("div",{className:"match-content"},106001===this.state.submenu&&c.a.createElement("ul",{className:"match-list"},Object.keys(t).map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("div",{className:"date-tit"},e),t[e].map((function(e){return c.a.createElement(G,{key:e.gi,id:e.gi,gameid:e.gi,gametype:e.gt,homeabbr:e.hta,awayabbr:e.ata,hometeam:e.htn,awayteam:e.atn,gp:e.gp,cc:e.cc,ln:e.ln,hs:e.hs,as:e.as,st:e.st})})))}))),106002===this.state.submenu&&c.a.createElement("div",null,Object.keys(t).map((function(e){return c.a.createElement("ul",{className:"match-list",key:e},t[e].map((function(e){return c.a.createElement("li",{key:e.gi},c.a.createElement(B,{key:e.gi,id:e.gi,gameid:e.gi,gametype:e.gt,homeabbr:e.hta,awayabbr:e.ata,hometeam:e.htn,awayteam:e.atn,gp:e.gp,cc:e.cc,ln:e.ln,hs:e.hs,as:e.as,st:e.st,gs:e.gs}))})))}))),106003===this.state.submenu&&c.a.createElement("ul",{className:"match-list"},Object.keys(t).map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("div",{className:"date-tit"},e),t[e].map((function(e){return c.a.createElement(G,{key:e.gi,id:e.gi,gameid:e.gi,gametype:e.gt,homeabbr:e.hta,awayabbr:e.ata,hometeam:e.htn,awayteam:e.atn,gp:e.gp,cc:e.cc,ln:e.ln,hs:e.hs,as:e.as,st:e.st})})))}))))))}}]),t}(c.a.Component)),R=t(210),P=t.n(R),U=function(e){console.log(e)},z=function(){console.log("Clicked!")};function J(){return c.a.createElement("div",{style:{position:"relative",height:"700px"}},c.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",margin:"0 0 0 -200px"}},c.a.createElement(P.a,{appId:"729418677855391",autoLoad:!0,fields:"name,email,picture",onClick:z,callback:U,icon:"fa-facebook"})))}t(439),t(440);var F=function(e){Object(g.a)(t,e);var a=Object(E.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(d.a,null,c.a.createElement(N,null),c.a.createElement(h.a,{path:"/",exact:!0,component:_}),c.a.createElement(h.a,{path:"/login",component:J}),c.a.createElement(v,null)))}}]),t}(c.a.Component);t(441);m.a.init({interpolation:{escapeValue:!1},lng:"en",resources:{en:{common:o},ko:{common:i}}}),s.a.render(c.a.createElement(r.a,{i18n:m.a},c.a.createElement(F,null)),document.getElementById("wrap"))}},[[212,1,2]]]);
//# sourceMappingURL=main.c3b5e3ed.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);a(81),a(106);var n=a(0),o=a.n(n),r=a(47),l=a.n(r),s=a(8),c=a.n(s),i=a(14),m=a(23),d=a(24),u=a(27),p=a(25),h=a(26),f=a(10),b=a(1),v=(a(73),a(6)),E=a(35),k=a.n(E),C=a(13),y=a.n(C),g=a(11),S=a.n(g),w=(a(74),a(46),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).goBack=function(){var e=Object(i.a)(n.state.history);e.pop();var t=e[e.length-1];"feed"===t&&c.a.send("VKWebAppDisableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(i.a)(n.state.history);t.push(e),"feed"===n.state.activePanel&&c.a.send("VKWebAppEnableSwipeBack"),n.setState({history:t,activePanel:e})},n.go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.backauthor=function(e){n.setState({activeStory:e.currentTarget.dataset.to}),window.scrollTo(0,0)},n.getBookText=function(e,t){console.log(a(34)("./books"+v[e].preview)),fetch(a(75)("./content"+a(34)("./books"+v[e].preview)[t].text)).then(function(e){return e.text()}).then(function(e){n.setState({bookText:e})}),n.setState({page:t,check:!0}),!!window.navigator.onLine||alert("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435.\n\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443")},n.state={bookText:null,activeStory:"home",check:!1,activePanel:"feed",history:["feed"],page:n.props.bookStartId},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=Object(b.platform)();return o.a.createElement(b.Panel,{id:this.props.id},o.a.createElement(b.PanelHeader,{left:o.a.createElement(b.HeaderButton,{onClick:this.props.go,"data-to":"ras"},e===b.IOS?o.a.createElement(y.a,null):o.a.createElement(S.a,null))}),o.a.createElement(b.Group,{className:"Header__content",title:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 ".concat(v[this.props.bookId].eit)},o.a.createElement(b.List,null,o.a.createElement(b.Cell,{before:o.a.createElement("h2",{className:"mr"},1),description:v[this.props.bookId].five},v[this.props.bookId].one),o.a.createElement(b.Cell,{before:o.a.createElement("h2",{className:"mr"},2),description:v[this.props.bookId].six},v[this.props.bookId].two),o.a.createElement(b.Cell,{before:o.a.createElement("h2",{className:"mr"},3),description:v[this.props.bookId].seven},v[this.props.bookId].fre),o.a.createElement(b.Cell,{before:o.a.createElement("h2",{className:"mr"},4),description:v[this.props.bookId].sevenn},v[this.props.bookId].fo))))}}]),t}(o.a.Component)),O=a(7),I=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).goBack=function(){var e=Object(i.a)(n.state.history);e.pop();var t=e[e.length-1];"feed"===t&&c.a.send("VKWebAppDisableSwipeBack"),n.setState({history:e,activePanel:t})},n.goForward=function(e){var t=Object(i.a)(n.state.history);t.push(e),"feed"===n.state.activePanel&&c.a.send("VKWebAppEnableSwipeBack"),n.setState({history:t,activePanel:e})},n.go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.backauthor=function(e){n.setState({activeStory:e.currentTarget.dataset.to}),window.scrollTo(0,0)},n.getBookText=function(e,t){console.log(a(34)("./books"+O[e].preview)),fetch(a(75)("./content"+a(34)("./books"+O[e].preview)[t].text)).then(function(e){return e.text()}).then(function(e){n.setState({bookText:e})}),n.setState({page:t,check:!0}),!!window.navigator.onLine||alert("\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435.\n\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u043e\u043f\u044b\u0442\u043a\u0443")},n.state={bookText:null,activeStory:"home",check:!1,activePanel:"feed",history:["feed"],page:n.props.bookStartId},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=Object(b.platform)();return o.a.createElement(b.Panel,{id:this.props.id},o.a.createElement(b.PanelHeader,{left:o.a.createElement(b.HeaderButton,{onClick:this.props.go,"data-to":"ras"},e===b.IOS?o.a.createElement(y.a,null):o.a.createElement(S.a,null))}),o.a.createElement(b.Group,{className:"Header__content",title:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043d\u0430 ".concat(O[this.props.bookId].eit)},o.a.createElement(b.List,null,o.a.createElement(b.Cell,{before:o.a.createElement("h2",{className:"mr"},1),description:O[this.props.bookId].five},O[this.props.bookId].one),o.a.createElement(b.Cell,{before:o.a.createElement("h2",{className:"mr"},2),description:O[this.props.bookId].six},O[this.props.bookId].two),o.a.createElement(b.Cell,{before:o.a.createElement("h2",{className:"mr"},3),description:O[this.props.bookId].seven},O[this.props.bookId].fre),o.a.createElement(b.Cell,{before:o.a.createElement("h2",{className:"mr"},4),description:O[this.props.bookId].sevenn},O[this.props.bookId].fo))))}}]),t}(o.a.Component),x=a(76),j=a.n(x),P=a(29),N=a.n(P),B=a(77),_=a.n(B),T=a(48),D=a.n(T),H=a(49),A=a.n(H),L=a(36),V=a.n(L),G=(a(128),a(50)),K=a.n(G),U=a(78),z=a.n(U),W=a(79),F=a.n(W),M=Object(b.platform)(),q=Object.keys(v).map(function(e){return v[e]}),J=Object.keys(O).map(function(e){return O[e]}),R=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).goBack=function(){var e=Object(i.a)(a.state.history);e.pop();var t=e[e.length-1];"feed"===t&&c.a.send("VKWebAppDisableSwipeBack"),a.setState({history:e,activePanel:t})},a.goForward=function(e){var t=Object(i.a)(a.state.history);t.push(e),"feed"===a.state.activePanel&&c.a.send("VKWebAppEnableSwipeBack"),a.setState({history:t,activePanel:e})},a.go=function(e){a.setState({activeStory:e.currentTarget.dataset.to})},a.backauthor=function(e){a.setState({activeStory:e.currentTarget.dataset.to}),window.scrollTo(0,0)},a.selectBook=function(e){a.setState({bookId:e,activeStory:"bookDetail"}),window.scrollTo(0,0)},a.selectBook1=function(e){a.setState({bookId:e,activeStory:"bookDetail1"}),window.scrollTo(0,0)},a.state={activeStory:"feed",bookId:null,popout:null,search:"",contextOpened:!0,mode:"all",activePanel:"feed",history:["feed"]},a.onChange=a.onChange.bind(Object(f.a)(Object(f.a)(a))),a.onStoryChange=a.onStoryChange.bind(Object(f.a)(Object(f.a)(a))),a.toggleContext=a.toggleContext.bind(Object(f.a)(Object(f.a)(a))),a.select=a.select.bind(Object(f.a)(Object(f.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"toggleContext",value:function(){this.setState({contextOpened:!this.state.contextOpened})}},{key:"select",value:function(e){var t=e.currentTarget.dataset.mode;this.setState({mode:t}),requestAnimationFrame(this.toggleContext)}},{key:"onChange",value:function(e){this.setState({search:e})}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story}),window.scrollTo(0,0)}},{key:"UpdateTheme",value:function(){"client_dark"===this.state.theme?(this.setState({theme:"client_light"}),document.body.setAttribute("scheme","client_light")):(this.setState({theme:"client_dark"}),document.body.setAttribute("scheme","client_dark"))}},{key:"render",value:function(){var e=this;return o.a.createElement(b.Epic,{activeStory:this.state.activeStory,tabbar:"bookDetail"!==this.state.activeStory&&"authorDetail"!==this.state.activeStory&&o.a.createElement(b.Tabbar,null,o.a.createElement(b.TabbarItem,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed",text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},o.a.createElement(j.a,null)),o.a.createElement(b.TabbarItem,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover",text:"\u041e \u043d\u0430\u0441"},o.a.createElement(K.a,null)))},o.a.createElement(b.View,{id:"feed",activePanel:"feed"},o.a.createElement(b.Panel,{id:"feed"},o.a.createElement(b.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),o.a.createElement(b.Group,{className:"Header__content",title:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435",description:o.a.createElement("div",{style:{userSelect:"none",textAlign:"center"}},"\u041d\u0435 \u043d\u0430\u0448\u043b\u0438, \u0447\u0442\u043e \u0438\u0441\u043a\u0430\u043b\u0438? \u0416\u0434\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439!")},o.a.createElement(b.Cell,{onClick:this.onStoryChange,before:o.a.createElement(_.a,{className:"CellIconCustom"}),asideContent:o.a.createElement(N.a,{className:"CellIconCustom"}),selected:"ras"===this.state.activeStory,"data-story":"ras"},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),o.a.createElement(b.Cell,{onClick:this.onStoryChange,selected:"rass"===this.state.activeStory,before:o.a.createElement(k.a,{className:"CellIconCustom"}),asideContent:o.a.createElement(N.a,{className:"CellIconCustom"}),"data-story":"rass"},"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 (\u0421\u043a\u043e\u0440\u043e)")),o.a.createElement(b.List,null,o.a.createElement(b.Cell,{photo:"https://sun9-22.userapi.com/c840139/v840139500/77593/pXMOKA8P7Kw.jpg",description:"\u0412\u0441\u0442\u0443\u043f\u0430\u0439 \u0432 \u043d\u0430\u0448\u0438 \u0440\u044f\u0434\u044b \ud83c\udfc3",bottomContent:o.a.createElement(b.Button,{component:"a",href:"https://vk.me/kpk45olimp"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"),before:o.a.createElement(b.Avatar,{src:"https://sun9-22.userapi.com/c840139/v840139500/77593/pXMOKA8P7Kw.jpg",size:80}),size:"l"},'\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0439 \u0441\u0442\u0443\u0434\u0435\u043d\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u043b\u0443\u0431 "\u041e\u043b\u0438\u043c\u043f"'),o.a.createElement(b.Cell,{photo:"https://sun9-59.userapi.com/c850728/v850728258/cb0b5/w6fobdhihNg.jpg",description:"\u041c\u0435\u0434\u0438\u0430\u0426\u0435\u043d\u0442\u0440 \u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u043e\u0433\u043e \u043f\u0435\u0434\u0430\u0433\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043b\u043b\u0435\u0434\u0436\u0430\ud83d\udd25",bottomContent:o.a.createElement(b.Button,{component:"a",href:"https://vk.me/banankpk"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"),before:o.a.createElement(b.Avatar,{src:"https://sun9-59.userapi.com/c850728/v850728258/cb0b5/w6fobdhihNg.jpg",size:80}),size:"l"},"\u041c\u0435\u0434\u0438\u0430\u0426\u0435\u043d\u0442\u0440 #\u0411\u0410\u041d\u0410\u041d"),o.a.createElement(b.Cell,{photo:"https://sun9-40.userapi.com/c824500/v824500873/97b6f/u48ZhDvC4EU.jpg",description:"#\u041a\u041f\u041a\u0430\u0448\u043d\u0438\u043a\u04382019 - \u044d\u0442\u043e \u043f\u0440\u043e \u043d\u0430\u0441",bottomContent:o.a.createElement(b.Button,{component:"a",href:"https://vk.me/clubyuventis"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438"),before:o.a.createElement(b.Avatar,{src:"https://sun9-40.userapi.com/c824500/v824500873/97b6f/u48ZhDvC4EU.jpg",size:80}),size:"l"},"\u0411\u0423\u0414\u042c #\u0412\u0422\u0415\u041c\u0415")),o.a.createElement("br",null))),o.a.createElement(b.View,{id:"ras",activePanel:"ras"},o.a.createElement(b.Panel,{id:"ras"},o.a.createElement(b.PanelHeader,{left:o.a.createElement(b.HeaderButton,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed"},M===b.IOS?o.a.createElement(y.a,null):o.a.createElement(S.a,null))},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),o.a.createElement(b.Group,{className:"Header__content",title:"\u0414\u0430\u0442\u0430 \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f"},o.a.createElement(b.Cell,{onClick:this.onStoryChange,selected:"one"===this.state.activeStory,before:o.a.createElement(D.a,{className:"CellIconCustom"}),asideContent:o.a.createElement(N.a,{className:"CellIconCustom"}),"data-story":"one"},"9-14 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"),o.a.createElement(b.Cell,{onClick:this.onStoryChange,selected:"two"===this.state.activeStory,before:o.a.createElement(D.a,{className:"CellIconCustom"}),asideContent:o.a.createElement(N.a,{className:"CellIconCustom"}),"data-story":"two"},"16-21 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f")))),o.a.createElement(b.View,{id:"rass",activePanel:"rass"},o.a.createElement(b.Panel,{id:"rass"},o.a.createElement(b.PanelHeader,{left:o.a.createElement(b.HeaderButton,{onClick:this.onStoryChange,selected:"ras"===this.state.activeStory,"data-story":"ras"},M===b.IOS?o.a.createElement(y.a,null):o.a.createElement(S.a,null))},"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"),o.a.createElement(b.Group,{className:"Header__content",title:"\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"},o.a.createElement(b.Group,null,o.a.createElement(b.Div,null,o.a.createElement(b.InfoRow,{title:"\u0412 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"},o.a.createElement(b.Progress,{value:30}))))))),o.a.createElement(b.View,{id:"one",activePanel:"one"},o.a.createElement(b.Panel,{id:"one"},o.a.createElement(b.PanelHeader,{left:o.a.createElement(b.HeaderButton,{onClick:this.onStoryChange,selected:"ras"===this.state.activeStory,"data-story":"ras"},M===b.IOS?o.a.createElement(y.a,null):o.a.createElement(S.a,null))},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),o.a.createElement(b.Group,{className:"Header__content",title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438",description:o.a.createElement("div",{style:{userSelect:"none",textAlign:"center"}},"\u041d\u0435 \u043d\u0430\u0448\u043b\u0438, \u0447\u0442\u043e \u0438\u0441\u043a\u0430\u043b\u0438? \u0416\u0434\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439!")},o.a.createElement(b.List,null,Object.keys(v).map(function(t){return o.a.createElement(b.Cell,{onClick:function(){return e.selectBook(t)},key:t,before:o.a.createElement(A.a,{className:"CellIconCustom"}),asideContent:o.a.createElement(V.a,{className:"CellIconCustom"})},o.a.createElement("span",null,v[t].title))}))),o.a.createElement("br",null))),o.a.createElement(b.View,{id:"two",activePanel:"two"},o.a.createElement(b.Panel,{id:"two"},o.a.createElement(b.PanelHeader,{left:o.a.createElement(b.HeaderButton,{onClick:this.onStoryChange,selected:"ras"===this.state.activeStory,"data-story":"ras"},M===b.IOS?o.a.createElement(y.a,null):o.a.createElement(S.a,null))},"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),o.a.createElement(b.Group,{className:"Header__content",title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438",description:o.a.createElement("div",{style:{userSelect:"none",textAlign:"center"}},"\u041d\u0435 \u043d\u0430\u0448\u043b\u0438, \u0447\u0442\u043e \u0438\u0441\u043a\u0430\u043b\u0438? \u0416\u0434\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439!")},o.a.createElement(b.List,null,Object.keys(O).map(function(t){return o.a.createElement(b.Cell,{onClick:function(){return e.selectBook1(t)},key:t,before:o.a.createElement(A.a,{className:"CellIconCustom"}),asideContent:o.a.createElement(V.a,{className:"CellIconCustom"})},o.a.createElement("span",null,O[t].title))}))),o.a.createElement("br",null))),o.a.createElement(b.View,{id:"discover",activePanel:"discover"},o.a.createElement(b.Panel,{id:"discover"},o.a.createElement(b.PanelHeader,null,"\u041e \u043d\u0430\u0441"),o.a.createElement(b.Group,{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"25px 100px",textAlign:"center",pointerEvents:"none",userSelect:"none"}},o.a.createElement(b.Div,null,o.a.createElement("img",{src:"https://sun9-46.userapi.com/c855124/v855124687/eb167/8qLOgB9D85g.jpg",alt:"",style:{width:"100%",boxShadow:"0 0 25px",pointerEvents:"none",borderRadius:35}}),o.a.createElement("h3",{style:{userSelect:"none",margin:0,padding:0,paddingTop:25}},'\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 "\u0433\u0440\u0443\u043f\u043f\u044b \u211613"'))),o.a.createElement(b.Group,null,o.a.createElement(b.CellButton,{style:{userSelect:"none"},before:o.a.createElement(z.a,null),component:"a",target:"_blank",href:"https://vk.me/c_0_d_e_r"},"\u041f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u0442\u044c \u0438\u0434\u0435\u044e")),o.a.createElement(b.Group,null,o.a.createElement(b.List,null,o.a.createElement(b.Cell,{before:o.a.createElement(b.Avatar,{style:{background:"var(--accent)",userSelect:"none"},size:28},o.a.createElement(K.a,{fill:"var(--white)"})),description:"\u0412\u0435\u0440\u0441\u0438\u044f 0.2"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"))),o.a.createElement(b.Group,{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"},o.a.createElement(b.Div,null,o.a.createElement(b.Cell,{before:o.a.createElement(F.a,null),asideContent:o.a.createElement(b.Switch,{defaultChecked:"client_light"===this.state.theme,onChange:function(){return e.UpdateTheme()}})},"\u0422\u0451\u043c\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c"))))),o.a.createElement(b.View,{id:"bookDetail",activePanel:"bookDetail",onSwipeBack:function(){return e.setState({activePanel:"feed"})}},o.a.createElement(w,{id:"bookDetail",go:this.go,bookId:this.state.bookId,bookStartId:1})),o.a.createElement(b.View,{id:"bookDetail1",activePanel:"bookDetail1",onSwipeBack:function(){return e.setState({activePanel:"feed"})}},o.a.createElement(I,{id:"bookDetail1",go:this.go,bookId:this.state.bookId,bookStartId:1})))}},{key:"book",get:function(){var e=this.state.search.toLowerCase();return q.filter(function(t){return t.title.toLowerCase().indexOf(e)>-1})}},{key:"books1",get:function(){var e=this.state.search.toLowerCase();return J.filter(function(t){return t.title.toLowerCase().indexOf(e)>-1})}}]),t}(o.a.Component);c.a.send("VKWebAppInit",{}),l.a.render(o.a.createElement(R,null),document.getElementById("root"))},34:function(e,t,a){var n={"./books/books":6,"./books/books.json":6,"./books/books1":7,"./books/books1.json":7};function o(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=34},46:function(e,t,a){},6:function(e){e.exports={1:{id:1,title:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a (09.09) ",one:"\u0424\u0438\u0437\u0438\u043a\u0430 (22)",two:"\u0425\u0438\u043c\u0438\u044f (219)",fre:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430 (\u041b\u044b\u0436 \u0431)",fo:"\u041d\u0435\u0442",five:"8.00-8.35 \u2013 8.40-9.15",six:"9.25-10.00 \u2013 10.05-10.40",seven:"11.20-11.55 \u2013 12.00-12.35",sevenn:"12.45-13.20 \u201313.25-14.00",eit:"9 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},2:{id:2,title:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a (10.09)",one:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 (22)",two:"\u0418\u043d\u0444\u043e (26) | \u0410\u043d\u0433\u043b (222)",fre:"\u0410\u043d\u0433\u043b (222) | \u0418\u043d\u0444\u043e (26)",fo:"\u041d\u0435\u0442",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"12.00-12.45 \u2013 12.50-13.35",sevenn:"13.45-14.30 \u2013 14.35-15.20",eit:"10 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},3:{id:3,title:"\u0421\u0440\u0435\u0434\u0430 (11.09)",one:"\u0424\u0438\u0437\u0438\u043a\u0430 (23)",two:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430 (209)",fre:"\u041e\u0411\u0416 (14)",fo:"\u041d\u0435\u0442",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"12.00-12.45 \u2013 12.50-13.35",sevenn:"13.45-14.30 \u2013 14.35-15.20",eit:"11 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},4:{id:4,title:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433 (12.09)",one:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 (22)",two:"\u0418\u043d\u0444\u043e (26) | \u0410\u043d\u0433\u043b (222)",fre:"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u0437\u043d\u0430\u043d\u0438\u0435 (9)",fo:"\u041d\u0435\u0442",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"12.00-12.45 \u2013 12.50-13.35",sevenn:"13.45-14.30 \u2013 14.35-15.20",eit:"12 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},5:{id:5,title:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430 (13.09)",one:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 (22)",two:"\u0410\u043d\u0433\u043b (222) | \u0418\u043d\u0444\u043e (26)",fre:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430 (C3)",fo:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430 (217) \u0432 4 \u043a\u043e\u0440\u043f\u0443\u0441\u0435",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"12.00-12.45 \u2013 12.50-13.35",sevenn:"13.45-14.30 \u2013 14.35-15.20",eit:"13 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},6:{id:6,title:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430 (14.09)",one:"\u0425\u0438\u043c\u0438\u044f (219)",two:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430 (\u041b\u044b\u0436 \u0431)",fre:"\u041d\u0435\u0442",fo:"\u041d\u0435\u0442",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"11.35-12.20 \u201312.25-13.10",sevenn:"13.20-14.05 \u201314.10-14.55",eit:"14 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"}}},7:function(e){e.exports={1:{id:1,title:"\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a (16.09)",one:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a (14)",two:"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u0437\u043d\u0430\u043d\u0438\u0435 (9)",fre:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430 (\u041b\u044b\u0436 \u0431)",fo:"\u041d\u0435\u0442",five:"8.00-8.35 \u2013 8.40-9.15",six:"9.25-10.00 \u2013 10.05-10.40",seven:"11.20-11.55 \u2013 12.00-12.35",sevenn:"12.45-13.20 \u201313.25-14.00",eit:"16 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},2:{id:2,title:"\u0412\u0442\u043e\u0440\u043d\u0438\u043a (17.09)",one:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 (22)",two:"\u0425\u0438\u043c\u0438\u044f (219)",fre:"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430 (23)",fo:"\u041d\u0435\u0442",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"12.00-12.45 \u2013 12.50-13.35",sevenn:"13.45-14.30 \u2013 14.35-15.20",eit:"17 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},3:{id:3,title:"\u0421\u0440\u0435\u0434\u0430 (18.09)",one:"\u0410\u043d\u0433\u043b (222) | \u0418\u043d\u0444\u043e (26)",two:"\u0418\u043d\u0444\u043e (26) | \u0410\u043d\u0433\u043b (222)",fre:"\u041e\u0411\u0416 (14)",fo:"\u041d\u0435\u0442",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"12.00-12.45 \u2013 12.50-13.35",sevenn:"13.45-14.30 \u2013 14.35-15.20",eit:"18 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},4:{id:4,title:"\u0427\u0435\u0442\u0432\u0435\u0440\u0433 (19.09)",one:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 (22)",two:"\u0418\u043d\u0444\u043e (26) | \u0410\u043d\u0433\u043b (222)",fre:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430 (\u04213)",fo:"\u041d\u0435\u0442",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"12.00-12.45 \u2013 12.50-13.35",sevenn:"13.45-14.30 \u2013 14.35-15.20",eit:"19 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},5:{id:5,title:"\u041f\u044f\u0442\u043d\u0438\u0446\u0430 (20.09)",one:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430 (22)",two:"\u0410\u043d\u0433\u043b (222) | \u0418\u043d\u0444\u043e (26)",fre:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f (1)",fo:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a (14)",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"12.00-12.45 \u2013 12.50-13.35",sevenn:"13.45-14.30 \u2013 14.35-15.20",eit:"20 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"},6:{id:6,title:"\u0421\u0443\u0431\u0431\u043e\u0442\u0430 (21.09)",one:"\u041e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u0437\u043d\u0430\u043d\u0438\u0435 (9)",two:"\u0425\u0438\u043c\u0438\u044f (219)",fre:"\u041d\u0435\u0442",fo:"\u041d\u0435\u0442",five:"8.00-8.45 \u2013 8.50-9.35",six:"9.45-10.30 \u2013 10.35-11.20",seven:"11.35-12.20 \u201312.25-13.10",sevenn:"13.20-14.05 \u201314.10-14.55",eit:"21 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"}}},75:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=75},80:function(e,t,a){e.exports=a(129)}},[[80,1,2]]]);
//# sourceMappingURL=main.5ca177d5.chunk.js.map
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{264:function(e,t){Date.prototype.format=function(){var e=this.getMonth()+1,t=this.getDate();return[(t>9?"":"0")+t,(e>9?"":"0")+e,this.getFullYear()].join("-")},String.prototype.toDate=function(){var e=this.split("-");return new Date(e[2],e[1]-1,e[0])}},326:function(e,t,n){"use strict";var a,r,i,s,o,c,l,u,d,p,f,h,m,k=n(38),g=n.n(k),y=n(20),b=n.n(y),T=n(531),v=n(532),P=n(49),S=n(0),w=n.n(S),W=n(101),E=n(46),x=n(2),O=n(66),L=n(4),q=n(9),D=n.n(q),j=n(11),C=n.n(j),z=n(57),A=n.n(z),M=n(13),I=n.n(M),K=n(47),N=n.n(K),B=(n(191),n(48)),V=(a=function(){function e(t,n,a,p,f,h){var m=this,k=arguments.length>6&&void 0!==arguments[6]&&arguments[6],g=arguments.length>7&&void 0!==arguments[7]&&arguments[7];C()(this,e),A()(this,"id",r,this),A()(this,"cat",i,this),A()(this,"freqPerWeek",s,this),A()(this,"time",o,this),A()(this,"task",c,this),A()(this,"isSelected",l,this),A()(this,"isCompleted",u,this),A()(this,"toggleSelect",d,this),this.toggleComplete=function(){m.isCompleted=!m.isCompleted},this.taskStore=t,this.id=n,this.task=a,this.cat=p,this.time=f,this.freqPerWeek=h,this.isSelected=k,this.isCompleted=g}return I()(e,null,[{key:"fromTask",value:function(t,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new e(t,n.id,n.task,n.cat,n.time,n.freqPerWeek,a,r)}}]),e}(),r=N()(a.prototype,"id",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=N()(a.prototype,"cat",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s=N()(a.prototype,"freqPerWeek",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),o=N()(a.prototype,"time",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=N()(a.prototype,"task",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),l=N()(a.prototype,"isSelected",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u=N()(a.prototype,"isCompleted",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=N()(a.prototype,"toggleSelect",[B.a],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isSelected=!e.isSelected}}}),a),_=n(23),H=(n(418),n(419),null),U=((H=_.a.apps.length?_.a.app():_.a.initializeApp({apiKey:"AIzaSyCZ1W91h5gI4Ys3K44apJMX-dfAzKmKOzc",authDomain:"todo-app-594e8.firebaseapp.com",projectId:"todo-app-594e8",storageBucket:"todo-app-594e8.appspot.com",messagingSenderId:"254618059037",appId:"1:254618059037:web:2a162824c6e6dfd3d921f4",measurementId:"G-84M73W8WLD"})).auth(),H.firestore()),Y=(n(264),n(321)),G=n.n(Y),J=(p=function(){function e(){C()(this,e),A()(this,"taskList",f,this)}return I()(e,[{key:"migrate",value:function(){return b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:U.collection("todolist").doc("default").set({lastUpdated:new Date,workList:[{id:1,task:"L\xe0m vi\u1ec7c nh\xe0: D\u1ecdn ph\xf2ng, d\u1ecdn nh\xe0 v\u1ec7 sinh, d\u1ecdn s\xe2n th\u01b0\u1ee3ng, r\u1eeda b\xe1t",cat:"Vi\u1ec7c nh\xe0",time:30,freqPerWeek:3},{id:2,task:"L\xe0m Doulingo",cat:"T.A",time:20,freqPerWeek:7},{id:3,task:"L\xe0m Scratch",cat:"ICT",time:90,freqPerWeek:2},{id:4,task:"H\u1ecdc t\u1ea7ng c\u1ea7u",cat:"Th\u1ec3 thao",time:30,freqPerWeek:2},{id:5,task:"V\u1ebd tranh, t\xf4 m\xe0u",cat:"S\xe1ng t\u1ea1o",time:45,freqPerWeek:2},{id:6,task:"S\xe1ng t\xe1c truy\u1ec7n tranh",cat:"S\xe1ng t\u1ea1o",time:60,freqPerWeek:2},{id:7,task:"\u0110\xe1nh \u0111\xe0n",cat:"Ngh\u1ec7 thu\u1eadt",time:15,freqPerWeek:3},{id:8,task:"\u0110u x\xe0",cat:"Th\u1ec3 thao",time:5,freqPerWeek:7},{id:9,task:"Thuy\u1ebft tr\xecnh v\u1ec1 nh\xe2n v\u1eadt",cat:"K.N",time:45,freqPerWeek:2},{id:10,task:"K\u1ec3 chuy\u1ec7n, \u0111\u1ecdc chuy\u1ec7n",cat:"K.N",time:20,freqPerWeek:2},{id:11,task:"\u0110\u1ecdc chuy\u1ec7n ti\u1ebfng anh",cat:"T.A",time:30,freqPerWeek:2},{id:12,task:"L\xe0m b\xe0i t\u1eadp to\xe1n",cat:"Ki\u1ebfn th\u1ee9c",time:45,freqPerWeek:3},{id:13,task:"L\xe0m b\xe0i t\u1eadp Ti\u1ebfng vi\u1ec7t",cat:"Ki\u1ebfn th\u1ee9c",time:45,freqPerWeek:3},{id:14,task:"L\xe0m th\u01a1",cat:"S\xe1ng t\u1ea1o",time:30,freqPerWeek:2},{id:15,task:"L\xe0m b\xe0i t\u1eadp Apax",cat:"T.A",time:90,freqPerWeek:2},{id:16,task:"\u0110\xf3ng k\u1ecbch ng\u1eafn, l\xe0m video Youtube",cat:"S\xe1ng t\u1ea1o",time:60,freqPerWeek:1},{id:17,task:"Gh\xe9p lego",cat:"S\xe1ng t\u1ea1o",time:30,freqPerWeek:2},{id:18,task:"H\u1ecdc c\u1edd vua",cat:"Th\u1ec3 thao",time:60,freqPerWeek:3},{id:19,task:"Gi\u1ea3i to\xe1n Kangaroo",cat:"Ki\u1ebfn th\u1ee9c",time:60,freqPerWeek:3},{id:20,task:"Nh\u1eb7t rau, chu\u1ea9n b\u1ecb \u0111\u1ed3 \u0103n",cat:"Vi\u1ec7c nh\xe0",time:30,freqPerWeek:3},{id:21,task:"Vi\u1ebft c\xe2u T.A",cat:"T.A",time:15,freqPerWeek:7},{id:22,task:"Vi\u1ebft l\u1eddi tho\u1ea1i, d\u1ecbch phim ho\u1ea1t h\xecnh Peppa Pig",cat:"T.A",time:30,freqPerWeek:1},{id:23,task:"H\xe1t b\xe0i h\xe1t T.A",cat:"T.A",time:30,freqPerWeek:1},{id:24,task:"T\u1eadp t\xe2ng b\xf3ng 20 c\xe1i, d\u1eabn chuy\u1ec1n b\xf3ng 2 ch\xe2n (100 c\xe1i)",cat:"Th\u1ec3 thao",time:30,freqPerWeek:1},{id:25,task:"M\xfaa, u\u1ed1n d\u1ebbo",cat:"Th\u1ec3 thao",time:10,freqPerWeek:3},{id:26,task:"Workout 5p",cat:"Th\u1ec3 thao",time:5,freqPerWeek:3},{id:27,task:"B\u1eafn cung (2 l\u1ea7n -> 100 \u0111i\u1ec3m)",cat:"Th\u1ec3 thao",time:30,freqPerWeek:1}]});case 1:case"end":return e.stop()}}),null,null,null,Promise)}},{key:"loadTaskList",value:function(e,t){var n,a,r,i,s,o=this;return b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return this.taskList=[],c.next=3,b.a.awrap(U.collection("todolist").doc("default").get());case 3:return a=c.sent,r=e+"_"+Object(v.a)(t,"dd-MM-yyyy"),c.next=7,b.a.awrap(U.collection("selectlist").doc(r).get());case 7:return i=c.sent,s=null==(n=i.data())?void 0:n.selectedTasks,a.exists&&a.data().workList?a.data().workList.forEach((function(e){var t=null==s?void 0:s.find((function(t){return e.id==t.taskId})),n=V.fromTask(F,e,null!=t,null==t?void 0:t.isCompleted);o.taskList.push(n)})):console.log("No doc values found"),c.abrupt("return",this.taskList);case 11:case"end":return c.stop()}}),null,this,null,Promise)}},{key:"saveSelectList",value:function(e,t){var n,a;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e+"_"+Object(v.a)(t,"dd-MM-yyyy"),a=this.taskList.filter((function(e){return e.isSelected})).map((function(t){return{attachments:[],date:new Date,id:n+"_"+t.id,taskId:t.id,isCompleted:t.isCompleted,user:e}})),r.next=4,b.a.awrap(U.collection("selectlist").doc(n).set({lastUpdated:new Date,selectedTasks:a}));case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),null,this,null,Promise)}},{key:"sortedTaskList",get:function(){return G()(this.taskList,["isSelected","id"],["desc","asc"])}},{key:"totalCompleted",get:function(){return this.taskList.filter((function(e){return e.isCompleted})).length}},{key:"totalSelected",get:function(){return this.taskList.filter((function(e){return e.isSelected})).length}},{key:"saveSelectTask",value:function(e){}}]),e}(),f=N()(p.prototype,"taskList",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),N()(p.prototype,"sortedTaskList",[B.b],Object.getOwnPropertyDescriptor(p.prototype,"sortedTaskList"),p.prototype),N()(p.prototype,"totalCompleted",[B.b],Object.getOwnPropertyDescriptor(p.prototype,"totalCompleted"),p.prototype),N()(p.prototype,"totalSelected",[B.b],Object.getOwnPropertyDescriptor(p.prototype,"totalSelected"),p.prototype),N()(p.prototype,"saveSelectTask",[B.a],Object.getOwnPropertyDescriptor(p.prototype,"saveSelectTask"),p.prototype),p),F=new J,R=(h=function(){function e(){C()(this,e),A()(this,"selectedTasks",m,this)}return I()(e,[{key:"migrateData",value:function(e,t){var n,a,r,i,s,o;return b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=t.format(),c.next=3,b.a.awrap(U.collection("selectlist"+e).doc(n).get());case 3:return a=c.sent,c.next=6,b.a.awrap(U.collection("donelist"+e).doc(n).get());case 6:r=c.sent,i=[],s=[],o=e+"_"+n,r.exists&&r.data().doneTasks&&r.data().doneTasks.forEach((function(e){s.push(e)})),a.exists&&a.data().selectedTasks&&a.data().selectedTasks.forEach((function(n){i.push({id:o+"_"+n,taskId:n,date:t,user:e,isCompleted:s.includes(n),attachments:[]})})),U.collection("selectlist").doc(o).set({lastUpdated:new Date,selectedTasks:i});case 13:case"end":return c.stop()}}),null,null,null,Promise)}},{key:"loadSelectTasks",value:function(e,t){var n,a,r=this;return b.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e+"_"+t,i.next=3,b.a.awrap(U.collection("selectlist").doc(n).get());case 3:(a=i.sent).exists&&a.data().selectedTasks?a.data().selectedTasks.forEach((function(e){r.selectedTasks.push(e)})):console.log("No doc values found");case 5:case"end":return i.stop()}}),null,null,null,Promise)}}]),e}(),m=N()(h.prototype,"selectedTasks",[B.c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),h);new R;function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var Z=new function e(){C()(this,e),this.taskStore=new J(this),this.selectTaskStore=new R(this)},Q=w.a.createContext(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){D()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Z)),$=x.a.create({baseText:{fontSize:11},titleText:{fontSize:15,fontWeight:"bold"},result:{marginLeft:"10px",marginBottom:20,fontSize:18,fontWeight:"bold",color:"red"}}),ee=function(e){var t=Object(S.useState)(new Date),n=g()(t,2),a=n[0],r=n[1],i=Object(S.useState)(!0),s=g()(i,2),o=s[0],c=s[1],l=Object(S.useState)(0),u=g()(l,2),d=u[0],p=u[1],f=w.a.useContext(Q),h=f.taskStore,m=f.selectTaskStore,k=Object(S.useState)([]),y=g()(k,2),x=y[0],q=y[1];Object(S.useEffect)((function(){m.migrateData(e.user,a),h.loadTaskList(e.user,a).then((function(e){c(!1),q(h.sortedTaskList)}))}),[e.user,a]);var D=function(e){c(!0),r(Object(T.a)(a,e))};return w.a.createElement(E.a,null,w.a.createElement(L.a,{style:{flexDirection:"column"}},w.a.createElement(L.a,{style:{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginBottom:20}},w.a.createElement(W.a,{style:{size:""},title:"<< H\xf4m qua",onPress:function(){return D(-1)}}),w.a.createElement(W.a,{style:{size:""},title:"L\u01b0u vi\u1ec7c \u0111\xe3 ch\u1ecdn",onPress:function(){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(h.saveSelectList(e.user,a));case 2:p(d+1);case 3:case"end":return t.stop()}}),null,null,null,Promise)}}),w.a.createElement(W.a,{style:{size:""},title:"H\xf4m sau >>",onPress:function(){return D(1)}})),w.a.createElement(P.Text,{style:$.result}," Ng\xe0y ",Object(v.a)(a,"dd-MM-yyyy"),", ",e.user," \u0111\xe3 ch\u1ecdn ",h.totalSelected," vi\u1ec7c. ","\r\n"," \u0110\xe3 ho\xe0n th\xe0nh: ",h.totalCompleted," vi\u1ec7c")),w.a.createElement(P.Text,{style:{fontSize:18,fontWeight:"bold",marginLeft:15,marginBottom:20}},"Danh s\xe1ch c\xf4ng vi\u1ec7c: "),o?w.a.createElement(P.Spinner,null):w.a.createElement(P.List,null,x.map((function(e,t){return w.a.createElement(P.ListItem,{key:t,bottomDivider:!0,style:{backgroundColor:e.isSelected?"#cde1f9":"#fcfcfc"}},w.a.createElement(P.Body,null,w.a.createElement(L.a,null,w.a.createElement(O.a,{onPress:function(){return e.toggleSelect(),void p(d+1)}},w.a.createElement(L.a,null,w.a.createElement(P.Text,{style:$.titleText},e.id,". ",e.task),w.a.createElement(P.Text,{style:$.baseText},"M\u1ee5c: ",e.cat," "),w.a.createElement(P.Text,{style:$.baseText},"L\u1ea7n ch\u1ecdn theo tu\u1ea7n: ",e.freqPerWeek," "))))),w.a.createElement(P.Right,null,e.isSelected&&w.a.createElement(P.Switch,{value:e.isCompleted,onValueChange:function(t){e.toggleComplete(),p(d+1)}})))}))))},te=n(325),ne=n(327);t.a=function(){return w.a.createElement(ne.a,null,w.a.createElement(E.a,null,w.a.createElement(te.a,{placement:"left",leftComponent:{icon:"menu",color:"#fff"},centerComponent:{text:"SUMO DAYS",style:{color:"#fff"}},rightComponent:{icon:"home",color:"#fff"}}),w.a.createElement(P.Tabs,null,w.a.createElement(P.Tab,{heading:"Susu"},w.a.createElement(ee,{user:"Susu"})),w.a.createElement(P.Tab,{heading:"Nemo"},w.a.createElement(ee,{user:"Nemo"})),w.a.createElement(P.Tab,{heading:"Dad"},w.a.createElement(ee,{user:"Dad"})))))}},330:function(e,t,n){e.exports=n(522)}},[[330,1,2]]]);
//# sourceMappingURL=app.9fe127ea.chunk.js.map
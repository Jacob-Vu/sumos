(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{237:function(e,t){Date.prototype.format=function(){var e=this.getMonth()+1,t=this.getDate();return[(t>9?"":"0")+t,(e>9?"":"0")+e,this.getFullYear()].join("-")},String.prototype.toDate=function(){var e=this.split("-");return new Date(e[2],e[1]-1,e[0])}},379:function(e,t,n){"use strict";var a,r,o,l,c,s=n(126),i=n(333),u=n(603),m=n(0),d=n.n(m),f=n(16),p=n.n(f),h=n(21),g=n(606),y=n(29),b=n.n(y),E=n(3),S=n.n(E),v=n(165),x=n(602),w=n(604),k=n(115),O=n(51),j=n(5),D=n(4),T=n(2),C=n.n(T),P=n(9),L=n.n(P),z=n(19),I=n.n(z),B=n(11),M=n.n(B),W=n(84),N=n.n(W),A=n(374),U=n.n(A),F=n(33),H=n(25),q=(n(580),n(592),n(593),null),R=((q=H.a.apps.length?H.a.app():H.a.initializeApp({apiKey:"AIzaSyCZ1W91h5gI4Ys3K44apJMX-dfAzKmKOzc",authDomain:"todo-app-594e8.firebaseapp.com",projectId:"todo-app-594e8",storageBucket:"todo-app-594e8.appspot.com",messagingSenderId:"254618059037",appId:"1:254618059037:web:2a162824c6e6dfd3d921f4",measurementId:"G-84M73W8WLD"})).auth(),q.firestore()),V=q.storage(),_=n(204),K=n.n(_),Y=(n(315),a=function(){function e(t,n,a,o,l,c,s){var i=this,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],m=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[],d=arguments.length>9&&void 0!==arguments[9]&&arguments[9],f=arguments.length>10&&void 0!==arguments[10]&&arguments[10];L()(this,e),K()(this,"toggleSelect",r,this),this.toggleComplete=function(){i.isCompleted=!i.isCompleted},this.taskStore=t,this.id=n,this.task=a,this.cat=o,this.time=l,this.freqPerWeek=c,this.weekCount=s,this.isSelected=d,this.isCompleted=f,this.attachments=u,this.comments=m,Object(F.f)(this)}return M()(e,null,[{key:"fromTask",value:function(t,n,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return new e(t,n.id,n.task,n.cat,n.time,n.freqPerWeek,a,r,o,l,c)}}]),e}(),r=N()(a.prototype,"toggleSelect",[F.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isSelected=!e.isSelected}}}),a),J=(n(237),o=function(){function e(){var t=this;L()(this,e),this.taskList=[],this.periodUserList=[],this.loading=!1,this.loadTaskList=function(e,n){var a,r,o,l,c,s,i,u,m,d;return S.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return t.loading=!0,f.next=3,S.a.awrap(R.collection("todolist").doc("default").get());case 3:return r=f.sent,o=Object(x.a)(n,n.getDay()>0?1-n.getDay():-6),l=Object(x.a)(n,n.getDay()>0?7-n.getDay():0),f.next=8,S.a.awrap(t.loadSelectedDate([e],o,l));case 8:if(c=f.sent,s=null==(a=c.find((function(e){return new Date(1e3*e.date.seconds).toLocaleDateString()==n.toLocaleDateString()})))?void 0:a.selectedTasks){f.next=16;break}return u=e+"_"+Object(w.a)(n,"dd-MM-yyyy"),f.next=14,S.a.awrap(R.collection("selectlist").doc(u).get());case 14:m=f.sent,s=null==(i=m.data())?void 0:i.selectedTasks;case 16:r.exists&&r.data().workList?(d=r.data().workList.map((function(e){var n,a=null==(n=s)?void 0:n.find((function(t){return e.id==t.taskId})),r=c.reduce((function(t,n){return n.selectedTasks.find((function(t){return t.taskId==e.id}))?t+1:t}),0);return Y.fromTask(t,e,r,null==a?void 0:a.attachments,null==a?void 0:a.comments,null!=a,null==a?void 0:a.isCompleted)})),Object(F.i)((function(){var e;t.taskList=[],(e=t.taskList).push.apply(e,I()(d)),t.loading=!1}))):console.log("No doc values found");case 17:case"end":return f.stop()}}),null,null,null,Promise)},this.loadUserPeriod=function(e,n,a){var r;return S.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=[],t.loading=!0,o.next=4,S.a.awrap(t.loadSelectedDate(e,n,a));case 4:o.sent.forEach((function(e){var t={date:Object(w.a)(new Date(1e3*e.date.seconds),"dd-MM-yyyy"),selected:e.selectedTasks.length,completed:e.selectedTasks.filter((function(e){return e.isCompleted})).length},n=r.find((function(t){return t.user==e.user}));n?n.dataDates.push(t):r.push({user:e.user,dataDates:[t]})})),Object(F.i)((function(){t.loading=!1,t.periodUserList=r}));case 7:case"end":return o.stop()}}),null,null,null,Promise)},this.loadSelectedDate=function(e,t,n){var a;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=[],r.next=3,S.a.awrap(R.collection("selectlist").where("user","in",e).where("date",">=",t).where("date","<=",n).get());case 3:return r.sent.forEach((function(e){a.push(e.data())})),r.abrupt("return",a);case 6:case"end":return r.stop()}}),null,null,null,Promise)},this.saveSelectList=function(e,n){var a,r;return S.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t.loading=!0,a=e+"_"+Object(w.a)(n,"dd-MM-yyyy"),r=t.taskList.filter((function(e){return e.isSelected})).map((function(e){var t;return{taskId:e.id,isCompleted:e.isCompleted,comments:e.comments,attachments:null==(t=e.attachments)?void 0:t.map((function(e){return{ref:e.ref,url:null==e?void 0:e.url}}))}})),o.next=5,S.a.awrap(R.collection("selectlist").doc(a).set({date:n,lastUpdate:new Date,user:e,selectedTasks:r}));case 5:Object(F.i)((function(){t.loading=!1}));case 6:case"end":return o.stop()}}),null,null,null,Promise)},this.migrate=function(){return S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:R.collection("todolist").doc("default");case 1:case"end":return e.stop()}}),null,null,null,Promise)},console.log("Initialize TaskStore..."),Object(F.f)(this)}return M()(e,[{key:"sortedTaskList",get:function(){return U()(this.taskList,["isSelected","id"],["desc","asc"])}},{key:"totalCompleted",get:function(){return this.taskList.filter((function(e){return e.isCompleted})).length}},{key:"totalSelected",get:function(){return this.taskList.filter((function(e){return e.isSelected})).length}},{key:"saveSelectTask",value:function(e){}}]),e}(),N()(o.prototype,"sortedTaskList",[F.c],Object.getOwnPropertyDescriptor(o.prototype,"sortedTaskList"),o.prototype),N()(o.prototype,"totalCompleted",[F.c],Object.getOwnPropertyDescriptor(o.prototype,"totalCompleted"),o.prototype),N()(o.prototype,"totalSelected",[F.c],Object.getOwnPropertyDescriptor(o.prototype,"totalSelected"),o.prototype),N()(o.prototype,"saveSelectTask",[F.b],Object.getOwnPropertyDescriptor(o.prototype,"saveSelectTask"),o.prototype),o),G=(l=function(){function e(){L()(this,e),K()(this,"selectedTasks",c,this)}return M()(e,[{key:"migrateData",value:function(e,t){var n,a,r,o,l,c;return S.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=t.format(),s.next=3,S.a.awrap(R.collection("selectlist"+e).doc(n).get());case 3:return a=s.sent,s.next=6,S.a.awrap(R.collection("donelist"+e).doc(n).get());case 6:r=s.sent,o=[],l=[],c=e+"_"+n,r.exists&&r.data().doneTasks&&r.data().doneTasks.forEach((function(e){l.push(e)})),a.exists&&a.data().selectedTasks&&a.data().selectedTasks.forEach((function(n){o.push({id:c+"_"+n,taskId:n,date:t,user:e,isCompleted:l.includes(n),attachments:[]})})),R.collection("selectlist").doc(c).set({lastUpdated:new Date,selectedTasks:o});case 13:case"end":return s.stop()}}),null,null,null,Promise)}}]),e}(),c=N()(l.prototype,"selectedTasks",[F.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),l),X=n(12),Z=function e(){var t=this;L()(this,e),this.loading=!1,this.addAttachments=function(e,n){var a,r,o,l,c,s,i,u;return S.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return t.loading=!0,a=t.getPlatformPath(n).value,r=t.getFileName(n.fileName,a),o="attachFiles/"+r,Object(F.i)((function(){var t={value:a,ref:o};e.attachments.push(t)})),m.next=7,S.a.awrap(fetch(a));case 7:return l=m.sent,m.next=10,S.a.awrap(l.blob());case 10:return c=m.sent,s=V.ref().child(o),m.next=14,S.a.awrap(s.put(c));case 14:return i=m.sent,m.next=17,S.a.awrap(s.getDownloadURL());case 17:return u=m.sent,e.attachments[e.attachments.length-1].url=u,t.loading=!1,m.abrupt("return",i);case 21:case"end":return m.stop()}}),null,null,null,Promise)},this.getFileName=function(e,t){if(null!=e)return e;if("ios"===X.a.OS&&(t="~"+t.substring(t.indexOf("/Documents"))),"web"==X.a.OS){var n=new Date;return Object(w.a)(n,"yyMMdd_")+Date.now()}return t.split("/").pop()},this.getPlatformPath=function(e){var t=e.path,n=e.uri;return X.a.select({android:{value:t},web:{value:n},ios:{value:n}})},this.getPlatformURI=function(e){var n=e;return isNaN(e)&&(n={uri:t.state.imagePath},"android"==X.a.OS&&(n.uri="file:///"+n.uri)),n},console.log("Initialize TaskStore..."),Object(F.f)(this)};function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var $=new function e(){L()(this,e),this.taskStore=new J(this),this.selectTaskStore=new G(this),this.storageStore=new Z(this)},ee=d.a.createContext(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){C()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},$)),te=function(){return d.a.useContext(ee)},ne=n(61),ae=n(159),re=n(245),oe=n(42),le=j.a.create({baseText:{fontSize:11},titleText:{fontSize:15,fontWeight:"bold"},input:{height:40,width:300,maxWidth:500,marginLeft:20,fontSize:16,fontStyle:"italic",borderWidth:0,borderBottomColor:"#000000",borderBottomWidth:1,borderColor:"rgb(201, 201, 201)"}}),ce=function(e){var t,n=Object(m.useState)(""),a=p()(n,2),r=a[0],o=a[1],l=te(),c=l.taskStore,i=(l.storageStore,e.item);return d.a.createElement(h.View,{style:{width:400,marginLeft:20,marginTop:20,borderWidth:1,borderColor:"rgb(201, 201, 201)"}},null==(t=i.comments)?void 0:t.map((function(e,t){return d.a.createElement(h.Text,{style:{fontStyle:"italic",color:t%2==0?"#3962a3":"#39a372"},key:e.id}," ",Object(w.a)(new Date(e.id),"HH:mm"),": ",e.text)})),d.a.createElement(h.View,{style:{flexDirection:"row",marginTop:20}},d.a.createElement(s.a,{style:le.input,placeholder:"Write to here...",value:r,onChangeText:o}),d.a.createElement(h.Button,{style:{marginLeft:10},transparent:!0,onPress:function(){return i.comments.push({id:Date.now(),text:r}),o(""),void c.saveSelectList(e.user,e.date)}},d.a.createElement(v.a,{name:"send-o",style:{fontSize:25},color:"rgb(63, 81, 181)"}))))},se=j.a.create({baseText:{fontSize:11},titleText:{fontSize:15,fontWeight:"bold"},input:{height:40,maxWidth:500,marginLeft:20,fontSize:18,borderWidth:1,borderColor:"rgb(201, 201, 201)"}}),ie=Object(k.a)((function(e){var t,n,a=e.taskItem,r=Object(oe.useNavigation)(),o=Object(oe.useRoute)(),l=te(),c=(l.taskStore,l.storageStore),s=Object(oe.useIsFocused)(),i=Object(m.useState)(!1),u=p()(i,2),f=u[0],g=u[1];Object(m.useEffect)((function(){var e;s&&null!=(e=o.params)&&e.photo&&o.params.id==a.id&&c.addAttachments(a,o.params.photo)}),[null==(t=o.params)?void 0:t.id]);return d.a.createElement(h.ListItem,{key:a.id,style:{backgroundColor:a.isSelected?"#cde1f9":"#fcfcfc"}},d.a.createElement(h.Body,{style:{flexDirection:"column"}},d.a.createElement(D.a,{style:{flexDirection:"row"}},d.a.createElement(D.a,null,d.a.createElement(ae.a,{onPress:function(){return e.onSelectItem(a)}},d.a.createElement(D.a,null,d.a.createElement(h.Text,{style:se.titleText},a.id,". ",a.task),d.a.createElement(h.Text,{style:se.baseText},"M\u1ee5c: ",a.cat," "),a.weekCount>0?d.a.createElement(h.Text,{style:{fontSize:13,color:a.weekCount>a.freqPerWeek?"red":""}},"\u0110\xe3 ch\u1ecdn: ",a.weekCount," l\u1ea7n (\u0110\u01b0\u1ee3c ch\u1ecdn ",a.freqPerWeek," l\u1ea7n) "):d.a.createElement(h.Text,{style:{fontSize:13}},"\u0110\u01b0\u1ee3c ch\u1ecdn ",a.freqPerWeek," l\u1ea7n ")))),d.a.createElement(D.a,{style:{flexDirection:"row"}},function(e){return e.attachments.map((function(e){var t;return d.a.createElement(ne.a,{source:{uri:null!=(t=e.value)?t:e.url},style:{width:50,height:50,marginLeft:20}})}))}(a),c.loading&&(null==(n=o.params)?void 0:n.id)==a.id&&d.a.createElement(D.a,null,d.a.createElement(h.Spinner,null),d.a.createElement(h.Text,null,"\u0110ang t\u1ea3i \u1ea3nh l\xean... ")))),d.a.createElement(D.a,null,f&&d.a.createElement(ce,{item:a,user:e.user,date:e.date}))),a.isSelected&&d.a.createElement(h.Right,{style:{flexDirection:"row",justifyContent:"space-around",alignContent:"flex-start",alignSelf:"flex-start"}},d.a.createElement(h.Switch,{style:{alignSelf:"center"},value:a.isCompleted,onValueChange:function(t){e.onDoneItem(a)}}),d.a.createElement(h.Button,{transparent:!0,onPress:function(){return g(!f)}},d.a.createElement(v.a,{name:"comment",style:{fontSize:25},color:"rgb(63, 81, 181)"})),d.a.createElement(h.Button,{transparent:!0,onPress:function(){return function(e){r.navigate("CameraScreen",{sourceScreen:"HomeScreen",id:e.id})}(a)}},d.a.createElement(v.a,{style:{fontSize:25},name:"camera",color:"rgb(63, 81, 181)"})),d.a.createElement(h.Button,{transparent:!0,onPress:function(){return function(t){var n;return S.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,S.a.awrap(re.b());case 2:if(!1!==a.sent.granted){a.next=6;break}return alert("You've refused to allow this appp to access your photos!"),a.abrupt("return");case 6:return a.next=8,S.a.awrap(re.a());case 8:(n=a.sent).cancelled?console.log("User cancelled image picker"):(c.addAttachments(t,n),e.onAddFile&&e.onAddFile());case 10:case"end":return a.stop()}}),null,null,null,Promise)}(a)}},d.a.createElement(v.a,{style:{fontSize:25},name:"cloud-upload",color:"rgb(63, 81, 181)"}))))})),ue=j.a.create({result:{marginLeft:"10px",marginBottom:20,fontSize:22,fontWeight:"bold",color:"red"}}),me=Object(k.a)((function(e){var t=Object(m.useState)(new Date),n=p()(t,2),a=n[0],r=n[1],o=te().taskStore;Object(m.useEffect)((function(){o.loadTaskList(e.user,a)}),[e.index,e.user,a]);var l=function(t){t.toggleSelect(),o.saveSelectList(e.user,a)},c=function(t){t.toggleComplete(),o.saveSelectList(e.user,a)},s=function(t){o.saveSelectList(e.user,a)},i=function(e){r(Object(x.a)(a,e))};return d.a.createElement(O.a,null,d.a.createElement(D.a,{style:{flexDirection:"column"}},d.a.createElement(D.a,{style:{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginBottom:20}},d.a.createElement(h.Button,{transparent:!0,onPress:function(){return i(-1)}},d.a.createElement(v.a,{style:{fontSize:35},name:"backward",color:"rgb(33, 150, 243)"})),d.a.createElement(D.a,{style:{flexDirection:"row",justifyContent:"center"}},d.a.createElement(h.Text,{style:{fontSize:18,fontWeight:"bold",color:"red"}}," ",Object(w.a)(a,"iiii, dd-MM-yyyy")," "),o.loading&&d.a.createElement(h.Spinner,{style:{height:35}})),d.a.createElement(h.Button,{transparent:!0,onPress:function(){return i(1)}},d.a.createElement(v.a,{style:{fontSize:35},name:"forward",color:"rgb(33, 150, 243)"})))),o.sortedTaskList.length>0&&d.a.createElement(D.a,{style:{flexDirection:"column"}},d.a.createElement(h.Text,{style:ue.result},e.user," \u0111\xe3 ch\u1ecdn ",o.totalSelected," vi\u1ec7c. ","\r\n","\u0110\xe3 ho\xe0n th\xe0nh: ",o.totalCompleted," vi\u1ec7c"),d.a.createElement(h.Text,{style:{fontSize:18,fontWeight:"bold",marginLeft:15,marginBottom:20}},"Danh s\xe1ch c\xf4ng vi\u1ec7c: "),d.a.createElement(h.List,null,o.sortedTaskList.map((function(t,n){return d.a.createElement(ie,b()({key:t.id,taskItem:t,date:a,onSelectItem:l,onDoneItem:c,onAddFile:s},e))})))))})),de=n(113),fe=(j.a.create({result:{marginLeft:"10px",marginBottom:20,fontSize:18,fontWeight:"bold",color:"red"}}),Object(k.a)((function(e){var t=Object(m.useState)(new Date),n=p()(t,2),a=n[0],r=n[1],o=te().taskStore;Object(m.useEffect)((function(){var e=Object(x.a)(a,a.getDay()>0?1-a.getDay():-6),t=Object(x.a)(a,a.getDay()>0?7-a.getDay():0);o.loadUserPeriod(["Susu","Nemo"],e,t)}),[a]);var l=function(e){r(Object(x.a)(a,e))};return d.a.createElement(O.a,null,d.a.createElement(D.a,{style:{flexDirection:"column"}},d.a.createElement(D.a,{style:{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginBottom:20}},d.a.createElement(de.a,{style:{size:""},title:"<< H\xf4m qua",onPress:function(){return l(-1)}}),d.a.createElement(de.a,{style:{size:""},title:"L\u01b0u vi\u1ec7c \u0111\xe3 ch\u1ecdn",onPress:function(){return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.awrap(o.saveSelectList(e.user,a));case 2:case"end":return t.stop()}}),null,null,null,Promise)}}),d.a.createElement(de.a,{style:{size:""},title:"H\xf4m sau >>",onPress:function(){return l(1)}}))),o.loading?d.a.createElement(h.Spinner,null):d.a.createElement(D.a,{style:{flexDirection:"column"}},o.periodUserList.map((function(e){return d.a.createElement(D.a,null,d.a.createElement(h.Text,{style:{fontSize:20}}," ",e.user," "),d.a.createElement(h.List,null,e.dataDates.map((function(e){return d.a.createElement(h.ListItem,null,d.a.createElement(h.Text,null," Ng\xe0y: ",e.date),d.a.createElement(h.Text,null," \u0110\u0103ng k\xfd: ",e.selected),d.a.createElement(h.Text,{style:{fontSize:18,color:e.selected>e.completed?"red":"black"}}," Ho\xe0n th\xe0nh: ",e.completed))}))))}))))}))),pe=function(e){var t=Object(m.useState)(0),n=p()(t,2),a=n[0],r=n[1];return d.a.createElement(g.b,null,d.a.createElement(h.Container,null,d.a.createElement(O.a,null,d.a.createElement(h.Header,null,d.a.createElement(h.Left,null,d.a.createElement(h.Button,{transparent:!0},d.a.createElement(h.Icon,{name:"menu"}))),d.a.createElement(h.Body,null,d.a.createElement(h.Title,null,"SUMO DAYS")),d.a.createElement(h.Right,null,d.a.createElement(h.Button,{transparent:!0},d.a.createElement(h.Icon,{name:"arrow-back"})))),d.a.createElement(h.Tabs,{onChangeTab:function(e){console.log(e),r(e.i)}},d.a.createElement(h.Tab,{heading:"Susu"},d.a.createElement(me,{index:a,user:"Susu"})),d.a.createElement(h.Tab,{heading:"Nemo"},d.a.createElement(me,{index:a,user:"Nemo"})),d.a.createElement(h.Tab,{heading:"Dad"},d.a.createElement(fe,{index:a}))))))},he=function(){var e=Object(m.useState)(0),t=p()(e,2);t[0],t[1];return d.a.createElement(h.View,null,"Detail")},ge=n(62),ye=n(65),be=n(605),Ee=j.a.create({container:{alignSelf:"center",width:640,height:480},image:{flex:1,width:640,height:480},camera:{flex:1},buttonContainer:{flex:1,backgroundColor:"transparent",flexDirection:"row",margin:20},button:{flex:1,alignSelf:"flex-end",alignItems:"center"},text:{fontSize:18,marginLeft:20,color:"white"}}),Se=function(e){var t=e.navigation,n=Object(m.useState)(null),a=p()(n,2),r=a[0],o=a[1],l=Object(m.useState)(be.a.Constants.Type.back),c=p()(l,2),s=c[0],i=c[1],u=Object(oe.useRoute)(),f=Object(m.useState)(),g=p()(f,2),y=g[0],b=g[1],E=Object(m.useState)(),v=p()(E,2),x=v[0],w=v[1];if(Object(m.useEffect)((function(){!function(){var e,t;S.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.a.awrap(be.a.requestPermissionsAsync());case 2:e=n.sent,t=e.status,o("granted"===t);case 5:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),null===r)return d.a.createElement(D.a,null);if(!1===r)return d.a.createElement(ge.a,null,"No access to camera");var k=function(){var e;t.navigate(u.params.sourceScreen,{photo:y,sourceScreen:"CameraScreen",id:null==(e=u.params)?void 0:e.id})};return d.a.createElement(D.a,{style:Ee.container},!y&&d.a.createElement(be.a,{style:Ee.camera,type:s,ref:function(e){w(e)}},d.a.createElement(D.a,{style:Ee.buttonContainer},d.a.createElement(ye.a,{style:Ee.button,onPress:function(){i(s===be.a.Constants.Type.back?be.a.Constants.Type.front:be.a.Constants.Type.back)}},d.a.createElement(D.a,{style:{flex:1,flexDirection:"row",justifyContent:"space-around",alignContent:"center",marginLeft:20}},d.a.createElement(ge.a,{style:Ee.text}," Camera sau "),d.a.createElement(ge.a,{style:Ee.text,onPress:function(){var e;return S.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!x){t.next=5;break}return t.next=3,S.a.awrap(x.takePictureAsync());case 3:e=t.sent,b(e);case 5:case"end":return t.stop()}}),null,null,null,Promise)}}," Ch\u1ee5p \u1ea3nh "),d.a.createElement(h.Button,{transparent:!0,style:{marginRight:20},onPress:k},d.a.createElement(h.Icon,{name:"arrow-back"})))))),y&&d.a.createElement(D.a,{style:{flex:1,flexDirection:"column",justifyContent:"space-around",alignContent:"center",marginLeft:20}},d.a.createElement(ne.a,{source:{uri:y.uri},style:Ee.image}),d.a.createElement(D.a,{style:{flexDirection:"row",justifyContent:"space-around",alignContent:"center"}},d.a.createElement(h.Button,{onPress:function(){b(null)}},d.a.createElement(ge.a,{style:{fontSize:18}}," Ch\u1ee5p l\u1ea1i ")),d.a.createElement(h.Button,{onPress:k},d.a.createElement(ge.a,{style:{fontSize:18}}," T\u1ea3i \u1ea3nh ")))))},ve=Object(u.a)(),xe=function(e){e.navigation;return d.a.createElement(ve.Navigator,{headerMode:"none"},d.a.createElement(ve.Screen,{name:"HomeScreen",component:pe}),d.a.createElement(ve.Screen,{name:"CameraScreen",component:Se}),d.a.createElement(ve.Screen,{name:"TaskDetailScreen",component:he}))},we=function(e){var t=e.navigation;return d.a.createElement(View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},d.a.createElement(Text,{style:{fontSize:30}},"This is a modal!"),d.a.createElement(Button,{onPress:function(){return t.goBack()},title:"Dismiss"}))},ke=Object(u.a)(),Oe=function(e){e.navigation;return d.a.createElement(ke.Navigator,{headerMode:"none"},d.a.createElement(ke.Screen,{name:"LoginScreen",component:we}),d.a.createElement(ke.Screen,{name:"Details",component:he}))},je=Object(u.a)();t.a=function(){return d.a.createElement(i.a,null,d.a.createElement(je.Navigator,{mode:"modal",headerMode:"none"},d.a.createElement(je.Screen,{name:"Main",component:xe}),d.a.createElement(je.Screen,{name:"MyModal",component:Oe})))}},389:function(e,t,n){e.exports=n(589)}},[[389,1,2]]]);
//# sourceMappingURL=app.dca6b2bd.chunk.js.map
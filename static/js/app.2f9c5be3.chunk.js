(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{247:function(e,t){Date.prototype.format=function(){var e=this.getMonth()+1,t=this.getDate();return[(t>9?"":"0")+t,(e>9?"":"0")+e,this.getFullYear()].join("-")},String.prototype.toDate=function(){var e=this.split("-");return new Date(e[2],e[1]-1,e[0])}},400:function(e,t,n){"use strict";var a,r,o,l,c,i,s,u=n(94),m=n(350),d=n(625),f=n(0),p=n.n(f),h=n(15),g=n.n(h),y=n(2),b=n.n(y),E=n(11),S=n(628),v=n(31),x=n.n(v),w=n(173),T=n(39),O=n(622),k=n(626),j=n(84),D=n(56),C=n(6),P=n(4),L=n(3),z=n.n(L),I=n(10),B=n.n(I),W=n(21),N=n.n(W),M=n(13),V=n.n(M),A=n(67),F=n.n(A),R=n(391),U=n.n(R),H=n(24),_=n(27),q=(n(598),n(611),n(612),null),J=(q=_.a.apps.length?_.a.app():_.a.initializeApp({apiKey:"AIzaSyCZ1W91h5gI4Ys3K44apJMX-dfAzKmKOzc",authDomain:"todo-app-594e8.firebaseapp.com",projectId:"todo-app-594e8",storageBucket:"todo-app-594e8.appspot.com",messagingSenderId:"254618059037",appId:"1:254618059037:web:2a162824c6e6dfd3d921f4",measurementId:"G-84M73W8WLD"})).auth(),K=q.firestore(),Y=q.storage(),G=n(212),X=n.n(G),Z=(n(330),a=function(){function e(t,n,a,o,l,c,i){var s=this,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],m=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[],d=arguments.length>9&&void 0!==arguments[9]&&arguments[9],f=arguments.length>10&&void 0!==arguments[10]&&arguments[10];B()(this,e),X()(this,"toggleSelect",r,this),this.toggleComplete=function(){s.isCompleted=!s.isCompleted},this.taskStore=t,this.id=n,this.task=a,this.cat=o,this.time=l,this.freqPerWeek=c,this.weekCount=i,this.isSelected=d,this.isCompleted=f,this.attachments=u,this.comments=m,Object(H.f)(this)}return V()(e,null,[{key:"fromTask",value:function(t,n,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return new e(t,n.id,n.task,n.cat,n.time,n.freqPerWeek,a,r,o,l,c)}}]),e}(),r=F()(a.prototype,"toggleSelect",[H.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.isSelected=!e.isSelected}}}),a),Q=(n(247),o=function(){function e(){var t=this;B()(this,e),this.taskList=[],this.periodUserList=[],this.loading=!1,this.loadTaskList=function(e,n){var a,r,o,l,c,i,s,u,m,d;return b.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return t.loading=!0,f.next=3,b.a.awrap(K.collection("todolist").doc("default").get());case 3:return r=f.sent,o=Object(O.a)(n,n.getDay()>0?1-n.getDay():-6),l=Object(O.a)(n,n.getDay()>0?7-n.getDay():0),f.next=8,b.a.awrap(t.loadSelectedDate([e],o,l));case 8:if(c=f.sent,i=null==(a=c.find((function(e){return new Date(1e3*e.date.seconds).toLocaleDateString()==n.toLocaleDateString()})))?void 0:a.selectedTasks){f.next=16;break}return u=e+"_"+Object(k.a)(n,"dd-MM-yyyy"),f.next=14,b.a.awrap(K.collection("selectlist").doc(u).get());case 14:m=f.sent,i=null==(s=m.data())?void 0:s.selectedTasks;case 16:r.exists&&r.data().workList?(d=r.data().workList.map((function(e){var n,a=null==(n=i)?void 0:n.find((function(t){return e.id==t.taskId})),r=c.reduce((function(t,n){return n.selectedTasks.find((function(t){return t.taskId==e.id}))?t+1:t}),0);return Z.fromTask(t,e,r,null==a?void 0:a.attachments,null==a?void 0:a.comments,null!=a,null==a?void 0:a.isCompleted)})),Object(H.i)((function(){var e;t.taskList=[],(e=t.taskList).push.apply(e,N()(d)),t.loading=!1}))):console.log("No doc values found");case 17:case"end":return f.stop()}}),null,null,null,Promise)},this.loadUserPeriod=function(e,n,a){var r;return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=[],t.loading=!0,o.next=4,b.a.awrap(t.loadSelectedDate(e,n,a));case 4:o.sent.forEach((function(e){var t={date:Object(k.a)(new Date(1e3*e.date.seconds),"dd-MM-yyyy"),selected:e.selectedTasks.length,completed:e.selectedTasks.filter((function(e){return e.isCompleted})).length},n=r.find((function(t){return t.user==e.user}));n?n.dataDates.push(t):r.push({user:e.user,dataDates:[t]})})),Object(H.i)((function(){t.loading=!1,t.periodUserList=r}));case 7:case"end":return o.stop()}}),null,null,null,Promise)},this.loadSelectedDate=function(e,t,n){var a;return b.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a=[],r.next=3,b.a.awrap(K.collection("selectlist").where("user","in",e).where("date",">=",t).where("date","<=",n).get());case 3:return r.sent.forEach((function(e){a.push(e.data())})),r.abrupt("return",a);case 6:case"end":return r.stop()}}),null,null,null,Promise)},this.saveSelectList=function(e,n){var a,r;return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t.loading=!0,a=e+"_"+Object(k.a)(n,"dd-MM-yyyy"),r=t.taskList.filter((function(e){return e.isSelected})).map((function(e){var t;return{taskId:e.id,isCompleted:e.isCompleted,comments:e.comments,attachments:null==(t=e.attachments)?void 0:t.map((function(e){var t;return{ref:e.ref,url:null!=(t=null==e?void 0:e.url)?t:""}}))}})),o.next=5,b.a.awrap(K.collection("selectlist").doc(a).set({date:n,lastUpdate:new Date,user:e,selectedTasks:r}));case 5:Object(H.i)((function(){t.loading=!1}));case 6:case"end":return o.stop()}}),null,null,null,Promise)},this.migrate=function(){return b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:K.collection("todolist").doc("default");case 1:case"end":return e.stop()}}),null,null,null,Promise)},console.log("Initialize TaskStore..."),Object(H.f)(this)}return V()(e,[{key:"sortedTaskList",get:function(){return U()(this.taskList,["isSelected","id"],["desc","asc"])}},{key:"totalCompleted",get:function(){return this.taskList.filter((function(e){return e.isCompleted})).length}},{key:"totalSelected",get:function(){return this.taskList.filter((function(e){return e.isSelected})).length}},{key:"saveSelectTask",value:function(e){}}]),e}(),F()(o.prototype,"sortedTaskList",[H.c],Object.getOwnPropertyDescriptor(o.prototype,"sortedTaskList"),o.prototype),F()(o.prototype,"totalCompleted",[H.c],Object.getOwnPropertyDescriptor(o.prototype,"totalCompleted"),o.prototype),F()(o.prototype,"totalSelected",[H.c],Object.getOwnPropertyDescriptor(o.prototype,"totalSelected"),o.prototype),F()(o.prototype,"saveSelectTask",[H.b],Object.getOwnPropertyDescriptor(o.prototype,"saveSelectTask"),o.prototype),o),$=(l=function(){function e(){B()(this,e),X()(this,"selectedTasks",c,this)}return V()(e,[{key:"migrateData",value:function(e,t){var n,a,r,o,l,c;return b.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=t.format(),i.next=3,b.a.awrap(K.collection("selectlist"+e).doc(n).get());case 3:return a=i.sent,i.next=6,b.a.awrap(K.collection("donelist"+e).doc(n).get());case 6:r=i.sent,o=[],l=[],c=e+"_"+n,r.exists&&r.data().doneTasks&&r.data().doneTasks.forEach((function(e){l.push(e)})),a.exists&&a.data().selectedTasks&&a.data().selectedTasks.forEach((function(n){o.push({id:c+"_"+n,taskId:n,date:t,user:e,isCompleted:l.includes(n),attachments:[]})})),K.collection("selectlist").doc(c).set({lastUpdated:new Date,selectedTasks:o});case 13:case"end":return i.stop()}}),null,null,null,Promise)}}]),e}(),c=F()(l.prototype,"selectedTasks",[H.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),l),ee=n(14),te=function e(){var t=this;B()(this,e),this.loading=!1,this.addAttachments=function(e,n,a){var r,o,l;return b.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:t.loading=!0,r=t.getPlatformPath(n).value,o=t.getFileName(n.fileName,r),l="attachFiles/"+o,Object(H.i)((function(){var t={value:r,ref:l};e.attachments.push(t)})),Object(H.i)((function(){var n,o,c,i;return b.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t.loading=!1,s.next=3,b.a.awrap(fetch(r));case 3:return n=s.sent,s.next=6,b.a.awrap(n.blob());case 6:return o=s.sent,c=Y.ref().child(l),s.next=10,b.a.awrap(c.put(o));case 10:return s.sent,s.next=13,b.a.awrap(c.getDownloadURL());case 13:i=s.sent,console.log(i),e.attachments[e.attachments.length-1].url=i,a&&a();case 17:case"end":return s.stop()}}),null,null,null,Promise)}));case 6:case"end":return c.stop()}}),null,null,null,Promise)},this.getFileName=function(e,t){if(null!=e)return e;if("ios"===ee.a.OS&&(t="~"+t.substring(t.indexOf("/Documents"))),"web"==ee.a.OS){var n=new Date;return Object(k.a)(n,"yyMMdd_")+Date.now()}return t.split("/").pop()},this.getPlatformPath=function(e){var t=e.path,n=e.uri;return ee.a.select({android:{value:t},web:{value:n},ios:{value:n}})},this.getPlatformURI=function(e){var n=e;return isNaN(e)&&(n={uri:t.state.imagePath},"android"==ee.a.OS&&(n.uri="file:///"+n.uri)),n},console.log("Initialize TaskStore..."),Object(H.f)(this)},ne=(i=function(){function e(){B()(this,e),this.user=null,this.userList=[{role:"child",name:"Susu",email:"tulamuaban@gmail.com"},{role:"child",name:"Nemo",email:"dragon.tvq@gmail.com"},{role:"admin",name:"Dad",email:"quyetvv@gmail.com"}],console.log("Initialize CommonStore..."),Object(H.f)(this)}return V()(e,[{key:"userName",get:function(){var e,t=this;return null==(e=this.userList.find((function(e){var n;return e.email==(null==(n=t.user)?void 0:n.email)})))?void 0:e.name}},{key:"userRole",get:function(){var e,t=this;return null==(e=this.userList.find((function(e){var n;return e.email==(null==(n=t.user)?void 0:n.email)})))?void 0:e.role}},{key:"otherName",get:function(){var e,t=this;return null==(e=this.userList.find((function(e){return e.name!==t.userName&&"Dad"!=e.name})))?void 0:e.name}}]),e}(),F()(i.prototype,"userName",[H.c],Object.getOwnPropertyDescriptor(i.prototype,"userName"),i.prototype),F()(i.prototype,"userRole",[H.c],Object.getOwnPropertyDescriptor(i.prototype,"userRole"),i.prototype),F()(i.prototype,"otherName",[H.c],Object.getOwnPropertyDescriptor(i.prototype,"otherName"),i.prototype),i),ae=n(623),re=n(392),oe=(s=function(){function e(){var t=this;B()(this,e),this.loading=!0,this.balance=null,this.transToday=[],this.loadBalanceAndTrans=function(e,n){return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(t.loadBalance(e));case 2:return a.next=4,b.a.awrap(t.loadTrans([e],n));case 4:case"end":return a.stop()}}),null,null,null,Promise)},this.loadBalance=function(e){var n;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,b.a.awrap(K.collection("money").doc(e+"_balance").get());case 3:if(!(n=a.sent).exists){a.next=8;break}Object(H.i)((function(){t.balance=n.data()})),a.next=11;break;case 8:return t.balance={total:0,lastUpdate:new Date,target:2e7},a.next=11,b.a.awrap(K.collection("money").doc(e+"_balance").set(t.balance));case 11:Object(H.i)((function(){t.loading=!1}));case 12:case"end":return a.stop()}}),null,null,null,Promise)},this.addTrans=function(e,n){var a,r,o;return b.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return t.loading=!0,r=Object(k.a)(n.datetime,"dd-MM-yyyy"),o=parseInt(n.value),t.balance.total+=isNaN(o)?0:o,n.total=t.balance.total,l.next=7,b.a.awrap(K.collection("money").doc(e+"_"+r+"_"+n.id).set(n));case 7:return l.next=9,b.a.awrap(K.collection("money").doc(e+"_balance").set({total:t.balance.total,lastUpdate:new Date,target:null!=(a=t.balance.target)?a:2e7}));case 9:Object(H.i)((function(){t.transToday.push(n),t.loading=!1}));case 10:case"end":return l.stop()}}),null,null,null,Promise)},this.loadTrans=function(e,n){var a,r;return b.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t.loading=!0,t.transToday=[],a=Object(re.a)(n),r=Object(ae.a)(n),o.next=6,b.a.awrap(K.collection("money").where("user","in",e).where("datetime",">=",a).where("datetime","<=",r).get());case 6:o.sent.forEach((function(e){t.transToday.push(e.data())})),Object(H.i)((function(){t.loading=!1}));case 9:case"end":return o.stop()}}),null,null,null,Promise)},console.log("Initialize CommonStore..."),Object(H.f)(this)}return V()(e,[{key:"completedPercent",get:function(){return this.balance.total/this.balance.target*100}}]),e}(),F()(s.prototype,"completedPercent",[H.c],Object.getOwnPropertyDescriptor(s.prototype,"completedPercent"),s.prototype),s);function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var ce=new function e(){B()(this,e),this.taskStore=new Q(this),this.selectTaskStore=new $(this),this.storageStore=new te(this),this.commonStore=new ne(this),this.moneyStore=new oe(this)},ie=p.a.createContext(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(Object(n),!0).forEach((function(t){z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},ce)),se=function(){return p.a.useContext(ie)},ue=n(188),me=function(e){var t=e.bgcolor,n=e.completed,a={height:"100%",width:n+"%",backgroundColor:t,textAlign:"right"};return p.a.createElement(E.View,{style:{height:20,width:"95%",backgroundColor:"#e0e0de",margin:30}},p.a.createElement(E.View,{style:a},p.a.createElement(E.View,{style:{padding:5,color:"white",fontWeight:"bold"}},p.a.createElement(E.Text,null,n+"%"))))},de=function e(t,n,a,r,o,l,c,i){var s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:[],u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:[];B()(this,e),this.id=t,this.awardName=n,this.size=a,this.value=o,this.total=l,this.type=r,this.datetime=c,this.user=i,this.attachments=s,this.comments=u,Object(H.f)(this)},fe=C.a.create({baseText:{fontSize:11},titleText:{fontSize:15,fontWeight:"bold"},awardValue:{margin:20,height:20,marginTop:0,fontSize:16,fontStyle:"italic",borderWidth:0,borderBottomColor:"#000000",borderBottomWidth:1,borderColor:"rgb(201, 201, 201)"},input:{height:40,width:300,maxWidth:500,marginLeft:20,fontSize:16,fontStyle:"italic",borderWidth:0,borderBottomColor:"#000000",borderBottomWidth:1,borderColor:"rgb(201, 201, 201)"}}),pe=function(e){var t=Object(f.useState)(""),n=g()(t,2),a=n[0],r=n[1],o=Object(f.useState)(1e4),l=g()(o,2),c=l[0],i=l[1],s=Object(f.useState)(30),m=g()(s,2),d=m[0],h=m[1],y=function(){return c>0?c<=1e4?"star":c>1e4&&c<4e4?"heart":"medal":c>=-1e4?"surprise":c<-1e4&&c>-4e4?"sad-cry":"angry"},b=function(e){1e4==c&&e<0?i(-1e4):-1e4==c&&e>0?i(1e4):(h(c>0?d+e:d-e),(c>=5e4||c<=-5e4)&&(e*=5),i(parseInt(c)+1e3*e))};return p.a.createElement(E.View,{style:{flexDirection:"column"}},p.a.createElement(E.View,{style:{flexDirection:"row"}},p.a.createElement(ue.a,{name:y(),style:{fontSize:d,marginLeft:20},color:c>0?"rgb(63, 81, 181)":"#786d6c"}),p.a.createElement(ue.a,{name:"plus",style:{fontSize:24,marginLeft:30},onPress:function(e){return b(10)}}),p.a.createElement(ue.a,{name:"minus",style:{fontSize:24,marginLeft:10},onPress:function(e){return b(-10)}}),p.a.createElement(u.a,{style:fe.awardValue,placeholder:"Gi\xe1 tr\u1ecb th\u01b0\u1edfng",value:c.toString(),onChangeText:i})),p.a.createElement(u.a,{style:fe.input,placeholder:"Th\xeam nh\u1eadn x\xe9t...",value:a,onChangeText:r}),p.a.createElement(E.Button,{style:{margin:10},onPress:function(){return function(){var t=new de(Date.now(),y(),d,"Award",c,0,e.date,e.user,[],[a]);e.onSubmitTranDetail&&e.onSubmitTranDetail(t)}()}},p.a.createElement(E.Text,{style:{fontSize:16}}," X\xe1c nh\u1eadn ")))},he=(C.a.create({baseText:{fontSize:11},titleText:{fontSize:15,fontWeight:"bold"},input:{height:40,width:300,maxWidth:500,marginLeft:20,fontSize:16,fontStyle:"italic",borderWidth:0,borderBottomColor:"#000000",borderBottomWidth:1,borderColor:"rgb(201, 201, 201)"}}),Object(j.a)((function(e){var t=se(),n=t.commonStore,a=t.moneyStore;Object(f.useEffect)((function(){a.loadBalanceAndTrans(e.user,e.date)}),[e.user,e.date,e.tabIndex]);return a.loading&&!a.balance?p.a.createElement(E.Spinner,{color:"green"}):p.a.createElement(E.View,{style:{flexDirection:"column",width:"100%"}},p.a.createElement(E.View,{style:{}},p.a.createElement(E.Text,{style:{color:"#1d4d99"}}," Total balance: ",(a.balance.total/1e3).toFixed(0),"k/",(a.balance.target/1e3).toFixed(0),"k"),p.a.createElement(me,{bgcolor:"#eb4034",completed:a.completedPercent.toFixed(2)})),p.a.createElement(E.View,null,p.a.createElement(E.Text,{style:{color:"#1d4d99"}}," Results: "),p.a.createElement(E.View,{style:{flexDirection:"column"}},a.transToday.map((function(e){return function(e){return p.a.createElement(E.View,{style:{flexDirection:"column",margin:10}},p.a.createElement(ue.a,{name:e.awardName,style:{fontSize:e.size},color:e.value>0?"red":"#786d6c"}),p.a.createElement(E.Text,null," ",(e.value/1e3).toFixed(0),"k "),e.comments.length>0&&""!=e.comments[0]&&p.a.createElement(E.Text,{style:{marginTop:10,fontStyle:"italic",color:"#3962a3"}}," ",Object(k.a)(new Date(1e3*e.datetime),"HH:mm"),": ",e.comments[0]))}(e)})))),"admin"==n.userRole&&p.a.createElement(E.View,{style:{flexDirection:"row",marginTop:20}},p.a.createElement(E.Text,{style:{color:"#1d4d99"}}," Evaluation: "),p.a.createElement(pe,{user:e.user,date:e.date,onSubmitTranDetail:function(t){a.addTrans(e.user,Object(H.j)(t))}})))}))),ge=n(65),ye=n(168),be=n(256),Ee=C.a.create({baseText:{fontSize:11},titleText:{fontSize:15,fontWeight:"bold"},input:{height:40,width:300,maxWidth:500,marginLeft:20,fontSize:16,fontStyle:"italic",borderWidth:0,borderBottomColor:"#000000",borderBottomWidth:1,borderColor:"rgb(201, 201, 201)"}}),Se=function(e){var t,n=Object(f.useState)(""),a=g()(n,2),r=a[0],o=a[1],l=se(),c=l.taskStore,i=(l.storageStore,l.commonStore),s=e.item;return p.a.createElement(E.View,{style:{width:400,marginLeft:20,marginTop:20,borderWidth:1,borderColor:"rgb(201, 201, 201)"}},null==(t=s.comments)?void 0:t.map((function(e,t){return p.a.createElement(E.Text,{style:{fontStyle:"italic",color:t%2==0?"#3962a3":"#39a372"},key:e.id}," ",Object(k.a)(new Date(e.id),"HH:mm"),": ",e.text)})),p.a.createElement(E.View,{style:{flexDirection:"row",marginTop:20}},p.a.createElement(u.a,{style:Ee.input,placeholder:"Write to here...",value:r,onChangeText:o}),p.a.createElement(E.Button,{style:{marginLeft:10},transparent:!0,onPress:function(){return s.comments.push({id:Date.now(),text:i.userName+":"+r}),o(""),void c.saveSelectList(e.user,e.date)}},p.a.createElement(w.a,{name:"send-o",style:{fontSize:25},color:"rgb(63, 81, 181)"}))))},ve=C.a.create({baseText:{fontSize:11},titleText:{fontSize:15,fontWeight:"bold"},input:{height:40,maxWidth:500,marginLeft:20,fontSize:18,borderWidth:1,borderColor:"rgb(201, 201, 201)"},taskButton:{flex:1,justifyContent:"center",alignContent:"center",alignSelf:"center"}}),xe=Object(j.a)((function(e){var t,n=e.taskItem,a=Object(T.useNavigation)(),r=Object(T.useRoute)(),o=se().storageStore,l=Object(f.useState)(!1),c=g()(l,2),i=c[0],s=c[1];return p.a.createElement(E.ListItem,{key:n.id,style:{backgroundColor:n.isSelected?"#cde1f9":"#fcfcfc"}},p.a.createElement(E.Body,{style:{flexDirection:"column"}},p.a.createElement(P.a,{style:{flexDirection:"row"}},p.a.createElement(P.a,null,p.a.createElement(ye.a,{onPress:function(){return e.onSelectItem(n)}},p.a.createElement(P.a,null,p.a.createElement(E.Text,{style:ve.titleText},n.id,". ",n.task),p.a.createElement(E.Text,{style:ve.baseText},"M\u1ee5c: ",n.cat," "),n.weekCount>0?p.a.createElement(E.Text,{style:{fontSize:13,color:n.weekCount>n.freqPerWeek?"red":""}},"\u0110\xe3 ch\u1ecdn: ",n.weekCount," l\u1ea7n (\u0110\u01b0\u1ee3c ch\u1ecdn ",n.freqPerWeek," l\u1ea7n) "):p.a.createElement(E.Text,{style:{fontSize:13}},"\u0110\u01b0\u1ee3c ch\u1ecdn ",n.freqPerWeek," l\u1ea7n ")))),p.a.createElement(P.a,{style:{flexDirection:"row"}},function(e){return e.attachments.map((function(e){var t;return p.a.createElement(ge.a,{source:{uri:null!=(t=e.value)?t:e.url},style:{width:50,height:50,marginLeft:20}})}))}(n),o.loading&&(null==(t=r.params)?void 0:t.id)==n.id&&p.a.createElement(P.a,null,p.a.createElement(E.Spinner,null),p.a.createElement(E.Text,null,"\u0110ang t\u1ea3i \u1ea3nh l\xean... ")))),p.a.createElement(P.a,null,i&&p.a.createElement(Se,{item:n,user:e.user,date:e.date}))),n.isSelected&&p.a.createElement(E.Right,{style:{width:250,minWidth:200,maxWidth:300,flexDirection:"row",justifyContent:"space-evenly",alignContent:"flex-start",alignSelf:"flex-start"}},p.a.createElement(P.a,{style:ve.taskButton},p.a.createElement(E.Switch,{value:n.isCompleted,onValueChange:function(t){e.onDoneItem(n)}})),p.a.createElement(E.Button,{style:ve.taskButton,transparent:!0,onPress:function(){return s(!i)}},p.a.createElement(w.a,{name:"comment",style:{fontSize:25},color:n.comments.length>0?"red":"rgb(63, 81, 181)"}),n.comments.length>0&&p.a.createElement(E.Text,{style:{fontSize:14,fontWeight:"bold",color:"white",position:"absolute"}},n.comments.length)),p.a.createElement(E.Button,{style:ve.taskButton,transparent:!0,onPress:function(){return function(t){a.navigate("CameraScreen",{sourceScreen:"HomeScreen",sourceData:{id:t.id,user:e.user,taskItem:t}})}(n)}},p.a.createElement(w.a,{style:{fontSize:25},name:"camera",color:"rgb(63, 81, 181)"})),p.a.createElement(E.Button,{style:ve.taskButton,transparent:!0,onPress:function(){return function(t){var n;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(be.b());case 2:if(!1!==a.sent.granted){a.next=6;break}return alert("You've refused to allow this appp to access your photos!"),a.abrupt("return");case 6:return a.next=8,b.a.awrap(be.a());case 8:(n=a.sent).cancelled?console.log("User cancelled image picker"):(o.addAttachments(t,n),e.onAddFile&&e.onAddFile());case 10:case"end":return a.stop()}}),null,null,null,Promise)}(n)}},p.a.createElement(w.a,{style:{fontSize:25},name:"cloud-upload",color:"rgb(63, 81, 181)"}))))})),we=C.a.create({result:{marginLeft:10,marginBottom:20,fontSize:22,fontWeight:"bold",color:"red"}}),Te=Object(j.a)((function(e){var t,n=Object(f.useState)(new Date),a=g()(n,2),r=a[0],o=a[1],l=se(),c=l.taskStore,i=(l.commonStore,l.storageStore),s=Object(T.useRoute)();Object(f.useEffect)((function(){c.loadTaskList(e.user,r)}),[e.tabIndex,e.user,r]);var u=function(){c.saveSelectList(e.user,r)};Object(f.useEffect)((function(){var t,n,a;null!=(t=s.params)&&t.photo&&(null==(n=s.params.sourceData)?void 0:n.user)==e.user&&i.addAttachments(null==(a=s.params.sourceData)?void 0:a.taskItem,s.params.photo,u)}),[null==(t=s.params)?void 0:t.photo]);var m=function(t){t.toggleSelect(),c.saveSelectList(e.user,r)},d=function(t){t.toggleComplete(),c.saveSelectList(e.user,r)},h=function(t){c.saveSelectList(e.user,r)},y=function(e){o(Object(O.a)(r,e))};return p.a.createElement(D.a,null,p.a.createElement(P.a,{style:{flexDirection:"column"}},p.a.createElement(P.a,{style:{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginBottom:20}},p.a.createElement(E.Button,{transparent:!0,onPress:function(){return y(-1)}},p.a.createElement(w.a,{style:{fontSize:35},name:"backward",color:"rgb(33, 150, 243)"})),p.a.createElement(P.a,{style:{flexDirection:"row",justifyContent:"center"}},p.a.createElement(E.Text,{style:{fontSize:18,fontWeight:"bold",color:"red"}}," ",Object(k.a)(r,"iiii, dd-MM-yyyy")," "),c.loading&&p.a.createElement(E.Spinner,{style:{height:35}})),p.a.createElement(E.Button,{transparent:!0,onPress:function(){return y(1)}},p.a.createElement(w.a,{style:{fontSize:35},name:"forward",color:"rgb(33, 150, 243)"})))),p.a.createElement(E.Card,null,p.a.createElement(E.CardItem,null,p.a.createElement(E.Body,null,p.a.createElement(he,{user:e.user,date:r,tabIndex:e.tabIndex})))),c.sortedTaskList.length>0&&p.a.createElement(P.a,{style:{flexDirection:"column"}},p.a.createElement(E.Text,{style:we.result},e.user," \u0111\xe3 ch\u1ecdn ",c.totalSelected," vi\u1ec7c. ","\r\n","\u0110\xe3 ho\xe0n th\xe0nh: ",c.totalCompleted," vi\u1ec7c"),p.a.createElement(E.Text,{style:{fontSize:18,fontWeight:"bold",marginLeft:15,marginBottom:20}},"Danh s\xe1ch c\xf4ng vi\u1ec7c: "),p.a.createElement(E.List,null,c.sortedTaskList.map((function(t,n){return p.a.createElement(xe,x()({key:t.id,taskItem:t,date:r,onSelectItem:m,onDoneItem:d,onAddFile:h},e))})))))})),Oe=n(124),ke=(C.a.create({result:{marginLeft:10,marginBottom:20,fontSize:18,fontWeight:"bold",color:"red"}}),Object(j.a)((function(e){var t=Object(f.useState)(new Date),n=g()(t,2),a=n[0],r=n[1],o=se().taskStore;Object(f.useEffect)((function(){var e=Object(O.a)(a,a.getDay()>0?1-a.getDay():-6),t=Object(O.a)(a,a.getDay()>0?7-a.getDay():0);o.loadUserPeriod(["Susu","Nemo"],e,t)}),[a]);var l=function(e){r(Object(O.a)(a,e))};return p.a.createElement(D.a,null,p.a.createElement(P.a,{style:{flexDirection:"column"}},p.a.createElement(P.a,{style:{flexDirection:"row",justifyContent:"space-around",marginTop:20,marginBottom:20}},p.a.createElement(Oe.a,{style:{size:""},title:"<< H\xf4m qua",onPress:function(){return l(-1)}}),p.a.createElement(Oe.a,{style:{size:""},title:"L\u01b0u vi\u1ec7c \u0111\xe3 ch\u1ecdn",onPress:function(){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(o.saveSelectList(e.user,a));case 2:case"end":return t.stop()}}),null,null,null,Promise)}}),p.a.createElement(Oe.a,{style:{size:""},title:"H\xf4m sau >>",onPress:function(){return l(1)}}))),o.loading?p.a.createElement(E.Spinner,null):p.a.createElement(P.a,{style:{flexDirection:"column"}},o.periodUserList.map((function(e){return p.a.createElement(P.a,null,p.a.createElement(E.Text,{style:{fontSize:20}}," ",JSON.stringify(e.user)," "),p.a.createElement(E.List,null,e.dataDates.map((function(t){return p.a.createElement(E.ListItem,{key:t.date+e.user},p.a.createElement(E.Text,null," Ng\xe0y: ",t.date),p.a.createElement(E.Text,null," \u0110\u0103ng k\xfd: ",t.selected),p.a.createElement(E.Text,{style:{fontSize:18,color:t.selected>t.completed?"red":"black"}},"Ho\xe0n th\xe0nh: ",t.completed))}))))}))))}))),je=Object(j.a)((function(e){var t=Object(f.useState)(!0),n=g()(t,2),a=n[0],r=n[1],o=Object(T.useNavigation)(),l=se().commonStore,c=function(e){e||o.navigate("LoginScreen"),Object(H.i)((function(){l.user=e})),a&&r(!1)};Object(f.useEffect)((function(){return J.onAuthStateChanged(c)}),[]);var i=Object(f.useState)(0),s=g()(i,2),u=s[0],m=s[1],d=function(e){console.log(e),m(e.i)};return p.a.createElement(S.b,null,p.a.createElement(E.Container,null,p.a.createElement(D.a,{style:{}},p.a.createElement(E.Header,null,p.a.createElement(E.Left,null,p.a.createElement(E.Button,{transparent:!0},p.a.createElement(E.Icon,{name:"menu"}))),p.a.createElement(E.Body,null,p.a.createElement(E.Text,{style:{fontSize:20,color:"#fff"}},"SUMO DAYS")),p.a.createElement(E.Right,null,p.a.createElement(E.Button,{transparent:!0,onPress:function(){return b.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(H.i)((function(){l.user=null})),e.next=3,b.a.awrap(J.signOut());case 3:o.navigate("LoginScreen");case 4:case"end":return e.stop()}}),null,null,null,Promise)}},p.a.createElement(w.a,{size:24,color:"white",name:"sign-out"})))),l.userName?"admin"!==l.userRole?p.a.createElement(E.Tabs,{onChangeTab:d},p.a.createElement(E.Tab,{heading:l.userName},p.a.createElement(Te,{tabIndex:u,user:l.userName})),p.a.createElement(E.Tab,{heading:"Dad"},p.a.createElement(ke,{index:u}))):p.a.createElement(E.Tabs,{onChangeTab:d},l.userList.filter((function(e){return"Dad"!=e.name})).map((function(e,t){return p.a.createElement(E.Tab,{key:t,heading:e.name},t==u&&p.a.createElement(Te,{tabIndex:u,user:e.name}))})),p.a.createElement(E.Tab,{heading:"Dad"},p.a.createElement(ke,{index:u}))):p.a.createElement(E.Spinner,{color:"green"}))))})),De=n(71),Ce=n(49),Pe=n(59),Le=C.a.create({container:{flex:1,maxWidth:600,width:400,alignSelf:"center",backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},image:{marginBottom:40},inputView:{backgroundColor:"#FFC0CB",width:"80%",height:45,marginBottom:20,alignItems:"center"},TextInput:{height:50,flex:1,width:"90%",padding:10,marginLeft:20},forgot_button:{height:30,marginBottom:30},loginBtn:{width:"40%",height:50,alignItems:"center",justifyContent:"center",marginTop:40,backgroundColor:"#FFC0CB"}}),ze=function(e){var t=e.navigation,n=Object(f.useState)(""),a=g()(n,2),r=a[0],o=a[1],l=Object(f.useState)(""),c=g()(l,2),i=c[0],s=c[1],u=Object(f.useState)(""),m=g()(u,2),d=m[0],h=m[1];return p.a.createElement(E.View,{style:Le.container},p.a.createElement(De.a,{style:{fontSize:18,margin:30}},"\u0110\u0103ng nh\u1eadp"),d.errorMessage&&p.a.createElement(De.a,{style:{color:"red"}},d.errorMessage),p.a.createElement(E.View,{style:Le.inputView},p.a.createElement(Ce.a,{style:Le.TextInput,placeholder:"Email.",placeholderTextColor:"#003f5c",onChangeText:function(e){return o(e)}})),p.a.createElement(E.View,{style:Le.inputView},p.a.createElement(Ce.a,{style:Le.TextInput,placeholder:"Password.",placeholderTextColor:"#003f5c",secureTextEntry:!1,onChangeText:function(e){return s(e)}})),p.a.createElement(Pe.a,null,p.a.createElement(De.a,{style:Le.forgot_button},"Forgot Password?")),p.a.createElement(Pe.a,{style:Le.loginBtn,onPress:function(){J.signInWithEmailAndPassword(r,i).then((function(){return t.navigate("HomeScreen")})).catch((function(e){return h({errorMessage:e.message})}))}},p.a.createElement(De.a,{style:Le.loginText},"LOGIN")))},Ie=function(){var e=Object(f.useState)(0),t=g()(e,2);t[0],t[1];return p.a.createElement(E.View,null,"Detail")},Be=n(627),We=C.a.create({container:{alignSelf:"center",width:640,height:480},image:{flex:1,width:640,height:480},camera:{flex:1},buttonContainer:{flex:1,backgroundColor:"transparent",flexDirection:"row",margin:20},button:{flex:1,alignSelf:"flex-end",alignItems:"center"},text:{fontSize:18,marginLeft:20,color:"white"}}),Ne=function(e){var t=e.navigation,n=Object(f.useState)(null),a=g()(n,2),r=a[0],o=a[1],l=Object(f.useState)(Be.a.Constants.Type.back),c=g()(l,2),i=c[0],s=c[1],u=Object(T.useRoute)(),m=Object(f.useState)(),d=g()(m,2),h=d[0],y=d[1],S=Object(f.useState)(),v=g()(S,2),x=v[0],w=v[1];if(Object(f.useEffect)((function(){!function(){var e,t;b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(Be.a.requestPermissionsAsync());case 2:e=n.sent,t=e.status,o("granted"===t);case 5:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),null===r)return p.a.createElement(P.a,null);if(!1===r)return p.a.createElement(E.Text,null,"No access to camera");var O=function(){var e;t.navigate(u.params.sourceScreen,{sourceScreen:"CameraScreen",sourceData:null==(e=u.params)?void 0:e.sourceData})};return p.a.createElement(P.a,{style:We.container},!h&&p.a.createElement(Be.a,{style:We.camera,type:i,ref:function(e){w(e)}},p.a.createElement(P.a,{style:We.buttonContainer},p.a.createElement(Pe.a,{style:We.button,onPress:function(){s(i===Be.a.Constants.Type.back?Be.a.Constants.Type.front:Be.a.Constants.Type.back)}},p.a.createElement(P.a,{style:{flex:1,flexDirection:"row",justifyContent:"space-around",alignContent:"center",marginLeft:20}},p.a.createElement(E.Text,{style:We.text}," Camera sau "),p.a.createElement(E.Text,{style:We.text,onPress:function(){var e;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!x){t.next=5;break}return t.next=3,b.a.awrap(x.takePictureAsync());case 3:e=t.sent,y(e);case 5:case"end":return t.stop()}}),null,null,null,Promise)}}," Ch\u1ee5p \u1ea3nh "),p.a.createElement(E.Button,{transparent:!0,style:{marginRight:20},onPress:O},p.a.createElement(E.Icon,{name:"arrow-back"})))))),h&&p.a.createElement(P.a,{style:{flex:1,flexDirection:"column",justifyContent:"space-around",alignContent:"center",marginLeft:20}},p.a.createElement(ge.a,{source:{uri:h.uri},style:We.image}),p.a.createElement(P.a,{style:{flexDirection:"row",justifyContent:"space-around",alignContent:"center"}},p.a.createElement(E.Button,{onPress:function(){y(null)}},p.a.createElement(E.Text,{style:{fontSize:18}}," Ch\u1ee5p l\u1ea1i ")),p.a.createElement(E.Button,{onPress:function(){var e;t.navigate(u.params.sourceScreen,{photo:h,sourceScreen:"CameraScreen",sourceData:null==(e=u.params)?void 0:e.sourceData})}},p.a.createElement(E.Text,{style:{fontSize:18}}," T\u1ea3i \u1ea3nh ")),p.a.createElement(E.Button,{onPress:O},p.a.createElement(E.Text,{style:{fontSize:18}}," Tho\xe1t ")))))},Me=function(){var e=Object(f.useState)(!0),t=g()(e,2),n=t[0],a=t[1],r=Object(T.useNavigation)(),o=Object(f.useState)(),l=g()(o,2),c=(l[0],l[1]),i=function(e){e?r.navigate("HomeScreen"):r.navigate("LoginScreen"),c(e),n&&a(!1)};return Object(f.useEffect)((function(){return J.onAuthStateChanged(i)}),[]),p.a.createElement(E.View,{style:{flex:1,alignItems:"center",justifyContent:"center"}},p.a.createElement(E.Spinner,{color:"green"}))},Ve=Object(d.a)(),Ae=function(e){e.navigation;return p.a.createElement(Ve.Navigator,{headerMode:"none"},p.a.createElement(Ve.Screen,{name:"LoadingScreen",component:Me}),p.a.createElement(Ve.Screen,{name:"HomeScreen",component:je}),p.a.createElement(Ve.Screen,{name:"LoginScreen",component:ze}),p.a.createElement(Ve.Screen,{name:"CameraScreen",component:Ne}),p.a.createElement(Ve.Screen,{name:"TaskDetailScreen",component:Ie}))},Fe=Object(d.a)(),Re=function(e){e.navigation;return p.a.createElement(Fe.Navigator,{headerMode:"none"},p.a.createElement(Fe.Screen,{name:"LoginScreen",component:ze}),p.a.createElement(Fe.Screen,{name:"Details",component:Ie}))},Ue=n(398);n(268).a.ignoreLogs(["Setting a timer"]);var He=Object(d.a)();Ue.init({dsn:"https://8e86145982584690aaa486750341de83@o968732.ingest.sentry.io/5920021",enableInExpoDevelopment:!0,debug:!0});t.a=function(){return p.a.createElement(m.a,null,p.a.createElement(He.Navigator,{mode:"modal",headerMode:"none"},p.a.createElement(He.Screen,{name:"Main",component:Ae}),p.a.createElement(He.Screen,{name:"MyModal",component:Re})))}},410:function(e,t,n){e.exports=n(609)}},[[410,1,2]]]);
//# sourceMappingURL=app.2f9c5be3.chunk.js.map
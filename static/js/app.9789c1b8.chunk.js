(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{282:function(e,t,n){"use strict";var a=n(52),r=n(0),o=n.n(r),c=n(44),i=n(281),s=n(283),l=n(33),u=n.n(l),T=n(37),h=n.n(T),d=n(2),m=n(22),k=(n(397),n(404),null),f=((k=m.a.apps.length?m.a.app():m.a.initializeApp({apiKey:"AIzaSyCZ1W91h5gI4Ys3K44apJMX-dfAzKmKOzc",authDomain:"todo-app-594e8.firebaseapp.com",projectId:"todo-app-594e8",storageBucket:"todo-app-594e8.appspot.com",messagingSenderId:"254618059037",appId:"1:254618059037:web:2a162824c6e6dfd3d921f4",measurementId:"G-84M73W8WLD"})).auth(),k.firestore()),p=(n(45),d.a.create({baseText:{fontSize:11},titleText:{fontSize:15,fontWeight:"bold"},result:{marginLeft:"50px",fontSize:18,fontWeight:"bold",color:"red"}})),D=function(e){var t=Object(r.useState)([]),n=h()(t,2),i=n[0],s=n[1],l=Object(r.useState)([]),T=h()(l,2),d=T[0],m=T[1],k=Object(r.useState)([]),D=h()(k,2),g=D[0],I=D[1],C=(new Date).toLocaleDateString().replaceAll("/","-");Object(r.useEffect)((function(){var t=[],n=[];f.collection("selectlist"+e.user).doc(C).get().then((function(e){e.exists&&e.data().selectedTasks&&(e.data().selectedTasks.forEach((function(e){t.push(e)})),m(t))})),f.collection("donelist"+e.user).doc(C).get().then((function(e){e.exists&&e.data().doneTasks&&(e.data().doneTasks.forEach((function(e){n.push(e)})),I(n))})),f.collection("todolist").doc("values").get().then((function(e){if(e.exists&&e.data().allTodo){var a=[];e.data().allTodo.forEach((function(e){e.selected=t.includes(e.ID),e.done=n.includes(e.ID),a.push(e)})),s(W(a))}else console.log("No doc values found"),f.collection("todolist").doc("values").set({allTodo:[{ID:1,Task:"L\xe0m vi\u1ec7c nh\xe0: D\u1ecdn ph\xf2ng, d\u1ecdn nh\xe0 v\u1ec7 sinh, d\u1ecdn s\xe2n th\u01b0\u1ee3ng, r\u1eeda b\xe1t",Cat:"Vi\u1ec7c nh\xe0",Time:30,FreqPerWeek:3},{ID:2,Task:"L\xe0m Doulingo",Cat:"T.A",Time:20,FreqPerWeek:7},{ID:3,Task:"L\xe0m Scratch",Cat:"ICT",Time:90,FreqPerWeek:2},{ID:4,Task:"H\u1ecdc t\u1ea7ng c\u1ea7u",Cat:"Th\u1ec3 thao",Time:30,FreqPerWeek:2},{ID:5,Task:"V\u1ebd tranh, t\xf4 m\xe0u",Cat:"S\xe1ng t\u1ea1o",Time:45,FreqPerWeek:2},{ID:6,Task:"S\xe1ng t\xe1c truy\u1ec7n tranh",Cat:"S\xe1ng t\u1ea1o",Time:60,FreqPerWeek:2},{ID:7,Task:"\u0110\xe1nh \u0111\xe0n",Cat:"Ngh\u1ec7 thu\u1eadt",Time:15,FreqPerWeek:3},{ID:8,Task:"\u0110u x\xe0",Cat:"Th\u1ec3 thao",Time:5,FreqPerWeek:7},{ID:9,Task:"Thuy\u1ebft tr\xecnh v\u1ec1 nh\xe2n v\u1eadt",Cat:"K.N",Time:45,FreqPerWeek:2},{ID:10,Task:"K\u1ec3 chuy\u1ec7n, \u0111\u1ecdc chuy\u1ec7n",Cat:"K.N",Time:20,FreqPerWeek:2},{ID:11,Task:"\u0110\u1ecdc chuy\u1ec7n ti\u1ebfng anh",Cat:"T.A",Time:30,FreqPerWeek:2},{ID:12,Task:"L\xe0m b\xe0i t\u1eadp to\xe1n",Cat:"Ki\u1ebfn th\u1ee9c",Time:45,FreqPerWeek:3},{ID:13,Task:"L\xe0m b\xe0i t\u1eadp Ti\u1ebfng vi\u1ec7t",Cat:"Ki\u1ebfn th\u1ee9c",Time:45,FreqPerWeek:3},{ID:14,Task:"L\xe0m th\u01a1",Cat:"S\xe1ng t\u1ea1o",Time:30,FreqPerWeek:2},{ID:15,Task:"L\xe0m b\xe0i t\u1eadp Apax",Cat:"T.A",Time:90,FreqPerWeek:2},{ID:16,Task:"\u0110\xf3ng k\u1ecbch ng\u1eafn, l\xe0m video Youtube",Cat:"S\xe1ng t\u1ea1o",Time:60,FreqPerWeek:1},{ID:17,Task:"Gh\xe9p lego",Cat:"S\xe1ng t\u1ea1o",Time:30,FreqPerWeek:2},{ID:18,Task:"H\u1ecdc c\u1edd vua",Cat:"Th\u1ec3 thao",Time:60,FreqPerWeek:3},{ID:19,Task:"Gi\u1ea3i to\xe1n Kangaroo",Cat:"Ki\u1ebfn th\u1ee9c",Time:60,FreqPerWeek:3},{ID:20,Task:"Nh\u1eb7t rau, chu\u1ea9n b\u1ecb \u0111\u1ed3 \u0103n",Cat:"Vi\u1ec7c nh\xe0",Time:30,FreqPerWeek:3},{ID:21,Task:"Vi\u1ebft c\xe2u T.A",Cat:"T.A",Time:15,FreqPerWeek:7},{ID:22,Task:"Vi\u1ebft l\u1eddi tho\u1ea1i, d\u1ecbch phim ho\u1ea1t h\xecnh Peppa Pig",Cat:"T.A",Time:30,FreqPerWeek:1},{ID:23,Task:"H\xe1t b\xe0i h\xe1t T.A",Cat:"T.A",Time:30,FreqPerWeek:1},{ID:24,Task:"T\u1eadp t\xe2ng b\xf3ng 20 c\xe1i, d\u1eabn chuy\u1ec1n b\xf3ng 2 ch\xe2n (100 c\xe1i)",Cat:"Th\u1ec3 thao",Time:30,FreqPerWeek:1},{ID:25,Task:"M\xfaa, u\u1ed1n d\u1ebbo",Cat:"Th\u1ec3 thao",Time:10,FreqPerWeek:3},{ID:26,Task:"Workout 5p",Cat:"Th\u1ec3 thao",Time:5,FreqPerWeek:3},{ID:27,Task:"B\u1eafn cung (2 l\u1ea7n -> 100 \u0111i\u1ec3m)",Cat:"Th\u1ec3 thao",Time:30,FreqPerWeek:1}]})}))}),[]);var W=function(e){return e.sort((function(e,t){return e.selected==t.selected?e.ID>t.ID:t.selected-e.selected}))};return o.a.createElement(c.a,null,o.a.createElement(a.Text,{style:p.result},e.user," \u0111\xe3 ch\u1ecdn ",d.length," vi\u1ec7c. \u0110\xe3 ho\xe0n th\xe0nh: ",g.length," vi\u1ec7c"),o.a.createElement(a.List,null,i.map((function(t,n){return o.a.createElement(a.ListItem,{key:n,bottomDivider:!0,style:{backgroundColor:t.selected?"#cde1f9":"#fcfcfc"},onPress:function(){return function(t){var n=u()(i);n.find((function(e){return e.ID==t})).selected=!n.find((function(e){return e.ID==t})).selected,s(W(n));var a=[];d.includes(t)?(a=d.filter((function(e){return e!==t})),g.includes(t)&&I(g.filter((function(e){return e!==t})))):(a=u()(d)).push(t),m(a),f.collection("selectlist"+e.user).doc(C).set({selectedTasks:a,date:Date.now})}(t.ID)}},o.a.createElement(a.Body,null,o.a.createElement(a.Text,{style:p.titleText},t.Task),o.a.createElement(a.Text,{style:p.baseText},"M\u1ee5c: ",t.Cat,", L\u1ea7n ch\u1ecdn theo tu\u1ea7n: ",t.FreqPerWeek," ")),o.a.createElement(a.Right,null,d.includes(t.ID)&&o.a.createElement(a.Switch,{value:g.includes(t.ID),onValueChange:function(n){n.stopPropagation(),function(t){d.includes(t)||alert("This job has not selected!");var n=[];g.includes(t)?n=g.filter((function(e){return e!==t})):(n=u()(g)).push(t),I(n),f.collection("donelist"+e.user).doc(C).set({doneTasks:n,date:Date.now})}(t.ID)}})))}))))};t.a=function(){return o.a.createElement(s.a,null,o.a.createElement(c.a,null,o.a.createElement(i.a,{placement:"left",leftComponent:{icon:"menu",color:"#fff"},centerComponent:{text:"SUMO DAYS",style:{color:"#fff"}},rightComponent:{icon:"home",color:"#fff"}}),o.a.createElement(a.Tabs,null,o.a.createElement(a.Tab,{heading:"Susu"},o.a.createElement(D,{user:"Susu"})),o.a.createElement(a.Tab,{heading:"Nemo"},o.a.createElement(D,{user:"Nemo"})),o.a.createElement(a.Tab,{heading:"Dad"},o.a.createElement(D,{user:"Dad"})))))}},285:function(e,t,n){e.exports=n(400)}},[[285,1,2]]]);
//# sourceMappingURL=app.9789c1b8.chunk.js.map
(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{282:function(e,t,n){"use strict";var a=n(54),c=n(0),o=n.n(c),l=n(44),s=n(281),r=n(283),i=n(33),u=n.n(i),d=n(37),f=n.n(d),p=n(2),m=n(101),h=n(100),E=n(22),b=(n(397),n(404),null),g=((b=E.a.apps.length?E.a.app():E.a.initializeApp({apiKey:"AIzaSyCZ1W91h5gI4Ys3K44apJMX-dfAzKmKOzc",authDomain:"todo-app-594e8.firebaseapp.com",projectId:"todo-app-594e8",storageBucket:"todo-app-594e8.appspot.com",messagingSenderId:"254618059037",appId:"1:254618059037:web:2a162824c6e6dfd3d921f4",measurementId:"G-84M73W8WLD"})).auth(),b.firestore()),T=(n(45),p.a.create({baseText:{fontSize:11},titleText:{fontSize:18,fontWeight:"bold"}})),D=function(e){var t=Object(c.useState)([]),n=f()(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),d=f()(i,2),p=d[0],E=d[1],b=Object(c.useState)([]),D=f()(b,2),I=D[0],S=D[1],v=(new Date).toLocaleDateString().replaceAll("/","-");Object(c.useEffect)((function(){var t=[],n=[];g.collection("selectlist"+e.user).doc(v).get().then((function(e){e.exists&&(e.data().selectedTasks.forEach((function(e){t.push(e)})),E(t))})),g.collection("donelist"+e.user).doc(v).get().then((function(e){e.exists&&(e.data().doneTasks.forEach((function(e){n.push(e)})),S(n))})),g.collection("todolist").doc("values").get().then((function(e){if(e.exists){var a=[];e.data().allTodo.forEach((function(e){e.selected=t.includes(e.ID),e.done=n.includes(e.ID),a.push(e)})),r(a)}else console.log("No doc values found")}))}),[]);return o.a.createElement(l.a,null,o.a.createElement(a.List,null,s.map((function(t,n){return o.a.createElement(a.ListItem,{key:n,bottomDivider:!0,style:{backgroundColor:t.selected?"#cde1f9":"#fcfcfc"}},o.a.createElement(a.Body,null,o.a.createElement(a.Text,{style:T.titleText,onPress:function(){return function(t){var n=u()(s);n.find((function(e){return e.ID==t})).selected=!n.find((function(e){return e.ID==t})).selected,r(n);var a=[];p.includes(t)?a=p.filter((function(e){return e!==t})):(a=u()(p)).push(t),E(a),g.collection("selectlist"+e.user).doc(v).set({selectedTasks:a})}(t.ID)}},t.Task),o.a.createElement(a.Text,{style:T.baseText},t.Cat)),o.a.createElement(a.Right,null,o.a.createElement(m.a,{title:"Detail",onPress:function(){return h.a.alert("Simple Button pressed")}}),p.includes(t.ID)&&o.a.createElement(a.Switch,{value:I.includes(t.ID),onValueChange:function(){return function(t){p.includes(t)||alert("This job has not selected!");var n=[];I.includes(t)?n=I.filter((function(e){return e!==t})):(n=u()(I)).push(t),S(n),g.collection("donelist"+e.user).doc(v).set({doneTasks:n})}(t.ID)}})))}))))};t.a=function(){return o.a.createElement(r.a,null,o.a.createElement(l.a,null,o.a.createElement(s.a,{placement:"left",leftComponent:{icon:"menu",color:"#fff"},centerComponent:{text:"SUMO DAYS",style:{color:"#fff"}},rightComponent:{icon:"home",color:"#fff"}}),o.a.createElement(a.Tabs,null,o.a.createElement(a.Tab,{heading:"Dad"},o.a.createElement(D,{user:"dad"})),o.a.createElement(a.Tab,{heading:"Susu"},o.a.createElement(D,{user:"susu"})),o.a.createElement(a.Tab,{heading:"Nemo"},o.a.createElement(D,{user:"nemo"})))))}},285:function(e,t,n){e.exports=n(400)}},[[285,1,2]]]);
//# sourceMappingURL=app.1bf198aa.chunk.js.map
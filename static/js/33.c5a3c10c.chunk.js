"use strict";(self.webpackChunkproject_01=self.webpackChunkproject_01||[]).push([[33],{2038:function(n,e,s){s.r(e),s.d(e,{default:function(){return D}});var t=s(5671),r=s(3144),o=s(136),i=s(516),u=s(2791),a=s(8687),l=s(7781),c=s(9427),p=s(885),h="Users_userPhoto__k+p0g",g="Users_paginatorWrapper__eFfFG",d="Users_currentPage__v+IJy",f="Users_notCurrentPage__OMpMn",j=s(184),x=function(n){for(var e=n.totalUsersCount,s=n.pageSize,t=n.currentPage,r=n.onPageChanged,o=(0,u.useState)(0),i=(0,p.Z)(o,2),a=i[0],l=i[1],c=Math.ceil(e/s),h=Math.ceil(c/(2*s)),x=(a+1)*(2*s),C=[],P=a*(2*s)+1;P<=x;P++)C.push(P);return(0,j.jsxs)("div",{className:g,children:[a>0&&(0,j.jsx)("button",{onClick:function(){l(a-1)},children:"Previous"}),C.map((function(n){return(0,j.jsxs)("span",{className:t===n?d:f,onClick:function(){r(n)},children:[" ",n," "]},n)})),(0,j.jsxs)("span",{className:t===c?d:f,onClick:function(){r(c)},children:[" ","... ".concat(c)," "]},c),a<h&&(0,j.jsx)("button",{onClick:function(){l(a+1)},children:"Next"})]})},C=s.p+"static/media/Snapchat-Logo.206d3cf857669a3217ea.jpg",P=s(1087),m=function(n){var e=n.users,s=n.isButtonDisable,t=n.follow,r=n.unfollow;return(0,j.jsx)(j.Fragment,{children:e.map((function(n){return(0,j.jsxs)("div",{children:[(0,j.jsxs)("span",{children:[(0,j.jsx)("div",{className:h,children:(0,j.jsx)(P.OL,{to:"/profile/"+n.id,children:(0,j.jsx)("img",{src:n.photos.small?n.photos.small:C,alt:""})})}),(0,j.jsx)(j.Fragment,{children:n.followed?(0,j.jsx)("button",{disabled:s.some((function(e){return e===n.id})),onClick:function(){r(n.id)},children:"Unfollow"}):(0,j.jsx)("button",{disabled:s.some((function(e){return e===n.id})),onClick:function(){t(n.id)},children:"Follow"})})]}),(0,j.jsxs)("span",{children:[(0,j.jsxs)("span",{children:[(0,j.jsx)("div",{children:n.name}),(0,j.jsx)("div",{children:null===n.status?"Without status.":n.status})]}),(0,j.jsxs)("span",{children:[(0,j.jsx)("div",{children:"user.location.country"}),(0,j.jsx)("div",{children:"user.location.city"})]})]})]},n.id)}))})},v=function(n){var e=n.totalUsersCount,s=n.pageSize,t=n.currentPage,r=n.onPageChanged,o=n.users,i=n.isButtonDisable,u=n.follow,a=n.unfollow;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(x,{totalUsersCount:e,pageSize:s,currentPage:t,onPageChanged:r}),(0,j.jsx)(m,{users:o,isButtonDisable:i,follow:u,unfollow:a})]})},w=s(829),k=function(n){return n.usersPage.users},b=function(n){return n.usersPage.totalUsersCount},U=function(n){return n.usersPage.pageSize},_=function(n){return n.usersPage.currentPage},S=function(n){return n.usersPage.isFetching},F=function(n){return n.usersPage.isButtonDisable},z=function(n){(0,o.Z)(s,n);var e=(0,i.Z)(s);function s(){var n;(0,t.Z)(this,s);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=e.call.apply(e,[this].concat(o))).onPageChanged=function(e){n.props.getUsersThunk(e,n.props.pageSize)},n}return(0,r.Z)(s,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,j.jsxs)(j.Fragment,{children:[this.props.isFetching?(0,j.jsx)(w.Z,{}):null,(0,j.jsx)(v,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,isButtonDisable:this.props.isButtonDisable})]})}}]),s}(u.Component),D=(0,l.qC)((0,a.$j)((function(n){return{users:k(n),totalUsersCount:b(n),pageSize:U(n),currentPage:_(n),isFetching:S(n),isButtonDisable:F(n)}}),{follow:c.ZN,unfollow:c.fv,setCurrentPage:c.D4,getUsersThunk:c.aH}))(z)}}]);
//# sourceMappingURL=33.c5a3c10c.chunk.js.map
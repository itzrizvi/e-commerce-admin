(this.webpackJsonpprime_server_parts=this.webpackJsonpprime_server_parts||[]).push([[67],{940:function(e,t,a){"use strict";a.r(t);a(314);var i=a(218),n=(a(200),a(97)),s=(a(201),a(74)),r=(a(148),a(45)),l=(a(166),a(98)),o=(a(288),a(69)),u=a(9),c=(a(289),a(52)),m=a(23),d=a(0),p=a.n(d),E=a(217),f=a(165),v=a(164),_=a(287),h=a(58),b=a(12),g=a(71),O=a(68),S=a.n(O),N=a(317),y=a.n(N),I=a(22),j=a(76);t.default=function(){var e,t;Object(I.f)("permission");var a=Object(h.useLocation)().search,O=y.a.parse(a),N=Object(h.useHistory)(),T=c.a.useForm(),A=Object(m.a)(T,1)[0],R=Object(d.useState)(!0),P=Object(m.a)(R,2),L=P[0],x=P[1],z=Object(d.useState)(!1),q=Object(m.a)(z,2),C=q[0],D=q[1],M=Object(d.useState)({data:[],isLoading:!0}),F=Object(m.a)(M,2),w=F[0],G=F[1];Object(d.useEffect)((function(){O.id&&g.j.query({query:g.e.GET_SINGLE_ROLES_PERMISSION,variables:{query:{id:parseInt(O.id)}},context:{headers:{TENANTID:"100001",Authorization:S.a.get("psp_t")}}}).then((function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.getSingleRolesPermission;G({data:a.data,isLoading:!1}),x(a.data.roles_permission_status)}))}),[]);return p.a.createElement(p.a.Fragment,null,p.a.createElement(E.a,{title:O.id?"Manage Permission | Edit Permission ".concat(w.isLoading?"":"(".concat(w.data.roles_permission_name,")")):"Add Permission"}),p.a.createElement(f.b,null,p.a.createElement(n.a,{gutter:25},p.a.createElement(s.a,{sm:24,xs:24},p.a.createElement(v.a,{headless:!0},O.id&&w.isLoading?p.a.createElement("div",{style:{textAlign:"center"}},p.a.createElement(l.a,{tip:"processing..."})):p.a.createElement(c.a,{style:{width:"100%"},form:A,name:"addRole",onFinish:function(e){if(console.log(e),D(!0),O.id){var t={data:{id:parseInt(O.id),roles_permission_name:e.permissionName,roles_permission_status:L}};g.j.mutate({mutation:g.d.UPDATE_ROLES_PERMISSION,variables:t,context:{headers:{TENANTID:"100001",Authorization:S.a.get("psp_t")}},refetchQueries:[{query:g.e.GET_ALL_ROLES_PERMISSION,context:{headers:{TENANTID:"100001",Authorization:S.a.get("psp_t")}}},["getAllRolesPermission"]]}).then((function(t){var a,i=null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.updateRolesPermission;if(!(null===i||void 0===i?void 0:i.status))return Object(j.a)();setTimeout((function(){N.push("/admin/permission/list")}),1e3),o.b.success("".concat(e.permissionName," updated successfully"))})).finally((function(){D(!1)}))}else g.j.mutate({mutation:g.d.CREATE_ROLES_PERMISSION,variables:{data:Object(u.a)(Object(u.a)({},e),{},{permissionStatus:L})},context:{headers:{TENANTID:"100001",Authorization:S.a.get("psp_t")}},refetchQueries:[{query:g.e.GET_ALL_ROLES_PERMISSION,context:{headers:{TENANTID:"100001",Authorization:S.a.get("psp_t")}}},["getAllRolesPermission"]]}).then((function(t){var a,i=null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.createRolesPermission;if(!(null===i||void 0===i?void 0:i.status))return Object(j.a)();setTimeout((function(){N.push("/admin/permission/list")}),1e3),o.b.success("".concat(e.permissionName," added successfully"))})).finally((function(){D(!1)}))},onFinishFailed:function(e){return console.log("form error info:\n",e)},labelCol:{span:4}},p.a.createElement(n.a,{gutter:25},p.a.createElement(s.a,{span:10},p.a.createElement(c.a.Item,{rules:[{required:!0,max:30,message:"Please enter Role Name"}],name:"permissionName",label:"Name",initialValue:null===w||void 0===w||null===(e=w.data)||void 0===e?void 0:e.roles_permission_name,labelCol:{style:{width:"40%"}}},p.a.createElement(n.a,null,p.a.createElement(s.a,{span:22},p.a.createElement(r.a,{defaultValue:null===w||void 0===w||null===(t=w.data)||void 0===t?void 0:t.roles_permission_name,placeholder:"Enter Permission Name"})))))),p.a.createElement(c.a.Item,{name:"permissionStatus",label:"Status"},p.a.createElement(i.a,{checked:L,onChange:function(e){return x(e)}})),p.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"3em"}},p.a.createElement(c.a.Item,null,p.a.createElement(_.a,{loading:C,size:"default",htmlType:"submit",type:"primary",raised:!0},C?"Processing":"Save"),p.a.createElement(b.b,{to:"/admin/permission/list"},p.a.createElement(_.a,{style:{marginLeft:10},type:"light",size:"default"},"Cancel"))))))))))}}}]);
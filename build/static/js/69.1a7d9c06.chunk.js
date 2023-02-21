(this.webpackJsonpprime_server_parts=this.webpackJsonpprime_server_parts||[]).push([[69],{951:function(t,e,a){"use strict";a.r(e);a(200);var n=a(97),i=(a(201),a(74)),r=(a(314),a(218)),u=(a(148),a(45)),l=(a(166),a(98)),s=(a(288),a(69)),o=a(9),c=(a(289),a(52)),d=a(23),m=(a(202),a(63)),b=a(0),p=a.n(b),E=a(217),f=a(165),v=a(164),A=a(287),g=a(58),_=a(12),T=a(317),h=a.n(T),j=a(71),O=a(68),y=a.n(O),I=a(22),N=a(76),L=m.a.Option;e.default=function(){var t;Object(I.f)("attribute");var e=Object(g.useLocation)().search,a=h.a.parse(e),T=Object(g.useHistory)(),O=Object(b.useState)({data:[],isLoading:!0}),S=Object(d.a)(O,2),x=S[0],G=S[1],R=Object(b.useState)(""),q=Object(d.a)(R,2),z=q[0],C=q[1],D=Object(b.useState)(!0),U=Object(d.a)(D,2),F=U[0],w=U[1],B=Object(b.useState)(!1),k=Object(d.a)(B,2),P=k[0],J=k[1],Q=c.a.useForm(),V=Object(d.a)(Q,1)[0],H=Object(b.useState)({data:[],isLoading:!0}),M=Object(d.a)(H,2),K=M[0],W=M[1];Object(b.useEffect)((function(){j.j.query({query:j.c.GET_ALL_ATTR_GROUPS,context:{headers:{TENANTID:"100001",Authorization:y.a.get("psp_t")}}}).then((function(t){var e,a=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.getAllAttrGroups;if(!(null===a||void 0===a?void 0:a.status))return Object(N.a)();G((function(t){return Object(o.a)(Object(o.a)({},t),{},{data:null===a||void 0===a?void 0:a.data,error:""})}))})).finally((function(){G((function(t){return Object(o.a)(Object(o.a)({},t),{},{isLoading:!1})}))}))}),[]),Object(b.useEffect)((function(){a.id&&j.j.query({query:j.c.GET_SINGLE_ATTRIBUTE,variables:{query:{attribute_id:parseInt(a.id)}},context:{headers:{TENANTID:"100001",Authorization:y.a.get("psp_t")}}}).then((function(t){var e,a=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.getSingleAttribute;W({data:a.data,isLoading:!1}),C(a.data.attr_group_id)}))}),[]);return p.a.createElement(p.a.Fragment,null,p.a.createElement(E.a,{title:a.id?"Manage Attribute | Edit ".concat(K.isLoading?"":"(".concat(K.data.attribute_name,")")):"Add Attribute"}),p.a.createElement(f.b,null,p.a.createElement(n.a,{gutter:25},p.a.createElement(i.a,{sm:24,xs:24},p.a.createElement(v.a,{headless:!0},a.id&&K.isLoading?p.a.createElement("div",{style:{textAlign:"center"}},p.a.createElement(l.a,{tip:"processing..."})):p.a.createElement(c.a,{style:{width:"100%"},form:V,name:"addRole",onFinish:function(t){var e=t.attribute_name;if(!z)return s.b.warning("Attribute group is not selected");if(J(!0),a.id){var n={data:{attribute_id:parseInt(a.id),attribute_name:e,attribute_status:F,attr_group_id:parseInt(z)}};j.j.mutate({mutation:j.b.UPDATE_ATTRIBUTE,variables:n,context:{headers:{TENANTID:"100001",Authorization:y.a.get("psp_t")}},refetchQueries:[{query:j.c.GET_ALL_ATTRIBUTES,context:{headers:{TENANTID:"100001",Authorization:y.a.get("psp_t")}}},["getAllAttributes"]]}).then((function(t){var e,a=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.updateAttribute;if(!(null===a||void 0===a?void 0:a.status))return Object(N.a)();setTimeout((function(){T.push("/admin/attributes/list")}),1e3),s.b.success(a.message)})).finally((function(){J(!1)}))}else{var i={data:{attribute_name:e,attribute_status:F,attr_group_id:z}};j.j.mutate({mutation:j.b.CREATE_ATTRIBUTE,variables:i,context:{headers:{TENANTID:"100001",Authorization:y.a.get("psp_t")},refetchQueries:[{query:j.c.GET_ALL_ATTRIBUTES,context:{headers:{TENANTID:"100001",Authorization:y.a.get("psp_t")}}},["getAllAttributes"]]}}).then((function(e){var a,n=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.createAttribute;if(!(null===n||void 0===n?void 0:n.status))return Object(N.a)();setTimeout((function(){T.push("/admin/attributes/list")}),1e3),s.b.success("".concat(t.attribute_name," Added successfully"))})).finally((function(){J(!1)}))}},onFinishFailed:function(t){return console.log("form error info:\n",t)},labelCol:{span:4}},p.a.createElement(c.a.Item,{rules:[{required:!0,max:30,message:"Please enter Attribute Name"}],name:"attribute_name",label:"Attribute Name",initialValue:(null===K||void 0===K||null===(t=K.data)||void 0===t?void 0:t.attribute_name)||""},p.a.createElement(u.a,{placeholder:"Enter Attribute Name"})),p.a.createElement(c.a.Item,{initialValue:"",label:"Attribute Group"},x.isLoading?p.a.createElement("div",{className:"spin"},p.a.createElement(l.a,null)):p.a.createElement(p.a.Fragment,null,p.a.createElement(m.a,{allowClear:!0,placeholder:"Select Attribute Group",value:z,onChange:function(t){return C(t)}},x.data.map((function(t){return p.a.createElement(L,{key:t.id,value:t.id},t.attr_group_name)}))))),p.a.createElement(c.a.Item,{name:"attrgroup_status",label:"Status"},p.a.createElement(r.a,{checked:F,onChange:function(t){return w(t)}})),p.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"3em"}},p.a.createElement(c.a.Item,null,p.a.createElement(A.a,{loading:P,size:"default",htmlType:"submit",type:"primary",raised:!0},P?"Processing":"Save"),p.a.createElement(_.b,{to:"/admin/attributes/list"},p.a.createElement(A.a,{style:{marginLeft:10},type:"light",size:"default"},"Cancel"))))))))))}}}]);
(this.webpackJsonpprime_server_parts=this.webpackJsonpprime_server_parts||[]).push([[72],{952:function(t,e,a){"use strict";a.r(e);a(200);var r=a(97),n=(a(201),a(74)),u=(a(150),a(77)),o=(a(148),a(45)),l=(a(166),a(98)),s=(a(288),a(69)),i=(a(314),a(218)),c=a(9),d=a(23),p=a(0),m=a.n(p),g=a(21),_=a.n(g),b=a(192),f=a(217),v=a(165),E=a(164),h=a(287),A=a(12),O=a(126),j=a.n(O),y=a(71),T=a(68),x=a.n(T),N=a(22),C=a(76);e.default=function(){Object(N.f)("attribute-group");var t=Object(p.useState)({data:[],isLoading:!0}),e=Object(d.a)(t,2),a=e[0],g=e[1],O=Object(p.useState)([]),T=Object(d.a)(O,2),G=T[0],S=T[1],k=Object(p.useState)(""),w=Object(d.a)(k,2),I=w[0],L=w[1];Object(p.useEffect)((function(){y.j.query({query:y.c.GET_ALL_ATTR_GROUPS,context:{headers:{TENANTID:"100001",Authorization:x.a.get("psp_t")}}}).then((function(t){var e,a=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.getAllAttrGroups;if(!(null===a||void 0===a?void 0:a.status))return Object(C.a)();g((function(t){return Object(c.a)(Object(c.a)({},t),{},{data:null===a||void 0===a?void 0:a.data,error:""})}))})).finally((function(){g((function(t){return Object(c.a)(Object(c.a)({},t),{},{isLoading:!1})}))}))}),[]);var U=[{title:"Group Name",dataIndex:"attr_group_name",key:"attr_group_name",sorter:function(t,e){return t.attr_group_name.toUpperCase()>e.attr_group_name.toUpperCase()?1:-1}},{title:"Sort Order",dataIndex:"attrgroup_sortorder",key:"attrgroup_sortorder",sorter:function(t,e){return t.attrgroup_sortorder===e.attrgroup_sortorder?0:t.attrgroup_sortorder?-1:1}},{title:"Status",dataIndex:"attrgroup_status",key:"attrgroup_status",align:"right",sorter:function(t,e){return t.attrgroup_status===e.attrgroup_status?0:t.attrgroup_status?-1:1},filters:[{text:"Active",value:!0},{text:"Inactive",value:!1}],onFilter:function(t,e){return e.attrgroup_status===t},render:function(t,e){return m.a.createElement(i.a,{defaultChecked:t,title:"Status",onChange:function(t){return z(e,t)}})}},{title:"Action",dataIndex:"id",key:"id",width:70,align:"right",render:function(t,e){return m.a.createElement(m.a.Fragment,null,m.a.createElement(A.b,{to:"/admin/attributes/add-group?id=".concat(t)},m.a.createElement(j.a,{name:"edit",style:{margin:".5em 1em"}})))}}],z=function(t,e){var a={data:{attr_group_id:t.id,attrgroup_status:e}};console.log(a),y.j.mutate({mutation:y.b.UPDATE_ATTR_GROUP,variables:a,context:{headers:{TENANTID:"100001",Authorization:x.a.get("psp_t")}}}).then((function(e){var a,r=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.updateAttrGroup;if(!(null===r||void 0===r?void 0:r.status))return Object(C.a)();s.b.success("".concat(t.attr_group_name," status updated successfully"))}))};return m.a.createElement(m.a.Fragment,null,m.a.createElement(f.a,{title:"Attribute Groups",buttons:[m.a.createElement("div",{key:"1",className:"page-header-actions"},m.a.createElement(A.b,{to:"/admin/attributes/add-group"},m.a.createElement(h.a,{size:"small",title:"Add Attribute Group",type:"primary"},m.a.createElement(_.a,{icon:"file-plus"}))))]}),m.a.createElement(v.b,null,m.a.createElement(r.a,{gutter:25},m.a.createElement(n.a,{sm:24,xs:24},m.a.createElement(E.a,{headless:!0},a.isLoading?m.a.createElement("div",{className:"spin"},m.a.createElement(l.a,null)):m.a.createElement(m.a.Fragment,null,m.a.createElement(o.a,{placeholder:"Search Attribute Groups...",prefix:m.a.createElement(b.a,null),onChange:function(t){var e=t.target.value;L(e),S(a.data.filter((function(t){return null===t||void 0===t?void 0:t.g_n.toLowerCase().includes(e.toLowerCase())})))}}),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("span",{className:"psp_list"},m.a.createElement(u.a,{className:"table-responsive",columns:U,rowKey:"g_s",size:"small",dataSource:I?G:a.data,rowClassName:function(t,e){return e%2===0?"":"altTableClass"}}))))))))}}}]);
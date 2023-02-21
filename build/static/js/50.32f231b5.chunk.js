(this.webpackJsonpprime_server_parts=this.webpackJsonpprime_server_parts||[]).push([[50],{660:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n,i,l,r,u=a(8),s=a(16),c={AVAILABILITY_STATUS_ADD:Object(s.d)(n||(n=Object(u.a)(["\n    mutation addProductAvailabilityStatus($name: String!){\n        addProductAvailabilityStatus(data: { name: $name }) {\n            message\n            status\n            tenant_id\n        }\n    }"]))),AVAILABILITY_STATUS_UPDATE:Object(s.d)(i||(i=Object(u.a)(["\n    mutation updateProductAvailabilityStatus($data: UpdateProductAvailabilityStatusInput){\n        updateProductAvailabilityStatus(data: $data) {\n            message\n            status\n            tenant_id\n        }\n    }"]))),GET_ALL_AVAILABILITY_STATUS:Object(s.d)(l||(l=Object(u.a)(["\n    query getAllProductAvailabilityStatus{\n        getAllProductAvailabilityStatus {\n            message\n            status\n            data {\n                id\n                name\n                slug\n                createdAt\n                updatedAt\n            }\n        }\n    }"]))),GET_SINGLE_AVAILABILITY_STATUS:Object(s.d)(r||(r=Object(u.a)(["\n    query getSingleProductAvailabilityStatus($query : GetSingleProductAvailabilityStatusInput){\n        getSingleProductAvailabilityStatus(query: $query) {\n            message\n            status\n            data {\n                id\n                name\n                slug\n                createdAt\n                updatedAt\n            }\n        }\n  }"])))}},968:function(t,e,a){"use strict";a.r(e);a(200);var n=a(97),i=(a(201),a(74)),l=(a(150),a(77)),r=(a(148),a(45)),u=(a(166),a(98)),s=a(9),c=a(23),d=a(0),o=a.n(d),m=a(21),A=a.n(m),b=a(217),p=a(165),g=a(164),v=a(287),S=a(12),y=a(126),E=a.n(y),f=a(192),I=a(135),T=a(22),_=a(219),O=a.n(_),j=a(99),L=a(50),P=a(660),h=a(76);e.default=function(){Object(T.f)("product-availability-status");var t=Object(d.useState)({data:[],isLoading:!0}),e=Object(c.a)(t,2),a=e[0],m=e[1],y=Object(L.d)((function(t){return t.auth.token})),_=Object(d.useState)([]),U=Object(c.a)(_,2),C=U[0],N=U[1],Y=Object(d.useState)(""),w=Object(c.a)(Y,2),k=w[0],x=w[1],D=[{title:"Name",dataIndex:"name",key:"name",sorter:function(t,e){return t.name.toUpperCase()>e.name.toUpperCase()?1:-1}},{title:"Alias",dataIndex:"slug",key:"slug",sorter:function(t,e){return t.slug.toUpperCase()>e.slug.toUpperCase()?1:-1}},{title:"Date",dataIndex:"createdAt",key:"createdAt",width:120,align:"center",render:function(t,e){return o.a.createElement("span",{className:"status-text"},o.a.createElement(O.a,{format:"DD MMMM YYYY"},parseInt(t)))}},{title:"Action",dataIndex:"action",width:70,align:"right",render:function(t,e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(S.b,{to:"/admin/product-availability-status/update?id=".concat(e.id)},o.a.createElement(E.a,{name:"edit",style:{margin:".5em 1em"}})))},key:"slug"}];Object(d.useEffect)((function(){j.b.query({query:P.a.GET_ALL_AVAILABILITY_STATUS,context:{headers:{TENANTID:"100001",Authorization:y}}}).then((function(t){var e,a=null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.getAllProductAvailabilityStatus;if(!(null===a||void 0===a?void 0:a.status))return Object(h.a)();m((function(t){return Object(s.a)(Object(s.a)({},t),{},{data:null===a||void 0===a?void 0:a.data,error:""})}))})).finally((function(){m((function(t){return Object(s.a)(Object(s.a)({},t),{},{isLoading:!1})}))}))}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{title:"Product Availability Status",buttons:[o.a.createElement("div",{key:"1",className:"page-header-actions"},o.a.createElement(S.b,{to:"/admin/product-availability-status/add"},o.a.createElement(v.a,{size:"small",title:"Add Product Availability Status",type:"primary"},o.a.createElement(A.a,{icon:"user-plus"}))))]}),o.a.createElement(p.b,null,o.a.createElement(n.a,{gutter:25},o.a.createElement(i.a,{sm:24,xs:24},o.a.createElement(g.a,{headless:!0},a.isLoading?o.a.createElement("div",{className:"spin"},o.a.createElement(u.a,null)):o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{placeholder:"Search Product Availability Status...",prefix:o.a.createElement(f.a,null),onChange:function(t){var e=t.target.value;x(e),N(a.data.filter((function(t){return((null===t||void 0===t?void 0:t.name)+(null===t||void 0===t?void 0:t.slug)).toLowerCase().includes(e.toLowerCase())})))}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("span",{className:"psp_list"},o.a.createElement(l.a,{className:"table-responsive",columns:D,rowKey:"id",size:"small",dataSource:k?C:a.data,rowClassName:function(t,e){return e%2===0?"":"altTableClass"},pagination:{defaultPageSize:I.a.PRODUCT_AVAILABILITY_STATUS_PER_PAGE,total:k?C.length:a.data.length,showTotal:function(t,e){return"".concat(e[0],"-").concat(e[1]," of ").concat(t," items")}}}))))))))}}}]);
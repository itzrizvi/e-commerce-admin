(this.webpackJsonpprime_server_parts=this.webpackJsonpprime_server_parts||[]).push([[47],{630:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n,l,i,r,d,m,s,u,E,o,c,p,T,g=a(8),A=a(16),_={GET_EMAIL_HEADER_FOOTER_LIST:Object(A.d)(n||(n=Object(g.a)(["\n    query getEmailTempHeaderFooterList {\n      getEmailTempHeaderFooterList {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          type\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),ADD_EMAIL_TEMPLATE_HEADER_FOOTER:Object(A.d)(l||(l=Object(g.a)(["\n    mutation addEmailTempHeaderFooter($data: AddEmailTempHFInput) {\n      addEmailTempHeaderFooter(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),SINGLE_EMAIL_TEMPLATE_HEADER_FOOTER:Object(A.d)(i||(i=Object(g.a)(["\n    query getSingleEmailTempHeaderFooter($query: GetSingleEmailHeaderFooterInput) {\n      getSingleEmailTempHeaderFooter(query: $query) {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          layout_type\n          type\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),EMAIL_TEMPLATE_HEADER_FOOTER_UPDATE:Object(A.d)(r||(r=Object(g.a)(["\n    mutation updateEmailTempHeaderFooter($data: UpdateEmailTempHFInput) {\n      updateEmailTempHeaderFooter(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_LIST:Object(A.d)(d||(d=Object(g.a)(["\n    query getAllEmailTemplateList {\n      getAllEmailTemplateList {\n        message\n        status\n        data {\n          id\n          email_template_id\n          name\n          slug\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),ADD_EMAIL_TEMPLATE_LIST:Object(A.d)(m||(m=Object(g.a)(["\n    mutation addEmailTemplateOnList($data: AddEmailTemplateListInput) {\n      addEmailTemplateOnList(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),SINGLE_EMAIL_TEMPLATE_LIST:Object(A.d)(s||(s=Object(g.a)(["\n    query getSingleEmailTemplateList($query: GetSingleEmailTemplateListInput) {\n      getSingleEmailTemplateList(query: $query) {\n        message\n        status\n        data {\n          id\n          email_template_id\n          name\n          slug\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),UPDATE_EMAIL_TEMPLATE_LIST:Object(A.d)(u||(u=Object(g.a)(["\n    mutation updateEmailTemplateOnList($data: UpdateEmailTemplateListInput) {\n      updateEmailTemplateOnList(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),CREATE_EMAIL_TEMPLATE:Object(A.d)(E||(E=Object(g.a)(["\n    mutation createEmailTemplate($data: addEmailTemplateInput) {\n      createEmailTemplate(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_CONTENT_LIST:Object(A.d)(o||(o=Object(g.a)(["\n    query getEmailTemplateList {\n      getEmailTemplateList {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          createdAt\n          updatedAt\n          emailHeader {\n            id\n            name\n            slug\n          }\n          emailFooter {\n            id\n            name\n            slug\n          }\n        }\n      }\n    }\n  "]))),GET_SINGLE_EMAIL_CONTENT_TEMPLATE:Object(A.d)(c||(c=Object(g.a)(["\n    query getSingleEmailTemplate($query: GetSingleEmailTemplateInput) {\n      getSingleEmailTemplate(query: $query) {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          layout_type\n          createdAt\n          updatedAt\n          emailHeader {\n            id\n            name\n            slug\n            content\n            type\n            createdAt\n            updatedAt\n          }\n          emailFooter {\n            id\n            name\n            slug\n            content\n            type\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  "]))),UPDATE_EMAIL_TEMPLATE_CONTENT:Object(A.d)(p||(p=Object(g.a)(["\n    mutation updateEmailTemplate($data: updateEmailTemplateInput) {\n      updateEmailTemplate(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_PREVIEW:Object(A.d)(T||(T=Object(g.a)(["\n    query getEmailTemplatePreview($query: GetEmailTemplatePreviewInput) {\n      getEmailTemplatePreview(query: $query) {\n        message\n        status\n        tenant_id\n        data\n      }\n    }\n  "])))}},973:function(e,t,a){"use strict";a.r(t);a(200);var n=a(97),l=(a(201),a(74)),i=(a(150),a(77)),r=(a(148),a(45)),d=(a(166),a(98)),m=a(9),s=a(23),u=a(0),E=a.n(u),o=a(192),c=a(21),p=a.n(c),T=a(217),g=a(165),A=a(164),_=a(287),L=a(12),O=a(126),b=a.n(O),I=a(99),y=a(50),j=a(219),v=a.n(j),M=a(22),f=a(135),S=a(630);t.default=function(){var e,t;Object(M.f)("email-template");var a=Object(u.useState)({data:[],loading:!0,error:""}),c=Object(s.a)(a,2),O=c[0],j=c[1],P=Object(u.useState)([]),F=Object(s.a)(P,2),h=F[0],q=F[1],C=Object(u.useState)(!1),N=Object(s.a)(C,2),H=N[0],$=N[1],D=Object(y.d)((function(e){return e.auth.token}));Object(u.useEffect)((function(){I.b.query({query:S.a.GET_EMAIL_TEMPLATE_CONTENT_LIST,context:{headers:{TENANTID:"100001",Authorization:D}}}).then((function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.getEmailTemplateList;j((function(e){return Object(m.a)(Object(m.a)({},e),{},{data:null===a||void 0===a?void 0:a.data,error:""})}))})).finally((function(){j((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!1})}))}))}),[]);var U=[{title:"ID",dataIndex:"id",key:"id",width:80,ellipsis:!0,sorter:function(e,t){return e.id.toUpperCase()>t.id.toUpperCase()?1:-1}},{title:"Name",dataIndex:"name",key:"name",width:200,ellipsis:!0,sorter:function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()?1:-1}},{title:"Alias",dataIndex:"slug",key:"slug",width:200,ellipsis:!0,sorter:function(e,t){return e.slug.toUpperCase()>t.slug.toUpperCase()?1:-1}},{title:"Header Name",dataIndex:["emailHeader","name"],key:"name",sorter:function(e,t){return e.slug.toUpperCase()>t.slug.toUpperCase()?1:-1}},{title:"Footer Name",dataIndex:["emailFooter","name"],key:"name",sorter:function(e,t){return e.slug.toUpperCase()>t.slug.toUpperCase()?1:-1}},{title:"Date",dataIndex:"createdAt",key:"createdAt",align:"center",width:120,render:function(e,t){return E.a.createElement("span",{className:"status-text"},E.a.createElement(v.a,{format:"DD MMMM YYYY"},parseInt(e)))}},{title:"Action",dataIndex:"action",align:"right",key:"action",width:80,render:function(e,t){return E.a.createElement(E.a.Fragment,null,E.a.createElement(L.b,{to:"/admin/email/content/edit/".concat(t.id)},E.a.createElement(b.a,{name:"edit"})))}}];return E.a.createElement(E.a.Fragment,null,E.a.createElement(T.a,{title:"Email Content",buttons:[E.a.createElement("div",{key:"email-template",className:"page-header-actions"},E.a.createElement(L.b,{to:"/admin/email/content/add"},E.a.createElement(_.a,{size:"small",title:"Add Email Content",type:"primary"},E.a.createElement(p.a,{icon:"plus"}))))]}),E.a.createElement(g.b,null,E.a.createElement(n.a,{gutter:25},E.a.createElement(l.a,{sm:24,xs:24},E.a.createElement(A.a,{headless:!0},O.loading?E.a.createElement("div",{className:"spin"},E.a.createElement(d.a,null)):O.error?E.a.createElement("p",null,O.error):E.a.createElement(E.a.Fragment,null,E.a.createElement(r.a,{placeholder:"Search in Email Template Content...",prefix:E.a.createElement(o.a,null),onChange:function(e){var t=e.target.value;$(t),q(O.data.filter((function(e){var a,n;return((null===e||void 0===e?void 0:e.name)+(null===e||void 0===e||null===(a=e.emailHeader)||void 0===a?void 0:a.name)+(null===e||void 0===e?void 0:e.slug)+(null===e||void 0===e||null===(n=e.emailFooter)||void 0===n?void 0:n.name)).toLowerCase().includes(t.toLowerCase())})))}}),E.a.createElement("br",null),E.a.createElement("br",null),E.a.createElement("span",{className:"psp_list"},E.a.createElement(i.a,{className:"table-responsive",columns:U,pagination:{defaultPageSize:f.a.EMAIL_TEMPLATE_PER_PAGE,total:H?null===O||void 0===O||null===(e=O.data)||void 0===e?void 0:e.length:null===O||void 0===O||null===(t=O.data)||void 0===t?void 0:t.length,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")}},rowKey:"id",size:"small",dataSource:H?h:O.data}))))))))}}}]);
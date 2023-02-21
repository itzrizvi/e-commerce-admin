(this.webpackJsonpprime_server_parts=this.webpackJsonpprime_server_parts||[]).push([[43],{630:function(e,t,a){"use strict";a.d(t,"a",(function(){return L}));var n,l,i,d,m,u,r,E,s,o,c,T,p,A=a(8),_=a(16),L={GET_EMAIL_HEADER_FOOTER_LIST:Object(_.d)(n||(n=Object(A.a)(["\n    query getEmailTempHeaderFooterList {\n      getEmailTempHeaderFooterList {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          type\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),ADD_EMAIL_TEMPLATE_HEADER_FOOTER:Object(_.d)(l||(l=Object(A.a)(["\n    mutation addEmailTempHeaderFooter($data: AddEmailTempHFInput) {\n      addEmailTempHeaderFooter(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),SINGLE_EMAIL_TEMPLATE_HEADER_FOOTER:Object(_.d)(i||(i=Object(A.a)(["\n    query getSingleEmailTempHeaderFooter($query: GetSingleEmailHeaderFooterInput) {\n      getSingleEmailTempHeaderFooter(query: $query) {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          layout_type\n          type\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),EMAIL_TEMPLATE_HEADER_FOOTER_UPDATE:Object(_.d)(d||(d=Object(A.a)(["\n    mutation updateEmailTempHeaderFooter($data: UpdateEmailTempHFInput) {\n      updateEmailTempHeaderFooter(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_LIST:Object(_.d)(m||(m=Object(A.a)(["\n    query getAllEmailTemplateList {\n      getAllEmailTemplateList {\n        message\n        status\n        data {\n          id\n          email_template_id\n          name\n          slug\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),ADD_EMAIL_TEMPLATE_LIST:Object(_.d)(u||(u=Object(A.a)(["\n    mutation addEmailTemplateOnList($data: AddEmailTemplateListInput) {\n      addEmailTemplateOnList(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),SINGLE_EMAIL_TEMPLATE_LIST:Object(_.d)(r||(r=Object(A.a)(["\n    query getSingleEmailTemplateList($query: GetSingleEmailTemplateListInput) {\n      getSingleEmailTemplateList(query: $query) {\n        message\n        status\n        data {\n          id\n          email_template_id\n          name\n          slug\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),UPDATE_EMAIL_TEMPLATE_LIST:Object(_.d)(E||(E=Object(A.a)(["\n    mutation updateEmailTemplateOnList($data: UpdateEmailTemplateListInput) {\n      updateEmailTemplateOnList(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),CREATE_EMAIL_TEMPLATE:Object(_.d)(s||(s=Object(A.a)(["\n    mutation createEmailTemplate($data: addEmailTemplateInput) {\n      createEmailTemplate(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_CONTENT_LIST:Object(_.d)(o||(o=Object(A.a)(["\n    query getEmailTemplateList {\n      getEmailTemplateList {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          createdAt\n          updatedAt\n          emailHeader {\n            id\n            name\n            slug\n          }\n          emailFooter {\n            id\n            name\n            slug\n          }\n        }\n      }\n    }\n  "]))),GET_SINGLE_EMAIL_CONTENT_TEMPLATE:Object(_.d)(c||(c=Object(A.a)(["\n    query getSingleEmailTemplate($query: GetSingleEmailTemplateInput) {\n      getSingleEmailTemplate(query: $query) {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          layout_type\n          createdAt\n          updatedAt\n          emailHeader {\n            id\n            name\n            slug\n            content\n            type\n            createdAt\n            updatedAt\n          }\n          emailFooter {\n            id\n            name\n            slug\n            content\n            type\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  "]))),UPDATE_EMAIL_TEMPLATE_CONTENT:Object(_.d)(T||(T=Object(A.a)(["\n    mutation updateEmailTemplate($data: updateEmailTemplateInput) {\n      updateEmailTemplate(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_PREVIEW:Object(_.d)(p||(p=Object(A.a)(["\n    query getEmailTemplatePreview($query: GetEmailTemplatePreviewInput) {\n      getEmailTemplatePreview(query: $query) {\n        message\n        status\n        tenant_id\n        data\n      }\n    }\n  "])))}},978:function(e,t,a){"use strict";a.r(t);a(200);var n=a(97),l=(a(201),a(74)),i=(a(202),a(63)),d=(a(148),a(45)),m=(a(166),a(98)),u=(a(288),a(69)),r=a(9),E=(a(289),a(52)),s=a(23),o=a(0),c=a.n(o),T=a(217),p=a(165),A=a(164),_=a(287),L=a(58),g=a(12),b=a(50),O=a(99),v=a(22),I=a(630),y=a(76);t.default=function(){var e,t;Object(v.f)("email-template");var a=Object(L.useParams)(),j=Object(L.useHistory)(),f=Object(b.d)((function(e){return e.auth.token})),M=Object(o.useState)(!1),P=Object(s.a)(M,2),S=P[0],h=P[1],q=Object(o.useState)([]),N=Object(s.a)(q,2),F=N[0],$=N[1],H=Object(o.useState)({data:{},loading:!0,error:""}),D=Object(s.a)(H,2),G=D[0],C=D[1],R=E.a.useForm(),w=Object(s.a)(R,1)[0];return Object(o.useEffect)((function(){O.b.query({query:I.a.SINGLE_EMAIL_TEMPLATE_LIST,variables:{query:{id:parseInt(null===a||void 0===a?void 0:a.id)}},context:{headers:{TENANTID:"100001",Authorization:f}},fetchPolicy:"network-only"}).then((function(e){var t,a,n,l=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.getSingleEmailTemplateList;if(!(null===l||void 0===l?void 0:l.status))return Object(y.a)();C({data:null===l||void 0===l?void 0:l.data,loading:!1,error:""}),w.setFieldsValue({name:null===l||void 0===l||null===(a=l.data)||void 0===a?void 0:a.name,email_template_id:null===l||void 0===l||null===(n=l.data)||void 0===n?void 0:n.email_template_id})}))}),[]),Object(o.useEffect)((function(){O.b.query({query:I.a.GET_EMAIL_TEMPLATE_CONTENT_LIST,context:{headers:{TENANTID:"100001",Authorization:f}}}).then((function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.getEmailTemplateList;$(null===a||void 0===a?void 0:a.data)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(T.a,{title:"Manage Email Template | Edit Email Template ".concat((null===G||void 0===G||null===(e=G.data)||void 0===e?void 0:e.name)?"(".concat(null===G||void 0===G||null===(t=G.data)||void 0===t?void 0:t.name,")"):"")}),c.a.createElement(p.b,null,c.a.createElement(n.a,{gutter:25},c.a.createElement(l.a,{sm:24,xs:24},c.a.createElement(A.a,{headless:!0},G.loading?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(m.a,{tip:"processing..."})):c.a.createElement(E.a,{style:{width:"100%"},form:w,name:"EditEmailTemplate",onFinish:function(e){h(!0),O.b.mutate({mutation:I.a.UPDATE_EMAIL_TEMPLATE_LIST,variables:{data:Object(r.a)(Object(r.a)({},e),{},{id:parseInt(null===a||void 0===a?void 0:a.id)})},refetchQueries:[{query:I.a.GET_EMAIL_TEMPLATE_LIST,context:{headers:{TENANTID:"100001",Authorization:f}},fetchPolicy:"network-only"},["getAllEmailTemplateList"]],context:{headers:{TENANTID:"100001",Authorization:f}}}).then((function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.updateEmailTemplateOnList;if(!(null===a||void 0===a?void 0:a.status))return Object(y.a)();setTimeout((function(){j.push("/admin/email/template/list")}),1e3),u.b.success(null===a||void 0===a?void 0:a.message)})).finally((function(){return h(!1)}))},onFinishFailed:function(e){return console.log("form error info:\n",e)},labelCol:{span:4}},c.a.createElement(E.a.Item,{rules:[{required:!0,max:100,message:"Please Enter Template Name"}],name:"name",label:"Name"},c.a.createElement(d.a,{placeholder:"Enter Template Name"})),c.a.createElement(E.a.Item,{name:"email_template_id",label:"Email Content"},c.a.createElement(i.a,{style:{width:"100%"},placeholder:"Select Email Template Content",optionLabelProp:"label"},null===F||void 0===F?void 0:F.map((function(e){return c.a.createElement(i.a.Option,{value:e.id,label:e.name},c.a.createElement("div",{className:"demo-option-label-item"},e.name))})))),c.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},c.a.createElement(E.a.Item,null,c.a.createElement(_.a,{loading:S,size:"default",htmlType:"submit",type:"primary",raised:!0},S?"Processing":"Save"),c.a.createElement(g.b,{to:"/admin/email/template/list"},c.a.createElement(_.a,{style:{marginLeft:10},type:"light",size:"default"},"Cancel"))))))))))}}}]);
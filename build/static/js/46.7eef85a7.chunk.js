(this.webpackJsonpprime_server_parts=this.webpackJsonpprime_server_parts||[]).push([[46],{630:function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var n,l,i,d,r,o,m,u,s,E,c,p,T,g=a(8),b=a(16),A={GET_EMAIL_HEADER_FOOTER_LIST:Object(b.d)(n||(n=Object(g.a)(["\n    query getEmailTempHeaderFooterList {\n      getEmailTempHeaderFooterList {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          type\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),ADD_EMAIL_TEMPLATE_HEADER_FOOTER:Object(b.d)(l||(l=Object(g.a)(["\n    mutation addEmailTempHeaderFooter($data: AddEmailTempHFInput) {\n      addEmailTempHeaderFooter(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),SINGLE_EMAIL_TEMPLATE_HEADER_FOOTER:Object(b.d)(i||(i=Object(g.a)(["\n    query getSingleEmailTempHeaderFooter($query: GetSingleEmailHeaderFooterInput) {\n      getSingleEmailTempHeaderFooter(query: $query) {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          layout_type\n          type\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),EMAIL_TEMPLATE_HEADER_FOOTER_UPDATE:Object(b.d)(d||(d=Object(g.a)(["\n    mutation updateEmailTempHeaderFooter($data: UpdateEmailTempHFInput) {\n      updateEmailTempHeaderFooter(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_LIST:Object(b.d)(r||(r=Object(g.a)(["\n    query getAllEmailTemplateList {\n      getAllEmailTemplateList {\n        message\n        status\n        data {\n          id\n          email_template_id\n          name\n          slug\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),ADD_EMAIL_TEMPLATE_LIST:Object(b.d)(o||(o=Object(g.a)(["\n    mutation addEmailTemplateOnList($data: AddEmailTemplateListInput) {\n      addEmailTemplateOnList(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),SINGLE_EMAIL_TEMPLATE_LIST:Object(b.d)(m||(m=Object(g.a)(["\n    query getSingleEmailTemplateList($query: GetSingleEmailTemplateListInput) {\n      getSingleEmailTemplateList(query: $query) {\n        message\n        status\n        data {\n          id\n          email_template_id\n          name\n          slug\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  "]))),UPDATE_EMAIL_TEMPLATE_LIST:Object(b.d)(u||(u=Object(g.a)(["\n    mutation updateEmailTemplateOnList($data: UpdateEmailTemplateListInput) {\n      updateEmailTemplateOnList(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),CREATE_EMAIL_TEMPLATE:Object(b.d)(s||(s=Object(g.a)(["\n    mutation createEmailTemplate($data: addEmailTemplateInput) {\n      createEmailTemplate(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_CONTENT_LIST:Object(b.d)(E||(E=Object(g.a)(["\n    query getEmailTemplateList {\n      getEmailTemplateList {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          createdAt\n          updatedAt\n          emailHeader {\n            id\n            name\n            slug\n          }\n          emailFooter {\n            id\n            name\n            slug\n          }\n        }\n      }\n    }\n  "]))),GET_SINGLE_EMAIL_CONTENT_TEMPLATE:Object(b.d)(c||(c=Object(g.a)(["\n    query getSingleEmailTemplate($query: GetSingleEmailTemplateInput) {\n      getSingleEmailTemplate(query: $query) {\n        message\n        status\n        data {\n          id\n          name\n          slug\n          content\n          layout_type\n          createdAt\n          updatedAt\n          emailHeader {\n            id\n            name\n            slug\n            content\n            type\n            createdAt\n            updatedAt\n          }\n          emailFooter {\n            id\n            name\n            slug\n            content\n            type\n            createdAt\n            updatedAt\n          }\n        }\n      }\n    }\n  "]))),UPDATE_EMAIL_TEMPLATE_CONTENT:Object(b.d)(p||(p=Object(g.a)(["\n    mutation updateEmailTemplate($data: updateEmailTemplateInput) {\n      updateEmailTemplate(data: $data) {\n        message\n        status\n      }\n    }\n  "]))),GET_EMAIL_TEMPLATE_PREVIEW:Object(b.d)(T||(T=Object(g.a)(["\n    query getEmailTemplatePreview($query: GetEmailTemplatePreviewInput) {\n      getEmailTemplatePreview(query: $query) {\n        message\n        status\n        tenant_id\n        data\n      }\n    }\n  "])))}},981:function(e,t,a){"use strict";a.r(t);a(200);var n=a(97),l=(a(201),a(74)),i=(a(314),a(218)),d=(a(202),a(63)),r=(a(166),a(98)),o=(a(288),a(69)),m=a(9),u=(a(289),a(52)),s=a(23),E=(a(148),a(45)),c=a(0),p=a.n(c),T=a(217),g=a(165),b=a(164),A=a(287),v=a(58),_=a(12),O=a(50),y=a(99),L=a(22),I=a(648),j=a.n(I),h=(a(649),a(630)),f=a(650),F=a.n(f),H=a(651),M=a.n(H),S=a(76);I.Quill.register("modules/imageResize",F.a),I.Quill.register("modules/htmlEditButton",M.a);var P={toolbar:[[{font:[]}],[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"},{align:[]}],["link","image","video"],["clean"]],imageResize:{parchment:I.Quill.import("parchment"),modules:["Resize","DisplaySize"]},htmlEditButton:{okText:"Save",msg:'Edit HTML here, when you click "Save" the quill editor\'s contents will be replaced'}};t.default=function(){var e,t;Object(L.f)("email-template");var a=E.a.TextArea,I=Object(v.useParams)(),f=Object(v.useHistory)(),F=Object(O.d)((function(e){return e.auth.token})),H=Object(c.useState)(!1),M=Object(s.a)(H,2),q=M[0],N=M[1],$=Object(c.useState)(""),D=Object(s.a)($,2),R=D[0],C=D[1],G=Object(c.useState)(""),k=Object(s.a)(G,2),w=k[0],x=k[1],z=Object(c.useState)(!1),U=Object(s.a)(z,2),Q=U[0],V=U[1],B=Object(c.useState)({data:{},loading:!0,error:""}),J=Object(s.a)(B,2),W=J[0],K=J[1],X=u.a.useForm(),Y=Object(s.a)(X,1)[0];return Object(c.useEffect)((function(){parseInt(null===I||void 0===I?void 0:I.id)&&y.b.query({query:h.a.SINGLE_EMAIL_TEMPLATE_HEADER_FOOTER,variables:{query:{id:parseInt(null===I||void 0===I?void 0:I.id)}},context:{headers:{TENANTID:"100001",Authorization:F}},fetchPolicy:"network-only"}).then((function(e){var t,a,n,l,i,d,r=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.getSingleEmailTempHeaderFooter;if(!(null===r||void 0===r?void 0:r.status))return Object(S.a)();K({data:null===r||void 0===r?void 0:r.data,loading:!1,error:""}),Y.setFieldsValue({name:null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.name,type:null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n.type}),x(null===r||void 0===r||null===(l=r.data)||void 0===l?void 0:l.content),C(null===r||void 0===r||null===(i=r.data)||void 0===i?void 0:i.content),V("custom"===(null===r||void 0===r||null===(d=r.data)||void 0===d?void 0:d.layout_type))}))}),[null===I||void 0===I?void 0:I.id]),p.a.createElement(p.a.Fragment,null,p.a.createElement(T.a,{title:"Manage Email Header/Footer | Edit Email Header/Footer ".concat((null===W||void 0===W||null===(e=W.data)||void 0===e?void 0:e.name)?"(".concat(null===W||void 0===W||null===(t=W.data)||void 0===t?void 0:t.name,")"):"")}),p.a.createElement(g.b,null,p.a.createElement(n.a,{gutter:25},p.a.createElement(l.a,{sm:24,xs:24},p.a.createElement(b.a,{headless:!0},W.loading?p.a.createElement("div",{style:{textAlign:"center"}},p.a.createElement(r.a,{tip:"processing..."})):p.a.createElement(u.a,{style:{width:"100%"},form:Y,name:"editEmailHeaderFooter",onFinish:function(e){var t;N(!0),t=Q?{layout_type:"custom",content:w}:{layout_type:"dynamic",content:R},y.b.mutate({mutation:h.a.EMAIL_TEMPLATE_HEADER_FOOTER_UPDATE,variables:{data:Object(m.a)(Object(m.a)({},e),{},{id:parseInt(null===I||void 0===I?void 0:I.id)},t)},refetchQueries:[{query:h.a.GET_EMAIL_HEADER_FOOTER_LIST,context:{headers:{TENANTID:"100001",Authorization:F}},fetchPolicy:"network-only"},["getEmailTempHeaderFooterList"]],context:{headers:{TENANTID:"100001",Authorization:F}}}).then((function(e){var t,a=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.updateEmailTempHeaderFooter;if(!(null===a||void 0===a?void 0:a.status))return Object(S.a)();setTimeout((function(){f.push("/admin/email/header-footer/list")}),1e3),o.b.success(null===a||void 0===a?void 0:a.message)})).finally((function(){return N(!1)}))},onFinishFailed:function(e){return console.log("form error info:\n",e)},labelCol:{span:4}},p.a.createElement(u.a.Item,{rules:[{required:!0,max:100,message:"Please Enter Email Header/Footer Name"}],name:"name",label:"Name"},p.a.createElement(E.a,{placeholder:"Enter Header/Footer Name"})),p.a.createElement(u.a.Item,{name:"type",label:"Type",required:!0},p.a.createElement(d.a,{style:{width:"100%"},placeholder:"Select Header/Footer Type",optionLabelProp:"label"},p.a.createElement(d.a.Option,{value:"header",label:"Header"},p.a.createElement("div",{className:"demo-option-label-item"},"Header")),p.a.createElement(d.a.Option,{value:"footer",label:"Footer"},p.a.createElement("div",{className:"demo-option-label-item"},"Footer")))),p.a.createElement(u.a.Item,{label:"Custom HTML"},p.a.createElement(i.a,{checked:Q,onChange:function(e){return V(e)}})),!Q&&p.a.createElement(u.a.Item,{label:"Content"},p.a.createElement(j.a,{theme:"snow",value:R,modules:P,placeholder:"Content goes here...",onChange:C})),Q&&p.a.createElement(u.a.Item,{label:"Custom HTML"},p.a.createElement(a,{defaultValue:w,onChange:function(e){return x(e.target.value)},placeholder:"Paste your HTML Code Here..."})),p.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},p.a.createElement(u.a.Item,null,p.a.createElement(A.a,{loading:q,size:"default",htmlType:"submit",type:"primary",raised:!0},q?"Processing":"Save"),p.a.createElement(_.b,{to:"/admin/email/header-footer/list"},p.a.createElement(A.a,{style:{marginLeft:10},type:"light",size:"default"},"Cancel"))))))))))}}}]);
"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[355],{355:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var t,a,i,o,s,l,d,c,p,u,x,m,h=r(5705),f=r(6727),b=r(168),j=r(5867),g=r(828),Z=(0,j.ZP)(h.l0)(t||(t=(0,b.Z)(["\n  padding: 18px 12px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n"]))),v=j.ZP.div(a||(a=(0,b.Z)(["\n  position: relative;\n"]))),P=(0,j.ZP)(h.gN)(i||(i=(0,b.Z)(["\n  width: 250px;\n  padding: 4px 8px 4px 28px;\n  border: 2px solid #000000;\n  border-radius: 8px;\n  margin-top: 4px;\n"]))),y=(0,j.ZP)(g.Bmn)(o||(o=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  fill: #757575;\n"]))),w=(0,j.ZP)(g.MdO)(s||(s=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  fill: #757575;\n"]))),k=j.ZP.button(l||(l=(0,b.Z)(["\n  width: 250px;\n  color: #ffffff;\n  background-color: #ea8a2a;\n  border: transparent;\n  border-radius: 8px;\n  padding: 4px 8px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"]))),C=j.ZP.p(d||(d=(0,b.Z)(["\n  color: red;\n"]))),F=r(9434),_=r(1761),N=r(3634),I=r(2791),A=r(184),S={name:"",number:""},Y=function(n){var e=n.name;return(0,A.jsx)(h.Bc,{name:e,render:function(n){return(0,A.jsx)(C,{children:n})}})},q=(0,f.Ry)().shape({name:(0,f.Z_)().min(5).max(50).required(),number:(0,f.Z_)().matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,"does not match the required format").required()}),z=function(n){n.onSubmit;var e=(0,I.useId)(),r=(0,I.useId)(),t=(0,F.v9)(_.Af),a=(0,F.I0)();return(0,A.jsx)(h.J9,{initialValues:S,validationSchema:q,onSubmit:function(n,e){var r=n.name,i=n.number,o=e.resetForm,s=t.some((function(n){return n.name.trim().toLowerCase()===r.trim().toLowerCase()}));if(s)console.log("".concat(r," is already in contacts"));else{var l={name:r.trim(),number:i};a((0,N.uK)(l)),o()}},children:function(n){var t=n.isSubmitting;return(0,A.jsxs)(Z,{autoComplete:"off",children:[(0,A.jsxs)("div",{children:[(0,A.jsx)("label",{htmlFor:e,children:"Name"}),(0,A.jsxs)(v,{children:[(0,A.jsx)(P,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Name",id:e}),(0,A.jsx)(y,{})]}),(0,A.jsx)(Y,{name:"name"})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)("label",{htmlFor:r,children:"Number"}),(0,A.jsxs)(v,{children:[(0,A.jsx)(P,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Phone number",id:r}),(0,A.jsx)(w,{})]}),(0,A.jsx)(Y,{name:"number"})]}),(0,A.jsx)(k,{type:"submit",disabled:t,children:"Add contact"})]})}})},B=j.ZP.ul(c||(c=(0,b.Z)(["\n  padding-left: 24px;\n"]))),O=j.ZP.li(p||(p=(0,b.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n\n  &:not(:last-child) {\n    margin-bottom: 12px;\n  }\n"]))),R=j.ZP.p(u||(u=(0,b.Z)(["\n  font-weight: 700;\n\n  & span {\n    font-weight: 400;\n  }\n"]))),L=j.ZP.button(x||(x=(0,b.Z)(["\n  border: 1px solid #000000;\n  border-radius: 4px;\n  padding: 4px 8px;\n  cursor: pointer;\n  background-color: #ffffff;\n\n  &:hover,\n  &:focus {\n    color: #ffffff;\n    background-color: #ea8a2a;\n    border-color: #bf6b16;\n  }\n"]))),T=r(5880);function D(n){var e=n.contact,r=e.id,t=e.name,a=e.number,i=(0,F.I0)(),o=(0,F.v9)(_.NH);return(0,A.jsxs)(O,{children:[(0,A.jsxs)(R,{children:[t,": ",(0,A.jsx)("span",{children:a})]}),(0,A.jsx)(L,{type:"button","data-id":r,onClick:function(){return i((0,N.GK)(r))},disabled:o,children:(0,A.jsx)(T.Fuw,{size:20,color:"red"})})]})}function E(){var n=(0,F.v9)(_.Af),e=(0,F.v9)(_.DI);return n.length?e.length?(0,A.jsx)(B,{children:e.map((function(n){return(0,A.jsx)(D,{contact:n},n.id)}))}):null:(0,A.jsx)("p",{children:"The Phonebook is empty!"})}var H,J,K,M,G,V=j.ZP.div(m||(m=(0,b.Z)(["\n  font-size: 16px;\n  color: red;\n  text-align: center;\n  padding: 24px;\n"]))),$=function(){return(0,A.jsx)(V,{children:(0,A.jsx)("p",{children:"OOPS! There was an ERROR!"})})},Q=j.ZP.div(H||(H=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),U=j.ZP.label(J||(J=(0,b.Z)(["\n  text-align: left;\n  margin-bottom: 10px;\n"]))),W=j.ZP.div(K||(K=(0,b.Z)(["\n  position: relative;\n  margin-bottom: 24px;\n"]))),X=j.ZP.input(M||(M=(0,b.Z)(["\n  width: 250px;\n  padding: 4px 8px 4px 28px;\n  border: 2px solid #000000;\n  border-radius: 8px;\n"]))),nn=(0,j.ZP)(g.Yfv)(G||(G=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 8px;\n  transform: translateY(-50%);\n  fill: #757575;\n"]))),en=r(1634);function rn(){var n=(0,F.v9)(en.AD),e=(0,F.I0)(),r=(0,I.useId)();return(0,A.jsxs)(Q,{children:[(0,A.jsx)(U,{htmlFor:r,children:"Find contacts by name"}),(0,A.jsxs)(W,{children:[(0,A.jsx)(X,{type:"text",placeholder:"Name",value:n,onChange:function(n){return e((0,en.zp)(n.currentTarget.value))},id:r}),(0,A.jsx)(nn,{})]})]})}var tn=r(3430),an=function(){return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(tn.g4,{height:"50",width:"50",radius:"9",color:"#3F51B5",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"",visible:!0})})},on=r(1888);function sn(){var n=(0,F.I0)(),e=(0,F.v9)(_.NH),r=(0,F.v9)(_.ad);return(0,I.useEffect)((function(){n((0,N.yF)())}),[n]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(on.ql,{children:(0,A.jsx)("title",{children:"Your contacts"})}),(0,A.jsx)("h1",{children:"Phonebook"}),(0,A.jsx)(z,{}),e&&!r&&(0,A.jsx)(an,{}),r&&(0,A.jsx)($,{}),!r&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("h2",{children:"Contacts"}),(0,A.jsx)(rn,{}),(0,A.jsx)(E,{})]})]})}}}]);
//# sourceMappingURL=355.708db7c7.chunk.js.map
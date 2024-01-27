import{j as c,a as e,B as i}from"./index-a2e53255.js";const r=({type:n,label:a,inputProps:s,onChange:d,value:o})=>c("div",{children:[e("div",{className:"flex flex-col",children:c("label",{className:"mt-2 text-gray text-sm font-light",children:[a," ",e("b",{className:"text-red-400 text-sm",children:"*"})]})}),e("input",{className:"mt-2 py-2 px-3 p-3 w-full font-light text-sm shadow-sm border border-gray-400 focus:border-blue-500 outline-none rounded",type:n,onChange:d,value:o,...s})]}),h=n=>{const{values:a,submit:s,clear:d,handleClear:o,handleSubmit:m,handleChange:l,errors:t}=n;return e("div",{className:"container mx-auto py-5",children:e("form",{onSubmit:m,children:c("div",{className:"bg-white p-5 w-full rounded-lg shadow mx-auto",children:[e(r,{value:a.name,label:"Name",onChange:l,inputProps:{type:"text",name:"name",placeholder:"Enter Name"},autofocus:"autofocus"}),t.name&&e("p",{className:"error text-red-500 text-xs mt-1",children:t.name}),e(r,{value:a.email,label:"Email",name:"email",onChange:l,inputProps:{type:"email",name:"email",placeholder:"Enter Email"}}),t.email&&e("p",{className:"error text-red-500 text-xs mt-1",children:t.email}),e(r,{value:a.contact,label:"Contact",onChange:l,inputProps:{type:"tel",name:"contact",placeholder:"Enter Contact"}}),t.contact&&e("p",{className:"error text-red-500 text-xs mt-1",children:t.contact}),e(r,{value:a.address,label:"Address",onChange:l,inputProps:{type:"text",name:"address",placeholder:"Enter Address"}}),t.address&&e("p",{className:"error text-red-500 text-xs mt-1",children:t.address}),e(i,{isHidden:"",color:"bg-gray",type:"submit",children:s}),e(i,{isHidden:d?"hidden":"",color:"bg-red",onClick:o,type:"button",children:"Clear"})]})})})};export{h as default};

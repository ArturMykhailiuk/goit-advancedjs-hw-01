import"./assets/modulepreload-polyfill-3cfb730f.js";const r=a=>{try{const t=localStorage.getItem(a);return t===null?void 0:JSON.parse(t)}catch(t){console.log(t)}},m=(a,t)=>{try{localStorage.setItem(a,JSON.stringify(t))}catch(o){console.log(o)}};document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".feedback-form"),t=a.querySelector(".email"),o=a.querySelector(".message"),e={email:"",message:""},s=r("feedback-form-state")||{};s.email&&(t.value=s.email,e.email=s.email),s.message&&(o.value=s.message,e.message=s.message),a.addEventListener("input",function(n){const l=n.target;l.classList.contains("email")?e.email=l.value.trim():l.classList.contains("message")&&(e.message=l.value.trim()),m("feedback-form-state",e)}),a.addEventListener("submit",function(n){if(n.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.value="",o.value=""})});
//# sourceMappingURL=commonHelpers2.js.map
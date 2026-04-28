import { c as createComponent } from './astro-component_UQFpZZSd.mjs';
import 'piccolore';
import { j as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from './ssr-function_2sxmDGF6.mjs';
import { $ as $$Layout, C as CDN } from './Layout_CRxC13yl.mjs';
import { useState } from 'react';

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(201,169,110,0.25)",
  color: "#fff",
  padding: "14px 18px",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s ease",
  boxSizing: "border-box"
};
const labelStyle = {
  fontFamily: "'Cinzel', serif",
  fontSize: "10px",
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.5)",
  display: "block",
  marginBottom: "8px"
};
function ContactForm() {
  const [state, setState] = useState("idle");
  const [error, setError] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Emperor Collection",
    message: ""
  });
  const set = (k, v) => setFields((f) => ({ ...f, [k]: v }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) {
      setError("Please complete all required fields.");
      return;
    }
    setState("submitting");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      });
      const data = await res.json();
      if (data.success) {
        setState("success");
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "An error occurred. Please try again.");
    }
  };
  if (state === "success") {
    return /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "60px 0" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px" } }, "Inquiry Received"), /* @__PURE__ */ React.createElement("p", { style: { fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontStyle: "italic", color: "rgba(255,255,255,0.7)" } }, "A Scaldarsi representative will be in contact shortly."));
  }
  return /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Name *"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: fields.name,
      onChange: (e) => set("name", e.target.value),
      placeholder: "Your name",
      style: inputStyle,
      onFocus: (e) => e.target.style.borderColor = "#C9A96E",
      onBlur: (e) => e.target.style.borderColor = "rgba(201,169,110,0.25)"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Email *"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      value: fields.email,
      onChange: (e) => set("email", e.target.value),
      placeholder: "your@email.com",
      style: inputStyle,
      onFocus: (e) => e.target.style.borderColor = "#C9A96E",
      onBlur: (e) => e.target.style.borderColor = "rgba(201,169,110,0.25)"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Phone"), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "tel",
      value: fields.phone,
      onChange: (e) => set("phone", e.target.value),
      placeholder: "+1 000 000 0000",
      style: inputStyle,
      onFocus: (e) => e.target.style.borderColor = "#C9A96E",
      onBlur: (e) => e.target.style.borderColor = "rgba(201,169,110,0.25)"
    }
  )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Interest"), /* @__PURE__ */ React.createElement(
    "select",
    {
      value: fields.interest,
      onChange: (e) => set("interest", e.target.value),
      style: { ...inputStyle, cursor: "pointer" },
      onFocus: (e) => e.target.style.borderColor = "#C9A96E",
      onBlur: (e) => e.target.style.borderColor = "rgba(201,169,110,0.25)"
    },
    /* @__PURE__ */ React.createElement("option", null, "Emperor Collection"),
    /* @__PURE__ */ React.createElement("option", null, "Yachts"),
    /* @__PURE__ */ React.createElement("option", null, "Private Jets"),
    /* @__PURE__ */ React.createElement("option", null, "General Inquiry")
  )), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1 / -1" } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Message *"), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      value: fields.message,
      onChange: (e) => set("message", e.target.value),
      placeholder: "Tell us about your inquiry...",
      rows: 5,
      style: { ...inputStyle, resize: "vertical", lineHeight: "1.6" },
      onFocus: (e) => e.target.style.borderColor = "#C9A96E",
      onBlur: (e) => e.target.style.borderColor = "rgba(201,169,110,0.25)"
    }
  )), error && /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1 / -1", color: "#ff6b6b", fontFamily: "'DM Sans', sans-serif", fontSize: "13px" } }, error), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1 / -1" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleSubmit,
      disabled: state === "submitting",
      className: "btn-gold",
      style: { opacity: state === "submitting" ? 0.6 : 1, cursor: state === "submitting" ? "not-allowed" : "pointer" }
    },
    state === "submitting" ? "Sending..." : "Submit Inquiry"
  )));
}

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us", "description": "Scaldarsi Motors — an international Manufacturing and Design firm. Montreal & Riyadh. The Philosophy of Perfection.", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section style="min-height:70vh;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;text-align:center;padding:120px 40px 80px;" data-astro-cid-kh7btl4r> <img${addAttribute(CDN.frontDark, "src")} alt="" aria-hidden="true" width="1920" height="1080" loading="eager" fetchpriority="high" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.2;" data-astro-cid-kh7btl4r> <div style="position:absolute;inset:0;background:rgba(0,0,0,0.6);" data-astro-cid-kh7btl4r></div> <div style="position:relative;z-index:1;" class="fade-in" data-astro-cid-kh7btl4r> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#C9A96E;margin-bottom:16px;" data-astro-cid-kh7btl4r>Est. 2016</p> <h1 style="font-family:'Cormorant Garamond',serif;font-size:clamp(36px,5vw,72px);font-weight:400;color:#fff;margin-bottom:24px;line-height:1.1;" data-astro-cid-kh7btl4r>The Philosophy<br data-astro-cid-kh7btl4r>of Perfection</h1> <div class="gold-divider" style="margin:0 auto 28px;" data-astro-cid-kh7btl4r></div> <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,0.55);max-width:560px;margin:0 auto;line-height:1.8;" data-astro-cid-kh7btl4r>
Scaldarsi Motors is an international Manufacturing and Design firm. We work on designing cars, private jets and yachts.
</p> </div> </section>  <section style="max-width:1200px;margin:0 auto;padding:100px 40px;display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;" class="heritage-grid" data-astro-cid-kh7btl4r> <div data-astro-cid-kh7btl4r> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#C9A96E;margin-bottom:20px;" data-astro-cid-kh7btl4r>Our Heritage</p> <h2 style="font-family:'Cormorant Garamond',serif;font-size:clamp(28px,3.5vw,48px);font-weight:400;color:#fff;line-height:1.2;margin-bottom:28px;" data-astro-cid-kh7btl4r>Scripting Art<br data-astro-cid-kh7btl4r>Into History</h2> <div class="gold-divider" style="margin:0 0 28px 0;" data-astro-cid-kh7btl4r></div> <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,0.6);line-height:1.9;margin-bottom:20px;" data-astro-cid-kh7btl4r>
The Emperor Series embodies craftsmanship at its finest — a compilation of distinguished, international, master craftsmen. Every curve of the Emperor highlights Scaldarsi's unwavering commitment to product excellence, embodying integrity and evolution.
</p> <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,0.6);line-height:1.9;margin-bottom:20px;" data-astro-cid-kh7btl4r>
Superseding the automotive industry, each Emperor is a masterpiece — the heirloom of the 21st century. The monument to artistry.
</p> <p style="font-family:'Cormorant Garamond',serif;font-size:18px;font-style:italic;color:rgba(255,255,255,0.45);line-height:1.7;" data-astro-cid-kh7btl4r>
"Take the journey with us, and watch as we script art into history."
</p> </div> <div style="position:relative;" data-astro-cid-kh7btl4r> <img${addAttribute(CDN.behind, "src")} alt="Emperor Collection" width="600" height="700" loading="lazy" decoding="async" style="width:100%;height:auto;object-fit:cover;border:1px solid rgba(201,169,110,0.2);" data-astro-cid-kh7btl4r> <div style="position:absolute;bottom:-20px;right:-20px;width:80%;height:80%;border:1px solid rgba(201,169,110,0.15);z-index:-1;" data-astro-cid-kh7btl4r></div> </div> </section>  <section style="background:#1C1C1C;padding:100px 40px;text-align:center;" data-astro-cid-kh7btl4r> <div style="max-width:800px;margin:0 auto;" data-astro-cid-kh7btl4r> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#C9A96E;margin-bottom:32px;" data-astro-cid-kh7btl4r>Philosophy</p> <blockquote style="font-family:'Cormorant Garamond',serif;font-size:clamp(20px,3vw,38px);font-style:italic;color:#fff;line-height:1.5;margin-bottom:32px;" data-astro-cid-kh7btl4r>
"Timeless. The wealth of the centuries and purveyor of civilizations."
</blockquote> <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,0.5);line-height:1.8;" data-astro-cid-kh7btl4r>
Scaldarsi Motors is proud to announce their newest collection, the Emperor. 110 vehicles ranging from some of the world's leading brands. Take the journey with us, and watch as we script art into history.
</p> </div> </section>  <section style="max-width:1200px;margin:0 auto;padding:100px 40px;" data-astro-cid-kh7btl4r> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#C9A96E;margin-bottom:48px;text-align:center;" data-astro-cid-kh7btl4r>Our Locations</p> <div class="locations-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:2px;" data-astro-cid-kh7btl4r> <div style="padding:60px;border:1px solid rgba(201,169,110,0.15);background:rgba(201,169,110,0.02);" data-astro-cid-kh7btl4r> <h3 style="font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:400;color:#fff;margin-bottom:8px;" data-astro-cid-kh7btl4r>Montreal</h3> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#C9A96E;margin-bottom:24px;" data-astro-cid-kh7btl4r>Quebec, Canada</p> <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:8px;" data-astro-cid-kh7btl4r>-1 (613) 371-3400</p> <a href="mailto:info@scaldarsimotors.com" style="font-family:'DM Sans',sans-serif;font-size:14px;color:#C9A96E;text-decoration:none;" data-astro-cid-kh7btl4r>info@scaldarsimotors.com</a> </div> <div style="padding:60px;border:1px solid rgba(201,169,110,0.15);background:rgba(201,169,110,0.02);" data-astro-cid-kh7btl4r> <h3 style="font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:400;color:#fff;margin-bottom:8px;" data-astro-cid-kh7btl4r>Riyadh</h3> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#C9A96E;margin-bottom:24px;" data-astro-cid-kh7btl4r>Saudi Arabia</p> <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:rgba(255,255,255,0.5);margin-bottom:8px;" data-astro-cid-kh7btl4r>+966 58 333 2873</p> <a href="mailto:info@scaldarsimotors.com" style="font-family:'DM Sans',sans-serif;font-size:14px;color:#C9A96E;text-decoration:none;" data-astro-cid-kh7btl4r>info@scaldarsimotors.com</a> </div> </div> </section>  <section id="contact" style="max-width:900px;margin:0 auto;padding:0 40px 120px;" data-astro-cid-kh7btl4r> <div style="text-align:center;margin-bottom:60px;" data-astro-cid-kh7btl4r> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#C9A96E;margin-bottom:16px;" data-astro-cid-kh7btl4r>Begin Your Inquiry</p> <h2 style="font-family:'Cormorant Garamond',serif;font-size:clamp(28px,3.5vw,48px);font-weight:400;color:#fff;" data-astro-cid-kh7btl4r>Enter the World of Scaldarsi</h2> </div> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/rohit/Downloads/sites/scaldarsi-motors/src/components/ContactForm.tsx", "client:component-export": "default", "data-astro-cid-kh7btl4r": true })} </section> ` })}`;
}, "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/about.astro", void 0);

const $$file = "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent } from './astro-component_UQFpZZSd.mjs';
import 'piccolore';
import { j as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from './ssr-function_2sxmDGF6.mjs';
import { $ as $$Layout, r as renderScript, C as CDN } from './Layout_CRxC13yl.mjs';
import { $ as $$VehicleCard } from './VehicleCard_D9vi6v_i.mjs';
import { g as getCollection } from './_astro_content_C2NgXo2f.mjs';

const $$Emperor = createComponent(async ($$result, $$props, $$slots) => {
  const vehicles = (await getCollection("vehicles")).sort((a, b) => a.data.order - b.data.order);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Emperor Collection", "description": "110 vehicles. Each one a masterpiece. The Emperor Collection by Scaldarsi Motors — the heirloom of the 21st century.", "data-astro-cid-hkugzh5n": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section style="min-height:60vh;display:flex;align-items:flex-end;justify-content:flex-start;position:relative;overflow:hidden;padding:80px 40px;" data-astro-cid-hkugzh5n> <img${addAttribute(CDN.sideProfile, "src")} alt="" aria-hidden="true" width="1920" height="1080" loading="eager" fetchpriority="high" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.3;" data-astro-cid-hkugzh5n> <div style="position:absolute;inset:0;background:linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%);" data-astro-cid-hkugzh5n></div> <div style="position:relative;z-index:1;max-width:700px;" class="fade-in" data-astro-cid-hkugzh5n> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#C9A96E;margin-bottom:16px;" data-astro-cid-hkugzh5n>Scaldarsi Motors</p> <h1 style="font-family:'Cormorant Garamond',serif;font-size:clamp(36px,5vw,72px);font-weight:400;color:#fff;line-height:1.1;margin-bottom:20px;" data-astro-cid-hkugzh5n>The Emperor<br data-astro-cid-hkugzh5n>Collection</h1> <div class="gold-divider" style="margin:0 0 24px 0;" data-astro-cid-hkugzh5n></div> <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,0.55);line-height:1.7;max-width:480px;" data-astro-cid-hkugzh5n>110 vehicles. Each one a chapter. Each one a masterpiece. The heirloom of the 21st century. The monument to artistry.</p> </div> </section>  <div style="border-top:1px solid rgba(201,169,110,0.15);border-bottom:1px solid rgba(201,169,110,0.15);padding:20px 40px;display:flex;gap:12px;flex-wrap:wrap;align-items:center;" data-astro-cid-hkugzh5n> <span style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-right:8px;" data-astro-cid-hkugzh5n>Filter:</span> ${["All", "Matte", "Gloss", "Metallic", "Raw"].map((f) => renderTemplate`<button${addAttribute(f, "data-filter")}${addAttribute(`filter-btn ${f === "All" ? "active" : ""}`, "class")} style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.12em;text-transform:uppercase;border:1px solid rgba(201,169,110,0.25);background:transparent;color:rgba(255,255,255,0.5);padding:8px 18px;cursor:pointer;transition:all 0.2s ease;" data-astro-cid-hkugzh5n> ${f} </button>`)} </div>  <div id="vehicles-grid" style="max-width:1400px;margin:0 auto;padding:60px 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:28px;" data-astro-cid-hkugzh5n> ${vehicles.map((v) => renderTemplate`<div${addAttribute(v.data.finish, "data-finish")} class="vehicle-item" data-astro-cid-hkugzh5n> ${renderComponent($$result2, "VehicleCard", $$VehicleCard, { "title": v.data.title, "tagline": v.data.tagline, "image": v.data.image, "finish": v.data.finish, "specification": v.data.specification, "priceDisplay": v.data.priceDisplay, "slug": v.slug, "featured": v.data.featured, "data-astro-cid-hkugzh5n": true })} </div>`)} </div> ` })}  ${renderScript($$result, "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/emperor.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/emperor.astro", void 0);

const $$file = "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/emperor.astro";
const $$url = "/emperor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Emperor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

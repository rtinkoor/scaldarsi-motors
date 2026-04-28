import { c as createComponent } from './astro-component_UQFpZZSd.mjs';
import 'piccolore';
import { j as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from './ssr-function_2sxmDGF6.mjs';
import { $ as $$Layout, C as CDN } from './Layout_CRxC13yl.mjs';
import { $ as $$AssetCard } from './AssetCard_Cls1mnga.mjs';
import { g as getCollection } from './_astro_content_C2NgXo2f.mjs';

const $$Jets = createComponent(async ($$result, $$props, $$slots) => {
  const jets = await getCollection("jets");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Private Jets", "description": "Private aviation, redefined. Scaldarsi's airborne fleet — the Philosophy of Perfection above the clouds.", "data-astro-cid-cj6lafdc": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section style="min-height:60vh;display:flex;align-items:flex-end;padding:80px 40px;position:relative;overflow:hidden;" data-astro-cid-cj6lafdc> <img${addAttribute(CDN.silhouette, "src")} alt="" aria-hidden="true" width="1920" height="1080" loading="eager" fetchpriority="high" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.25;" data-astro-cid-cj6lafdc> <div style="position:absolute;inset:0;background:linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%);" data-astro-cid-cj6lafdc></div> <div style="position:relative;z-index:1;" class="fade-in" data-astro-cid-cj6lafdc> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#C9A96E;margin-bottom:16px;" data-astro-cid-cj6lafdc>Private Aviation</p> <h1 style="font-family:'Cormorant Garamond',serif;font-size:clamp(36px,5vw,72px);font-weight:400;color:#fff;margin-bottom:20px;" data-astro-cid-cj6lafdc>Private Jets</h1> <div class="gold-divider" style="margin:0 0 24px 0;" data-astro-cid-cj6lafdc></div> <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,0.55);max-width:440px;line-height:1.7;" data-astro-cid-cj6lafdc>The sky, privatised. An automotive heir translated to aviation — craftsmanship at its finest, above the clouds.</p> </div> </section>  <div class="jets-grid" style="max-width:1400px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:repeat(2,1fr);gap:28px;" data-astro-cid-cj6lafdc> ${jets.map((j) => renderTemplate`${renderComponent($$result2, "AssetCard", $$AssetCard, { "title": j.data.title, "tagline": j.data.tagline, "image": j.data.image, "priceDisplay": j.data.priceDisplay, "specs": { "Range": j.data.specs.range, "Passengers": String(j.data.specs.passengers), "Speed": j.data.specs.speed, "Ceiling": j.data.specs.ceiling }, "slug": j.slug, "type": "jets", "featured": j.data.featured, "data-astro-cid-cj6lafdc": true })}`)} </div> ` })}`;
}, "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/jets.astro", void 0);

const $$file = "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/jets.astro";
const $$url = "/jets";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Jets,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

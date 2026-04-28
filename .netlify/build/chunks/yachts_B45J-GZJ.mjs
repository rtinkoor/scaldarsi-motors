import { c as createComponent } from './astro-component_UQFpZZSd.mjs';
import 'piccolore';
import { j as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from './ssr-function_2sxmDGF6.mjs';
import { $ as $$Layout, C as CDN } from './Layout_CRxC13yl.mjs';
import { $ as $$AssetCard } from './AssetCard_Cls1mnga.mjs';
import { g as getCollection } from './_astro_content_C2NgXo2f.mjs';

const $$Yachts = createComponent(async ($$result, $$props, $$slots) => {
  const yachts = await getCollection("yachts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Scaldarsi Yachts", "description": "Where ocean meets opulence. Scaldarsi's curated maritime collection — the Philosophy of Perfection at sea.", "data-astro-cid-p6uma4q3": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section style="min-height:60vh;display:flex;align-items:flex-end;padding:80px 40px;position:relative;overflow:hidden;" data-astro-cid-p6uma4q3> <img${addAttribute(CDN.sideLook, "src")} alt="" aria-hidden="true" width="1920" height="1080" loading="eager" fetchpriority="high" decoding="async" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0.25;" data-astro-cid-p6uma4q3> <div style="position:absolute;inset:0;background:linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 100%);" data-astro-cid-p6uma4q3></div> <div style="position:relative;z-index:1;" class="fade-in" data-astro-cid-p6uma4q3> <p style="font-family:'Cinzel',serif;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#C9A96E;margin-bottom:16px;" data-astro-cid-p6uma4q3>Maritime Excellence</p> <h1 style="font-family:'Cormorant Garamond',serif;font-size:clamp(36px,5vw,72px);font-weight:400;color:#fff;margin-bottom:20px;" data-astro-cid-p6uma4q3>Scaldarsi Yachts</h1> <div class="gold-divider" style="margin:0 0 24px 0;" data-astro-cid-p6uma4q3></div> <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,0.55);max-width:440px;line-height:1.7;" data-astro-cid-p6uma4q3>Where ocean meets opulence. The Philosophy of Perfection, unbound by coastline.</p> </div> </section>  <div class="yacht-grid" style="max-width:1400px;margin:0 auto;padding:80px 40px;display:grid;grid-template-columns:repeat(2,1fr);gap:28px;" data-astro-cid-p6uma4q3> ${yachts.map((y) => renderTemplate`${renderComponent($$result2, "AssetCard", $$AssetCard, { "title": y.data.title, "tagline": y.data.tagline, "image": y.data.image, "priceDisplay": y.data.priceDisplay, "specs": { "Length": y.data.length, "Guests": String(y.data.specs.guests), "Range": y.data.specs.range, "Speed": y.data.specs.speed }, "slug": y.slug, "type": "yachts", "featured": y.data.featured, "data-astro-cid-p6uma4q3": true })}`)} </div> ` })}`;
}, "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/yachts.astro", void 0);

const $$file = "/Users/rohit/Downloads/sites/scaldarsi-motors/src/pages/yachts.astro";
const $$url = "/yachts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Yachts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

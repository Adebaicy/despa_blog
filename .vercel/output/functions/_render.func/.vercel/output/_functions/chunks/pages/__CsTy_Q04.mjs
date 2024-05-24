/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_DxvcdLM_.mjs';
import 'kleur/colors';
import 'react';
import { jsxs, jsx } from 'preact/jsx-runtime';
import 'clsx';
/* empty css                           */

function Layout({
  children
}) {
  return jsxs("div", {
    children: [jsx("div", {
      children: 'This is the page housing all "scholarships" related content'
    }), jsx("br", {}), children]
  });
}

const $$Astro$2 = createAstro("https://example.com");
const $$Paginator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Paginator;
  const { page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pagination" data-astro-cid-plu6zll4> ${page.url.prev && renderTemplate`<a${addAttribute(page.url.prev, "href")} title="Go to Previous" data-astro-cid-plu6zll4>&larr; Prev</a>`} ${page.url.next && renderTemplate`<a${addAttribute(page.url.next, "href")} title="Go to Next" data-astro-cid-plu6zll4>Next &rarr;</a>`} </div> `;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/components/Paginator.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const Astro$1 = $$Astro$1;
async function getStaticPaths$1({ paginate }) {
  const allPosts = await Astro$1.glob(/* #__PURE__ */ Object.assign({}), () => "../../pages/posts/*.md");
  return paginate(allPosts, { pageSize: 1 });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "NewBaseLayout", Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map((post) => renderTemplate`<li> <a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a> </li>`)} </ul> ${renderComponent($$result2, "Paginator", $$Paginator, { "page": page })} ` })}`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/scholarship/[...page].astro", void 0);

const $$file$1 = "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/scholarship/[...page].astro";
const $$url$1 = "/scholarship/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const Astro = $$Astro;
async function getStaticPaths({ paginate }) {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../../pages/posts/*.md");
  return paginate(allPosts, { pageSize: 1 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "NewBaseLayout", Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map((post) => renderTemplate`<li><a${addAttribute(post.url, "href")}>${post.frontmatter.title}</a></li>`)} </ul> ${renderComponent($$result2, "Paginator", $$Paginator, { "page": page })} ` })} <!-- <NewBaseLayout>
  <div>
    
    <ul>
    {allPosts.data.map((post) => (
      <li><a href={post.url}>{post.frontmatter.title}/a></li>
    ))}
    </ul>
    <Paginator page={page} /> 
  </div>
</NewBaseLayout> -->`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/scholarship copy/[...page].astro", void 0);

const $$file = "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/scholarship copy/[...page].astro";
const $$url = "/scholarship copy/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____page_$1 as _, ____page_ as a };

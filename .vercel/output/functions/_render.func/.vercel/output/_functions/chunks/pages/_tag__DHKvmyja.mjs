/* empty css                          */
import { d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, c as createAstro, k as renderHead, f as renderComponent, l as renderSlot } from '../astro_DxvcdLM_.mjs';
import 'kleur/colors';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const platform = "github";
  const username = "withastro";
  return renderTemplate`${maybeRenderHead()}<footer> <p>Learn more about my projects on <a${addAttribute(`https://www.${platform}.com/${username}`, "href")}>${platform}</a>!</p> </footer>`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({}), () => "../posts/*.md");
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  return uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Posts tagged with ${tag}</p> <ul> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, _tag_ as _ };

/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DxvcdLM_.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './_tag__DHKvmyja.mjs';
import 'react';
import { jsxs, jsx } from 'preact/jsx-runtime';
import { L as Layout$3, a as Layout$4 } from './edu1_RrMy8qyd.mjs';
import { g as getCollection } from './_slug__DoABFLbT.mjs';

const $$Astro = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index$1;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${tags.map((tag) => renderTemplate`<p><a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a></p>`)} </div> ` })}`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/tags/index.astro", void 0);

const $$file$1 = "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function Layout$2({
  children
}) {
  return jsxs("div", {
    children: [jsx("div", {
      class: "font-bold text-2xl py-10",
      children: "Scholarship"
    }), jsx("br", {}), children]
  });
}

const cry = new Proxy({"src":"/_astro/cry.CO3ICFCd.png","width":190,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Adebaicy/Desktop/despa/blog/src/components/img/cry.png";
							}
							
							return target[name];
						}
					});

const health = new Proxy({"src":"/_astro/health.C8R1F3cB.png","width":190,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Adebaicy/Desktop/despa/blog/src/components/img/health.png";
							}
							
							return target[name];
						}
					});

const job = new Proxy({"src":"/_astro/job.ypGbDBl7.png","width":190,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Adebaicy/Desktop/despa/blog/src/components/img/job.png";
							}
							
							return target[name];
						}
					});

const test = new Proxy({"src":"/_astro/test.izXjeHCd.png","width":190,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Adebaicy/Desktop/despa/blog/src/components/img/test.png";
							}
							
							return target[name];
						}
					});

const img = new Proxy({"src":"/_astro/blog.B0oK39PI.png","width":520,"height":368,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Adebaicy/Desktop/despa/blog/src/components/img/blog.png";
							}
							
							return target[name];
						}
					});

function Layout$1() {
  return jsxs("div", {
    className: "hidden md:block",
    children: [jsxs("div", {
      className: "grid py-4 gap-4 grid-cols-3",
      children: [jsx("img", {
        src: cry.src,
        alt: "m"
      }), jsx("img", {
        src: health.src,
        alt: "m"
      }), jsx("img", {
        src: job.src,
        alt: "m"
      })]
    }), jsxs("div", {
      className: "grid gap-4 grid-cols-3",
      children: [jsx("img", {
        src: test.src,
        alt: "m"
      }), jsx("img", {
        src: job.src,
        alt: "m"
      }), jsx("img", {
        src: test.src,
        alt: "m"
      })]
    }), jsxs("div", {
      children: [jsx("p", {
        className: "pt-8",
        children: "04 Academic"
      }), jsx("p", {
        className: "pt-8",
        children: "05 Entertainment"
      }), jsx("p", {
        className: "pt-8",
        children: "06 Scholarship"
      })]
    })]
  });
}

function Layout() {
  return jsx("div", {
    className: "md:relative md:h-full",
    children: jsx("img", {
      className: "md:bottom-0 md:absolute",
      src: img.src,
      alt: "m"
    })
  });
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts", ({ data }) => {
    return data.isDraft !== true;
  })).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${maybeRenderHead()}<body class="px-5 md:px-20"> <div class="grid md:grid-cols-2"> <div> <div class="text-left grid justify-items-end md:hidden"> <p class="w-32 pt-8">04 Academic</p> <p class="pt-8 w-32">05 Entertainment</p> <p class="pt-8 w-32">06 Scholarship</p> <p class="pt-8 w-32">04 Academic</p> <p class="pt-8 w-32">05 Entertainment</p> <p class="pt-8 w-32">06 Scholarship </p> </div> ${renderComponent($$result, "Img", Layout, {})} <!-- <span class="text-4xl">despa</span>
      <br />
      <span class="font-extrabold text-9xl">blog</span> --> </div> <div> ${renderComponent($$result, "Menu", Layout$1, {})} </div> </div> <!-- <ul>
  {
    posts.map((post) => (
      <li>
        <a href={\`/blog/\${post.slug}/\`}>{post.data.title}</a>
        <p>by XYZ,
          published {post.data.pubDate.toDateString()}, 
          tags: <strong>{post.data.tags.join(", ")}</strong>
        </p>
        <p>{post.data.description}</p>
      </li>
    ))
  }


</ul> --> ${renderComponent($$result, "Recent", Layout$2, {}, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 md:grid-cols-4 gap-4"> ${posts.slice(0, 4).map((post) => renderTemplate`<div class="text-justify px-4 py-3 border rounded-2xl shadow-md flex justify-center items-center"> <div> <p> <img${addAttribute(post.data.src, "src")}${addAttribute(post.data.alt, "alt")} class="w-screen rounded-xl"> </p> <a class="font-bold"${addAttribute(`/posts/${post.slug}/`, "href")}> ${post.data.title} </a> <p>${post.data.description}</p> </div> </div>`)} </div> ` })} ${renderComponent($$result, "Subscribe", Layout$3, {})} ${renderComponent($$result, "Footer", Layout$4, {})} <!-- 
<Recent>
</Recent>

<Subscribe client:load />

<Sch />
<Footer /> --> </body>`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };

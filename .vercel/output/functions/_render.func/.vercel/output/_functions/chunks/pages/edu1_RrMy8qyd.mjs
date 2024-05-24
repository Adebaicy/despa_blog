/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, l as renderSlot, f as renderComponent, u as unescapeHTML } from '../astro_DxvcdLM_.mjs';
import 'kleur/colors';
import 'react';
/* empty css                         */
import { jsxs, jsx } from 'preact/jsx-runtime';

function Layout$1() {
  return jsxs("div", {
    className: "grid place-items-center py-16",
    children: [jsx("h1", {
      className: "font-bold",
      children: "Subscribe to our newsletter"
    }), jsx("p", {
      className: "pref1",
      children: "Never miss a beat."
    }), jsx("p", {
      className: "pref1 text-center",
      children: "Get a weekly dose of design inspiration, secrets, tips, trends, and banter in your inbox."
    }), jsxs("div", {
      className: "",
      children: [jsx("form", {
        class: "max-w-sm mx-auto inline-block",
        children: jsxs("div", {
          class: "relative gap-2",
          children: [jsx("div", {
            class: "absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none",
            children: jsxs("svg", {
              class: "w-4 h-4 text-gray-500 dark:text-gray-400",
              "aria-hidden": "true",
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 20 16",
              children: [jsx("path", {
                d: "m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              }), jsx("path", {
                d: "M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              })]
            })
          }), jsx("input", {
            type: "text",
            id: "email-address-icon",
            class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  white:bg-gray-700 white:border-gray-600 white:placeholder-gray-400 white:text-dark white:focus:ring-blue-500 white:focus:border-blue-500",
            placeholder: "email address"
          })]
        })
      }), jsx("button", {
        className: "mx-auto bg-pry hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block md:inline",
        children: "Subscribe"
      })]
    })]
  });
}

function Layout() {
  return jsxs("div", {
    className: "",
    children: [jsxs("div", {
      className: "flow-root",
      children: [jsxs("div", {
        className: "md:float-right",
        children: [jsx("p", {
          className: "pref1",
          children: "Categories"
        }), jsx("p", {
          className: "pref3",
          children: " Job"
        }), jsx("p", {
          className: "pref3",
          children: "Health"
        }), jsx("p", {
          className: "pref3",
          children: "Education"
        })]
      }), jsxs("div", {
        className: "pref1 md:float-left",
        children: [jsx("p", {
          children: "Contact us"
        }), jsx("p", {
          className: "pref text-3xl",
          children: "hello@despablog.com"
        }), jsx("br", {})]
      })]
    }), jsx("div", {
      className: "w-full"
    })]
  });
}

const $$Astro = createAstro("https://example.com");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<body> <div class="flex px-10"> <div class="w-3/4"> <h1>Home/${frontmatter.category}/${frontmatter.title}</h1> <img${addAttribute(frontmatter.image.url, "src")}${addAttribute(frontmatter.image.alt, "alt")}> ${renderSlot($$result, $$slots["default"])} </div> <div class="w-1/4"> <p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p> <p>
Categories
</p><p>
Categories
</p><p>
Categories
</p><p>
Categories
</p><p>
Categories
</p><p>
Categories
</p><p>
Categories
</p><p>
Categories
</p><p>
Categories
</p><p>
Categories
</p><p>
Categories
</p> <p>
Related News
</p> </div> </div> ${renderComponent($$result, "Subscribe", Layout$1, {})} ${renderComponent($$result, "Footer", Layout, {})} </body>`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/layouts/PostLayout.astro", void 0);

const html = "<p>I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy</p>\n<p>I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy</p>\n<p>I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy</p>\n<p>I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy</p>\n<p>I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy</p>\n<p>I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy</p>\n<p>I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy</p>\n<p>I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy</p>";

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"My First edu Blog Post","pubDate":"2022-07-01T00:00:00.000Z","category":"Education","image":{"url":"https://res.cloudinary.com/ddwoaqr1g/image/upload/v1709568038/Frame_1618868367_tw0gl2.png","alt":"The full Astro logo."}};
				const file = "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/education/edu1.md";
				const url = "/education/edu1";
				function rawContent() {
					return "I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\n\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\n\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\n\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\n\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\n\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\n\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\n\r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\nI am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy I am a boy \r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const edu1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { Layout$1 as L, Layout as a, edu1 as e };

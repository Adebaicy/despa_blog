/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, k as renderHead } from '../astro_DxvcdLM_.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Sarah",
    country: "Canada",
    occupation: "Technical Writer",
    hobbies: ["photography", "birdwatching", "baseball"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${pageTitle}</title>${renderHead()}</head> <body> <p>Here are a few facts about me:</p> <ul> <li>My name is ${identity.firstName}.</li> <li>I live in ${identity.country} and I work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p>My skills are:</p> <ul> ${skills.map((skill) => renderTemplate`<li>${skill}</li>`)} </ul> </body></html>`;
}, "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/about.astro", void 0);

const $$file = "C:/Users/Adebaicy/Desktop/despa/blog/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };

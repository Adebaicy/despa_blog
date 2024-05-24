import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./education/edu1.md": () => import('./edu1_RrMy8qyd.mjs').then(n => n.e),"./posts-1/post-1.md": () => import('./post-1_9TRsogLs.mjs').then(n => n.p),"./posts-1/post-2.md": () => import('./post-2_BQ9vx1-A.mjs'),"./posts-1/post-3.md": () => import('./post-3_CdaXluj7.mjs'),"./posts-1/post-4.md": () => import('./post-4_BQhegn0l.mjs')})),
    customData: `<language>en-us</language>`
  });
}

export { GET };

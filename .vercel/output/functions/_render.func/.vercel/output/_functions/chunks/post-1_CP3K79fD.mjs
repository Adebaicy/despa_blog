export { renderers } from '../renderers.mjs';

const page = () => import('./pages/post-1_9TRsogLs.mjs').then(n => n.p);

export { page };

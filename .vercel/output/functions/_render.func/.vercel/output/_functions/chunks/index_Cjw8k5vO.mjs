export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_CXG-ESHS.mjs').then(n => n.i);

export { page };

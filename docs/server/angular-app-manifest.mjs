
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-website"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-website/about"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-website/projects"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-website/services"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-website/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16442, hash: 'a28c5ef0620a0b047b9e48c7781857ae97b106290105e0b046f89c5c14b653ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11678, hash: '5b09c5e74bbf4ddd58744bd0f0cba99eb724c039b9db5d4c91775a4f02d89963', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 60007, hash: '90af71801773976e18d019ec249a590c0946b89c4f82875299707e8553ef8df9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 55153, hash: 'a93a0a79a1237210b5a8fea6a6cda4c721baf27be13e85f2d3ec26e60ce37bca', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 55254, hash: '18742bb4be594b36accdcb1f1d0e94b55a132586bbd2937edc1b8f9f7d6c31cf', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 62223, hash: 'cb429db4d535bcb75f78166466c00bf39f22489ad2850df9d634ce340920f7fd', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'index.html': {size: 189093, hash: '79b13e66150145b844efeb8eca0bb3d0c1bcad5cbb184b52a72b0d4d12673ae2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GBNYC63G.css': {size: 263325, hash: 'B77Df6CFC7U', text: () => import('./assets-chunks/styles-GBNYC63G_css.mjs').then(m => m.default)}
  },
};

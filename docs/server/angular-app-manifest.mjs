
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/myportfolio',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/myportfolio"
  },
  {
    "renderMode": 2,
    "route": "/myportfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/myportfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/myportfolio/services"
  },
  {
    "renderMode": 2,
    "route": "/myportfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 16435, hash: 'f4400141b7615633d2bbe2cca81d7e51b579f987a9c81a72e469ef122588dc1d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11671, hash: '7979d653228fddadd90c1a5221729b36bd2cad2e4eb46c995c286012e6109f47', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 55247, hash: 'ab3e1492bf305a5b69d97a99a8385a2cb04bc05015fa102742e0375c9f24af12', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 60000, hash: '7f88e065bd882d516a4d8020f3fb32e13e0b98a59130b1f6b86de7e8ac5b9e53', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 62216, hash: '8fc999c85cac29cc14bffd0e3775989b388f416ae854673de45a3f3e230f54bc', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 55146, hash: '5ad9f733df51979fa04b87b4b82d77dada4e351abff1e50a690b70ede0c93bbd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 189086, hash: 'ae16ee8fd74c5f0bd6208f1d402330f7aa2ad75d3a8b5e6afbb65e2b5b2d2cbf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-GBNYC63G.css': {size: 263325, hash: 'B77Df6CFC7U', text: () => import('./assets-chunks/styles-GBNYC63G_css.mjs').then(m => m.default)}
  },
};

// export async function configure(aurelia) {
//   aurelia.use
//     .standardConfiguration()
//     .developmentLogging();
//
//   // Uncomment the line below to enable animation.
//   // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
//   // if the css animator is enabled, add swap-order="after" to all router-view elements
//
//   // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
//   // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));
//
//   await aurelia.start();
//   await aurelia.setRoot(PLATFORM.moduleName('app'));
// }

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}

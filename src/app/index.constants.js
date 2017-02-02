(function() {
  'use strict';

  angular
    .module('mangledWords')
    .constant('TIMER', 40)
    .constant('URL', {
        BASE: 'https://mangledwords-e183b.firebaseio.com/',
        PLAYERS: 'players.json',
        WORDS: 'words.json',
        TOKEN: '?auth=eyJhbGciOiJSUzI1NiIsImtpZCI6ImU2M2JhZmJiOTMwMWQ3ODA1ZWNmNzNjMDM0ZDU5OGRhZjY2OGVlYmUifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWFuZ2xlZHdvcmRzLWUxODNiIiwicHJvdmlkZXJfaWQiOiJhbm9ueW1vdXMiLCJhdWQiOiJtYW5nbGVkd29yZHMtZTE4M2IiLCJhdXRoX3RpbWUiOjE0ODYwNDgwMjEsInVzZXJfaWQiOiJXOHFZREY3N3RpWUh3aWRJMUpBNEtBTmxtelMyIiwic3ViIjoiVzhxWURGNzd0aVlId2lkSTFKQTRLQU5sbXpTMiIsImlhdCI6MTQ4NjA0ODQ0NywiZXhwIjoxNDg2MDUyMDQ3LCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7fSwic2lnbl9pbl9wcm92aWRlciI6ImFub255bW91cyJ9fQ.ncVCF4Q1TwhWUCj-IYc3exnIWeYDNAyB1DJQQ96v__RampoEwm2-QSkrDRsh_wWjDlhGGpQLNfMYqfHd5jgLMoDF10Up-rg6O8_HyLavcTo_e54PLqM8qCJXrJEWEi8VhzML_fj6JVnpm1VeYaPmmLj7wRjfo5li_CIfcZ7wELl4gfK5tgOxgJ4tHxgQCRS2Tb_Rc810IJT-LCZi9KzkBEghbekHDITanPdYb-pwYlsHt8-kE71tkNoT28N2pHQVr-hlSwq0_pm7V7kCfilDf07z72cYVnCXJC2OybACoyYk_bE2zgVQGl25WhzXbdIawgIJy7_yOsERDnvwbKy9PQ'
    })
    .constant('_', window._)
    .constant('moment', moment);

})();

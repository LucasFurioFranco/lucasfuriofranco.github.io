(function() {
  //GTM Call
  var gtag_gtm;
  gtag_gtm = document.createElement("script");
  gtag_gtm.setAttribute("src", "https://www.googletagmanager.com/gtm.js?id=GTM-NRM8NXCG");
  gtag_gtm.setAttribute("async", true); //Yep, I know it's not necessary as I'm using JS to load it, but makes me happier to add it here!
  document.body.appendChild(gtag_gtm);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};
  window.gtag('js', new Date());
})();

/* analytics.js — replace GA_MEASUREMENT_ID with your real GA4 ID */
(function(){
  const GA_ID = 'G-1SG6Z7LKPG';
  if (!GA_ID || GA_ID === 'G-1SG6Z7LKPG') return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_ID);
  window.gtag = gtag;
})();

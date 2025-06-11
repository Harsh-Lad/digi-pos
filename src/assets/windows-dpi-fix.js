(function() {
  // Early DPI detection and fixing
  function fixWindowsDpiScaling() {
    var isWindows = navigator.userAgent.indexOf('Windows') !== -1;
    var dpr = window.devicePixelRatio || 1;
    
    // If we're on Windows with scaling (typically 125% = 1.25)
    if (isWindows && dpr > 1.1 && dpr < 1.4) {
      console.log('Windows scaling detected: ' + dpr);
      
      // Add a class to the HTML element
      document.documentElement.classList.add('windows-scaled');
      
      // Apply a CSS fix directly to counteract the Windows scaling
      var style = document.createElement('style');
      style.textContent = `
        @media screen and (-webkit-min-device-pixel-ratio: 1.1) and (-webkit-min-device-pixel-ratio: 1.4),
               screen and (min-resolution: 110dpi) and (max-resolution: 140dpi) {
          html {
            zoom: ${1/dpr};
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  // Run immediately
  fixWindowsDpiScaling();
})();

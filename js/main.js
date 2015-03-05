var observer = new FontFaceObserver('Source Sans Pro', {});

observer.check().then(function () {
  document.body.className = "fonts-loaded";
  console.log("Font is available");
}, function () {
  console.log('Font is not available');
});

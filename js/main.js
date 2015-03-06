var observer = new FontFaceObserver('Source Sans Pro', {});
var body = document.getElementsByTagName("body")[0];

observer.check().then(function () {
  body.className = "fonts-loaded";
});

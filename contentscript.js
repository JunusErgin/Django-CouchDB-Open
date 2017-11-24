var s = document.createElement('script');

var views = chrome.extension.getViews({
  type: "default_popup"
});

for (var i = 0; i < views.length; i++) {
  (document.head || document.documentElement).appendChild(views[i].document.getElementById('couchdb-server'));
}


console.log('views', views);

s.src = chrome.extension.getURL('script.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function () {
  s.parentNode.removeChild(s);
};
if (document.title.indexOf('Django site admin') > -1) {
  var couchdb_base = 'http://localhost:5984';
  var couchdb_database = 'tc_test';
  files = document.getElementsByClassName('file-upload');
  for (var i = 0; i < files.length; i++) {
    var children = files[i].children;
    for (var j = 0; j < children.length; j++) {
      if (children[j].tagName.toLowerCase() === 'a') {
        try {
          var href = children[j].href.split(couchdb_database)[1];
          children[j].href = couchdb_base + '/' + couchdb_database + '/' + href;
          children[j].target = '_blank';
        } catch (e) {
        }
      }
    }
  }
}
function changeCouchDBURL() {
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

function addNextButton() {
  try {
    var newURL = document.location.href.split('/change/')[0].split('/');
    var id = newURL.pop();
    var objectTools = document.getElementsByClassName('object-tools')[0];
    var aNext = document.createElement('a');
    aNext.className = 'permissionslink';
    aNext.href = newURL.join('/') + '/' + (+id + 1) + '/change/';
    aNext.innerText = 'Next';
    var liNext = document.createElement('li');
    liNext.appendChild(aNext);


    var aPrev = document.createElement('a');
    aPrev.className = 'permissionslink';
    aPrev.href = newURL.join('/') + '/' + (+id - 1) + '/change/';
    aPrev.innerText = 'Previous';
    var liPrev = document.createElement('li');
    liPrev.appendChild(aPrev);


    objectTools.appendChild(liPrev);
    objectTools.appendChild(liNext);
  } catch (e) {

  }

}

if (document.title.indexOf('Django site admin') > -1) {
  changeCouchDBURL();
  addNextButton();
}
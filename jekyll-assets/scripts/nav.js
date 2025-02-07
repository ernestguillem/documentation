function addClassJS(element, myclass) {
  var classes = element.className.split(" ");
  console.log(classes);
  var i = classes.indexOf(myclass);
  if (i < 0) {
    classes.push(myclass);
  }
  element.className = classes.join(" ");
}

function removeClassJS(element, myclass) {
  var classes = element.className.split(" ");
  console.log(classes);
  var i = classes.indexOf(myclass);
  if (i >= 0) {
    classes.splice(i, 1);
  }
  element.className = classes.join(" ");
}

function expandAndCollapse(e) {
  var toExpand = e.nextElementSibling;
  if (toExpand) {
    var classes = toExpand.className.split(" ");
    var currentState = classes.indexOf("hidden");

    var expanded = document.querySelectorAll('div.itemcontents:not(.hidden)');
    for (var i=0; i < expanded.length; i++) {
      var element = expanded[i];
      addClassJS(element, "hidden");
    }

    if (currentState > -1) {
      removeClassJS(toExpand, "hidden");
    }
  }
}

function expandAndCollapseMobile(e) {
  var toExpand = e.nextElementSibling;
  var parent = e.parentNode;
  if (toExpand) {
    var classes = toExpand.className.split(" ");
    var currentState = classes.indexOf("hidden");

    if (currentState > -1) {
      removeClassJS(toExpand, "hidden");
      addClassJS(parent, "active");
    } else {
      addClassJS(toExpand, "hidden");
      removeClassJS(parent, "active");
    }
  }
}

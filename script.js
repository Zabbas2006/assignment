function getBoxes() {
  var boxes =  document.querySelectorAll("#boxes div");
  var boxArray = [];

  for (var i = 0; i < boxes.length; i++) {
    boxArray.push(boxes[i]);
  }

  return boxArray;
}


function updateBoxesOrder(boxes) {

  var updatedArray = [];

  for (var i = 0; i < boxes.length; i++) {
    updatedArray.push(boxes[i].outerHTML);
  }

  document.getElementById("boxes").innerHTML = updatedArray.join("");
}


/**
 * Return -1 if a should come before b
 * Return 1 if b should come before a
 */
function boxComparator(a, b) {
  return a.getAttribute("data-sort") - b.getAttribute("data-sort");
}


function sort() {
  var boxes = getBoxes();

  boxes.sort(boxComparator);

  updateBoxesOrder(boxes);
}


function shuffle() {
  var boxes = getBoxes();
  var newBoxes = [];
  var pickElement;

  while (boxes.length > 0) {
    pickElement = Math.floor( Math.random() * boxes.length );
    newBoxes.push(boxes[pickElement]);
    boxes.splice(pickElement, 1);
  }

  updateBoxesOrder(newBoxes);
}
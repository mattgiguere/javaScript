var bottleWeight = 200;
var scale = '3 times smaller';
console.log("Bottle weight is: ", bottleWeight);
console.log("scale is: ", scale);

function contentWeight(bottleWeight, scale) {
  var scalearr = scale.split(" ");
  if (scalearr[2] == "larger") {
    return bottleWeight * scalearr[0] / (scalearr[0] + 1);
  } else {
    return bottleWeight / (parseInt(scalearr[0]) + 1.);
  }
}

console.log("Content weight is: ", contentWeight(bottleWeight, scale));
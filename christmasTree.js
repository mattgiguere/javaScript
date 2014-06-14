function christmasTree(height) { 
  arr = '';
  stars = '*';
  for (i=0; i < height; i++){
  treeSpace = '';
    for (j=0; j < height - i - 1; j++){
      treeSpace += ' ';
    }
    if (stars !== '*'){
      arr += '\n' + treeSpace + stars + treeSpace;
    }
    else {
      arr += treeSpace + stars + treeSpace;
    }
    stars += '**';
  }
  return(arr);
}

testArr = "  *  \n *** \n*****";
console.log(christmasTree(5));
console.log(christmasTree(3) === testArr);
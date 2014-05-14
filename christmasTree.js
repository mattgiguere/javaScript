function christmasTree(height) { 
  arr = '';
  stars = '*';
  for (i=0; i < height; i++){
  treeSpace = '';
    for (j=0; j < height - i; j++){
      treeSpace += ' ';
    }
    arr += treeSpace + stars + treeSpace + '\n';
    stars += '**';
  }
  console.log(arr);
}
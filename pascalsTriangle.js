function pascalsTriangle(nrows) {
    //return a flat array representing the values of Pascal's Triangle
    //to the n-th level.

    //first make the array for the values to return:
    var ptvals = [];

    //the ith variable will loop over the level
    var incr =0;
    for (n=0; n < nrows; n++){
        for (k=0; k <= n; k++){
            ptvals[incr] = factorial(n)/(factorial(k)*factorial(n-k));
            incr++;
        }
    }
    console.log(ptvals);
}

function factorial(m){
    if (m==0 || m==1){
        return 1;
    }
    if (m > 1){
        return m *= factorial(m-1);
    }
}

//returnedval = factorial(2);
//console.log(returnedval);

pascalsTriangle(3);
console.log(factorial(1))
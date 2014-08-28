/* This is the only function that is actually put in for the solution.
The rest of the code is just for testing. */
/*BEGIN SOLUTION*/
var resultArr = [5,5,5];

function tryCode(indications) {
	//console.log("indications in tryCode is: ", indications);
	if (indications != null) {
		for (i=0; i < 3; i++) {
			if (indications[i] == 1) { resultArr[i] += 1;}
			if (indications[i] == -1) { resultArr[i] -= 1;}						
		}
	}
	return resultArr;
}	
/*END SOLUTION */

/*THIS PART GOES IN THE "TEST CASES" Section along
with the code below.*/
function testLoop(actualCode) {
	var indications = null;
	var ntries = 0;
	do {
		var indications = [0,0,0];
		//console.log(indications);
		for (i=0; i < 3; i++) {
			if (actualCode[i] > resultArr[i]) { 
				//console.log("value is greater.");
				indications[i] = 1;
			}
			if (actualCode[i] < resultArr[i]) {
				//console.log("value is lesser.");
				indications[i] = -1;
			}		
			//console.log(i, actualCode[i], resultArr[i], indications[i]);
		}
		//console.log("indications is now: ", indications);
		tryCode(indications);
		//console.log("new resultArr: ", resultArr);
		ntries++;

	} while((actualCode != resultArr) && (ntries < 10));
	return resultArr;
	//console.log("Congratulations! You cracked the code in ", ntries, " attempts!");	
}

/* ***TEST CASES*** */
var code1 = [1,8,7];
var code2 = [5,5,5];
var code3 = [2,9,0];
var code4 = [0,4,9];
var code5 = [8,8,8];

/* My Test Cases */
console.log(testLoop(code1).join() == code1.join());
console.log(testLoop(code2).join() == code2.join());
console.log(testLoop(code3).join() == code3.join());
console.log(testLoop(code4).join() == code4.join());
console.log(testLoop(code5).join() == code5.join());

/* Codewars Style
Test.expect(testLoop(code1).join() == code1.join(), "code1 failed");
Test.expect(testLoop(code2).join() == code2.join(), "code2 failed");
Test.expect(testLoop(code3).join() == code3.join(), "code3 failed");
Test.expect(testLoop(code4).join() == code4.join(), "code4 failed");
Test.expect(testLoop(code5).join() == code5.join(), "code5 failed");
*/
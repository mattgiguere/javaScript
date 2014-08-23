var num = 40;
console.log(prime(num));

console.log(prime(6));
console.log(([2,3,5]));
console.log(prime(6) == ([2,3,5]));
console.log([2,3,5] == [2,3,5]);

function prime(num) {
	var primes = new Array();
	if (num > 1) primes.push(2);
	for(i = 2; i <= num; i++) {
		for(j=Math.ceil(i/2.); j>=2; j--) {
			if (i / j == Math.floor(i/j) ) break;
			if (j == 2) primes.push(i);
		}
	}

	return primes;
}
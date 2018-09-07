
var countAndSay = function(n) {
	let currNum;
    let nextNum;

	if(n == 1)
		return '1';

	for(let i=1; i<n; i++) {

		if(i == 1) {
			currNum = 1;
			nextNum = null;
		} else {
			currNum = nextNum;	
		}

		nextNum = buildNum(currNum);		

	} // end

	return nextNum;
}

function buildNum(input) {
	input = input + '';
	let arr = input.split('');
	let count = 0;
	let buf = [];
	let curr, prev;

	if(input == '1') {
		return '11';
	}

	for(let i=1; i<arr.length; i++) {
		prev = arr[i-1];
		curr = arr[i];
	
		if(prev == curr) {
			count++;
			
		} else {
			count++;
			buf.push(count);
			buf.push(prev);
			count=0;	
		}	

	} // end

	// last
	count++;
	buf.push(count);
	buf.push(curr);	

	let out = buf.join('');	
	return out;
}

let n = 5;
let out = countAndSay(n);
console.log(out);

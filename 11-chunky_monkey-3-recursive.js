// The recursive method

/*chunk_recursive = (arr, chunkSize) => {

	if (!arr) return []

	// first set the terminal condition, at which the recursion will break and finally return
	let firstChunk = arr.slice(0, chunkSize);

	if (!firstChunk.length) {
		return arr;
	} else {
		return [firstChunk].concat(chunk_recursive(arr.slice(chunkSize, arr.length), chunkSize))
	}
}*/


chunk_recursive = (arr, chunkSize) => {

	// First check if there's any need to run this recursion at all
	if (arr.length <= chunkSize) return [arr];

	// first set the terminal condition, at which the recursion will break and finally return
	let firstChunk = arr.slice(0, chunkSize);

	if (!firstChunk.length) {
		return []
	} else {
		return [firstChunk].concat(chunk_recursive(arr.slice(chunkSize, arr.length), chunkSize))
	}
}

console.log(chunk_recursive([1, 2, 3, 4, 5], 2))

/*
Let's take an example to make it more easy to understand
chunk([1, 2, 3, 4], 2);
1st call - chunk([1,2 3,4], 2) = [[1,2]].concat(chunk([3,4], 2));
2nd call - chunk([3, 4], 2) = [[3 ,4]].concat(chunk([], 2));
3rd call - chunk([], 2) = [] //base case
so basically, chunk([1, 2, 3, 4], 2) = [[1,2]].concat([[3 ,4]].concat([])) = [[1,2], [3, 4]]
*/
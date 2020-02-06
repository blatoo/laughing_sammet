/**
 * @param Array<Object> the array with object to be searched, for example [user1, user2, ...],  user = {userId, userName, age}
 * @param key String, the key in the object, for example: userName
 * @param value Object, the value of the key, for example: 'Conny'
 *
 * @returns Array<Object> finded array
 */
export const findInObjectArray = (myArray, key, value) => {
	return myArray.filter(ele => {
		return ele[key] === value;
	});
};

/**
 * @argument myArray Array<Object> [user1, user2, ...], user = {userId, userName, createDate, age}
 * @argument key to compared key in the user object
 * @argument order 'asc', 'desc'
 *
 * @returns Array<String> a sorted array with objects
 */
export const sortMyObjectArray = (myArray, key, order = "asc") => {
	function compareValues(key, order = "asc") {
		return function innerSort(a, b) {
			if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
				// property doesn't exist on either object
				return 0;
			}

			const varA =
				typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
			const varB =
				typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

			let comparison = 0;
			if (varA > varB) {
				comparison = 1;
			} else if (varA < varB) {
				comparison = -1;
			}
			return order === "desc" ? comparison * -1 : comparison;
		};
	}

	myArray.sort(compareValues(key, order));

	return myArray;
};

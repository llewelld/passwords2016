var password = new String(new SPH_HashedPassword(master, domain));

// Returns the PwdHash password
function SPH_HashedPassword(password, realm) {
	var hash = b64_hmac_md5(password, realm);
	var size = password.length + 2;
	var nonalphanumeric = password.match(/\W/) != null;

	return _applyConstraints(hash, size, nonalphanumeric);
}

function _applyConstraints(hash, size, nonalphanumeric) {
	var startingSize = size - 4;  // Leave room for some extra characters
	var result = hash.substring(0, startingSize);
	var extras = hash.substring(startingSize).split('');

	// Add the extra characters
	result += (contains(/[A-Z]/) ? nextExtraChar() : nextBetween('A', 26));
	result += (contains(/[a-z]/) ? nextExtraChar() : nextBetween('a', 26));
	result += (contains(/[0-9]/) ? nextExtraChar() : nextBetween('0', 10));
	result += (contains(/\W/) && nonalphanumeric ? nextExtraChar() : '+');
	while (contains(/\W/) && !nonalphanumeric) {
		result = result.replace(/\W/, nextBetween('A', 26));
	}

	// Rotate the result to make it harder to guess the inserted locations
	result = result.split('');
	rotate(result, nextExtra());
	return result.join('');
}




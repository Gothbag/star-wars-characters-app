export const getIdFromUrl = urlString => {
	const matches = /[0-9]+/.exec(urlString);
	return Array.isArray(matches) && matches.length ? matches[0] : "";
};

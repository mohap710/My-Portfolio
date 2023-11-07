export const getImageUrl = (path) => {
	let url = new URL(`../assets/images/${path}`, import.meta.url).href;
	return url
};
module.exports = {
	"*.js": ["eslint", "jest --findRelatedTests"],
	"**/*.+(js|jsx|json|md)": ["prettier --write", "git add"],
};

module.exports = function slugify(str) {
  return str.toLowerCase().trim().replace(/[\W_]+/g, '-');
}
var PATTERN = /^(.)|\s+(.)/g;

function ucwords(str) {
  return (str + '').replace(PATTERN, function(match) {
      return match.toUpperCase();
    });
}

module.exports = ucwords;

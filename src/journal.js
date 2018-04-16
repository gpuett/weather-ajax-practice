export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function() {
  var output = this.body.split(' ');
  return output.length;
}

Entry.prototype.countVowels = function() {
  var vowels = this.body.match(/[aeiou]/gi);
  return vowels.length;
}

Entry.prototype.countConsonants = function() {
  var consonants = this.body.match(/[^aeiou\W]/gi);
  return consonants.length;
}

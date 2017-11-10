describe('ucwords', function() {
  var ucwords = require('../src/ucwords.js');

  it('Capitalizes the first character of each word in a string', function() {
    expect(ucwords(
      'lorem ipsum\rdolor\nsit\r\namet,\tconsectetur\fadipiscing\velit'
    )).toBe(
      'Lorem Ipsum\rDolor\nSit\r\nAmet,\tConsectetur\fAdipiscing\vElit'
    );
  });
});

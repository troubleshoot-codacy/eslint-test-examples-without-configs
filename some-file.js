var doubleQuotedString = "hello";

var singleQuotedString = 'hello';

var singleQuotedString2 = 'hello';

var doubleQuotedString2 = "hello";

console.log(doubleQuotedString);
console.log(singleQuotedString);
console.log(singleQuotedString2);
console.log(doubleQuotedString2);

var o = {
  set a(value) {
        this.val = value;
  }
};

const regex = /[0-9]/;

const regex2 = /\d/;

var o = {d: 1};
Object.defineProperty(o, 'c', {
  set: function(value) {
       this.val = value;
  },
  get: function() {
    return this.val;
  }
});

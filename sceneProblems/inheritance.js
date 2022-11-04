// 原型链继承
function A() {}
function B() {}

A.prototype = new B();
A.prototype.constructor = A;

// 构造式继承
function A() { B.call(this) }
function B() {}

// 组合式继承
function A() { B.call(this) }
function B() {}

A.prototype = new B();
A.prototype.constructor = A;

// 原型式继承
const a = Object.create(b);

// 寄生式继承
function getInstance(b) {
  b.attr1 = '123'
  return b
}

// 寄生组合式继承
function A() { const a = new B(); a.attr1 = '123' }
function B() {}

A.prototype = new B();
A.prototype.constructor = A;
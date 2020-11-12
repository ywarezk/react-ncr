"use strict";
// var self = this
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.age = 35;
        this._secret = 'my password';
        this.birthday2 = function () {
            console.log(_this);
            _this.age++;
        };
    }
    Person.hello = function () {
        console.log('hello world');
    };
    Person.prototype.birthday = function () {
        console.log(this);
        this.age++;
    };
    Object.defineProperty(Person.prototype, "saySomething", {
        get: function () {
            return 'hello';
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var me = new Person();
me.age = 35;
console.log(me.age); // 35
me.birthday();
console.log(me.age); // 36
var a = { birthdayRef: me.birthday };
a.birthdayRef();
console.log(me.age); // ? 36 
/*
class Student extends Person {
    constructor() {
        super();
        
    }
    
    birthday() {
        super.birthday();
        console.log('im a student');
    }
}

*/ 

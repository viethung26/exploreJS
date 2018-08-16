globalvar = {};
(function (globalvar) {
    var name;
    globalvar.set = function set(x) {
        name = x;
    }
    globalvar.get = function get() {
        return name;
    }
})(globalvar);
globalvar.set("hung");
globalvar.set("haha");
console.log(globalvar.get());

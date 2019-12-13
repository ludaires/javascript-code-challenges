
// Function.prototype.bind = function(context) {
//    const fn = this;
//     return function() {
//         fn.call(context)
//     }
// }

function bind(fn, contex) {
    return function() {
        fn.apply(context);
    }
}


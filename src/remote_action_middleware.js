// essentially it does this
// export default function(store) {
//   return function(next) {
//     return function(action) {
//
//     }
//   }
// }
// This style of nesting single-argument functions is called currying.
// In this case it's used so that the Middleware is easily configurable:
// If we had all the arguments in just one function (function(store, next, action) { })
// we'd also have to supply all the arguments every time the middleware is used.
// With the curried version we can call the outermost function once, and get a return value
// that "remembers" which store to use. The same goes for the next argument.
// The next argument is a callback that the middleware should call when it has done its work
// and the action should be sent to the store (or the next middleware)
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}

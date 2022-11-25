// Taken from "Lambda World 2018 - Functional Lenses in JavaScript - Flavio Corpa"
const curry = (f, arity = f.length, ...args) =>
  arity <= args.length
    ? f(...args)
    : (...argz) => curry(f, arity, ...args, ...argz)

exports.curry = curry

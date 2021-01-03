export const isArray = x => Array.isArray(x);
export const isBoolean = x => false === x || true === x;
export const isDefined = x => 'undefined' !== typeof x;
export const isFloat = x => isNumber(x) && 0 !== x % 1;
export const isFunction = x => 'function' === typeof x;
export const isInstance = (x, of) => x && isSet(of) && x instanceof of;
export const isInteger = x => isNumber(x) && 0 === x % 1;
export const isNull = x => null === x;
export const isNumber = x => 'number' === typeof x;
export const isNumeric = x => /^-?(?:\d*.)?\d+$/.test(x + "");
export const isObject = (x, isPlain = true) => {
    if ('object' !== typeof x) {
        return false;
    }
    return isPlain ? isInstance(x, Object) : true;
};
export const isScalar = x => isBoolean(x) || isNumber(x) || isString(x);
export const isSet = x => isDefined(x) && !isNull(x);
export const isString = x => 'string' === typeof x;

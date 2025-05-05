"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cesar = function () {
    var abc = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789áéíóúÁÉÍÓÚäëïöüÄËÏÖÜ';
    var getAbcArray = function () { return abc.split(''); };
    var setAbc = function (newAbc) { return abc = newAbc; };
    var getencryptedAbcArray = function (position) {
        var encrypted = getAbcArray();
        for (var i = 0; i < position; i++) {
            var lastElement = encrypted.pop();
            if (lastElement !== undefined) {
                encrypted.unshift(lastElement);
            }
        }
        return encrypted;
    };
    var transformText = function (text, position, sourceArray, targetArray) {
        return text.split('').map(function (char) {
            var index = sourceArray.indexOf(char);
            return index !== -1 ? targetArray[index] : char;
        }).join('');
    };
    var encrypt = function (text, position) {
        var abcArray = getAbcArray();
        var encryptedAbcArray = getencryptedAbcArray(position);
        return transformText(text, position, abcArray, encryptedAbcArray);
    };
    var desencrypt = function (text, position) {
        var abcArray = getAbcArray();
        var encryptedAbcArray = getencryptedAbcArray(position);
        return transformText(text, position, encryptedAbcArray, abcArray);
    };
    var transformTextByKey = function (text, key, transformFunc) {
        var i = 0;
        return text.split('').map(function (char) {
            if (i === key.length) {
                i = 0;
            }
            var position = key.charCodeAt(i) - 96;
            i++;
            return transformFunc(char, position);
        }).join('');
    };
    var encryptByKey = function (text, key) { return transformTextByKey(text, key, encrypt); };
    var desencryptByKey = function (text, key) { return transformTextByKey(text, key, desencrypt); };
    return {
        setAbc: setAbc,
        encrypt: encrypt,
        desencrypt: desencrypt,
        encryptByKey: encryptByKey,
        desencryptByKey: desencryptByKey
    };
};
exports.default = cesar;

"use strict";
cc._RF.push(module, 'fd723GWUXVCjrU6p9oQCkHY', 'ByteArray');
// FSDK_ASS/FSript/Fzlib/ByteArray.ts

"use strict";
/**
 * auth mark
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Endian;
(function (Endian) {
    Endian["LITTLE_ENDIAN"] = "littleEndian";
    Endian["BIG_ENDIAN"] = "bigEndian";
})(Endian || (Endian = {}));
var ByteArray = /** @class */ (function () {
    function ByteArray(buffer) {
        this.BUFFER_EXT_SIZE = 0; //Buffer expansion size
        this.EOF_byte = -1;
        this.EOF_code_point = -1;
        this._setArrayBuffer(buffer || new ArrayBuffer(this.BUFFER_EXT_SIZE));
        this.endian = Endian.BIG_ENDIAN;
    }
    Object.defineProperty(ByteArray.prototype, "_buffer", {
        get: function () {
            return this.data.buffer;
        },
        set: function (value) {
            this.data = new DataView(value);
        },
        enumerable: true,
        configurable: true
    });
    ByteArray.prototype._setArrayBuffer = function (buffer) {
        this.data = new DataView(buffer);
        this._position = 0;
    };
    ByteArray.prototype.readUnsignedShort = function () {
        if (!this.validate(2 /* SIZE_OF_UINT16 */))
            return null;
        var value = this.data.getUint16(this._position, this.endian == Endian.LITTLE_ENDIAN);
        this._position += 2 /* SIZE_OF_UINT16 */;
        return value;
    };
    ByteArray.prototype.readUTF = function () {
        if (!this.validate(2)) {
            return null;
        }
        var length = this.data.getUint16(this._position, this.endian == Endian.LITTLE_ENDIAN);
        this._position += 2;
        if (length > 0) {
            return this.readUTFBytes(length);
        }
        else {
            return "";
        }
    };
    // public readBytes(bytes:ByteArray,offset?:number,length?:number){
    //     if (offset === void 0) { offset = 0; }
    //         if (length === void 0) { length = 0; }
    //         if (length == 0) {
    //             length = (bytes._buffer.byteLength-this._position);
    //         }
    //         else if (!this.validate(length)) {
    //             return null;
    //         }
    //         if (bytes) {
    //             bytes.validateBuffer(offset + length);
    //         }
    //         else {
    //             bytes = new ByteArray(new ArrayBuffer(offset + length));
    //         }
    //         //This method is expensive
    //         for (var i = 0; i < length; i++) {
    //             bytes.data.setUint8(i + offset, this.data.getUint8(this._position++));
    //         }
    // }
    ByteArray.prototype.readBytes = function (length) {
        if (!this.validate(length)) {
            return null;
        }
        var bytes = new Uint8Array(this._buffer, this._position, length);
        this._position += length;
        return bytes;
    };
    ByteArray.prototype.readUTFBytes = function (length) {
        if (!this.validate(length)) {
            return null;
        }
        var bytes = new Uint8Array(this._buffer, this._position, length);
        this._position += length;
        return this.decodeUTF8(bytes);
    };
    ByteArray.prototype.writeUnsignedShort = function (value) {
        this.validateBuffer(2 /* SIZE_OF_UINT16 */);
        this.data.setUint16(this._position, value, this.endian == Endian.LITTLE_ENDIAN);
        this._position += 2 /* SIZE_OF_UINT16 */;
    };
    ByteArray.prototype.writeUTFBytes = function (value) {
        this._writeUint8Array(this.encodeUTF8(value));
    };
    ByteArray.prototype.writeBytes = function (buffer) {
        var u8array = new Uint8Array(buffer);
        this._writeUint8Array(u8array);
    };
    ByteArray.prototype._writeUint8Array = function (bytes, validateBuffer) {
        if (validateBuffer === void 0) {
            validateBuffer = true;
        }
        if (validateBuffer) {
            this.validateBuffer(bytes.length);
        }
        for (var i = 0; i < bytes.length; i++) {
            this.data.setUint8(this._position++, bytes[i]);
        }
    };
    ByteArray.prototype.validate = function (len) {
        if (this.data.byteLength > 0 && this._position + len <= this.data.byteLength) {
            return true;
        }
        else {
        }
    };
    ByteArray.prototype.validateBuffer = function (len, needReplace) {
        if (needReplace === void 0) {
            needReplace = false;
        }
        len += this._position;
        if (this._buffer.byteLength < len || needReplace) {
            var tmp = new Uint8Array(new ArrayBuffer(len + this.BUFFER_EXT_SIZE));
            var length_12 = Math.min(this.data.buffer.byteLength, len + this.BUFFER_EXT_SIZE);
            tmp.set(new Uint8Array(this.data.buffer, 0, length_12));
            this._buffer = tmp.buffer;
        }
    };
    ByteArray.prototype.encodeUTF8 = function (str) {
        var pos = 0;
        var codePoints = this.stringToCodePoints(str);
        var outputBytes = [];
        while (codePoints.length > pos) {
            var code_point = codePoints[pos++];
            if (this.inRange(code_point, 0xD800, 0xDFFF)) {
                this.encoderError(code_point);
            }
            else if (this.inRange(code_point, 0x0000, 0x007f)) {
                outputBytes.push(code_point);
            }
            else {
                var count = void 0, offset = void 0;
                if (this.inRange(code_point, 0x0080, 0x07FF)) {
                    count = 1;
                    offset = 0xC0;
                }
                else if (this.inRange(code_point, 0x0800, 0xFFFF)) {
                    count = 2;
                    offset = 0xE0;
                }
                else if (this.inRange(code_point, 0x10000, 0x10FFFF)) {
                    count = 3;
                    offset = 0xF0;
                }
                outputBytes.push(this.div(code_point, Math.pow(64, count)) + offset);
                while (count > 0) {
                    var temp = this.div(code_point, Math.pow(64, count - 1));
                    outputBytes.push(0x80 + (temp % 64));
                    count -= 1;
                }
            }
        }
        return new Uint8Array(outputBytes);
    };
    ByteArray.prototype.decodeUTF8 = function (data) {
        var fatal = false;
        var pos = 0;
        var result = "";
        var code_point;
        var utf8_code_point = 0;
        var utf8_bytes_needed = 0;
        var utf8_bytes_seen = 0;
        var utf8_lower_boundary = 0;
        while (data.length > pos) {
            var _byte = data[pos++];
            if (_byte == this.EOF_byte) {
                if (utf8_bytes_needed != 0) {
                    code_point = this.decoderError(fatal);
                }
                else {
                    code_point = this.EOF_code_point;
                }
            }
            else {
                if (utf8_bytes_needed == 0) {
                    if (this.inRange(_byte, 0x00, 0x7F)) {
                        code_point = _byte;
                    }
                    else {
                        if (this.inRange(_byte, 0xC2, 0xDF)) {
                            utf8_bytes_needed = 1;
                            utf8_lower_boundary = 0x80;
                            utf8_code_point = _byte - 0xC0;
                        }
                        else if (this.inRange(_byte, 0xE0, 0xEF)) {
                            utf8_bytes_needed = 2;
                            utf8_lower_boundary = 0x800;
                            utf8_code_point = _byte - 0xE0;
                        }
                        else if (this.inRange(_byte, 0xF0, 0xF4)) {
                            utf8_bytes_needed = 3;
                            utf8_lower_boundary = 0x10000;
                            utf8_code_point = _byte - 0xF0;
                        }
                        else {
                            this.decoderError(fatal);
                        }
                        utf8_code_point = utf8_code_point * Math.pow(64, utf8_bytes_needed);
                        code_point = null;
                    }
                }
                else if (!this.inRange(_byte, 0x80, 0xBF)) {
                    utf8_code_point = 0;
                    utf8_bytes_needed = 0;
                    utf8_bytes_seen = 0;
                    utf8_lower_boundary = 0;
                    pos--;
                    code_point = this.decoderError(fatal, _byte);
                }
                else {
                    utf8_bytes_seen += 1;
                    utf8_code_point = utf8_code_point + (_byte - 0x80) * Math.pow(64, utf8_bytes_needed - utf8_bytes_seen);
                    if (utf8_bytes_seen !== utf8_bytes_needed) {
                        code_point = null;
                    }
                    else {
                        var cp = utf8_code_point;
                        var lower_boundary = utf8_lower_boundary;
                        utf8_code_point = 0;
                        utf8_bytes_needed = 0;
                        utf8_bytes_seen = 0;
                        utf8_lower_boundary = 0;
                        if (this.inRange(cp, lower_boundary, 0x10FFFF) && !this.inRange(cp, 0xD800, 0xDFFF)) {
                            code_point = cp;
                        }
                        else {
                            code_point = this.decoderError(fatal, _byte);
                        }
                    }
                }
            }
            //Decode string
            if (code_point !== null && code_point !== this.EOF_code_point) {
                if (code_point <= 0xFFFF) {
                    if (code_point > 0)
                        result += String.fromCharCode(code_point);
                }
                else {
                    code_point -= 0x10000;
                    result += String.fromCharCode(0xD800 + ((code_point >> 10) & 0x3ff));
                    result += String.fromCharCode(0xDC00 + (code_point & 0x3ff));
                }
            }
        }
        return result;
    };
    ByteArray.prototype.encoderError = function (code_point) {
    };
    ByteArray.prototype.decoderError = function (fatal, opt_code_point) {
        if (fatal) {
        }
        return opt_code_point || 0xFFFD;
    };
    ByteArray.prototype.inRange = function (a, min, max) {
        return min <= a && a <= max;
    };
    ByteArray.prototype.div = function (n, d) {
        return Math.floor(n / d);
    };
    ByteArray.prototype.stringToCodePoints = function (string) {
        var cps = [];
        var i = 0, n = string.length;
        while (i < string.length) {
            var c = string.charCodeAt(i);
            if (!this.inRange(c, 0xD800, 0xDFFF)) {
                cps.push(c);
            }
            else if (this.inRange(c, 0xDC00, 0xDFFF)) {
                cps.push(0xFFFD);
            }
            else {
                if (i == n - 1) {
                    cps.push(0xFFFD);
                }
                else {
                    var d = string.charCodeAt(i + 1);
                    if (this.inRange(d, 0xDC00, 0xDFFF)) {
                        var a = c & 0x3FF;
                        var b = d & 0x3FF;
                        i += 1;
                        cps.push(0x10000 + (a << 10) + b);
                    }
                    else {
                        cps.push(0xFFFD);
                    }
                }
            }
            i += 1;
        }
        return cps;
    };
    return ByteArray;
}());
exports.default = ByteArray;

cc._RF.pop();
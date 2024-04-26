"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styled = styled;
var _react = _interopRequireDefault(require("react"));
var _excluded = ["className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var usedClassNames = new Set();
function generateRandomClassName() {
  var characters = "abcdefghijklmnopqrstuvwxyz";
  var firstChar = characters.charAt(Math.floor(Math.random() * characters.length));
  var remainingChars = "abcdefghijklmnopqrstuvwxyz1234567890";
  var className;
  do {
    className = firstChar + Array.from({
      length: 6
    }, function () {
      return remainingChars.charAt(Math.floor(Math.random() * remainingChars.length));
    }).join("");
  } while (usedClassNames.has(className));
  usedClassNames.add(className);
  return className;
}
function styled(tag) {
  return function (styles) {
    var classNames = {};
    Object.keys(styles).forEach(function (style) {
      var className = generateRandomClassName();
      var styleElement = document.createElement("style");
      try {
        styleElement.innerHTML = ".".concat(className, " { ").concat(camelToKebabCase(style), ": ").concat(styles[style], "; }");
        document.head.appendChild(styleElement);
        classNames[style] = className;
      } catch (error) {
        console.error("Error occurred while adding style:", error);
      }
    });
    return function StyledComponent(props) {
      var extraClassName = props.className,
        restProps = _objectWithoutProperties(props, _excluded);
      var Element = tag;
      var elementProps = _objectSpread(_objectSpread({}, restProps), {}, {
        className: "".concat(extraClassName ? extraClassName + " " : "").concat(Object.values(classNames).join(" "))
      });
      return /*#__PURE__*/_react["default"].createElement(Element, elementProps);
    };
  };
}
function camelToKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
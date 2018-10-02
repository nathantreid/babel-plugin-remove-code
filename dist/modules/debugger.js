'use strict'; // -----------------------------------------
// Functions

/**
 * Remove debugger
 *
 * @param {object} t
 * @param {array} opts
 * @param {object} path
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = void 0;

const remove = (t, opts, path) => opts && path && !path.removed && path.remove(); // -----------------------------------------
// Export


exports.remove = remove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2RlYnVnZ2VyLmpzIl0sIm5hbWVzIjpbInJlbW92ZSIsInQiLCJvcHRzIiwicGF0aCIsInJlbW92ZWQiXSwibWFwcGluZ3MiOiJBQUFBLGEsQ0FFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FBT0EsTUFBTUEsTUFBTSxHQUFHLENBQUNDLENBQUQsRUFBSUMsSUFBSixFQUFVQyxJQUFWLEtBQW1CRCxJQUFJLElBQUlDLElBQVIsSUFBZ0IsQ0FBQ0EsSUFBSSxDQUFDQyxPQUF0QixJQUFpQ0QsSUFBSSxDQUFDSCxNQUFMLEVBQW5FLEMsQ0FFQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRnVuY3Rpb25zXHJcblxyXG4vKipcclxuICogUmVtb3ZlIGRlYnVnZ2VyXHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0XHJcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdHNcclxuICogQHBhcmFtIHtvYmplY3R9IHBhdGhcclxuICovXHJcbmNvbnN0IHJlbW92ZSA9ICh0LCBvcHRzLCBwYXRoKSA9PiBvcHRzICYmIHBhdGggJiYgIXBhdGgucmVtb3ZlZCAmJiBwYXRoLnJlbW92ZSgpO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhwb3J0XHJcblxyXG5leHBvcnQgeyByZW1vdmUgfTtcclxuIl19
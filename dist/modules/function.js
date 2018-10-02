'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeByArg = exports.remove = void 0;

var _utils = require("../utils.js");

// -----------------------------------------
// Functions

/**
 * Remove functions by argument
 *
 * @param {object} t
 * @param {array} opts
 * @param {object} path
 * @param {object} originalPath
 */
const removeByArg = (t, opts = [], path) => {
  if (!path || path.removed || path.type !== 'CallExpression') {
    return;
  } // It doesn't exist in the options


  const args = path.get('arguments'); // Now maybe we have something to remove!

  let toRemove = args.length && (0, _utils.getsArrItem)(opts, path, args);
  toRemove = toRemove || [];
  toRemove = toRemove.filter(val => !!val && !val.removed);

  if (toRemove && toRemove.length) {
    for (let i = 0; i < toRemove.length; i += 1) {
      toRemove[i] && !toRemove[i].removed && toRemove[i].remove();
    }
  }
};
/**
 * Remove functions
 *
 * @param {object} t
 * @param {array} opts
 * @param {object} path
 * @param {object} originalPath
 */


exports.removeByArg = removeByArg;

const remove = (t, opts = [], path) => {
  if (!path || path.removed) {
    return;
  } // It doesn't exist in the options


  const pathHasIds = path.type === 'CallExpression' ? path.get('callee') : path;
  const ids = (0, _utils.getObjItem)(pathHasIds);

  if (!(0, _utils.matches)(opts, ids.join('.'))) {
    return;
  }

  !path.removed && path.remove();
}; // -----------------------------------------
// Export


exports.remove = remove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2Z1bmN0aW9uLmpzIl0sIm5hbWVzIjpbInJlbW92ZUJ5QXJnIiwidCIsIm9wdHMiLCJwYXRoIiwicmVtb3ZlZCIsInR5cGUiLCJhcmdzIiwiZ2V0IiwidG9SZW1vdmUiLCJsZW5ndGgiLCJmaWx0ZXIiLCJ2YWwiLCJpIiwicmVtb3ZlIiwicGF0aEhhc0lkcyIsImlkcyIsImpvaW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFRQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJQyxJQUFJLEdBQUcsRUFBWCxFQUFlQyxJQUFmLEtBQXdCO0FBQ3hDLE1BQUksQ0FBQ0EsSUFBRCxJQUFTQSxJQUFJLENBQUNDLE9BQWQsSUFBeUJELElBQUksQ0FBQ0UsSUFBTCxLQUFjLGdCQUEzQyxFQUE2RDtBQUFFO0FBQVMsR0FEaEMsQ0FHeEM7OztBQUNBLFFBQU1DLElBQUksR0FBR0gsSUFBSSxDQUFDSSxHQUFMLENBQVMsV0FBVCxDQUFiLENBSndDLENBTXhDOztBQUNBLE1BQUlDLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxNQUFMLElBQWUsd0JBQVlQLElBQVosRUFBa0JDLElBQWxCLEVBQXdCRyxJQUF4QixDQUE5QjtBQUNBRSxFQUFBQSxRQUFRLEdBQUdBLFFBQVEsSUFBSSxFQUF2QjtBQUNBQSxFQUFBQSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkMsR0FBRyxJQUFJLENBQUMsQ0FBQ0EsR0FBRixJQUFTLENBQUNBLEdBQUcsQ0FBQ1AsT0FBckMsQ0FBWDs7QUFFQSxNQUFJSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsTUFBekIsRUFBaUM7QUFDN0IsU0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixRQUFRLENBQUNDLE1BQTdCLEVBQXFDRyxDQUFDLElBQUksQ0FBMUMsRUFBNkM7QUFDekNKLE1BQUFBLFFBQVEsQ0FBQ0ksQ0FBRCxDQUFSLElBQWUsQ0FBQ0osUUFBUSxDQUFDSSxDQUFELENBQVIsQ0FBWVIsT0FBNUIsSUFBdUNJLFFBQVEsQ0FBQ0ksQ0FBRCxDQUFSLENBQVlDLE1BQVosRUFBdkM7QUFDSDtBQUNKO0FBQ0osQ0FoQkQ7QUFrQkE7Ozs7Ozs7Ozs7OztBQVFBLE1BQU1BLE1BQU0sR0FBRyxDQUFDWixDQUFELEVBQUlDLElBQUksR0FBRyxFQUFYLEVBQWVDLElBQWYsS0FBd0I7QUFDbkMsTUFBSSxDQUFDQSxJQUFELElBQVNBLElBQUksQ0FBQ0MsT0FBbEIsRUFBMkI7QUFBRTtBQUFTLEdBREgsQ0FHbkM7OztBQUNBLFFBQU1VLFVBQVUsR0FBSVgsSUFBSSxDQUFDRSxJQUFMLEtBQWMsZ0JBQWYsR0FBbUNGLElBQUksQ0FBQ0ksR0FBTCxDQUFTLFFBQVQsQ0FBbkMsR0FBd0RKLElBQTNFO0FBQ0EsUUFBTVksR0FBRyxHQUFHLHVCQUFXRCxVQUFYLENBQVo7O0FBQ0EsTUFBSSxDQUFDLG9CQUFRWixJQUFSLEVBQWNhLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLEdBQVQsQ0FBZCxDQUFMLEVBQW1DO0FBQUU7QUFBUzs7QUFFOUMsR0FBQ2IsSUFBSSxDQUFDQyxPQUFOLElBQWlCRCxJQUFJLENBQUNVLE1BQUwsRUFBakI7QUFDSCxDQVRELEMsQ0FXQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0T2JqSXRlbSwgZ2V0c0Fyckl0ZW0sIG1hdGNoZXMgfSBmcm9tICcuLi91dGlscy5qcyc7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBGdW5jdGlvbnNcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgZnVuY3Rpb25zIGJ5IGFyZ3VtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSB0XHJcbiAqIEBwYXJhbSB7YXJyYXl9IG9wdHNcclxuICogQHBhcmFtIHtvYmplY3R9IHBhdGhcclxuICogQHBhcmFtIHtvYmplY3R9IG9yaWdpbmFsUGF0aFxyXG4gKi9cclxuY29uc3QgcmVtb3ZlQnlBcmcgPSAodCwgb3B0cyA9IFtdLCBwYXRoKSA9PiB7XHJcbiAgICBpZiAoIXBhdGggfHwgcGF0aC5yZW1vdmVkIHx8IHBhdGgudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykgeyByZXR1cm47IH1cclxuXHJcbiAgICAvLyBJdCBkb2Vzbid0IGV4aXN0IGluIHRoZSBvcHRpb25zXHJcbiAgICBjb25zdCBhcmdzID0gcGF0aC5nZXQoJ2FyZ3VtZW50cycpO1xyXG5cclxuICAgIC8vIE5vdyBtYXliZSB3ZSBoYXZlIHNvbWV0aGluZyB0byByZW1vdmUhXHJcbiAgICBsZXQgdG9SZW1vdmUgPSBhcmdzLmxlbmd0aCAmJiBnZXRzQXJySXRlbShvcHRzLCBwYXRoLCBhcmdzKTtcclxuICAgIHRvUmVtb3ZlID0gdG9SZW1vdmUgfHwgW107XHJcbiAgICB0b1JlbW92ZSA9IHRvUmVtb3ZlLmZpbHRlcih2YWwgPT4gISF2YWwgJiYgIXZhbC5yZW1vdmVkKTtcclxuXHJcbiAgICBpZiAodG9SZW1vdmUgJiYgdG9SZW1vdmUubGVuZ3RoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b1JlbW92ZS5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB0b1JlbW92ZVtpXSAmJiAhdG9SZW1vdmVbaV0ucmVtb3ZlZCAmJiB0b1JlbW92ZVtpXS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIGZ1bmN0aW9uc1xyXG4gKlxyXG4gKiBAcGFyYW0ge29iamVjdH0gdFxyXG4gKiBAcGFyYW0ge2FycmF5fSBvcHRzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcmlnaW5hbFBhdGhcclxuICovXHJcbmNvbnN0IHJlbW92ZSA9ICh0LCBvcHRzID0gW10sIHBhdGgpID0+IHtcclxuICAgIGlmICghcGF0aCB8fCBwYXRoLnJlbW92ZWQpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgLy8gSXQgZG9lc24ndCBleGlzdCBpbiB0aGUgb3B0aW9uc1xyXG4gICAgY29uc3QgcGF0aEhhc0lkcyA9IChwYXRoLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicpID8gcGF0aC5nZXQoJ2NhbGxlZScpIDogcGF0aDtcclxuICAgIGNvbnN0IGlkcyA9IGdldE9iakl0ZW0ocGF0aEhhc0lkcyk7XHJcbiAgICBpZiAoIW1hdGNoZXMob3B0cywgaWRzLmpvaW4oJy4nKSkpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgIXBhdGgucmVtb3ZlZCAmJiBwYXRoLnJlbW92ZSgpO1xyXG59O1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRXhwb3J0XHJcblxyXG5leHBvcnQgeyByZW1vdmUsIHJlbW92ZUJ5QXJnIH07XHJcbiJdfQ==
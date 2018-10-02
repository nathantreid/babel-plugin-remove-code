'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remove = void 0;

var _utils = require("../utils.js");

var _function = require("./function.js");

var _var = require("./var.js");

// -----------------------------------------
// Functions

/**
 * Removes target references
 *
 * @param {object} t
 * @param {object} path
 * @returns
 */
const removeTargetRefs = (t, path) => {
  const specifiers = path && path.specifiers || path && path.node && path.node.specifiers || [];
  specifiers.forEach(specifier => {
    const importedIdentifierName = specifier.local.name;
    const {
      referencePaths
    } = path.scope.getBinding(importedIdentifierName); // Go per reference path

    referencePaths.forEach(referencePath => {
      (0, _function.remove)(t, [importedIdentifierName], referencePath.parentPath);
      (0, _function.removeByArg)(t, [importedIdentifierName], referencePath.parentPath);
      (0, _var.remove)(t, [importedIdentifierName], referencePath.parentPath);
    });
  });
  !path.removed && path.remove();
};
/**
 * Remove import
 *
 * @param {object} t
 * @param {array} opts
 * @param {object} path
 */


const remove = (t, opts = [], path) => {
  if (!path || path.removed) {
    return;
  }

  const source = path.source || path.node.source;

  if (!source || !source.value) {
    return;
  } // It doesn't exist in the options


  if (!(0, _utils.matches)(opts, source.value)) {
    return;
  }

  removeTargetRefs(t, path);
  !path.removed && path.remove();
}; // -----------------------------------------
// Export


exports.remove = remove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2ltcG9ydC5qcyJdLCJuYW1lcyI6WyJyZW1vdmVUYXJnZXRSZWZzIiwidCIsInBhdGgiLCJzcGVjaWZpZXJzIiwibm9kZSIsImZvckVhY2giLCJzcGVjaWZpZXIiLCJpbXBvcnRlZElkZW50aWZpZXJOYW1lIiwibG9jYWwiLCJuYW1lIiwicmVmZXJlbmNlUGF0aHMiLCJzY29wZSIsImdldEJpbmRpbmciLCJyZWZlcmVuY2VQYXRoIiwicGFyZW50UGF0aCIsInJlbW92ZWQiLCJyZW1vdmUiLCJvcHRzIiwic291cmNlIiwidmFsdWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQU9BLE1BQU1BLGdCQUFnQixHQUFHLENBQUNDLENBQUQsRUFBSUMsSUFBSixLQUFhO0FBQ2xDLFFBQU1DLFVBQVUsR0FBR0QsSUFBSSxJQUFJQSxJQUFJLENBQUNDLFVBQWIsSUFBMkJELElBQUksSUFBSUEsSUFBSSxDQUFDRSxJQUFiLElBQXFCRixJQUFJLENBQUNFLElBQUwsQ0FBVUQsVUFBMUQsSUFBd0UsRUFBM0Y7QUFFQUEsRUFBQUEsVUFBVSxDQUFDRSxPQUFYLENBQW9CQyxTQUFELElBQWU7QUFDOUIsVUFBTUMsc0JBQXNCLEdBQUdELFNBQVMsQ0FBQ0UsS0FBVixDQUFnQkMsSUFBL0M7QUFDQSxVQUFNO0FBQUVDLE1BQUFBO0FBQUYsUUFBcUJSLElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxVQUFYLENBQXNCTCxzQkFBdEIsQ0FBM0IsQ0FGOEIsQ0FJOUI7O0FBQ0FHLElBQUFBLGNBQWMsQ0FBQ0wsT0FBZixDQUF3QlEsYUFBRCxJQUFtQjtBQUN0Qyw0QkFBZVosQ0FBZixFQUFrQixDQUFDTSxzQkFBRCxDQUFsQixFQUE0Q00sYUFBYSxDQUFDQyxVQUExRDtBQUNBLGlDQUFvQmIsQ0FBcEIsRUFBdUIsQ0FBQ00sc0JBQUQsQ0FBdkIsRUFBaURNLGFBQWEsQ0FBQ0MsVUFBL0Q7QUFDQSx1QkFBVWIsQ0FBVixFQUFhLENBQUNNLHNCQUFELENBQWIsRUFBdUNNLGFBQWEsQ0FBQ0MsVUFBckQ7QUFDSCxLQUpEO0FBS0gsR0FWRDtBQVlBLEdBQUNaLElBQUksQ0FBQ2EsT0FBTixJQUFpQmIsSUFBSSxDQUFDYyxNQUFMLEVBQWpCO0FBQ0gsQ0FoQkQ7QUFrQkE7Ozs7Ozs7OztBQU9BLE1BQU1BLE1BQU0sR0FBRyxDQUFDZixDQUFELEVBQUlnQixJQUFJLEdBQUcsRUFBWCxFQUFlZixJQUFmLEtBQXdCO0FBQ25DLE1BQUksQ0FBQ0EsSUFBRCxJQUFTQSxJQUFJLENBQUNhLE9BQWxCLEVBQTJCO0FBQUU7QUFBUzs7QUFFdEMsUUFBTUcsTUFBTSxHQUFHaEIsSUFBSSxDQUFDZ0IsTUFBTCxJQUFlaEIsSUFBSSxDQUFDRSxJQUFMLENBQVVjLE1BQXhDOztBQUNBLE1BQUksQ0FBQ0EsTUFBRCxJQUFXLENBQUNBLE1BQU0sQ0FBQ0MsS0FBdkIsRUFBOEI7QUFBRTtBQUFTLEdBSk4sQ0FNbkM7OztBQUNBLE1BQUksQ0FBQyxvQkFBUUYsSUFBUixFQUFjQyxNQUFNLENBQUNDLEtBQXJCLENBQUwsRUFBa0M7QUFBRTtBQUFTOztBQUM3Q25CLEVBQUFBLGdCQUFnQixDQUFDQyxDQUFELEVBQUlDLElBQUosQ0FBaEI7QUFFQSxHQUFDQSxJQUFJLENBQUNhLE9BQU4sSUFBaUJiLElBQUksQ0FBQ2MsTUFBTCxFQUFqQjtBQUNILENBWEQsQyxDQWFBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IG1hdGNoZXMgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyByZW1vdmUgYXMgcmVtb3ZlRnVuY3Rpb24sIHJlbW92ZUJ5QXJnIGFzIHJlbW92ZUZ1bmN0aW9uQnlBcmcgfSBmcm9tICcuL2Z1bmN0aW9uLmpzJztcbmltcG9ydCB7IHJlbW92ZSBhcyByZW1vdmVWYXIgfSBmcm9tICcuL3Zhci5qcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGdW5jdGlvbnNcblxuLyoqXG4gKiBSZW1vdmVzIHRhcmdldCByZWZlcmVuY2VzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoXG4gKiBAcmV0dXJuc1xuICovXG5jb25zdCByZW1vdmVUYXJnZXRSZWZzID0gKHQsIHBhdGgpID0+IHtcbiAgICBjb25zdCBzcGVjaWZpZXJzID0gcGF0aCAmJiBwYXRoLnNwZWNpZmllcnMgfHwgcGF0aCAmJiBwYXRoLm5vZGUgJiYgcGF0aC5ub2RlLnNwZWNpZmllcnMgfHwgW107XG5cbiAgICBzcGVjaWZpZXJzLmZvckVhY2goKHNwZWNpZmllcikgPT4ge1xuICAgICAgICBjb25zdCBpbXBvcnRlZElkZW50aWZpZXJOYW1lID0gc3BlY2lmaWVyLmxvY2FsLm5hbWU7XG4gICAgICAgIGNvbnN0IHsgcmVmZXJlbmNlUGF0aHMgfSA9IHBhdGguc2NvcGUuZ2V0QmluZGluZyhpbXBvcnRlZElkZW50aWZpZXJOYW1lKTtcblxuICAgICAgICAvLyBHbyBwZXIgcmVmZXJlbmNlIHBhdGhcbiAgICAgICAgcmVmZXJlbmNlUGF0aHMuZm9yRWFjaCgocmVmZXJlbmNlUGF0aCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRnVuY3Rpb24odCwgW2ltcG9ydGVkSWRlbnRpZmllck5hbWVdLCByZWZlcmVuY2VQYXRoLnBhcmVudFBhdGgpO1xuICAgICAgICAgICAgcmVtb3ZlRnVuY3Rpb25CeUFyZyh0LCBbaW1wb3J0ZWRJZGVudGlmaWVyTmFtZV0sIHJlZmVyZW5jZVBhdGgucGFyZW50UGF0aCk7XG4gICAgICAgICAgICByZW1vdmVWYXIodCwgW2ltcG9ydGVkSWRlbnRpZmllck5hbWVdLCByZWZlcmVuY2VQYXRoLnBhcmVudFBhdGgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgICFwYXRoLnJlbW92ZWQgJiYgcGF0aC5yZW1vdmUoKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGltcG9ydFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0XG4gKiBAcGFyYW0ge2FycmF5fSBvcHRzXG4gKiBAcGFyYW0ge29iamVjdH0gcGF0aFxuICovXG5jb25zdCByZW1vdmUgPSAodCwgb3B0cyA9IFtdLCBwYXRoKSA9PiB7XG4gICAgaWYgKCFwYXRoIHx8IHBhdGgucmVtb3ZlZCkgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IHNvdXJjZSA9IHBhdGguc291cmNlIHx8IHBhdGgubm9kZS5zb3VyY2U7XG4gICAgaWYgKCFzb3VyY2UgfHwgIXNvdXJjZS52YWx1ZSkgeyByZXR1cm47IH1cblxuICAgIC8vIEl0IGRvZXNuJ3QgZXhpc3QgaW4gdGhlIG9wdGlvbnNcbiAgICBpZiAoIW1hdGNoZXMob3B0cywgc291cmNlLnZhbHVlKSkgeyByZXR1cm47IH1cbiAgICByZW1vdmVUYXJnZXRSZWZzKHQsIHBhdGgpO1xuXG4gICAgIXBhdGgucmVtb3ZlZCAmJiBwYXRoLnJlbW92ZSgpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgeyByZW1vdmUgfTtcbiJdfQ==
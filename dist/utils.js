'use strict'; // -----------------------------------------
// Functions

/**
 * Check if patterns matches
 *
 * @param {array} data
 * @param {string} pattern
 * @returns {boolean}
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matches = exports.getsArrItem = exports.getObjItem = void 0;

const matches = (data, pattern) => {
  if (!pattern || !pattern.length || !data || !data.length) {
    return false;
  }

  const filter = data.filter(val => {
    const newPattern = val.replace(/\./g, '\.');
    const reg = new RegExp(newPattern, 'g');
    const is = reg.test(pattern);
    return is;
  });
  return !!filter[0];
};
/**
 * Gets member expression keys
 *
 * @param {object} path
 * @returns {array}
 */


exports.matches = matches;

const getObjItem = path => {
  let arr = [];
  let toCheck;

  if (!path) {
    return arr;
  } // For the identifier likes...


  if (path.type === 'Identifier') {
    arr = [path.name || path.node.name];
  } else if (path.type === 'StringLiteral') {
    arr = [path.value];
  } // Lets check under other possible keys


  toCheck = path.object || path.node && path.node.object;
  arr = toCheck ? arr.concat(getObjItem(toCheck)) : arr;
  toCheck = path.property || path.node && path.node.property;
  arr = toCheck ? arr.concat(getObjItem(toCheck)) : arr;
  toCheck = path.id || path.node && path.node.id;
  arr = toCheck ? arr.concat(getObjItem(toCheck)) : arr;
  toCheck = path.left || path.node && path.node.left;
  arr = toCheck ? arr.concat(getObjItem(toCheck)) : arr;
  toCheck = path.right || path.node && path.node.right;
  arr = toCheck ? arr.concat(getObjItem(toCheck)) : arr;
  return arr;
};
/**
 * Gets property
 *
 * @param {object} opts
 * @param {object} path
 * @param {array} properties
 * @returns {array}
 */


exports.getObjItem = getObjItem;

const getsArrItem = (opts, path, properties) => {
  const rightProperties = []; // Go through each property

  for (let i = 0; i < properties.length; i += 1) {
    const property = properties[i];
    let toCheck;
    toCheck = property.type === 'Identifier' && property;
    toCheck = toCheck || property.node.value && property.get('value');
    toCheck = toCheck || property.node.local && property.get('local');
    toCheck = toCheck || property.node.id && property.get('id');
    toCheck = toCheck && toCheck.node && toCheck.node.name;

    if (!matches(opts, toCheck)) {
      continue;
    } // It was found!


    rightProperties.push(properties.length > 1 ? property : path);
  }

  return rightProperties;
}; // -----------------------------------------
// Export


exports.getsArrItem = getsArrItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJtYXRjaGVzIiwiZGF0YSIsInBhdHRlcm4iLCJsZW5ndGgiLCJmaWx0ZXIiLCJ2YWwiLCJuZXdQYXR0ZXJuIiwicmVwbGFjZSIsInJlZyIsIlJlZ0V4cCIsImlzIiwidGVzdCIsImdldE9iakl0ZW0iLCJwYXRoIiwiYXJyIiwidG9DaGVjayIsInR5cGUiLCJuYW1lIiwibm9kZSIsInZhbHVlIiwib2JqZWN0IiwiY29uY2F0IiwicHJvcGVydHkiLCJpZCIsImxlZnQiLCJyaWdodCIsImdldHNBcnJJdGVtIiwib3B0cyIsInByb3BlcnRpZXMiLCJyaWdodFByb3BlcnRpZXMiLCJpIiwiZ2V0IiwibG9jYWwiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQU9BLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxJQUFELEVBQU9DLE9BQVAsS0FBbUI7QUFDL0IsTUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDQyxNQUFyQixJQUErQixDQUFDRixJQUFoQyxJQUF3QyxDQUFDQSxJQUFJLENBQUNFLE1BQWxELEVBQTBEO0FBQUUsV0FBTyxLQUFQO0FBQWU7O0FBRTNFLFFBQU1DLE1BQU0sR0FBR0gsSUFBSSxDQUFDRyxNQUFMLENBQVlDLEdBQUcsSUFBSTtBQUM5QixVQUFNQyxVQUFVLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLEtBQVosRUFBbUIsSUFBbkIsQ0FBbkI7QUFDQSxVQUFNQyxHQUFHLEdBQUcsSUFBSUMsTUFBSixDQUFXSCxVQUFYLEVBQXVCLEdBQXZCLENBQVo7QUFDQSxVQUFNSSxFQUFFLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSixDQUFTVCxPQUFULENBQVg7QUFFQSxXQUFPUSxFQUFQO0FBQ0gsR0FOYyxDQUFmO0FBUUEsU0FBTyxDQUFDLENBQUNOLE1BQU0sQ0FBQyxDQUFELENBQWY7QUFDSCxDQVpEO0FBY0E7Ozs7Ozs7Ozs7QUFN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LENBQTVDO0FBQ0FoQixJQUFBQSxPQUFPLEdBQUdBLE9BQU8sSUFBSU8sUUFBUSxDQUFDSixJQUFULENBQWNjLEtBQWQsSUFBdUJWLFFBQVEsQ0FBQ1MsR0FBVCxDQUFhLE9BQWIsQ0FBNUM7QUFDQWhCLElBQUFBLE9BQU8sR0FBR0EsT0FBTyxJQUFJTyxRQUFRLENBQUNKLElBQVQsQ0FBY0ssRUFBZCxJQUFvQkQsUUFBUSxDQUFDUyxHQUFULENBQWEsSUFBYixDQUF6QztBQUNBaEIsSUFBQUEsT0FBTyxHQUFHQSxPQUFPLElBQUlBLE9BQU8sQ0FBQ0csSUFBbkIsSUFBMkJILE9BQU8sQ0FBQ0csSUFBUixDQUFhRCxJQUFsRDs7QUFFQSxRQUFJLENBQUNqQixPQUFPLENBQUMyQixJQUFELEVBQU9aLE9BQVAsQ0FBWixFQUE2QjtBQUN6QjtBQUNILEtBWjBDLENBYzNDOzs7QUFDQWMsSUFBQUEsZUFBZSxDQUFDSSxJQUFoQixDQUFzQkwsVUFBVSxDQUFDekIsTUFBWCxHQUFvQixDQUFyQixHQUEwQm1CLFFBQTFCLEdBQXFDVCxJQUExRDtBQUNIOztBQUVELFNBQU9nQixlQUFQO0FBQ0gsQ0F2QkQsQyxDQXlCQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogQ2hlY2sgaWYgcGF0dGVybnMgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgbWF0Y2hlcyA9IChkYXRhLCBwYXR0ZXJuKSA9PiB7XG4gICAgaWYgKCFwYXR0ZXJuIHx8ICFwYXR0ZXJuLmxlbmd0aCB8fCAhZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBjb25zdCBmaWx0ZXIgPSBkYXRhLmZpbHRlcih2YWwgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYXR0ZXJuID0gdmFsLnJlcGxhY2UoL1xcLi9nLCAnXFwuJyk7XG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAobmV3UGF0dGVybiwgJ2cnKTtcbiAgICAgICAgY29uc3QgaXMgPSByZWcudGVzdChwYXR0ZXJuKTtcblxuICAgICAgICByZXR1cm4gaXM7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gISFmaWx0ZXJbMF07XG59O1xuXG4vKipcbiAqIEdldHMgbWVtYmVyIGV4cHJlc3Npb24ga2V5c1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmNvbnN0IGdldE9iakl0ZW0gPSAocGF0aCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgdG9DaGVjaztcblxuICAgIGlmICghcGF0aCkgeyByZXR1cm4gYXJyOyB9XG5cbiAgICAvLyBGb3IgdGhlIGlkZW50aWZpZXIgbGlrZXMuLi5cbiAgICBpZiAocGF0aC50eXBlID09PSAnSWRlbnRpZmllcicpIHtcbiAgICAgICAgYXJyID0gW3BhdGgubmFtZSB8fCBwYXRoLm5vZGUubmFtZV07XG4gICAgfSBlbHNlIGlmIChwYXRoLnR5cGUgPT09ICdTdHJpbmdMaXRlcmFsJykge1xuICAgICAgICBhcnIgPSBbcGF0aC52YWx1ZV07XG4gICAgfVxuXG4gICAgLy8gTGV0cyBjaGVjayB1bmRlciBvdGhlciBwb3NzaWJsZSBrZXlzXG4gICAgdG9DaGVjayA9IHBhdGgub2JqZWN0IHx8IHBhdGgubm9kZSAmJiBwYXRoLm5vZGUub2JqZWN0O1xuICAgIGFyciA9IHRvQ2hlY2sgPyBhcnIuY29uY2F0KGdldE9iakl0ZW0odG9DaGVjaykpIDogYXJyO1xuXG4gICAgdG9DaGVjayA9IHBhdGgucHJvcGVydHkgfHwgcGF0aC5ub2RlICYmIHBhdGgubm9kZS5wcm9wZXJ0eTtcbiAgICBhcnIgPSB0b0NoZWNrID8gYXJyLmNvbmNhdChnZXRPYmpJdGVtKHRvQ2hlY2spKSA6IGFycjtcblxuICAgIHRvQ2hlY2sgPSBwYXRoLmlkIHx8IHBhdGgubm9kZSAmJiBwYXRoLm5vZGUuaWQ7XG4gICAgYXJyID0gdG9DaGVjayA/IGFyci5jb25jYXQoZ2V0T2JqSXRlbSh0b0NoZWNrKSkgOiBhcnI7XG5cbiAgICB0b0NoZWNrID0gcGF0aC5sZWZ0IHx8IHBhdGgubm9kZSAmJiBwYXRoLm5vZGUubGVmdDtcbiAgICBhcnIgPSB0b0NoZWNrID8gYXJyLmNvbmNhdChnZXRPYmpJdGVtKHRvQ2hlY2spKSA6IGFycjtcblxuICAgIHRvQ2hlY2sgPSBwYXRoLnJpZ2h0IHx8IHBhdGgubm9kZSAmJiBwYXRoLm5vZGUucmlnaHQ7XG4gICAgYXJyID0gdG9DaGVjayA/IGFyci5jb25jYXQoZ2V0T2JqSXRlbSh0b0NoZWNrKSkgOiBhcnI7XG5cbiAgICByZXR1cm4gYXJyO1xufTtcblxuLyoqXG4gKiBHZXRzIHByb3BlcnR5XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoXG4gKiBAcGFyYW0ge2FycmF5fSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmNvbnN0IGdldHNBcnJJdGVtID0gKG9wdHMsIHBhdGgsIHByb3BlcnRpZXMpID0+IHtcbiAgICBjb25zdCByaWdodFByb3BlcnRpZXMgPSBbXTtcblxuICAgIC8vIEdvIHRocm91Z2ggZWFjaCBwcm9wZXJ0eVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgIGxldCB0b0NoZWNrO1xuXG4gICAgICAgIHRvQ2hlY2sgPSAocHJvcGVydHkudHlwZSA9PT0gJ0lkZW50aWZpZXInKSAmJiBwcm9wZXJ0eTtcbiAgICAgICAgdG9DaGVjayA9IHRvQ2hlY2sgfHwgcHJvcGVydHkubm9kZS52YWx1ZSAmJiBwcm9wZXJ0eS5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHRvQ2hlY2sgPSB0b0NoZWNrIHx8IHByb3BlcnR5Lm5vZGUubG9jYWwgJiYgcHJvcGVydHkuZ2V0KCdsb2NhbCcpO1xuICAgICAgICB0b0NoZWNrID0gdG9DaGVjayB8fCBwcm9wZXJ0eS5ub2RlLmlkICYmIHByb3BlcnR5LmdldCgnaWQnKTtcbiAgICAgICAgdG9DaGVjayA9IHRvQ2hlY2sgJiYgdG9DaGVjay5ub2RlICYmIHRvQ2hlY2subm9kZS5uYW1lO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcyhvcHRzLCB0b0NoZWNrKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdCB3YXMgZm91bmQhXG4gICAgICAgIHJpZ2h0UHJvcGVydGllcy5wdXNoKChwcm9wZXJ0aWVzLmxlbmd0aCA+IDEpID8gcHJvcGVydHkgOiBwYXRoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmlnaHRQcm9wZXJ0aWVzO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4cG9ydFxuXG5leHBvcnQgeyBnZXRPYmpJdGVtLCBnZXRzQXJySXRlbSwgbWF0Y2hlcyB9O1xuIl19
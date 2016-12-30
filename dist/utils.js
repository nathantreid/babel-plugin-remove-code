'use strict';

// -----------------------------------------
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
var matches = function matches(data, pattern) {
    if (!pattern || !pattern.length || !data || !data.length) {
        return false;
    }

    var filter = data.filter(function (val) {
        var newPattern = val.replace(/\./g, '\.');
        var reg = new RegExp(newPattern, 'g');
        var is = reg.test(pattern);

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
var getObjItem = function getObjItem(path) {
    var arr = [];
    var toCheck = void 0;

    if (!path) {
        return arr;
    }

    // For the identifier likes...
    arr = path.type === 'Identifier' ? [path.name || path.node.name] : arr;

    // Lets check under other possible keys
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
var getsArrItem = function getsArrItem(opts, path, properties) {
    var rightProperties = [];

    // Go through each property
    for (var i = 0; i < properties.length; i += 1) {
        var property = properties[i];
        var toCheck = void 0;

        toCheck = property.type === 'Identifier' && property;
        toCheck = toCheck || property.node.value && property.get('value');
        toCheck = toCheck || property.node.local && property.get('local');
        toCheck = toCheck || property.node.id && property.get('id');
        toCheck = toCheck && toCheck.node && toCheck.node.name;

        if (!matches(opts, toCheck)) {
            continue;
        }

        // It was found!
        rightProperties.push(properties.length > 1 ? property : path);
    }

    return rightProperties;
};

// -----------------------------------------
// Export

exports.getObjItem = getObjItem;
exports.getsArrItem = getsArrItem;
exports.matches = matches;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJuYW1lcyI6WyJtYXRjaGVzIiwiZGF0YSIsInBhdHRlcm4iLCJsZW5ndGgiLCJmaWx0ZXIiLCJuZXdQYXR0ZXJuIiwidmFsIiwicmVwbGFjZSIsInJlZyIsIlJlZ0V4cCIsImlzIiwidGVzdCIsImdldE9iakl0ZW0iLCJwYXRoIiwiYXJyIiwidG9DaGVjayIsInR5cGUiLCJuYW1lIiwibm9kZSIsIm9iamVjdCIsImNvbmNhdCIsInByb3BlcnR5IiwiaWQiLCJsZWZ0IiwicmlnaHQiLCJnZXRzQXJySXRlbSIsIm9wdHMiLCJwcm9wZXJ0aWVzIiwicmlnaHRQcm9wZXJ0aWVzIiwiaSIsInZhbHVlIiwiZ2V0IiwibG9jYWwiLCJwdXNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQU9BLElBQU1BLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsRUFBbUI7QUFDL0IsUUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsUUFBUUMsTUFBckIsSUFBK0IsQ0FBQ0YsSUFBaEMsSUFBd0MsQ0FBQ0EsS0FBS0UsTUFBbEQsRUFBMEQ7QUFBRSxlQUFPLEtBQVA7QUFBZTs7QUFFM0UsUUFBTUMsU0FBU0gsS0FBS0csTUFBTCxDQUFZLGVBQU87QUFDOUIsWUFBTUMsYUFBYUMsSUFBSUMsT0FBSixDQUFZLEtBQVosRUFBbUIsSUFBbkIsQ0FBbkI7QUFDQSxZQUFNQyxNQUFNLElBQUlDLE1BQUosQ0FBV0osVUFBWCxFQUF1QixHQUF2QixDQUFaO0FBQ0EsWUFBTUssS0FBS0YsSUFBSUcsSUFBSixDQUFTVCxPQUFULENBQVg7O0FBRUEsZUFBT1EsRUFBUDtBQUNILEtBTmMsQ0FBZjs7QUFRQSxXQUFPLENBQUMsQ0FBQ04sT0FBTyxDQUFQLENBQVQ7QUFDSCxDQVpEOztBQWNBOzs7Ozs7QUFNQSxJQUFNUSxhQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCLFFBQUlDLE1B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LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRnVuY3Rpb25zXG5cbi8qKlxuICogQ2hlY2sgaWYgcGF0dGVybnMgbWF0Y2hlc1xuICpcbiAqIEBwYXJhbSB7YXJyYXl9IGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuY29uc3QgbWF0Y2hlcyA9IChkYXRhLCBwYXR0ZXJuKSA9PiB7XG4gICAgaWYgKCFwYXR0ZXJuIHx8ICFwYXR0ZXJuLmxlbmd0aCB8fCAhZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cbiAgICBjb25zdCBmaWx0ZXIgPSBkYXRhLmZpbHRlcih2YWwgPT4ge1xuICAgICAgICBjb25zdCBuZXdQYXR0ZXJuID0gdmFsLnJlcGxhY2UoL1xcLi9nLCAnXFwuJyk7XG4gICAgICAgIGNvbnN0IHJlZyA9IG5ldyBSZWdFeHAobmV3UGF0dGVybiwgJ2cnKTtcbiAgICAgICAgY29uc3QgaXMgPSByZWcudGVzdChwYXR0ZXJuKTtcblxuICAgICAgICByZXR1cm4gaXM7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gISFmaWx0ZXJbMF07XG59O1xuXG4vKipcbiAqIEdldHMgbWVtYmVyIGV4cHJlc3Npb24ga2V5c1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXRoXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmNvbnN0IGdldE9iakl0ZW0gPSAocGF0aCkgPT4ge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgdG9DaGVjaztcblxuICAgIGlmICghcGF0aCkgeyByZXR1cm4gYXJyOyB9XG5cbiAgICAvLyBGb3IgdGhlIGlkZW50aWZpZXIgbGlrZXMuLi5cbiAgICBhcnIgPSAocGF0aC50eXBlID09PSAnSWRlbnRpZmllcicpID8gW3BhdGgubmFtZSB8fCBwYXRoLm5vZGUubmFtZV0gOiBhcnI7XG5cbiAgICAvLyBMZXRzIGNoZWNrIHVuZGVyIG90aGVyIHBvc3NpYmxlIGtleXNcbiAgICB0b0NoZWNrID0gcGF0aC5vYmplY3QgfHwgcGF0aC5ub2RlICYmIHBhdGgubm9kZS5vYmplY3Q7XG4gICAgYXJyID0gdG9DaGVjayA/IGFyci5jb25jYXQoZ2V0T2JqSXRlbSh0b0NoZWNrKSkgOiBhcnI7XG5cbiAgICB0b0NoZWNrID0gcGF0aC5wcm9wZXJ0eSB8fCBwYXRoLm5vZGUgJiYgcGF0aC5ub2RlLnByb3BlcnR5O1xuICAgIGFyciA9IHRvQ2hlY2sgPyBhcnIuY29uY2F0KGdldE9iakl0ZW0odG9DaGVjaykpIDogYXJyO1xuXG4gICAgdG9DaGVjayA9IHBhdGguaWQgfHwgcGF0aC5ub2RlICYmIHBhdGgubm9kZS5pZDtcbiAgICBhcnIgPSB0b0NoZWNrID8gYXJyLmNvbmNhdChnZXRPYmpJdGVtKHRvQ2hlY2spKSA6IGFycjtcblxuICAgIHRvQ2hlY2sgPSBwYXRoLmxlZnQgfHwgcGF0aC5ub2RlICYmIHBhdGgubm9kZS5sZWZ0O1xuICAgIGFyciA9IHRvQ2hlY2sgPyBhcnIuY29uY2F0KGdldE9iakl0ZW0odG9DaGVjaykpIDogYXJyO1xuXG4gICAgdG9DaGVjayA9IHBhdGgucmlnaHQgfHwgcGF0aC5ub2RlICYmIHBhdGgubm9kZS5yaWdodDtcbiAgICBhcnIgPSB0b0NoZWNrID8gYXJyLmNvbmNhdChnZXRPYmpJdGVtKHRvQ2hlY2spKSA6IGFycjtcblxuICAgIHJldHVybiBhcnI7XG59O1xuXG4vKipcbiAqIEdldHMgcHJvcGVydHlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0c1xuICogQHBhcmFtIHtvYmplY3R9IHBhdGhcbiAqIEBwYXJhbSB7YXJyYXl9IHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHthcnJheX1cbiAqL1xuY29uc3QgZ2V0c0Fyckl0ZW0gPSAob3B0cywgcGF0aCwgcHJvcGVydGllcykgPT4ge1xuICAgIGNvbnN0IHJpZ2h0UHJvcGVydGllcyA9IFtdO1xuXG4gICAgLy8gR28gdGhyb3VnaCBlYWNoIHByb3BlcnR5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgbGV0IHRvQ2hlY2s7XG5cbiAgICAgICAgdG9DaGVjayA9IChwcm9wZXJ0eS50eXBlID09PSAnSWRlbnRpZmllcicpICYmIHByb3BlcnR5O1xuICAgICAgICB0b0NoZWNrID0gdG9DaGVjayB8fCBwcm9wZXJ0eS5ub2RlLnZhbHVlICYmIHByb3BlcnR5LmdldCgndmFsdWUnKTtcbiAgICAgICAgdG9DaGVjayA9IHRvQ2hlY2sgfHwgcHJvcGVydHkubm9kZS5sb2NhbCAmJiBwcm9wZXJ0eS5nZXQoJ2xvY2FsJyk7XG4gICAgICAgIHRvQ2hlY2sgPSB0b0NoZWNrIHx8IHByb3BlcnR5Lm5vZGUuaWQgJiYgcHJvcGVydHkuZ2V0KCdpZCcpO1xuICAgICAgICB0b0NoZWNrID0gdG9DaGVjayAmJiB0b0NoZWNrLm5vZGUgJiYgdG9DaGVjay5ub2RlLm5hbWU7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzKG9wdHMsIHRvQ2hlY2spKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEl0IHdhcyBmb3VuZCFcbiAgICAgICAgcmlnaHRQcm9wZXJ0aWVzLnB1c2goKHByb3BlcnRpZXMubGVuZ3RoID4gMSkgPyBwcm9wZXJ0eSA6IHBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiByaWdodFByb3BlcnRpZXM7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXhwb3J0XG5cbmV4cG9ydCB7IGdldE9iakl0ZW0sIGdldHNBcnJJdGVtLCBtYXRjaGVzIH07XG4iXX0=
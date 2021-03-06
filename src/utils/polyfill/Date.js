/* eslint-disable no-unused-expressions */

(function() {
  function b(a, b, d) {
    var e = {
      '%y': function() {
        var d = new Date(a),
          e = new Date(b);
        return c(d.getFullYear() - e.getFullYear());
      },
      '%d': function() {
        var c = a - b;
        return 0 >= c
          ? 0
          : -1 < d.indexOf('%Y') || -1 < d.indexOf('%y')
          ? parseInt((c / 864e5) % 365).toLocaleString()
          : parseInt(c / 864e5).toLocaleString();
      },
      '%h': function() {
        var c = a - b;
        return 0 >= c ? 0 : parseInt((c / 36e5) % 60);
      },
      '%n': function() {
        var c = a - b;
        return 0 >= c ? 0 : parseInt((c / 6e4) % 60);
      },
      '%s': function() {
        var c = a - b;
        return 0 >= c ? 0 : parseInt((c / 1e3) % 60);
      },
      '%Y': function() {
        var d = new Date(a),
          e = new Date(b);
        return c(d.getFullYear() - e.getFullYear())
          .toString()
          .padStart(2, '0');
      },
      '%D': function() {
        var c = a - b;
        return 0 >= c
          ? '00'
          : -1 < d.indexOf('%Y') || -1 < d.indexOf('%y')
          ? parseInt((c / 864e5) % 365)
              .toLocaleString()
              .toString()
              .padStart(2, '0')
          : parseInt(c / 864e5)
              .toLocaleString()
              .toString()
              .padStart(2, '0');
      },
      '%H': function() {
        var c = a - b;
        return 0 >= c
          ? '00'
          : parseInt((c / 36e5) % 60)
              .toString()
              .padStart(2, '0');
      },
      '%N': function() {
        var c = a - b;
        return 0 >= c
          ? '00'
          : parseInt((c / 6e4) % 60)
              .toString()
              .padStart(2, '0');
      },
      '%S': function() {
        var c = a - b;
        return 0 >= c
          ? '00'
          : parseInt((c / 1e3) % 60)
              .toString()
              .padStart(2, '0');
      },
    };
    return Object.keys(e).reduce(function(a, b) {
      return 0 <= a.indexOf(b) ? a.replace(b, e[b]()) : a;
    }, d);
  }
  function a(a) {
    var b = a % 12;
    return 0 == b ? 12 : b;
  }
  var c = Math.abs;
  (Date.prototype.format = function(b) {
    function c(a, b) {
      var c = a
        .toString()
        .split('')
        .reverse()
        .join('');
      return c
        .substr(c.length - b)
        .split('')
        .reverse()
        .join('');
    }
    var d = this,
      e = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      f = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      g = {
        '%y': function() {
          return d.getFullYear();
        },
        '%m': function() {
          return d.getMonth() + 1;
        },
        '%d': function() {
          return d.getDate();
        },
        '%f': function() {
          return e[d.getMonth()];
        },
        '%w': function() {
          return f[d.getDay()];
        },
        '%i': function() {
          return d.getHours();
        },
        '%h': function() {
          return a(d.getHours());
        },
        '%n': function() {
          return d.getMinutes();
        },
        '%s': function() {
          return d.getSeconds();
        },
        '%a': function() {
          return 12 <= d.getHours() ? 'PM' : 'AM';
        },
        '%Y': function() {
          var a = d.getFullYear().toString();
          return a.substring(a.length - 2);
        },
        '%F': function() {
          return c(e[d.getMonth()], 3);
        },
        '%W': function() {
          return c(f[d.getDay()], 3);
        },
        '%I': function() {
          return d
            .getHours()
            .toString()
            .padStart(2, '0');
        },
        '%M': function() {
          return (d.getMonth() + 1).toString().padStart(2, '0');
        },
        '%D': function() {
          return d
            .getDate()
            .toString()
            .padStart(2, '0');
        },
        '%H': function() {
          return a(d.getHours())
            .toString()
            .padStart(2, '0');
        },
        '%N': function() {
          return d
            .getMinutes()
            .toString()
            .padStart(2, '0');
        },
        '%S': function() {
          return d
            .getSeconds()
            .toString()
            .padStart(2, '0');
        },
      };
    return Object.keys(g).reduce(function(a, b) {
      return 0 <= a.indexOf(b) ? a.replace(b, g[b]()) : a;
    }, b);
  }),
    (Date.prototype.timeDiff = function(a, c) {
      return a instanceof Date
        ? b(a.getTime(), this.getTime(), c)
        : b(a, this.getTime(), c);
    }),
    (Date.prototype.timeAgo = function(c, d) {
      var e = {
          '%s': 'second',
          '%n': 'minute',
          '%h': 'hour',
          '%d': 'day',
          '%m': 'month',
          '%y': 'year',
        },
        f = void 0;
      f =
        c instanceof Date
          ? b(this.getTime(), c.getTime(), d.join('|')).split('|')
          : b(this.getTime(), c, d.join('|')).split('|');
      var g = d.reduce(function(a, b, c) {
        var d = parseInt(f[c]),
          g = b.toLowerCase();
        if (0 === d || e[g] === void 0) return a;
        var h = a ? a + ' ' : '';
        return 1 === d ? h + f[c] + ' ' + e[g] : h + f[c] + ' ' + e[g] + 's';
      }, null);
      if (!g) {
        for (var h = Object.keys(e), i = 0; i < h.length; i++)
          if (d.includes(h[i]) || d.includes(h[i].toUpperCase())) {
            var j = d[d.indexOf(h[i])];
            return (
              j || (j = d[d.indexOf(h[i].toUpperCase())]),
              b(1, 1, j) + ' ' + e[h[i]] + 's ago'
            );
          }
        return '';
      }
      return g + ' ago';
    }),
    (Date.prototype.age = function() {
      var a =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : new Date();
      if (a < this) return 0;
      var b = c(this.getFullYear() - a.getFullYear());
      return (
        0 < b && (b -= 1),
        a.getMonth() > this.getMonth() ||
        (a.getMonth() === this.getMonth() && a.getDate() >= this.getDate())
          ? b + 1
          : b
      );
    });
})();

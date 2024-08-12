
"use strict";

class static_log_g {
  constructor(table) {
    this.table = table;
  }

  find(path) {
    return this.table[path];
  }

  static static_log(table) {
    if (!static_log_g.instance) {
      static_log_g.instance = new static_log_g(table);
    }
    return static_log_g.instance;
  }
}

/**
 * A function representing a global cache that contains a copy of the orginal static-table
 * which is a file that contains information about every static file such as thier 
 * last modified dates and current entity-tags
 */
const static_log = (table) => static_log_g.static_log(table);

export default static_log;

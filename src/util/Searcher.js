import deburr from "lodash/deburr";

export default class Searcher {
  /**
   * @param {Array}
   */
  fields = [];
  z;

  /**
   *
   * @param {string} field
   */
  setField(field) {
    this.fields.push(field);
    return this;
  }

  /**
   *
   * @param {Array} data
   */
  setData(data) {
    this.data = data;
    return this;
  }

  /**
   *
   * @param {string} searchTerm
   * @returns {Array}
   */
  findAll(searchTerm) {
    const matcher = new RegExp(deburr(searchTerm), "i");
    const result = this.data.filter(item => {
      return this.fields.some(field => matcher.test(deburr(item[field])));
    });

    return result;
  }
}

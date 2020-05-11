import * as JsSearch from "js-search";

export default class Searcher {
  /**
   * @param {string} primaryKey
   */
  constructor(primaryKey) {
    this.searcher = new JsSearch.Search(primaryKey);
    this.searcher.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
    this.searcher.searchIndex = new JsSearch.UnorderedSearchIndex();
  }

  /**
   * @param {string} index
   * @returns {Searcher}
   */
  addIndex(index) {
    this.searcher.addIndex(index);
    return this;
  }

  /**
   * @param {array} documents
   * @returns {Searcher}
   */
  addDocuments(documents) {
    this.searcher.addDocuments(documents);
    return this;
  }

  /**
   * @param {any} searchTerm
   * @returns {Array}
   */
  search(searchTerm) {
    return this.searcher.search(searchTerm);
  }
}

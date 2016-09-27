import ReactiveVar from 'trackr-reactive-var';

export default class Store {
  constructor(name, data = {}) {
    this._name = name;
    this.reactiveVar = new ReactiveVar(data);
  }

  /**
   * Returns the name of the store
   * @return {String}   the name of the store
   */
  get name() {
    return this._name;
  }

  /**
   * Returns the store
   * @return {Object}   the stores contents
   */
  subscribe() {
    return this.reactiveVar.get();
  }

  /**
   * Updates the store
   * @param  {Object} data  the changes to be made
   */
  update(data) {
    this.reactiveVar.set(
      Object.assign({}, this.subscribe(), data)
    );
  }
}

class RelactionDto {

     #relationGroupId;
     #order;
     #categoryGroupId;
     #values;
     #operator;
     #valueType;

     constructor(relationGroupId, order, categoryGroupId, values, operator, valueType) {
          this.#relationGroupId = relationGroupId;
          this.#order = order;
          this.#categoryGroupId = categoryGroupId;
          this.#values = values;
          this.#operator = operator;
          this.#valueType =valueType;
     }

     get relationGroupId() {
          return this.#relationGroupId;
     }

     get order() {
          return this.#order;
     }

     get categoryGroupId() {
          return this.#categoryGroupId;
     }
     
     get values() {
          return this.#values;
     }

     get operator() {
          return this.#operator;
     }

     get valueType() {
          return this.#valueType;
     }
}

export default RelactionDto;
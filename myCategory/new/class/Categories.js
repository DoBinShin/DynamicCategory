class Categories {

     #id;
     #name;
     #categoryGroupId;

     constructor(id, name, categoryGroupId) {
          this.#id = id;
          this.#name = name;
          this.#categoryGroupId = categoryGroupId;
     }

     get id() {
          return this.#id;
     }

     get name() {
          return this.#name;
     }

     get categoryGroupId() {
          return this.#categoryGroupId;
     }
     
}

export default Categories;
class CategoryGroups {

     #id;
     #name;
     #categories;

     constructor(id, name) {
          this.#id = id;
          this.#name = name;
     }

     get id() {
          return this.#id;
     }

     get name() {
          return this.#name;
     }

     get categories() {
          return this.#categories;
     }

     set categories(categories) {
          this.#categories = categories;
     }
     
}

export default CategoryGroups;
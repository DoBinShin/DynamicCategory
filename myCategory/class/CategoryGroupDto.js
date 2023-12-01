class CategoryGroupDto {

     #id;
     #name;
     #categories;

     constructor(param) {
          this.#id = param.id;
          this.#name = param.name;
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

export default CategoryGroupDto;
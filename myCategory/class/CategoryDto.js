class CategoryDto {

     #id;
     #name;
     #categoryGroupId;

     constructor(param) {
          this.#id = param.id;
          this.#name = param.name;
          this.#categoryGroupId = param.categoryGroupId;
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

export default CategoryDto;
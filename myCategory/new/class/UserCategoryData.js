class UserCategoryData {
     #categoryGroups;
     #categories;
     #relations;
     #defaultCategoryIdList;
     
     constructor(param) {
         this.#categoryGroups = param.categoryGroups;
         this.#categories = param.categories;
         this.#relations = param.relations;
         this.#defaultCategoryIdList = param.defaultCategoryIdList;
     }

     get categoryGroups() {
         return this.#categoryGroups;
     }

     get categories() {
         return this.#categories;
     }

     get relations() {
         return this.#relations;
     }

     get defaultCategoryIdList() {
         return this.#defaultCategoryIdList;
     }
 }

 export default UserCategoryData;
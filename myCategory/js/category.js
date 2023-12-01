import CategoryDto from "../class/CategoryDto.js";
import CategoryGroupDto from "../class/CategoryGroupDto.js";
import RelationDto from "../class/RelationDto.js";

const data = {
     categoryGroupMap : {},
     categoryMap : {},
     relationTree : {},
     defaultCategorySymbol : Symbol('default')
}


const loadCategory = async () => {
     let categories = await fetch("./data/categories.json").then(res => res.json());
     let categoryGroups = await fetch("./data/categoryGroup.json").then(res => res.json());
     let relations = await fetch("./data/relations.json").then(res => res.json());

     console.log(categories, categoryGroups, relations);    


     categoryGroups.forEach(categoryGroup=>(data.categoryGroupMap[categoryGroup.id] = categoryGroup));
     categories.forEach(category=>(data.categoryMap[category.id] = category));

     for(let key in data.categoryMap) {
          let category = data.categoryMap[key];
          let categoryGroup = data.categoryGroupMap[category.categoryGroupId];
          category.categoryGroup = categoryGroup;
          categoryGroup.categories = categoryGroup.categories || [];
          categoryGroup.categories.push(category);
     }


     categories = categories.map(category => {
          return new CategoryDto({...category});
     });

     categoryGroups = categoryGroups.map(categoryGroup=> {
          const group = new CategoryGroupDto({...categoryGroup});
          group.categories = categories.filter(category => {
               if(categoryGroup.id == category.categoryGroupId) {
                    return category;
               }
          });
          return group;
     });


     for(let key in data.categoryMap) {
          let category = data.categoryMap[key];
          let categoryGroup = data.categoryGroupMap[category.categoryGroupId];
          category.categoryGroup = categoryGroup;
          categoryGroup.categories = categoryGroup.categories || [];
          categoryGroup.categories.push(category);
     }



     data.relationTree = generaterelationTree(relations);

     let defaultCategoryIdList = [1, 5, 19, 26, 24];
     f(data.relationTree, defaultCategoryIdList);
}

let generaterelationTree = function(relations) {
     let relationTree = {
       categoryGroupId: relations[0].categoryGroupId,
       categories: {}
     };      
     let prevRelationgroupId=0;
     let current = undefined;

     relations.forEach(relation=>{
       if(prevRelationgroupId==relation.relationGroupId) {
         current.categoryGroupId = relation.categoryGroupId;
         current.categories = current.categories || {};
       } else if(prevRelationgroupId!=relation.relationGroupId) { // 끝났음
         current = relationTree;
         prevRelationgroupId = relation.relationGroupId;
       }

       let categoryId = relation.values ? (relation.operator + '|' + relation.valueType + '|' + relation.values):data.defaultCategorySymbol;
       current.categories[categoryId] = current.categories[categoryId] || {};
       current = current.categories[categoryId];
     });

     return relationTree;
};


      
      
let toggle = false;
let asyncCategoryRequestMap = {
     '2': function(categoryGroupId) {
          toggle=!toggle;
          return new Promise((resolve, reject)=>{
               setTimeout(async ()=>{ 
                    const result = await fetch("./data/newCategories.json").then(res => res.json()); 
                    resolve(result[categoryGroupId][toggle]);
               }, 1000);
          });
     }
};

let asyncLoadCategoryGroup = function(categoryGroupId) {
     let categoryLoader = asyncCategoryRequestMap[categoryGroupId];

     if(categoryLoader) {
          return categoryLoader(categoryGroupId).then(categories=>{
               data.categoryGroupMap[categoryGroupId].categories = categories;
               return data.categoryGroupMap[categoryGroupId];
     });
     } else {
          return Promise.resolve(data.categoryGroupMap[categoryGroupId]);
     }
};

    

      

let locker = (function() {
     let lockFlag = false;

     return {
          lock: function() {
               if(!lockFlag) {
               lockFlag = true;
               //처리 로직
               }
          }, 
          unlock: function() {
               if(lockFlag) {
               lockFlag = true;
               //처리 로직
               }
          }
     }
})();

      
      
let getNextRelation = (function() {
     let operatorMap = {
          '=': (valuesString, value)=>{
               let result = (',' + valuesString + ',').startsWith(',' + value + ',');
               console.log('=', valuesString, value, result);
               return result;
          },
          '<': (valuesString, value)=>{ //만들자
               let result = (',' + valuesString + ',').startsWith(',' + value + ',');
               console.log('=', valuesString, value, result);
               return result;
          },
          '>': (valuesString, value)=>{ //만들자
               let result = (',' + valuesString + ',').startsWith(',' + value + ',');
               console.log('=', valuesString, value, result);
               return result;
          },
          'in': (valuesString, value)=>{
               let result = -1<(',' + valuesString + ',').indexOf(',' + value + ',');
               console.log('in', valuesString, value, result);
               return result;
          }
     };

     return function(relation, categoryId) {
     if(categoryId) {
          for(let key in relation.categories) {
          let result = /(.*?)\|(.*?)\|(.*)/.exec(key);

          if(result) {
               if(operatorMap[result[1]](result[3], data.categoryMap[categoryId] && data.categoryMap[categoryId][result[2]])) {
               return relation.categories[key];
               }
          }
          }
     }
     };
})();


let f = function (currentRelation, defaultCategoryIdList) {
     if(0<Object.keys(currentRelation).length) {
       locker.lock();
       let defaultCategoryId = defaultCategoryIdList.shift();
       asyncLoadCategoryGroup(currentRelation.categoryGroupId).then(categoryGroup=>{
         let nextRelation =
                 getNextRelation(currentRelation, defaultCategoryId) ||
                 getNextRelation(currentRelation, categoryGroup.categories[0].id) ||
           currentRelation.categories[data.defaultCategorySymbol];
         createSelectTag(categoryGroup, defaultCategoryId, currentRelation, defaultCategoryIdList);
         f(nextRelation, defaultCategoryIdList);
       })
     } else {
       locker.unlock();
     }
}

let createSelectTag = function(categoryGroup, defaultCategoryId, currentRelation, defaultCategoryIdList) {
     let div = document.createElement('div');
     let html = '';

     div.classList.add('select');
     html+=`<label>${categoryGroup.name}</label>`;
     html+=`<select>`;
     categoryGroup.categories.forEach(category=>{
       let selected = (category.id===defaultCategoryId)? 'selected':'';
       html+=`  <option value=${category.id} ${selected}>${category.name}</option>`;
     });
     html+=`</select>`;

     div.innerHTML = html;
     let select = div.children[1];
     
     select.addEventListener('change', (e)=>{
       let currentDiv = div.nextElementSibling;
       
       while(currentDiv?.classList.contains('select')) {
         let removeDiv = currentDiv;
         currentDiv=currentDiv.nextElementSibling;
         removeDiv.remove();
       }

       let nextRelation = 
         getNextRelation(currentRelation, e.currentTarget.value) ||
         currentRelation.categories[data.defaultCategorySymbol];
       if(nextRelation) {
         f(nextRelation, defaultCategoryIdList);
       }
     });
     
     document.getElementById('container').appendChild(div);
}

export default loadCategory;
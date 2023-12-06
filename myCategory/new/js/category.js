import UserCategory from "../class/UserCategory.js";
import Categories from "../class/Categories.js";
import CategoryGroups from "../class/CategoryGroups.js";
import Relations from "../class/Relations.js";

const data = {
     categoryGroupMap : {},
     categoryMap : {},
     relationTree : {},
     defaultCategorySymbol : Symbol('default')
}

const loadCategory = (userCategory, categoryGroupList, categoriesList, relationsList, defaultCategoryIdList, targetUrl) => {
    
     categoryGroupList.forEach(categoryGroup=>(data.categoryGroupMap[categoryGroup.id] = categoryGroup));
     categoriesList.forEach(category=>(data.categoryMap[category.id] = category));

     for(let key in data.categoryMap) {
          let category = data.categoryMap[key];
          let categoryGroup = data.categoryGroupMap[category.categoryGroupId];
          category.categoryGroup = categoryGroup;
          categoryGroup.categories = categoryGroup.categories || [];
          categoryGroup.categories.push(category);
     }

     data.relationTree = generaterelationTree(relationsList);

     findCategoryRelations(data.relationTree, defaultCategoryIdList, userCategory, targetUrl);
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
     '2': function(categoryGroupId, targetUrl) {
          toggle=!toggle;
          return new Promise((resolve, reject)=>{
               setTimeout(async ()=>{ 
                    const result = await fetch(targetUrl).then(res => res.json()); 
                    resolve(result[categoryGroupId][toggle]);
               }, 1000);
          });
     }
};

let asyncLoadCategoryGroup = function(categoryGroupId, targetUrl) {
     let categoryLoader = asyncCategoryRequestMap[categoryGroupId];

     if(categoryLoader) {
          return categoryLoader(categoryGroupId, targetUrl).then(categories=>{
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
          '<': (valuesString, value)=>{ 
               let result = (',' + valuesString + ',').startsWith(',' + value + ',');
               console.log('=', valuesString, value, result);
               return result;
          },
          '>': (valuesString, value)=>{ 
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


let findCategoryRelations = function (currentRelation, defaultCategoryIdList, userCategory, targetUrl) {
     if(0 < Object.keys(currentRelation).length) {
          locker.lock();
          let defaultCategoryId = defaultCategoryIdList.shift();
          asyncLoadCategoryGroup(currentRelation.categoryGroupId, targetUrl).then(categoryGroup=>{
               let nextRelation =
                    getNextRelation(currentRelation, defaultCategoryId) ||
                    getNextRelation(currentRelation, categoryGroup.categories[0].id) ||
               currentRelation.categories[data.defaultCategorySymbol];
               createSelectTag(categoryGroup, defaultCategoryId, currentRelation, defaultCategoryIdList, userCategory, targetUrl);
               findCategoryRelations(nextRelation, defaultCategoryIdList, userCategory, targetUrl);
          });
     } else {
       locker.unlock();
     }
}

let createSelectTag = function(categoryGroup, defaultCategoryId, currentRelation, defaultCategoryIdList, userCategory, targetUrl) {
     
     const {startElement, categoryElement, eventTarget} = userCategory.createTags(categoryGroup, defaultCategoryId);

     if(eventTarget) {
          eventTarget.childNodes.forEach(item => {
               item.addEventListener(userCategory.eventName, 
                    replaceCategory(userCategory, categoryElement, currentRelation, defaultCategoryIdList, targetUrl));
          });
     } else {
          categoryElement.children[1].addEventListener(userCategory.eventName, 
               replaceCategory(userCategory, categoryElement, currentRelation, defaultCategoryIdList, targetUrl));
     }
     
     startElement.appendChild(categoryElement);
}

let replaceCategory = (UserCategory, categoryElement, currentRelation, defaultCategoryIdList, targetUrl) => {
     return (e) => {
          let currentDiv = categoryElement.nextElementSibling;
               
          while(currentDiv?.classList.contains(UserCategory.parentClassName)) {
               let removeDiv = currentDiv;
               currentDiv=currentDiv.nextElementSibling;
               removeDiv.remove();
          }
     
          let nextRelation = 
               getNextRelation(currentRelation, e.currentTarget.value) ||
               currentRelation.categories[data.defaultCategorySymbol];

          if(nextRelation) {
               findCategoryRelations(nextRelation, defaultCategoryIdList, UserCategory, targetUrl);
          }
     }
}

export {loadCategory, UserCategory, Categories, CategoryGroups, Relations};
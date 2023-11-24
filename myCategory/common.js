const {categoryMap, categoryGroupMap, defaultCategorySymbol, relationTree, generateRelationTree} = (function() {
    let defaultCategorySymbol = Symbol('default');

    let loadCategoryGroups = function() {
        return [
            {
            id: 1,
            name: '직군'	
            }, {
            id: 2,
            name: '개발자구분'
            }, {
            id: 3,
            name: '기획자구분'
            }, {
            id: 4,
            name: '디자이너구분'
            }, {
            id: 5,
            name: 'BE보유스킬'
            }, {
            id: 6,
            name: 'FE보유스킬'
            }, {
            id: 7,
            name: '숙련도'
            }, {
            id: 8,
            name: '경력'
            }, {
            id: 9,
            name: 'ME플랫폼'
            }, {
            id: 10,
            name: 'Spring Type'
            }, {
            id: 11,
            name: 'JDK Version'
            }
        ];
    }

    let loadCategories = function() {
        return [
            { id: 1,
            name: '개발자',
            categoryGroupId: 1, 
            },
            { id: 2,
            name: '기획자',
            categoryGroupId: 1, 
            },
            { id: 3,
            name: '디자이너',
            categoryGroupId: 1, 
            },
            { id: 4,
            name: 'BE',
            categoryGroupId: 2, 
            },
            { id: 5,
            name: 'FE',
            categoryGroupId: 2, 
            },
            { id: 6,
            name: 'ME',
            categoryGroupId: 2, 
            },
            { id: 7,
            name: 'UI',
            categoryGroupId: 2, 
            },
            { id: 8,
            name: '서비스기획',
            categoryGroupId: 3, 
            },
            { id: 9,
            name: '화면기획',
            categoryGroupId: 3, 
            },
            { id: 10,
            name: '개발기획',
            categoryGroupId: 3, 
            },
            { id: 11,
            name: '상품디자인',
            categoryGroupId: 4, 
            },
            { id: 12,
            name: '가구디자인',
            categoryGroupId: 4, 
            },
            { id: 13,
            name: '게임디자인',
            categoryGroupId: 4, 
            },
            { id: 14,
            name: 'JAVA',
            categoryGroupId: 5, 
            },
            { id: 15,
            name: 'Spring',
            categoryGroupId: 5, 
            },
            { id: 16,
            name: 'C',
            categoryGroupId: 5, 
            },
            { id: 17,
            name: 'C#',
            categoryGroupId: 5, 
            },
            { id: 18,
            name: 'js',
            categoryGroupId: 6, 
            },
            { id: 19,
            name: 'ts',
            categoryGroupId: 6, 
            },
            { id: 20,
            name: 'react',
            categoryGroupId: 6, 
            },
            { id: 21,
            name: 'vue',
            categoryGroupId: 6, 
            },
            { id: 22,
            name: '상',
            categoryGroupId: 7, 
            },
            { id: 23,
            name: '중',
            categoryGroupId: 7, 
            },
            { id: 24,
            name: '하',
            categoryGroupId: 7, 
            },
            { id: 25,
            name: '주니어',
            categoryGroupId: 8, 
            },
            { id: 26,
            name: '시니어',
            categoryGroupId: 8, 
            },
            { id: 27,
            name: 'ios',
            categoryGroupId: 9, 
            },
            { id: 28,
            name: 'android',
            categoryGroupId: 9, 
            },
            { id: 29,
            name: 'mvc',
            categoryGroupId: 10, 
            },
            { id: 30,
            name: 'boots',
            categoryGroupId: 10, 
            },
            { id: 31,
            name: '~7',
            categoryGroupId: 11, 
            },
            { id: 32,
            name: '8~15',
            categoryGroupId: 11, 
            },
            { id: 33,
            name: '15~',
            categoryGroupId: 11, 
            },
        ];
    };

    let loadRelations = function() {
        return [
            {
            relationGroupId: 1,
            order: 1,
            categoryGroupId: 1,
            categoryId: 1
            },
            {
            relationGroupId: 1,
            order: 2,
            categoryGroupId: 2,
            categoryId: 4
            },
            {
            relationGroupId: 1,
            order: 3,
            categoryGroupId: 5,
            categoryId: 14
            },
            {
            relationGroupId: 1,
            order: 4,
            categoryGroupId: 11,
            categoryId: null
            },          
            {
            relationGroupId: 2,
            order: 1,
            categoryGroupId: 1,
            categoryId: 1
            },
            {
            relationGroupId: 2,
            order: 2,
            categoryGroupId: 2,
            categoryId: 4
            },
            {
            relationGroupId: 2,
            order: 3,
            categoryGroupId: 5,
            categoryId: 15
            },
            {
            relationGroupId: 2,
            order: 4,
            categoryGroupId: 10,
            categoryId: null
            },
            {
            relationGroupId: 3,
            order: 1,
            categoryGroupId: 1,
            categoryId: 1
            },
            {
            relationGroupId: 3,
            order: 2,
            categoryGroupId: 2,
            categoryId: 4
            },
            {
            relationGroupId: 3,
            order: 3,
            categoryGroupId: 5,
            categoryId: 16
            },
            {
            relationGroupId: 3,
            order: 4,
            categoryGroupId: 7,
            categoryId: null
            },
            {
            relationGroupId: 4,
            order: 1,
            categoryGroupId: 1,
            categoryId: 1
            },
            {
            relationGroupId: 4,
            order: 2,
            categoryGroupId: 2,
            categoryId: 4
            },
            {
            relationGroupId: 4,
            order: 3,
            categoryGroupId: 5,
            categoryId: 17
            },
            {
            relationGroupId: 4,
            order: 4,
            categoryGroupId: 7,
            categoryId: null
            },
            {
            relationGroupId: 5,
            order: 1,
            categoryGroupId: 1,
            categoryId: 1
            },
            {
            relationGroupId: 5,
            order: 2,
            categoryGroupId: 2,
            categoryId: 5
            },
            {
            relationGroupId: 5,
            order: 3,
            categoryGroupId: 6,
            categoryId: null
            },
            {
            relationGroupId: 5,
            order: 4,
            categoryGroupId: 8,
            categoryId: null
            },
            {
            relationGroupId: 5,
            order: 5,
            categoryGroupId: 7,
            categoryId: null
            },
            {
            relationGroupId: 6,
            order: 1,
            categoryGroupId: 1,
            categoryId: 1
            },
            {
            relationGroupId: 6,
            order: 2,
            categoryGroupId: 2,
            categoryId: 6
            },
            {
            relationGroupId: 6,
            order: 3,
            categoryGroupId: 8,
            categoryId: null
            },
            {
            relationGroupId: 6,
            order: 4,
            categoryGroupId: 9,
            categoryId: null
            },

            {
            relationGroupId: 7,
            order: 1,
            categoryGroupId: 1,
            categoryId: 1
            },
            {
            relationGroupId: 7,
            order: 2,
            categoryGroupId: 2,
            categoryId: 7
            },
            {
            relationGroupId: 7,
            order: 3,
            categoryGroupId: 8,
            categoryId: null
            },
            {
            relationGroupId: 8,
            order: 1,
            categoryGroupId: 1,
            categoryId: 2
            },
            {
            relationGroupId: 8,
            order: 1,
            categoryGroupId: 3,
            categoryId: null
            },
            {
            relationGroupId: 8,
            order: 2,
            categoryGroupId: 8,
            categoryId: null
            },
            {
            relationGroupId: 9,
            order: 1,
            categoryGroupId: 1,
            categoryId: 3
            },
            {
            relationGroupId: 9,
            order: 2,
            categoryGroupId: 4,
            categoryId: null
            },
            {
            relationGroupId: 9,
            order: 3,
            categoryGroupId: 8,
            categoryId: null
            }
        ]
    };

    let categoryGroups = loadCategoryGroups();
    let categories = loadCategories();

    let categoryGroupMap = {};
    let categoryMap = {};


    /** map처럼 만드는 과정 key / value */
    // categoryGroupMap애 카테고리 id 별/ 카데코리 정보 형태로 만듦 
    categoryGroups.forEach(categoryGroup=>(categoryGroupMap[categoryGroup.id] = categoryGroup));
    // categoryMap에 카테고리 row의 id별, row 정보 형태로 만듦 
    categories.forEach(category=>(categoryMap[category.id] = category));

    // console.log(categoryMap);
    // console.log(categoryGroupMap);
    // debugger;

    for(let key in categoryMap) {
        
    // row data 하나를 추출
    let category = categoryMap[key];  
    // row의 카테고리 그룹id로 카테고리 정보를 추출
    let categoryGroup = categoryGroupMap[category.categoryGroupId];

    // 현재 row에 categoryGroup 프로퍼티에 카테고리 정보를 넣어줌
    category.categoryGroup = categoryGroup;
    // 현재 카테고리 정보에 row data를 넣어줌 (만약 이전 data가 없으면 빈 배열을 넣어줌)
    categoryGroup.categories = categoryGroup.categories || [];
    categoryGroup.categories.push(category);  // 카테고리 정보엔 자신의 row데이터가 array 형태로 저장 됨
    }

    // console.log(categoryMap);
    // console.log(categoryGroupMap);
    // debugger;


    let relations = loadRelations();
    let relationTree = {
    categoryGroupId: 1,
    categories: {}
    }; 

    let generateRelationTree = function() {
        let prevRelationgroupId=0;
        let current = undefined;
        let idx = 0;

        relations.forEach(relation=>{
            if(prevRelationgroupId === relation.relationGroupId) {
            // 이전 릴레이션 그룹id와 릴레이션의 릴레이션 그룹id가 일치하면
            // current에 릴레이션의 그룹id를 넣어주고, caterories엔 기존 categories 정보를 넣어줌
            current.categoryGroupId = relation.categoryGroupId;
            current.categories = current.categories || {};
            } else if(prevRelationgroupId !== relation.relationGroupId) {
            // 이전 릴레이션 그룹id와 릴레이션의 릴레이션 그룹id가 일치하지 않으면 
            // current에 relationTree 기본 정보를 생성해줌
            current = relationTree;

            // 다음 비교를 위해 이전 릴레이션 그룹id를 넣어줌
            prevRelationgroupId = relation.relationGroupId;
            }

            // categoryId에 릴레이션의 카테고리 id가 있으면 id를, 없으면 default값을 저장
            let categoryId = relation.categoryId || defaultCategorySymbol;

            // current의 categories에 위의 현재 categoryId 프로퍼티에 value가 있으면 유지, 없으면 빈 객체로 저장
            current.categories[categoryId] = current.categories[categoryId] || {};
            // current에 현재 categories의 categoryId정보를 저장
            current = current.categories[categoryId];
            // current는 relationsTree와 메모리주소를 공유함
        })
    };
    generateRelationTree();

    return {categoryMap, categoryGroupMap, defaultCategorySymbol, relationTree, generateRelationTree};
    
})();


/**
 * 카테고리 생성 메서드
 * @param {Element} parentElement category를 생성할 최상위 Element, default = document.body
 * @param {String} className category selectBox의 class명, default = ".sel"
 * @param {Array} data default categoryId 정보 또는 선택된 categoryId 정보, default = []
 * @param {Number} index data Array의 index에 접근할 변수, default = 0
 * @param {Object} obj relationTree
 */
function makeCategory(parentElement = document.body, className = ".sel",  data = [], index = 0, obj = relationTree) {

    if(!data.length) {
        makeDefaultCategory(obj, data);
    }

    const categoryGroups = categoryGroupMap[obj.categoryGroupId];
    const paramCategoryId = data[index];
    const categories = obj.categories[paramCategoryId] ||
        obj.categories[Object.keys(obj.categories)[0]] ||
        obj.categories[defaultCategorySymbol];

    createCategory(categoryGroups.categories, obj.categoryGroupId, paramCategoryId, parentElement, className);

    if(0 < Object.keys(categories).length) {
        makeCategory(parentElement, className, data, ++index, categories);
    }
}


/** 
 * 디폴트값이 없을 경우 첫번째 목록으로 디폴트값 생성
 * @param {Object} obj relationTree
 * @param {Array} arr 첫 번째 카테고리의 정보를 담을 array
 */
function makeDefaultCategory(obj, arr) {
    for(const key in obj.categories) {
        arr.push(key);
        makeDefaultCategory(obj.categories[key], arr);
        break;
    }
}

function createCategory(categoryGroups, currentCategoryGroupId, paramCategoryId, parentElement, className) {
    const {div, selectBox, label} = createElements(currentCategoryGroupId, className);
    createOptions(selectBox, categoryGroups, paramCategoryId);
    addChangeEvent(selectBox, parentElement, className);
    div.append(label, selectBox);
    parentElement.append(div);
}


/** div, selectBox, label Element 생성 */
function createElements (currentCategoryGroupId, className) {
  const div = document.createElement("div");
  const label = document.createElement("label");
  label.htmlFor = currentCategoryGroupId;
  label.innerText = categoryGroupMap[currentCategoryGroupId].name;
  const selectBox = document.createElement("select");
  selectBox.className = className || ".sel";
  selectBox.id = currentCategoryGroupId;
  return {div, selectBox, label};
}

function createOptions(selectBox, categoryGroups, paramCategoryId) {
    for (const key in categoryGroups) {
        const {id, name} = categoryGroups[key];
        let option = document.createElement("option");
        option.value = id;
        option.innerText = name;
        console.log(id, paramCategoryId);
        if(id == paramCategoryId) {
            option.selected = true;
        }
        selectBox.append(option);
    }  
}

/**
 * selectBox의 onChange 이벤트 생성 및 처리
 * @param {Element} selectBox 이벤트가 생성될 selectBox Element
 * @param {Element} parentElement 최상위 Element
 * @param {String} className selectBox의 class 명
 */
function addChangeEvent(selectBox, parentElement, className) {
    selectBox.addEventListener("change", () => {
        const arr = findSelectedOption(className);
        parentElement.replaceChildren();
        makeCategory(parentElement, className, arr);
    });
}

function findSelectedOption(className) {
    const element = document.querySelectorAll(`.${className} option:checked`);
    const arr = [];
    element.forEach(item => {
        arr.push(item.value);
    });
    return arr;
}

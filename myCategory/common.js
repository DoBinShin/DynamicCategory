let {categoryMap, categoryGroupMap, defaultCategorySymbol, relationTree, generateRelationTree, relations} = (function() {
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
            }, {
            id: 12,
            name: '년도'
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
            option: '<',
            target: 36,
            },
            { id: 34,
            name: '2020',
            categoryGroupId: 12,
            },
            { id: 35,
            name: '2021',
            categoryGroupId: 12,
            },
            { id: 36,
            name: '2022',
            categoryGroupId: 12,
            },
            { id: 37,
            name: '2023',
            categoryGroupId: 12,
            },
        ];
    };

    let loadOptions = function() {
        return [
            {
                id : 1,
                option : '<',
                target : 36,
                categoryId : 33
            }
        ];
    }

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
            //---
            {
                relationGroupId: 1,
                order: 4,
                categoryGroupId: 12,
                categoryId: 34
            },
            //---
            {
            relationGroupId: 1,
            order: 5,
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

    let generateRelationTree = function(relations) {
        let relationTree = {
            categoryGroupId: relations[0].categoryGroupId,
            categories: {}
        };
        let prevRelationgroupId=0;
        let prevRelation = undefined;
        let current = undefined;

        relations.forEach(relation=>{
            if(prevRelationgroupId==relation.relationGroupId) {
                current.categoryGroupId = relation.categoryGroupId;
                current.categories = current.categories || {};
            } else if(prevRelationgroupId!=relation.relationGroupId) { // 끝났음
                current = relationTree;
                prevRelationgroupId = relation.relationGroupId;
                prevRelation = relation;
            }

            console.log(prevRelation, current);

            let bool = false;
            // switch (prevRelation.operator) {
            //     case '<' :
            //         if(prevRelation.values[0] < relation.values) bool =  true;
            //         break;
            //     case '>' :
            //         if(prevRelation.values[0] > relation.values) bool = true;
            //         break;
            //     case 'in' :
            //         if(prevRelation.values.includes(relation.values)) bool = true;
            //         break;
            //     default :
            //         if(prevRelation.values[0] == relation.values[0]) bool = true;
            //         break;
            // }
            let categoryId = relation.categoryId || defaultCategorySymbol;
            current.categories[categoryId] = current.categories[categoryId] || {};
            current = current.categories[categoryId];
        });

        return relationTree;
    };
    let relationTree = generateRelationTree(relations);

    return {categoryMap, categoryGroupMap, defaultCategorySymbol, relationTree, generateRelationTree, relations};
    
})();

let toggle = false;
let asyncLoadCategories = function(categoryGroupId) {
    toggle = !toggle;
    if(categoryGroupId == 2) {
        if(toggle) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                        {
                            id: 4,
                            name: 'BE',
                            categoryGroupId: 2,
                        },
                        {
                            id: 5,
                            name: 'FE',
                            categoryGroupId: 2,
                        },
                        {
                            id: 6,
                            name: 'ME',
                            categoryGroupId: 2,
                        },
                        {
                            id: 7,
                            name: 'UI',
                            categoryGroupId: 2,
                        },
                        {
                            id: 10007,
                            name: 'DESIGN',
                            categoryGroupId: 2,
                        }
                    ]);
                }, 5000);
            });
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                     resolve([
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
                        }
                    ]);
                }, 5000);
            });
        }
    } else if(categoryGroupId == 5) {
        if (toggle) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                        {
                            id: 14,
                            name: 'JAVA',
                            categoryGroupId: 5,
                        },
                        {
                            id: 15,
                            name: 'Spring',
                            categoryGroupId: 5,
                        },
                        {
                            id: 16,
                            name: 'C',
                            categoryGroupId: 5,
                        },
                        {
                            id: 17,
                            name: 'C#',
                            categoryGroupId: 5,
                        },
                        {
                            id: 10008,
                            name: 'PIGMA',
                            categoryGroupId: 5,
                        }
                    ]);
                }, 3000);
            });
        } else {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([
                        {
                            id: 14,
                            name: 'JAVA',
                            categoryGroupId: 5,
                        },
                        {
                            id: 15,
                            name: 'Spring',
                            categoryGroupId: 5,
                        },
                        {
                            id: 16,
                            name: 'C',
                            categoryGroupId: 5,
                        },
                        {
                            id: 17,
                            name: 'C#',
                            categoryGroupId: 5,
                        },
                    ]);
                }, 3000);
            });
        }
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(undefined);
            }, 0);
        });
    }
};


let globalFlag = true;

/**
 * 카테고리 생성 메서드
 * @param {Element} parentElement category를 생성할 최상위 Element, default = document.body
 * @param {String} className category selectBox의 class명, default = ".sel"
 * @param {Array} data default categoryId 정보 또는 선택된 categoryId 정보, default = []
 * @param {Number} index data Array의 index에 접근할 변수, default = 0
 * @param {Object} obj relationTree
 */
function makeCategory(parentElement = document.body, className = ".sel",  data = [], obj = relationTree, index = 0) {

    if(!data.length) {
        makeDefaultCategory(obj, data);
    }

    if(obj.categoryGroupId) {
        const categoryGroups = categoryGroupMap[obj.categoryGroupId];
        const paramCategoryId = data[index];
        const relation = obj.categories[paramCategoryId] ||
            obj.categories[Object.keys(obj.categories)[0]] ||
            obj.categories[defaultCategorySymbol];

        createCategory(categoryGroups.categories, obj.categoryGroupId, paramCategoryId, parentElement, className, data);

        if(0 < Object.keys(relation).length) {
            makeCategory(parentElement, className, data, relation, ++index);
        } else {
            addDraggable(parentElement, className);
        }
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

function createCategory(categoryGroups, currentCategoryGroupId, paramCategoryId, parentElement, className, param) {
    const {div, selectBox, label} = createElements(currentCategoryGroupId, className);
    createOptions(selectBox, categoryGroups, paramCategoryId, param);
    if(globalFlag) {
        selectBox.addEventListener("change", () => {
            console.log("발생", currentCategoryGroupId);
            globalFlag = false;
            document.querySelectorAll(`.${className}`).forEach(item => {
                item.removeEventListener("change", () => {
                    console.log("제거");
                });
            });
            const categoryGroups = replaceCategoryGroups(parentElement, className);
            selectCategoryGroupId(parentElement, className, categoryGroups);
        });
    }
    div.append(label, selectBox);
    parentElement.append(div);
}

/** div, selectBox, label Element 생성 */
function createElements (currentCategoryGroupId, className) {
    const div = document.createElement("div");
    div.className = "draggable";
    div.draggable = true;
    const label = document.createElement("label");
    label.htmlFor = currentCategoryGroupId;
    label.innerText = categoryGroupMap[currentCategoryGroupId].name;
    const selectBox = document.createElement("select");
    selectBox.className = className || ".sel";
    selectBox.id = currentCategoryGroupId;
    return {div, selectBox, label};
}

function createOptions(selectBox, categoryGroups, paramCategoryId, param) {
    for (const key in categoryGroups) {
        const {id, name, option, target} = categoryGroups[key];

        if(option) {
            const matched = matchCategoryOption(option, target, param);
            if(matched) {
                continue;
            }
        }
        let options = document.createElement("option");
        options.value = id;
        options.innerText = name;
        if(id == paramCategoryId) {
            options.selected = true;
        }
        selectBox.append(options);
    }  
}

function matchCategoryOption(option, target, param) {
    for (const categoryId of param) {
        switch (option) {
            case '<' :
                if(target < categoryId) return true;
                break;
            case '>' :
                if(target > categoryId) return true;
                break;
            case 'in' :
                if(param.includes(target)) return true;
                break;
            default :
                if(target == categoryId) return true;
                break;
        }
    }
    return false;
}


function addDraggable(parentElement, className) {
    const draggables = document.querySelectorAll(".draggable");

    let beforeId;
    let afterId;

    draggables.forEach((draggable, index) => {
        draggable.addEventListener("dragstart", (e) => {
            beforeId = findCurrentCategoryGroup(className);
            draggable.classList.add("dragging");
        });

        draggable.addEventListener("dragend", (e) => {

            // relaction update 호출
            afterId = findCurrentCategoryGroup(className);

            const diff = [];
            for (let i = 0; i < beforeId.length; i++) {
                if(beforeId[i] !== afterId[i]) {
                    diff.push(afterId[i]);
                }
            }
            if(diff.length) {
                relactionUpdate(diff[0], diff[1]);
            }
            draggable.classList.remove("dragging");
        });
    });

    parentElement.addEventListener("dragover", e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(parentElement, e.clientX);
        const draggable = document.querySelector(".dragging");
        if (afterElement === undefined) {
            parentElement.appendChild(draggable);
        } else {
            parentElement.insertBefore(draggable, afterElement);
        }
    });
}

function getDragAfterElement(container, x) {
    const draggableElements = [
        ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
        (closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = x - box.left - box.width / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        },
        { offset: Number.NEGATIVE_INFINITY },
    ).element;
}

function findCurrentCategoryGroup(className) {
    const arr = [];
    const element = document.querySelectorAll(`.${className}`);
    element.forEach(item => {
        arr.push(item.id);
    });
    return arr;
}

function relactionUpdate(beforeId, afterId) {

    const preGroup = categoryGroupMap[beforeId];
    const postGroup = categoryGroupMap[afterId];


    const newRelations = replaceRelationsInfo(preGroup, postGroup);
    localStorage.setItem("relations", JSON.stringify(newRelations));
}

function replaceRelationsInfo(preGroup, postGroup) {
    for (let index = 0; index < relations.length; index++) {
        const categoryGroup = categoryGroupMap[relations[index].categoryGroupId];

        if(preGroup.id === relations[index].categoryGroupId) {
            relations[index].categoryGroupId = postGroup.id;

            for (let i = 0; i < categoryGroup.categories.length; i++) {
                if(categoryGroup.categories[i].id === relations[index].categoryId) {
                    if(i < postGroup.categories.length) {
                        relations[index].categoryId = postGroup.categories[i].id;
                    } else {
                        relations.splice(index, 1);
                    }
                }
            }
        } else if(postGroup.id === relations[index].categoryGroupId) {
            relations[index].categoryGroupId = preGroup.id;

            for (let i = 0; i < categoryGroup.categories.length; i++) {
                if(categoryGroup.categories[i].id === relations[index].categoryId) {
                    if(i < preGroup.categories.length) {
                        relations[index].categoryId = preGroup.categories[i].id;
                    } else {
                        relations.splice(index, 1);
                    }
                }
            }
        }
    }

    return relations;
}

function replaceCategoryGroups(parentElement, className) {
    const element = document.querySelectorAll(`.${className} option:checked`);
    const result = {
        categories : [],
        categoryGroups : []
    }
    element.forEach((item, index) => {
        result.categories.push(item.value);
        result.categoryGroups.push(document.querySelectorAll(`.${className}`)[index].id);
    });
    parentElement.replaceChildren();
    makeCategory(parentElement, className, result.categories);
    return result.categoryGroups;
}


function selectCategoryGroupId(parentElement, className, categoryGroups) {

    const arr = [];
    categoryGroups.forEach(categoryGroupId => {
        arr.push(asyncLoadCategories(categoryGroupId));

    });
    Promise.all(arr).then(categories => {
        if(categories.length) {
            globalFlag = true;
            console.log("응답", categories);
            document.querySelectorAll(`.${className}`).forEach(item=> {
                item.addEventListener("change", () => {
                    globalFlag = false;
                    document.querySelectorAll(`.${className}`).forEach(item => {
                        item.removeEventListener("change", () => {
                            console.log("제거");
                        });
                    });
                    const categoryGroups = replaceCategoryGroups(parentElement, className);
                    selectCategoryGroupId(parentElement, className, categoryGroups);
                });
            });

            for (let i = 0; i < categories.length; i++) {
                if(categories[i]) {
                    changeCategories(parentElement, className, arr[i], categories[i]);
                }
            }
        }
    }).catch(err => {
        console.error(err);
    });;
}





function changeCategories(parentElement, className, categoryGroupId, categories) {
    if(categoryGroupMap[categoryGroupId]) {
        let bool = categories.length < categoryGroupMap[categoryGroupId].categories.length;
        categoryGroupMap[categoryGroupId].categories = categories;

        changeCategoryRelations(relationTree, categoryGroupId, bool);

        chagneCategoryElement(parentElement, className, categoryGroupId, categories, bool);
    }
}

function changeCategoryRelations(obj, categoryGroupId, bool) {
    if(obj.categoryGroupId == categoryGroupId) {
        if(bool) {
            let count = 0;
            for (const key in obj.categories) {
                if(categoryGroupMap[categoryGroupId].categories.length <= count) {
                    delete obj.categories[key];
                }
                ++count;
            }
        } else {
            for (const category of categoryGroupMap[categoryGroupId].categories) {
                if(!obj.categories[category.id]) {
                    obj.categories[category.id] = {
                        categories : {
                            [defaultCategorySymbol] : {}
                        }
                    }
                }
            }
        }
        return;
    }
    for (const key in obj.categories) {
        changeCategoryRelations(obj.categories[key], categoryGroupId, bool);
    }
}

function chagneCategoryElement(parentElement, className, categoryGroupId, categories, bool) {
    const categoryElement = document.getElementById(categoryGroupId);
    if(categoryElement) {
        const leng = bool ? categoryElement.children.length : categories.length;
        for (let i = 0; i < leng; i++) {
            if(bool) {
                if(categories.length <= i) {
                    categoryElement.removeChild(categoryElement.children[i]);
                }
            } else {
                if(i === categoryElement.children.length) {
                    const option = document.createElement('option');
                    option.value = categories[i].id;
                    option.innerText = categories[i].name;
                    categoryElement.appendChild(option);
                }
            }
        }
        bool && replaceCategoryGroups(parentElement, className);
    }
}

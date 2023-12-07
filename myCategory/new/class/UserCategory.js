class UserCategory {
    // 여기의 속성들은 optional도 있을 수 있지만 카테고리를 구성하는데 필요한 요소(속성)라 볼 수 있음
     constructor(startElementId, parentTagName, groupsTagName, groupsLabel, rowsTagName, parentClassName, groupsClassName, groupsLableClassName, rowsClassName, eventName) {
        this.startElementId = startElementId;
        this.parentTagName = parentTagName || 'div';
        this.groupsTagName = groupsTagName || 'select';
        this.groupsLabel = groupsLabel || 'label';
        this.rowsTagName = rowsTagName || 'option';
        this.parentClassName = parentClassName || 'category';
        this.groupsClassName = groupsClassName || 'select';
        this.groupsLableClassName = groupsLableClassName || 'selectLabel';
        this.rowsClassName = rowsClassName || 'selectOptions';
        this.eventName = eventName || 'change';
     }

     // 입력 받은 tag정보들로 카테고리 element를 생성해주는 메소드
     createTags(categoryGroup, defaultCategoryId) {
        let startElement = this.startElementId ? document.getElementById(this.startElementId) : document.body;
        let parent = document.createElement(this.parentTagName);
        let label = document.createElement(this.groupsLabel);
        let groups = document.createElement(this.groupsTagName);

        let eventTarget = this.rowsTagName === 'option' ? '' : groups;

        parent.classList.add(this.parentClassName);
        parent.appendChild(label);


        label.htmlFor = categoryGroup.id;
        label.classList.add(this.groupsLableClassName);
        label.innerText = categoryGroup.name;

        groups.id = categoryGroup.id;
        groups.classList.add(this.groupsClassName);

        categoryGroup.categories.forEach(category=>{
            let selected = (category.id === defaultCategoryId)? 'selected' : '';
            let rows = document.createElement(this.rowsTagName);
            rows.value = category.id;
            rows.innerText = category.name;
            if(this.rowsTagName === 'option') {
                rows.selected = category.id === defaultCategoryId;
            } else {
                rows.classList.add(this.rowsClassName);
                if(selected) {
                    rows.classList.add(selected);
                }
            }
            groups.appendChild(rows);
        });

        parent.appendChild(groups);

        return  { startElement : startElement, categoryElement : parent, eventTarget : eventTarget}
     }
     
 }

 export default UserCategory;
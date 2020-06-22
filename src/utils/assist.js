//判断参数是否是其中之一
export function oneOf (value, validList){
    for(let i = 0; i< validList.length; i++){
        if(value === validList[i]){
            return true;
        }
    }
    return false;
}

// Find components downward
export function findComponentsDownward(context, componentsName){
    return context.$children.reduce((components, child) => {
        if(child.$options.name === componentsName) components.push(child);
        const foundChilds = findComponentsDownward(child, componentsName);
        return components.concat(foundChilds);
    },[])
}

//Find components upward
export function findComponentsUpward(context, componentName) {
    let parents = [];
    const parent = context.$parent;
    if(parent){
        if(parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    }else{
        return [];
    }
}
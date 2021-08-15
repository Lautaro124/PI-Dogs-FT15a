export const orderAZ = (a,b) => {
    if(a.name > b.name) return 1
    if(a.name < b.name) return -1
    return 0
}

export const height = (a,b) => {
    if(a.height < b.height) return 1
    if(a.height > b.height) return -1
    return 0
}

export const weight = (a,b) => {
    if(a.weight < b.weight) return 1
    if(a.weight > b.weight) return -1
    return 0
}

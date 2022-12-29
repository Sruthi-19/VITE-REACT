export const APIValueMatch=(item,search)=>{
    let searchLower=search.toLowerCase();
    let itemLower=item.toLowerCase();
    return itemLower.match(searchLower);
}
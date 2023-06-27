const fs = require('fs');

const data = fs.readFileSync('./小红书商品分类.json').toString();

const jsonData = JSON.parse(data);

// console.log('data', jsonData);


function filter(items) {
    const resArr = [];
    for (const item of items) {
        const filterItem = {
            id: item.id,
            name: item.name,
        };

        if (item.children && item.children.length) {
            filterItem.children = filter(item.children);
        }
        resArr.push(filterItem);
        console.log('filterItem', filterItem)
    }
    return resArr;
}


const filterData = filter(jsonData);

fs.writeFileSync('./bb.json', JSON.stringify(filterData, null, 2))

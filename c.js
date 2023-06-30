const fs = require('fs');
const list = fs.readdirSync('./aa');
list.forEach(file => {
    console.log('file', file)
    const data = JSON.parse(fs.readFileSync('./aa/' + file, 'utf8'));
    let result = [];
    
    function parse(data, path = []) {
      if (data.name) {
        path.push(data.name);
      }  
      if (data.children) {
        data.children.forEach(child => {
          parse(child, path);
          path.pop(); 
        });
      } else {
        result.push(path.join(' > '));
      }
    }
    
    parse(data);  
    // console.log(result);

    fs.writeFileSync('./aa-c/' + file, JSON.stringify(result, null, 2))
})

// function parseCategories(category) {
//   let result = category.name;
//   if (category.children) {
//     category.children.forEach(child => {
//       result += ' > ' + parseCategories(child);
//     });
//   }
//   return result; 
// }

// let categories = [];
// parseCategories(data);

// console.log(categories);


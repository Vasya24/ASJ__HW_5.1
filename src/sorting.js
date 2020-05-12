import { obj } from './index'



    let orderByProps = Object.entries;
    
    let keysArr = orderByProps(obj).splice(0, 2);
    
    let otherStuff = orderByProps(obj).splice(2, 3).sort();
    
    let mainArr = keysArr.concat(otherStuff);
    
    function sorting() {
    for (let i=0; i<mainArr.length; i++) {
      console.log(`key: ${mainArr[i][0]}, value: ${mainArr[i][1]}`)
    }
    }


export { sorting, orderByProps, keysArr, otherStuff, mainArr }
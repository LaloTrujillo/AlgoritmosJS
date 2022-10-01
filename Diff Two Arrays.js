function diffArray(arr1, arr2) {
  
    const concatArr = arr1.concat(arr2).sort();
    const newArr = [];
  
    for(let i=0; i<concatArr.length; i++){
      //console.log(concatArr[i],concatArr[i+1]);  
      if(concatArr[i] != concatArr[i+1] && concatArr[i] != concatArr[i-1]){
        newArr.push(concatArr[i]);
      }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
function kthLargest(arr, k) {
    if (k <= 0 || k > arr.length) {
      return undefined;
    }
  
    let keyMap = new Map();
  
    for (let i = 0; i < k; i++) {
      keyMap.set(i, arr[i]);
    }
  
    for (let i = k; i < arr.length; i++) {
      let minIndex = 0;
      let minValue = keyMap.get(0);
  
      for (let j = 1; j < k; j++) {
        const value = keyMap.get(j);
        if (value < minValue) {
          minIndex = j;
          minValue = value;
        }
      }

      if (arr[i] > minValue) {
        keyMap.set(minIndex, arr[i]);
      }
    }
  

    return keyMap.get(k - 1);
  }
  
  //TestCases
  const arr = [77, 20, 5, 79, 22];
  const k = 3;
  console.log(kthLargest(arr, k));
  

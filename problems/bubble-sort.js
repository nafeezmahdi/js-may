function bubbleSort(ara) {
  let araSize = ara.length;

  for (let i = 0; i < araSize - 1; i++) {
    // let swapped = false;
    for (let j = 0; j < araSize - 1; j++) {
      if (ara[j] > ara[j + 1]) {
        [ara[j], ara[j + 1]] = [ara[j + 1], ara[j]];
        swapped = true;
      }
    }
    // console.log(swapped);
    // if (!swapped) return ara;
  }

  //
  //   ara.forEach((value) => {
  //     console.log(value);
  //   });
  console.log("Sorted Array : ", ara);
}

bubbleSort([2, 5, 9, 6]);
bubbleSort([1, 2, 5, 9, 60, 66]);
bubbleSort([12, 2, 9, 1, 3, 73, 11, 15, 62, 19, 4]);

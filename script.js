let array = [];

function resetArray() {
  array = [];
  const arrayContainer = document.getElementById('array-container');
  arrayContainer.innerHTML = '';
  for (let i = 0; i < 36; i++) {
    const value = Math.floor(Math.random() * 400) + 5;
    array.push(value);
    const bar = document.createElement('div');
    bar.style.height = `${value}px`;
    bar.classList.add('bar');
    arrayContainer.appendChild(bar);
  }
}

function swap(i, j) {
  const arrayBars = document.getElementsByClassName('bar');
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  const tempHeight = arrayBars[i].style.height;
  arrayBars[i].style.height = arrayBars[j].style.height;
  arrayBars[j].style.height = tempHeight;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function selectionSort() {
    const len = array.length;
    
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      
      for (let j = i + 1; j < len; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      
      if (minIndex !== i) {
        swap(i, minIndex);
        await delay(50); // Delay for visualization
      }
    }
  }

  async function insertionSort() {
    const len = array.length;
  
    for (let i = 1; i < len; i++) {
      let j = i;
  
      while (j > 0 && array[j] < array[j - 1]) {
        swap(j, j - 1);
        j--;
        await delay(20); // Delay for visualization
      }
    }
  }

  async function bubbleSort() {
    const len = array.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
          await delay(10); // Delay for visualization
        }
      }
    }
  }
  async function quickSort() {
    await quickSortRecursive(0, array.length - 1);
  }
  
  async function quickSortRecursive(start, end) {
    if (start >= end) {
      return;
    }
  
    const pivotIndex = await partition(start, end);
  
    await quickSortRecursive(start, pivotIndex - 1);
    await quickSortRecursive(pivotIndex + 1, end);
  }
  
  async function partition(start, end) {
    const pivotIndex = start;
    let i = start + 1;
    let j = end;
  
    while (i <= j) {
      if (array[i] > array[pivotIndex] && array[j] < array[pivotIndex]) {
        swap(i, j);
      }
      if (array[i] <= array[pivotIndex]) {
        i++;
      }
      if (array[j] >= array[pivotIndex]) {
        j--;
      }
      await delay(25); // Delay for visualization
    }
  
    swap(pivotIndex, j);
  
    return j;
  }

async function mergeSort() {
    await mergeSortRecursive(0, array.length - 1);
  }
  
  async function mergeSortRecursive(start, end) {
    if (start >= end) {
      return;
    }
  
    const mid = Math.floor((start + end) / 2);
  
    await mergeSortRecursive(start, mid);
    await mergeSortRecursive(mid + 1, end);
  
    await merge(start, mid, end);
  }
  
  async function merge(start, mid, end) {
    const mergedArray = [];
    let leftIndex = start;
    let rightIndex = mid + 1;
  
    while (leftIndex <= mid && rightIndex <= end) {
      if (array[leftIndex] <= array[rightIndex]) {
        mergedArray.push(array[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(array[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex <= mid) {
      mergedArray.push(array[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex <= end) {
      mergedArray.push(array[rightIndex]);
      rightIndex++;
    }
  
    for (let i = start; i <= end; i++) {
      array[i] = mergedArray[i - start];
      const arrayBars = document.getElementsByClassName('bar');
      arrayBars[i].style.height = `${array[i]}px`;
      await delay(25); // Delay for visualization
    }
  }  

  async function heapSort() {
    const len = array.length;
  
    // Build the max heap
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      await heapify(len, i);
    }
  
    // Extract elements from the heap one by one
    for (let i = len - 1; i >= 0; i--) {
      swap(0, i);
      await delay(50); // Delay for visualization
      await heapify(i, 0);
    }
  }
  
  async function heapify(heapSize, rootIndex) {
    const leftChild = 2 * rootIndex + 1;
    const rightChild = 2 * rootIndex + 2;
    let largest = rootIndex;
  
    if (leftChild < heapSize && array[leftChild] > array[largest]) {
      largest = leftChild;
    }
  
    if (rightChild < heapSize && array[rightChild] > array[largest]) {
      largest = rightChild;
    }
  
    if (largest !== rootIndex) {
      swap(rootIndex, largest);
      await delay(30); // Delay for visualization
      await heapify(heapSize, largest);
    }
  }
  
  
  
  

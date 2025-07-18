function fibs(items) {
  let arr = [];
  const n = items - 1;

  if (n === 0) {
    return (arr = [0]);
  } else if (n === 1) {
    return (arr = [0, 1]);
  } else {
    arr = [0, 1];
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }

  return arr;
}

function fibsRec(items) {
  let arr = [];
  const n = items - 1;

  fib(n, arr);
  return arr;
}

function fib(n, arr) {
  if (arr[n] !== undefined) {
    return arr[n];
  } else if (n === 0) {
    arr[0] = 0;
    return 0;
  } else if (n === 1) {
    arr[1] = 1;
    return 1;
  } else {
    arr[n] = fib(n - 1, arr) + fib(n - 2, arr);
    return arr[n];
  }
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result.push(...left);
  result.push(...right);

  return result;
}

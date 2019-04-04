function merge(arr1: any[], arr2: any[]) {
    const result = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }

    if (arr1.length) {
        result.push(...arr1);
    }

    if (arr2.length) {
        result.push(...arr2);
    }

    return result;
}

export function mergeSort(arr: any[]) {
    if (arr.length < 2 ) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

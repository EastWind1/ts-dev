export function quickSort(arr: any[], left, right) {
    if (left < right) {
        const baseIndex = moveBase(arr, left, right);
        quickSort(arr, left, baseIndex - 1);
        quickSort(arr, baseIndex + 1, right);
    }
}

function moveBase(arr: any[], left, right) {
    const base = arr[left];
    while (left < right) {
        while (arr[right] >= base && left < right) {
            right--;
        }
        arr[left] = arr[right];

        while (arr[left] < base && left < right) {
            left++;
        }
        arr[right] = arr[left];
    }
    arr[left] = base;
    return left;
}
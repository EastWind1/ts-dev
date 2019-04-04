export function bubbleSort(arr) { // 非递归实现
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {       // 相邻元素两两对比
                const temp = arr[j + 1];       // 元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

export function bubble(arr, size) { // 递归实现
    if (size == 1) {
        return;
    }

    for (let i = 0; i < size - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    bubble(arr, size - 1);
}


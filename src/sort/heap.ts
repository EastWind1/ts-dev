function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function adjust(arr, size, head) { // 调整堆，size为调整的范围
    const left = head * 2 + 1 > size ? null : head * 2 + 1;
    const right = head * 2 + 2 > size ? null : head * 2 + 2;
    let maxIndex = head;
    // 获得最大值得索引
    if (left && arr[left] > arr[maxIndex]) {
        maxIndex = left;
    }
    if (right && arr[right] > arr[maxIndex]) {
        maxIndex = right;
    }

    if (maxIndex !== head) {
        swap(arr, head, maxIndex);
        // 交换后对应的子堆不一定为最大堆，需跳整
        adjust(arr, size, maxIndex);
    }

}

function buildMaxHeap(arr, size) {
    for (let i = Math.floor(size / 2); i >= 0; i--) { // 数组后半部分必定为子节点
        adjust(arr, size, i);
    }
}

export function heapSort(arr) {
    buildMaxHeap(arr, arr.length);
    for (let i = arr.length - 1; i > 0; i--) {
        // 将对顶交换至末尾，从堆顶进行调整
        swap(arr, 0, i);
        adjust(arr, i - 1, 0);
    }
}
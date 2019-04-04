export function insertSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let point = i + 1;
        const current = arr[point];
        while (current < arr[point - 1] && point) {
            arr[point] = arr[point - 1];
            point--;
        }
        arr[point] = current;
    }
}

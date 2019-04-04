export function shellSort(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 1; i = Math.floor(i / 2)) {
        for (let j = 0; j < arr.length - i; j++) {
            let point = j + i;
            const current = arr[point];
            while (current < arr[point - i] && point) {
                arr[point] = arr[point - i];
                point -= i;
            }
            arr[point] = current;
        }
    }
}
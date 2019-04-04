export function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIdex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdex]) {
                minIdex = j;

            }
        }
        const temp = arr[i];
        arr[i] = arr[minIdex];
        arr[minIdex] = temp;
    }
}
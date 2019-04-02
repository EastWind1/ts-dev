// import "./canvas/canvas";

import { bubbleSort } from "./sort/bubble";
import { heapSort } from "./sort/heap";
import { insertSort } from "./sort/insert";
import { mergeSort } from "./sort/merge";
import { quickSort } from "./sort/quick";
import { selectSort } from "./sort/select";
import { shellSort } from "./sort/shell";
import { TestBed } from "./testbed";

const list = [435, 254, 534, 425, 634, 653, 6536, 536, 34, 535, 2, 54];
function origin() {
    return list;
}

function bubbleTest() {
    const copy = JSON.parse(JSON.stringify(list));
    bubbleSort(copy);
    return copy;
}

function insertTest() {
    const copy = JSON.parse(JSON.stringify(list));
    insertSort(copy);
    return copy;
}

function selectTest() {
    const copy = JSON.parse(JSON.stringify(list));
    selectSort(copy);
    return copy;
}

function shellTest() {
    const copy = JSON.parse(JSON.stringify(list));
    shellSort(copy);
    return copy;
}

function mergeTest() {
    const copy = JSON.parse(JSON.stringify(list));
    return mergeSort(copy);
}

function quickTest() {
    const copy = JSON.parse(JSON.stringify(list));
    quickSort(copy, 0, copy.length - 1);
    return copy;
}

function heapTest() {
    const copy = JSON.parse(JSON.stringify(list));
    heapSort(copy);
    return copy;
}

const testBed = new TestBed();
testBed.add(origin, bubbleTest, insertTest, selectTest, shellTest, mergeTest, quickTest, heapTest);
testBed.run();

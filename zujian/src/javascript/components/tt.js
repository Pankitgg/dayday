





const mergeSort = arr => {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    console.log('**********')
    let leftIndex = mergeSort(left);
    console.log('11111111111')
    let rightIndex = mergeSort(right);
    console.log('leftIndex',leftIndex)
    console.log('rightIndex',rightIndex)
    return merge(leftIndex, rightIndex);
};
const merge = (left, right) => {
    console.log('left', left)
    console.log('right', right)
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift()); // 减小数组长度来最后跳出循环
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    console.log('res',result)
    return result
};

console.log('kkkkk',mergeSort([1,8,3,6,9]))
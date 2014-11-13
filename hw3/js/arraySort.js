function bubbleSorting (unsortedArray) {
    var i = 0,
        c = 0,
        j = 0,
        tmp = 0;

        //for (i = 0; i < unsortedArray.length - 1; i++) {
        //    unsortedArray.forEach(function(el, indx, arr){
        //        if (el > arr[indx + 1]) {
        //            tmp = el;
        //            arr[indx] = arr[indx + 1];
        //            arr[indx + 1] = tmp;
        //        }
        //        c++;
        //    });
        //}

        for (i = 0; i < unsortedArray.length - 1; i++) {
            for (j = i+1; j < unsortedArray.length; j++) {
                if (unsortedArray[i] > unsortedArray[j]) {
                    tmp = unsortedArray[j];
                    unsortedArray[j] = unsortedArray[i];
                    unsortedArray[i] = tmp;
                }
                c++;
            }
        }


    console.log(c + ' iterations');

    return unsortedArray;
}

function selectionSorting (unsortedArray) {
    var i = 0,
        min = 0,
        c = 0,
        tmp = 0;

    unsortedArray.forEach(function(el, indx, arr){
        min = indx;
        for (i = indx + 1; i < arr.length; i++) {
            if (arr[i] < arr[min]) {
                min = i;
            }
            c++;
        }
        if (min != indx) {
            tmp = el;
            arr[indx] = arr[min];
            arr[min] = tmp;
        }
    });
    console.log(c + ' iterations');

    return unsortedArray;
}

function insertionArray(unsortedArray) {
    var i = 0,
        currEl = 0,
        prevIndx = 0,
        c = 0;
    for( i = 1; i < unsortedArray.length; i++){
        currEl = unsortedArray[i];
        prevIndx = i - 1;

        while(prevIndx >= 0 && unsortedArray[prevIndx] > currEl){
            unsortedArray[prevIndx + 1] = unsortedArray[prevIndx];
            unsortedArray[prevIndx] = currEl;
            prevIndx--;
            i--;
            c++;
        }
    }
    console.log(c + ' iterations');

    return unsortedArray;
}

function mergeArray(unsortedArray) {
    var tmpArr = [];

    while (unsortedArray.length > 0) {
        tmpArr.push(unsortedArray.slice(-2));
        if (unsortedArray.length == 1) {
            unsortedArray.length = unsortedArray.length - 1;
        } else {
            unsortedArray.length = unsortedArray.length - 2;
        }
    }

    return tmpArr.map(function(el){
            return insertionArray(el)
        }).reduce(function(el1, el2){
            return sort2arr(el1, el2);
        });
}

function sort2arr(array1, array2) {
    var res1 = [],
        res2 = [];

    res1 = insertionArray(array1);
    res2 = insertionArray(array2);

    return insertionArray(res1.concat(res2));
}

//   testing
function merge2(ar){
    var a = [],
        b = [],
        res = [],
        middle = 0,
        i = 0,
        j = 0;

    if (ar.length <= 1) {
        return ar;
    } else {
        middle = Math.round(ar.length / 2);
        for (i = 0; i < middle; i++) {
            a.push(ar[i]);
        }
        for (j = middle; j < ar.length; j++) {
            b.push(ar[j]);
        }

        //a = merge2(a);
        //b = merge2(b);
        res = sort2arr(a, b);

        return res;
    }
}

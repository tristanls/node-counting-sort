/*

index.js - counting sort

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var countingSort = module.exports = function countingSort (array, k, ascending) {
    ascending = (typeof ascending === "undefined") ? true : ascending;
    var i;
    if (typeof k === "undefined") {
        k = -Infinity;
        for (i = 0; i < array.length; i++) {
            if (array[i] > k) k = array[i];
        }
    }
    var result = new Array(array.length);
    var workingCopy = [];
    for (i = 0; i <= k; i++) {
        workingCopy.push(0);
    }
    for (i = 0; i < array.length; i++) {
        workingCopy[array[i]]++;
    }
    for (i = 1; i < workingCopy.length; i++) {
        workingCopy[i] = workingCopy[i] + workingCopy[i - 1];
    }
    for (i = array.length - 1; i >= 0; i--) {
        var index = workingCopy[array[i]] - 1;
        if (!ascending) index = result.length - 1 - index; 
        result[index] = array[i];
        workingCopy[array[i]]--;
    }
    return result;
};
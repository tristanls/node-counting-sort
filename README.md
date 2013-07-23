# counting-sort

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

Counting sort.

## Usage

```javascript
var countingSort = require('counting-sort');
...
var ascending  = countingSort(array);                   // sort ascending
var descending = countingSort(array, undefined, false); // sort descending
```

## Overview

Criteria for using counting sort requires that all inputs be integers from 0 to _k_, for some integer _k_.

Counting sort has the fun property of running in _O(n)_ time if it's criteria are met.
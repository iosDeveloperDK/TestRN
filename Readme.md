// [4,6, [5,9]] // Сумма: 24, Макс. вложенность: 1.
// [1,3,[7,2, [3,4]]] // Сумма: 20, Макс. вложенность: 2.

```
function recursivArray(array) {
let obj = {sum: 0, count: 0}

for (i of array) {
if (Array.isArray(i)) {
const {sum,count} = recursivArray(i)
return {sum: obj.sum + sum, count: 1 + count}
} else {
obj.sum += i
}
}

return obj
}
```

let arr = [1,2,3]
/*instead of assigning the value like this
let a = arr[0]
let b = arr[1]
let c = arr[2]
*/
const [a,b,c] = arr
console.log(a)
console.log(b)
console.log(c)
console.log(rest)

let user_object=
{
    Name:"abc",
    id: 5,
}
const {Name,id}= user_object
console.log(Name)
console.log(id)


//wAP to merge these two arrays
let num_list = [1,2,3]
let num_list2=[4,5]

let arr_merged =[...num_list,...num_list2]
console.log(arr_merged)

//WAP to find greatest number in an array below
let numbers=[1,2,3,4]
console.log(Math.max(...numbers))

//rest operation
let arr1 = [1,2,3,4,5]
let [x,y,...n] = arr
console.log(rest)
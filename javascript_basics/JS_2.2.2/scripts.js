const delay = 4000 //miliseconds,1s
//callback hell
/*
setTimeout(()=>{
    console.log("Hello world") //4s
    setTimeout(()=>{
       console.log("Hello world again") //4s
    },delay)
},delay)
*/

function getdata(data, getmoredata)
{
    setTimeout(()=>{
       console.log("data :", data)
       getmoredata()
    },delay)
}


getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{})
    })
})

let promise = new Promise((resolve, reject)=>{
    reject("this is sent by promise")
})

promise
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)}) 
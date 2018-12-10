import '../css/index.css'


//ES5中只提供了全局作用域，和函数作用域， ES6 let的引入为我们提供了  提供块级作用域，


{
    var a =20;
}
console.log(a)
// {
//     let b=20;
// }
// console.log(b)


{
    var a = [];
    for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
    }
    a[1](); // 10
    
}

{
    var a = [];
    for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
    }
    a[7](); // 10
}

    {
        console.log(z)
        let z=123;
    }
    {
        let a = 10;
        var a = 1;
    }
    {
       const x=1;
       {
        const  x=2;
        console.log(x)
       } 
       
    }

let elBox1 = document.querySelector('.box1')
let elBox2 = document.querySelector('.box2')
let elBox3 = document.querySelector('.box3')
let elBox4 = document.querySelector('.box4')
let elBox5 = document.querySelector('.box5')
let a = 0
setInterval(()=>{
    a = a + 1
    if( a <= 3){
        elBox1.classList.add('q')
        elBox2.classList.remove('s')
        elBox3.classList.remove('y')
    }else if (a == 4 || a == 8){
        elBox2.classList.add('s')
        elBox1.classList.remove('q')
        elBox3.classList.remove('y')   
    }else if ( a >= 5 && a <=7){
        elBox3.classList.add('y')
        elBox1.classList.remove('q')
        elBox2.classList.remove('s')
    }
    if( a <= 3){
        elBox4.classList.add('y')
        elBox5.classList.remove('q')  
    }else if ( a >= 5 && a <=7){
        elBox5.classList.add('q')
        elBox4.classList.remove('y')    }
    if(a ==8){
        a = 0
    }
},1000)
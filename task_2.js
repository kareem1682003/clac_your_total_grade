var  dOne = document.getElementById('num1')
var dTwo = document.getElementById('num2')
function firstFun(){
    if(  ((parseInt(dOne.value) + parseInt(dTwo.value)) / 2) >=90){
        document.getElementById('rslt').innerHTML = ('Your total grade is A+')
    }else if(((parseInt(dOne.value) + parseInt(dTwo.value)) / 2) >= 85){
        document.getElementById('rslt').innerHTML = ('Your total grade is A')
    }else if(((parseInt(dOne.value) + parseInt(dTwo.value)) / 2) >= 80){
        document.getElementById('rslt').innerHTML = ('Your total grade is B+')
    }else if(((parseInt(dOne.value) + parseInt(dTwo.value)) / 2) >= 75){
        document.getElementById('rslt').innerHTML = ('Your total grade is B')
    }else if(((parseInt(dOne.value) + parseInt(dTwo.value)) / 2) >= 70){
        document.getElementById('rslt').innerHTML = ('Your total grade is C+')
    }else if(((parseInt(dOne.value) + parseInt(dTwo.value)) / 2) >= 65){
        document.getElementById('rslt').innerHTML = ('Your total grade is C')
    }else if(((parseInt(dOne.value) + parseInt(dTwo.value)) / 2) <= 60){
        document.getElementById('rslt').innerHTML = ('Your total grade is F')
    }else{
        document.getElementById('rslt').innerHTML = 'P'
    }
}
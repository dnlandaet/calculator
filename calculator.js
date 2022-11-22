const Calculator = function(){ //Una función a modo de objeto
    this.evaluate = string =>{
      var a = string.split(' ');
      var index  = 0;
      console.log(a)
      if(a.length > 1){
        while(true){
         if(this.findIndexOperador(a) != 0)
                  index = this.findIndexOperador(a);
             else
                  index = this.findIndexOperadorSumRest(a);
  
           var antIndex = index -1; //encontrado el operador, evaluar el numero a la izquierda
           var aop = a[antIndex]
           var o   = this.findOperador(index,a);// encuentra el operador en la cadena
           var ope = this.resolveOp(o,aop,a[index+1])
  
           a.splice(antIndex,3)
           a.splice(antIndex,0,ope)
           console.log(a)
           if(a.length == 1)
               break;
       }
         return a[0];
       }else{
        return string;
      }
    }
  
  
    this.findOperador = (index,a) => {
         return a[index];
      }
    this.resolveOp = (el,a,b) =>{
           var operacion = 0;
           a = parseFloat(a);
           b = parseFloat(b);
            switch(el){
                 case '*':
               operacion = a * b;
               break;
              case '/':
               operacion = a / b;
               break;
              case '+':
               operacion = a + b;
               break;
              case '-':
               operacion = a - b;
               break;
            }
           return operacion;
      }
     this.findIndexOperador =(a) =>{
       var index = 0;
       for(var i= 0; i < a.length; i++){
         if(a[i] === '*' || a[i] === '/' ){
              index = i;
              break;
           }
         }
             return index;
     }
    this.findIndexOperadorSumRest =(a) =>{
           var index = 0;
            for(var i= 0; i < a.length; i++){
               if(a[i] === '+' || a[i] === '-'){
                     index = i;
                     break;
                   }
             }
             return index;
     }
  
 };
  
 let btn=document.getElementById('calc');
 function calcular(){
     let view = document.getElementById('view');
     let calc = new Calculator();
   let txt = document.getElementById('calculator');
     view.innerHTML = calc.evaluate(txt.value)
 }
 btn.addEventListener('click',calcular,false);
 
 let mensaje = localStorage.getItem("calcula todo")
 localStorage.setItem("mensaje", "calcula todo")

 

  const calculadora1 = {id: 2, valor: "Operaciones Múltiples"};
  const enJSON = JSON.stringify(calculadora1);

  console.log(enJSON);
  console.log(typeof calculadora1);
  console.log(typeof enJSON);
  
  localStorage.getItem("calculadora1", enJSON)
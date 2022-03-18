export class Calculadora{

    constructor(){

    }

    add(a: number, b: number): number{
        return a+b;
    }

    resta(a: number, b: number): number{
        return a-b;
    }

    multiplicar(a: number, b: number): number{
       let result = 0;
        if(a<0){
            for(let i = 0; i>a; i--){
                result = result - b; 
            }
        }
        else if(b<0){
                for(let i = 0; i>b; i--){
                    result = result - a; 
            }
        }else if(a<0 && b<0){
            for(let i = 0; i>b; i--){
                result = result - a; 
        }
        }
        else{
            for(let i = 0; i<b; i++){
                result = result + a; 
            }
        }
        return result;
    
    }

    divid(a: number, b: number): number{
        let result = 0;
        while(a>0 && a>=b && b>0){
            a = a - b;
            result = result + 1; 
        }
        return result;
    }
}
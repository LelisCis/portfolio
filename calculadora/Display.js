class Display {
    constructor(displayValorAnterior, displayValorNuevo) {
        this.displayValorNuevo = displayValorNuevo;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorNuevo = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '÷',
            multiplicar: '*',
        }
    }

    borrar() {
        this.valorNuevo = this.valorNuevo.toString().slice(0,-1);
        this.imprimirValores();
    }


    borrarTodo(){
        this.valorNuevo = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();

    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior =  this.valorNuevo ||  this.valorAnterior;
        this.valorNuevo = '';
        this.imprimirValores();
    }



    agregarNumero(numero){
        if(numero === '.' && this.valorNuevo.includes('.')) return
        this.valorNuevo = this.valorNuevo.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayValorNuevo.textContent = this.valorNuevo;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorNuevo = parseFloat(this.valorNuevo);

        if ( isNaN(valorNuevo) || isNaN (valorAnterior) ) return 
        this.valorNuevo = this.calculador[this.tipoOperacion](valorAnterior, valorNuevo);
    }
 

}
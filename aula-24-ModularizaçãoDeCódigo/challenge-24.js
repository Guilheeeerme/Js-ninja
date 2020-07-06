(function( window, document ) {
	'use strict';

/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.
- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

	let $inputNumber = document.querySelector('[data-js="inputNumber"]');
	let $buttonNumbers 	= document.querySelectorAll('[data-js="buttonNumbers"]');
	let $buttonOperations = document.querySelectorAll('[data-js="buttonOperations"]');
	let $buttonCE = document.querySelector('[data-js="buttonCE"]');
	let $buttonEqual = document.querySelector('[data-js="buttonEqual"]');

	function initialize() {
		initEvents();
	}
	
	function initEvents() {
		Array.prototype.forEach.call( $buttonNumbers, function( btn ) {
			btn.addEventListener( 'click', handleClickNumber, false );
		});
		Array.prototype.forEach.call( $buttonOperations, function( btn ) {
			btn.addEventListener( 'click', handleClickOperation, false );
		});
		$buttonCE.addEventListener( 'click', handleClickCE, false );
		$buttonEqual.addEventListener( 'click', handleClickEqual, false );
	}

	function handleClickNumber() {
		$inputNumber.value += this.value;
	};

	function handleClickCE() {
		$inputNumber.value = this.value;
	};

	function handleClickOperation() {
		$inputNumber.value = removeLastItemIfItIsAnOperator( $inputNumber.value );
		$inputNumber.value += this.value;
	};

	function handleClickEqual() {
		$inputNumber.value 	= removeLastItemIfItIsAnOperator( $inputNumber.value );
		const allValues = $inputNumber.value.match( regexOperations() );
		$inputNumber.value	= allValues.reduce( calculateAllValues );
	};

	function regexOperations() {
		return new RegExp( `\\d+[${getOperations().join('')}]?`, 'g');
	}

	function calculateAllValues( acum, actual ) {
		const firstValue = acum.slice( 0, -1 );
		const operator 	= acum.split('').pop();
		const lastValue = removeLastItemIfItIsAnOperator( actual );
		const lastOperator 	= getLastOperator( actual );
		return doOperator( operator, firstValue, lastValue ) + lastOperator;
	}
	
	function getLastOperator( value ) {
		return isLastItemAnOperation( value ) ? value.split('').pop() : '';
	}

	function doOperator( operator, firstValue, lastValue ) {
		switch( operator ) {
			case '+':
				return +firstValue + +lastValue;
			case '-':
				return firstValue - lastValue;
			case 'x':
				return firstValue * lastValue;
			case '/':
				return firstValue / lastValue;
		}
	}

	function removeLastItemIfItIsAnOperator( string ) { 
		if( isLastItemAnOperation( string ) )
			return string.slice(0, -1);
		return string;
	}

	function isLastItemAnOperation( number ) {
		const operations = getOperations();
		const lastItem = number.split('').pop();
		return operations.some(( operator ) => {
			return operator === lastItem;
		});
	};

	function getOperations() {
		return Array.prototype.map.call( $buttonOperations, function( btn ) {
			return btn.value;
		});
	}
		
	initialize();

})( window, document );

// Función para mostrar campos adicionales según el tipo de seguro
function mostrarCamposExtras() {
    var tipoSeguro = document.getElementById('type').value;
    var extraAuto = document.getElementById('extraAuto');
    var extraHogar = document.getElementById('extraHogar');

    extraAuto.style.display = 'none';
    extraHogar.style.display = 'none';

    if (tipoSeguro === 'auto') {
        extraAuto.style.display = 'block';
    } else if (tipoSeguro === 'hogar') {
        extraHogar.style.display = 'block';
    }
}

// Función principal para cotizar seguro
function cotizarSeguro() {
    // Obtener los valores del formulario
    var age = document.getElementById('age').value;
    var type = document.getElementById('type').value;
    var marcaModelo = document.getElementById('marcaModelo').value;
    var tipoVivienda = document.getElementById('tipoVivienda').value;
    var resultElement = document.getElementById('result');

    // Convertir la edad a número entero
    var edad = parseInt(age);

    // Inicializar variable para el precio base
    var precioBase;

    // Condicional para determinar el precio base según el tipo de seguro
    if (type === 'auto') {
        precioBase = 500;
        if (marcaModelo.toLowerCase().includes('luxury')) {
            precioBase += 200;
        }
    } else if (type === 'hogar') {
        precioBase = 300;
        if (tipoVivienda === 'duplex') {
            precioBase += 100;
        }
    } else if (type === 'vida') {
        precioBase = 200;
    }

    // Algoritmo con ciclo para calcular el recargo por edad
    var recargo = 0;
    if (edad > 18 && edad <= 25) {
        recargo = precioBase * 0.1;
    } else if (edad > 25 && edad <= 40) {
        recargo = precioBase * 0.2;
    } else if (edad > 40) {
        recargo = precioBase * 0.3;
    }

    // Calcular el precio final
    var precioFinal = precioBase + recargo;

    // Mostrar el resultado
    resultElement.innerHTML = "El precio del seguro es: $" + precioFinal.toFixed(2);
}

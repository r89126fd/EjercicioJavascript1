// Función para calcular el área del rectángulo
function calcularArea() {
          // Obtener valores de los campos
          const base = document.getElementById('base').value;
          const altura = document.getElementById('altura').value;
          const resultado = document.getElementById('resultado');
      
          // Validar que los valores sean positivos
          if (base <= 0 || altura <= 0) {
              alert('Por favor, ingrese valores positivos para la base y la altura.');
              return;
          }
      
          // Calcular el área
          const area = base * altura;
          resultado.value = area;
      }
      
      // Función para limpiar los campos
      function limpiarCampos() {
          document.getElementById('areaForm').reset();
      }
      
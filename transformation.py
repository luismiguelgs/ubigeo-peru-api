# Abrir el archivo de entrada 'districts.sql' y leer los datos
with open('districts.sql', 'r') as archivo_entrada:
    # Leer todas las líneas del archivo y eliminar espacios en blanco innecesarios
    lineas = archivo_entrada.readlines()

# Lista para almacenar el resultado final
resultado = []

# Procesar cada línea y transformarla en el nuevo formato
for linea in lineas:
    # Limpiar los espacios en blanco de cada línea
    linea = linea.strip()

    # Verificar si la línea no está vacía
    if linea:
        print(f"Línea leída: {linea}")  # Línea para depuración

        # Usar eval() para convertir la cadena en tupla
        try:
            # Asegúrate de que la línea tenga el formato adecuado
            if linea.endswith(","):
                linea = linea[:-1]  # Eliminar la coma final si está presente
            valores = eval(linea)

            # Extraer el nombre y el código
            nombre = valores[1]
            codigo = valores[2]

            # Crear la nueva línea con el formato deseado
            nueva_linea = f"( '{nombre}', '{codigo}', NOW()),"
            resultado.append(nueva_linea)

        except Exception as e:
            print(f"No se pudo procesar la línea: {linea}. Error: {e}")

# Guardar el resultado en 'resultado.sql'
with open('resultado.sql', 'w') as archivo_salida:
    archivo_salida.write("\n".join(resultado) + "\n")

print("Archivo 'resultado.sql' generado exitosamente.")
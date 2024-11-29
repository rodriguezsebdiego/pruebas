entrada = input ("escribe la cadena: ")
contador = {}
for i in entrada:
    # print (f" salida {i}")
    if i in contador:
        contador[i] += 1
    else:
        contador[i] = 1
        

salida = []

for letra, cantidad in contador.items():
    if cantidad == 1 :
        salida.append(letra)
        
        
print("letrasnque se repitan: ", salida)
print("cantidad de letras no repetidas: ", len(salida))

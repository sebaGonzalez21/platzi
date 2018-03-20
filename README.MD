# Platzom

Platzom es un idioma iventado para el [Curso de Fundamento de JS](https://platzi.com/js) de [Patzi](https://platzi.com), el mejor lugar de educacion online

### Descripcion del idioma
+ Si la palabra termina con "ar" se le quitan las 2 letras
+ Si la palabra inicia con z, se añade "pe" al final
+ Si la palabra traducida tiene 10 o mas letras se parte por la mitad y se une con guion del medio
+ Por ultimo si la palabra original es un palodromo, ninguna
regla anterior cuenta y se devuelve la misma palabra
pero intercalando mayusculas y minusculas

### Instalacion
```

npm install platzom
```

### Uso
```

import platzom from 'platzom'

platzom("Programar") //Programar

platzom("Programar")//program
platzom("zorro");//Zorrope
platzom("zarpar");Zarppe
platzom("abecedario"); //abce-dario
platzom("sometemos"); //SoMeTeMos
```
### Creditos
+ [Seba Gonzalez](https://www.facebook.com/SebastianGonzalez.21)

### Licencia
+ [MIT](https://opensource.org/licenses/MIT)

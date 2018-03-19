

const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){

  it('Si la palabra termina con "ar" se le quitan las 2 letras',function(){
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
  it('Si la palabra inicia con z, se añade "pe" al final',function(){
    const translation = platzom("zorro")
    const translation2 = platzom("zarpar")

    expect(translation).to.equal("zorrope")
    expect(translation2).to.equal("zarppe")
  })
  it('Si la palabra traducida tiene 10 o mas letras se parte por la mitad y se une con guion del medio',function(){
    const translation = platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('Por ultimo si la palabra original es un palodromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando mayusculas y minusculas',function(){
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")

  })

})

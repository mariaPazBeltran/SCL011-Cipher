describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',  () => { 
    assert.equal(window.cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ',33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
  });
  it ('deberia retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=>{
  assert.equal(cipher.encode('abcdefghijklmnopqrstuvwxyz',33),'hijklmnopqrstuvwxyzabcdefg')
  });
  it('deberia retornar " " cada vez que se ingrese un espacio',()=>{
    assert.equal(cipher.encode(" ")," ");
  });
 
  });
  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', ()=>{
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it('deberia retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg",33),"abcdefghijklmnopqrstuvwxyz");
    });
    it('debe retornar " " cada vez que se ingrese un espacio',()=>{
      assert.equal(cipher.decode(" ")," ");
    });
    
  });

});

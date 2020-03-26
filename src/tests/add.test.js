const add = (a,b) => {
    return a+b+1;
    
}

test('add two numbers', ()=> {

    const result = add(3,4);
    expect(result).toBe(7);
    
});
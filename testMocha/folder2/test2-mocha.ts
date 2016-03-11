import * as mocha from 'mocha';
const expect = require('code').expect;


describe('Test Suite 2', function(){
    
    before(function(done){
        console.log('test2 before');
        done();
    });

    beforeEach(function(done){
        console.log('test2 beforeEach');
        done();
    });
    
    
    it('should run test2 normally', function(){
        
        expect(1).to.equal(1);        
        
        
    })
    
    
})

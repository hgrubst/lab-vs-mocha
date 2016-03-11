import * as mocha from 'mocha';
const expect = require('code').expect;


describe('Test Suite 1', function(){
    
    before(function(done){
        console.log('test1 before');
        done();
    });

    beforeEach(function(done){
        console.log('test1 beforeEach');
        done();
    });
    
    
    it('should run test1 normally', function(){
        
        expect(1).to.equal(1);        
        
        
    })
    
    
})

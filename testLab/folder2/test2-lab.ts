const expect = require('code').expect;   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.experiment('experiment1', function(){
    
    lab.before(function(done){
        console.log("before test2")
        done()        
    })

    lab.before(function(done){
        console.log("beforeEach test2");
        done() 
    })
    
    
    lab.test('test2 returns true when 1 + 1 equals 2', (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });
})

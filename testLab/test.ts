const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.experiment('glboal experiment', ()=>{
    
    lab.before(function(done) {
        console.log("global before test1")
        done()
    })

    lab.before(function(done) {
        console.log("global beforeEach test1");
        done()
    })    
    
})


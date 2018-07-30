var chai = require("chai");

var sinon = require('sinon');
var rewire = require('rewire');

var GitCtrl = rewire('../../controllers/gitController');
var gitController = GitCtrl();

chai.should();

var getUser;
describe('gitController', function() {

    this.beforeEach(function()  {
        var gitService = GitCtrl.__get__('gitService');
        getUser = sinon.spy(gitService, 'getUser');
        GitCtrl.__set__('gitService', gitService);
    });
    it.only('should get a user and repos', function(done){
        this.timeout(10000);
        
        var res = {json: test};
        var req = {params:{userId:'Deacs'}};

         gitController.userGet(req, res);

        function test(user){
            user.login.should.equal('Deacs');
            console.log( getUser.getCall(0).args );
            done();
        }

    });
});
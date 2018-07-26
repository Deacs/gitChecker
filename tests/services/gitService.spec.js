var chai = require('chai');
var sinon = require('sinon');

chai.should();
var gitService = require('../../services/gitService')();

describe('GitService', function() {
    describe('GetUser', function() {
        it('should return user and repos', function() {
            // Enable below if the request is timing out
            this.timeout(10000);
            return gitService.getUser('Deacs').then(
                function(user) {
                    user.login.should.equal('Deacs');
                    user.should.have.property('repos');
                }
            );
        });
    });
});
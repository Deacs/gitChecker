var chai = require('chai'),
    sinon = require('sinon'),
    https = require('https');

var PassThrough = require('stream').PassThrough;

var gitJson = {
    "login": "Deacs",
    "id": 1513341,
    "node_id": "MDQ6VXNlcjE1MTMzNDE=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/1513341?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Deacs",
    "html_url": "https://github.com/Deacs",
    "followers_url": "https://api.github.com/users/Deacs/followers",
    "following_url": "https://api.github.com/users/Deacs/following{/other_user}",
    "gists_url": "https://api.github.com/users/Deacs/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Deacs/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Deacs/subscriptions",
    "organizations_url": "https://api.github.com/users/Deacs/orgs",
    "repos_url": "https://api.github.com/users/Deacs/repos",
    "events_url": "https://api.github.com/users/Deacs/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Deacs/received_events",
    "type": "User",
    "site_admin": false,
    "name": "David Ives",
    "company": null,
    "blog": "",
    "location": "United Kingdom",
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 21,
    "public_gists": 2,
    "followers": 7,
    "following": 4,
    "created_at": "2012-03-07T21:28:23Z",
    "updated_at": "2018-07-19T17:30:34Z"
};
chai.should();
var gitService = require('../../services/gitService')();

describe('GitService', function() {
    describe('GetUser', function() {
        beforeEach(function() {
            this.request = sinon.stub(https, 'request');
        });
        it('should return user and repos', function() {
            // Enable below if the request is timing out
            this.timeout(10000);
            //var gitJson = {login: 'Deacs'};
            var gitResponse = new PassThrough();
            gitResponse.write(JSON.stringify(gitJson));
            gitResponse.end();

            this.request.callsArgWith(1, gitResponse).returns(new PassThrough());
            
            return gitService.getUser('Deacs').then(
                function(user) {
                    console.log(user);
                    user.login.should.equal('Deacs');
                    //user.should.have.property('repos');
                }
            );
        });
        this.afterEach(function() {
            this.request.restore();
        });
    });
});
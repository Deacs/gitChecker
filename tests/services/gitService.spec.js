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
var repoJson = [
    {
        "id": 56497356,
    "node_id": "MDEwOlJlcG9zaXRvcnk1NjQ5NzM1Ng==",
    "name": "town-crier",
    "full_name": "Deacs/town-crier",
    "owner": {
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
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/Deacs/town-crier",
    "description": "Laravel powered Node app that provides feed of internal business news",
    "fork": false,
    "url": "https://api.github.com/repos/Deacs/town-crier",
    "forks_url": "https://api.github.com/repos/Deacs/town-crier/forks",
    "keys_url": "https://api.github.com/repos/Deacs/town-crier/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/Deacs/town-crier/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/Deacs/town-crier/teams",
    "hooks_url": "https://api.github.com/repos/Deacs/town-crier/hooks",
    "issue_events_url": "https://api.github.com/repos/Deacs/town-crier/issues/events{/number}",
    "events_url": "https://api.github.com/repos/Deacs/town-crier/events",
    "assignees_url": "https://api.github.com/repos/Deacs/town-crier/assignees{/user}",
    "branches_url": "https://api.github.com/repos/Deacs/town-crier/branches{/branch}",
    "tags_url": "https://api.github.com/repos/Deacs/town-crier/tags",
    "blobs_url": "https://api.github.com/repos/Deacs/town-crier/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/Deacs/town-crier/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/Deacs/town-crier/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/Deacs/town-crier/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/Deacs/town-crier/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/Deacs/town-crier/languages",
    "stargazers_url": "https://api.github.com/repos/Deacs/town-crier/stargazers",
    "contributors_url": "https://api.github.com/repos/Deacs/town-crier/contributors",
    "subscribers_url": "https://api.github.com/repos/Deacs/town-crier/subscribers",
    "subscription_url": "https://api.github.com/repos/Deacs/town-crier/subscription",
    "commits_url": "https://api.github.com/repos/Deacs/town-crier/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/Deacs/town-crier/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/Deacs/town-crier/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/Deacs/town-crier/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/Deacs/town-crier/contents/{+path}",
    "compare_url": "https://api.github.com/repos/Deacs/town-crier/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/Deacs/town-crier/merges",
    "archive_url": "https://api.github.com/repos/Deacs/town-crier/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/Deacs/town-crier/downloads",
    "issues_url": "https://api.github.com/repos/Deacs/town-crier/issues{/number}",
    "pulls_url": "https://api.github.com/repos/Deacs/town-crier/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/Deacs/town-crier/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/Deacs/town-crier/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/Deacs/town-crier/labels{/name}",
    "releases_url": "https://api.github.com/repos/Deacs/town-crier/releases{/id}",
    "deployments_url": "https://api.github.com/repos/Deacs/town-crier/deployments",
    "created_at": "2016-04-18T10:05:33Z",
    "updated_at": "2017-01-21T17:34:40Z",
    "pushed_at": "2017-12-21T16:07:01Z",
    "git_url": "git://github.com/Deacs/town-crier.git",
    "ssh_url": "git@github.com:Deacs/town-crier.git",
    "clone_url": "https://github.com/Deacs/town-crier.git",
    "svn_url": "https://github.com/Deacs/town-crier",
    "homepage": "",
    "size": 1242,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "PHP",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 1,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 1,
    "license": null,
    "forks": 1,
    "open_issues": 1,
    "watchers": 1,
    "default_branch": "master"
    }
];
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

            var repoResponse = new PassThrough();
            repoResponse.write(JSON.stringify(repoJson));
            repoResponse.end();

            this.request.onFirstCall().callsArgWith(1, gitResponse).returns(new PassThrough()).onSecondCall().callsArgWith(1, repoResponse).returns(new PassThrough());
            
            return gitService.getUser('Deacs').then(
                function(user) {
                    console.log(user);
                    user.login.should.equal('Deacs');
                    user.should.have.property('repos');
                }
            );
        });
        this.afterEach(function() {
            this.request.restore();
        });
    });
});
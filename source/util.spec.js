const {tranformData} = require('./util');

const mock = {
  sha: '55f4db183f7cf1fdd64b4ab1da138548265e419e',
  node_id: 'MDY6Q29tbWl0MjcxOTM3Nzk6NTVmNGRiMTgzZjdjZjFmZGQ2NGI0YWIxZGExMzg1NDgyNjVlNDE5ZQ==',
  commit: {
    author: {
      name: 'Anna Henningsen',
      email: 'anna@addaleax.net',
      date: '2019-11-05T23:06:17Z'
    },
    committer: {
      name: 'Rich Trott',
      email: 'rtrott@gmail.com',
      date: '2019-11-08T03:53:40Z'
    },
    message: 'test: remove AtExit() addon test\n' +
      '\n' +
      'Move the one bit of the addon test that was not covered by the\n' +
      'cctest into the latter and delete the former.\n' +
      '\n' +
      'Refs: https://github.com/nodejs/node/pull/30227#discussion_r341879242\n' +
      '\n' +
      'PR-URL: https://github.com/nodejs/node/pull/30275\n' +
      'Reviewed-By: Gireesh Punathil <gpunathi@in.ibm.com>\n' +
      'Reviewed-By: Daniel Bevenius <daniel.bevenius@gmail.com>\n' +
      'Reviewed-By: Colin Ihrig <cjihrig@gmail.com>\n' +
      'Reviewed-By: Ben Noordhuis <info@bnoordhuis.nl>',
    tree: {
      sha: 'f00d0716d291415d4ddc3153c4a44a8d1f57e5d2',
      url: 'https://api.github.com/repos/nodejs/node/git/trees/f00d0716d291415d4ddc3153c4a44a8d1f57e5d2'
    },
    url: 'https://api.github.com/repos/nodejs/node/git/commits/55f4db183f7cf1fdd64b4ab1da138548265e419e',
    comment_count: 0,
    verification: {
      verified: false,
      reason: 'unsigned',
      signature: null,
      payload: null
    }
  },
  url: 'https://api.github.com/repos/nodejs/node/commits/55f4db183f7cf1fdd64b4ab1da138548265e419e',
  html_url: 'https://github.com/nodejs/node/commit/55f4db183f7cf1fdd64b4ab1da138548265e419e',
  comments_url: 'https://api.github.com/repos/nodejs/node/commits/55f4db183f7cf1fdd64b4ab1da138548265e419e/comments',
  author: {
    login: 'addaleax',
    id: 899444,
    node_id: 'MDQ6VXNlcjg5OTQ0NA==',
    avatar_url: 'https://avatars2.githubusercontent.com/u/899444?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/addaleax',
    html_url: 'https://github.com/addaleax',
    followers_url: 'https://api.github.com/users/addaleax/followers',
    following_url: 'https://api.github.com/users/addaleax/following{/other_user}',
    gists_url: 'https://api.github.com/users/addaleax/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/addaleax/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/addaleax/subscriptions',
    organizations_url: 'https://api.github.com/users/addaleax/orgs',
    repos_url: 'https://api.github.com/users/addaleax/repos',
    events_url: 'https://api.github.com/users/addaleax/events{/privacy}',
    received_events_url: 'https://api.github.com/users/addaleax/received_events',
    type: 'User',
    site_admin: false
  },
  committer: {
    login: 'Trott',
    id: 718899,
    node_id: 'MDQ6VXNlcjcxODg5OQ==',
    avatar_url: 'https://avatars2.githubusercontent.com/u/718899?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/Trott',
    html_url: 'https://github.com/Trott',
    followers_url: 'https://api.github.com/users/Trott/followers',
    following_url: 'https://api.github.com/users/Trott/following{/other_user}',
    gists_url: 'https://api.github.com/users/Trott/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/Trott/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/Trott/subscriptions',
    organizations_url: 'https://api.github.com/users/Trott/orgs',
    repos_url: 'https://api.github.com/users/Trott/repos',
    events_url: 'https://api.github.com/users/Trott/events{/privacy}',
    received_events_url: 'https://api.github.com/users/Trott/received_events',
    type: 'User',
    site_admin: false
  },
  parents: [
    {
      sha: 'e460e14d57869c37b181f1e4839c70d8fa89ffb3',
      url: 'https://api.github.com/repos/nodejs/node/commits/e460e14d57869c37b181f1e4839c70d8fa89ffb3',
      html_url: 'https://github.com/nodejs/node/commit/e460e14d57869c37b181f1e4839c70d8fa89ffb3'
    }
  ]
};

describe('tranformData', () => {
  it('not number ending', () => {

    expect(tranformData(mock)).toEqual({message: 'test: remove AtExit() addon test', author: "addaleax", hash: "55f4db183f7cf1fdd64b4ab1da138548265e419e", "isBlue": false,})
  })

  it('number ending', () => {
    mock.sha = '55f4db183f7cf1fdd64b4ab1da138548265e419'
    expect(tranformData(mock)).toEqual({message: 'test: remove AtExit() addon test', author: "addaleax", hash: "55f4db183f7cf1fdd64b4ab1da138548265e419", "isBlue": true,})
  })
})
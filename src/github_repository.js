const Octokit = require('@octokit/rest');

const client = Octokit();
const STATIC_QUERY = {
    owner: 'joyent',
    repo: 'node',
    sha: 'master',
};

async function latestCommits(user = null) {
    const query = {
        ...(user !== null && {author: user}),
        ...STATIC_QUERY
    };

    return client.repos.listCommits(query)
        .then(({data}) => {
            return data.map((item) => {
                return {
                    hash: item.sha,
                    login: (item.author) ? item.author.login : null,
                    email: item.commit.author.email,
                    name: item.commit.author.name,
                };
            })
        })
        .catch((e) => {
            throw(e);
        });
}

module.exports = {
    latestCommits: latestCommits
};

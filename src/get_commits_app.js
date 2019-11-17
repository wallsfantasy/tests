const color = require('./color_service');
const github = require('./github_repository');

async function getCommits(user = null) {
    try {
        const commits = await github.latestCommits(user);
        return commits.map((cm) => {
            cm.highlight = color.byLastChar(cm.hash);
            return cm;
        });
    } catch (e) {
        throw e;
    }
}

module.exports = {
    getCommits: getCommits
};

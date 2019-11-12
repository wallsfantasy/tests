const tranformData = (data) => {
    const {commit: {message}, author: {login: author}, sha: hash} = data;
    const firstLineMsg = message.split('\n')[0];
    const lastChar = hash[hash.length - 1];
    const isBlue =  lastChar >= '0' && lastChar<='9'
    return {message: firstLineMsg, author, hash, isBlue};
}
exports.tranformData = tranformData;

exports.toHtml = (row) => {
    const {message, author, hash, isBlue} = row;
    return `
<tr ${isBlue ? 'style="background: #E6F1F6;"' : ''}>
    <td>${hash}</td>
    <td>${message}</td>
    <td>${author}</td>
</tr>
    `
}
const fs = require('fs')

//.git/COMMIT_EDITMSG
const message_path = process.argv[2];

function removeComment(msg) {
  return msg.replace(/^#.*[\n\r]*/gm, '');
}
if (!message_path) process.exit();
const message = removeComment(fs.readFileSync(message_path, 'utf-8').trim());
const commit_reg =
  /^(revert: )?(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release|dep|example|Merge)(\(.+\))?: .{1,50}/;
if (!commit_reg.test(message)) {
  console.error(
    `\nERROR: invalid commit message format.}\n` +
    `Proper commit message format is required for automated changelog generation. Examples:\n\n` +
    `feat(app): add 'comments' option.\n` +
    `fix(core): handle events on blur.\n\n` +
    `See .github/commit-convention.md for more details.\n`
  );
  process.exit(1);
}

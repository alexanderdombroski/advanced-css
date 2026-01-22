module.exports = {
  "*.{ts,js,mjs,cjs,mts,css,html,md}": (stagedFiles) => [
    `prettier --write ${stagedFiles.join(" ")}`,
  ],
};

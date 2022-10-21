# Changesets

Hello and welcome! This folder has been automatically generated by `@changesets/cli`, a build tool that works
with multi-package repos, or single-package repos to help you version and publish your code. You can
find the full documentation for it [in our repository](https://github.com/changesets/changesets)

We have a quick list of common questions to get you started engaging with this project in
[our documentation](https://github.com/changesets/changesets/blob/main/docs/common-questions.md)

# PUBLISH STEPS

1. 发布测试版本

利用官方提供的 Prereleases 模式，通过 pre enter <tag> 命令进入先进入 pre 模式。

常见tag [alpha,beta,rc]
先运行：

```shell
   pnpm changeset pre enter beta 
```
之后在此模式下的 changeset publish 均将默认走 beta 环境

执行：
```shell
pnpm changeset
pnpm version-packages
pnpm release
```

完成版本发布之后，退出 Prereleases 模式：

pnpm changeset pre exit

2. 发布正式版本

执行：
```shell
pnpm changeset
pnpm version-packages
pnpm release
```
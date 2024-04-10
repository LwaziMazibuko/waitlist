# 用Waitlist开启你的 AI 创业

用Waitlist开启你的而不是 SaaS 模板开启你的 AI 创业之旅。一旦你完成了Waitlist,可以查看我们的 AI 驱动的 Next.js SaaS 模板 [Saasfly](https://github.com/saasfly/saasfly)。

## 为什么选择 Saasfly Waitlist?

1. **高性能静态页面**: 利用 Next.js 的静态站点生成(SSG)能力,提供极快的静态页面,同时享受 Next.js 无与伦比的开发体验。
2. **零托管成本**: 完全免费地在 Cloudflare 上部署静态页面,消除托管成本和烦恼。
3. **动态数据收集**: 利用 Google Forms 的能力收集表单数据,为静态页面赋予动态功能,实现无缝的数据收集和用户交互。
4. **数据所有权和隐私**: 完全控制和拥有你的数据,无需依赖第三方 SaaS 提供商,确保数据隐私和自主权。

> **Nextify** 提供完整的企业级 SaaS 解决方案。如果你有兴趣讨论你的项目或者只是想与我们联系,欢迎随时通过 contact@nextify.ltd 与我们联系。

> ❤️ 我们**为非营利组织提供免费的技术支持和部署服务**。

> 🙌 我们从开源项目中获得的**所有利润将全部用于支持开源计划和慈善事业**。

## 简介

我们的目标是利用 Next.js 的静态站点生成(SSG)功能构建高性能的等候页面,并使用 Google Forms 作为后端接收用户提交的电子邮件信息。
通过这种方法,我们可以快速、经济高效地创建等候页面,而无需编写任何后端代码进行数据收集。

## ⚡ 在线演示

试试吧!

演示网址: https://waitlist.saasfly.io

## ⚠️ 注意
出于安全原因,我们强制要求用户在提交 Google 表单之前登录。如果你的使用场景不需要这种级别的安全性,可以关闭此要求。

![Google 表单登录](img.png)

## 🚀 快速开始

### 📋 先决条件

在开始之前,请确保你已经安装了以下内容:

1. Bun & Node.js & Git

- Linux

```bash
curl -sL https://gist.github.com/tianzx/874662fb204d32390bc2f2e9e4d2df0a/raw -o ~/downloaded_script.sh && chmod +x ~/downloaded_script.sh && source ~/downloaded_script.sh
```

- MacOS

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install git
brew install oven-sh/bun/bun
brew install nvm
```

### 安装

要开始使用此模板,请按照以下步骤操作:

1. 克隆仓库:

```bash
git clone https://github.com/saasfly/waitlist.git
cd waitlist
bun install
```

2. 设置环境变量:

```bash
cp .env.example .env.local
```
请参阅我们的[文档](https://document.saasfly.io/usage/waitlist/google-forms/)以了解如何获取你自己的变量。

3. 运行开发服务器:

```bash
bun run dev
```

4. 在浏览器中打开 http://localhost:3000 查看结果。

## ⭐ 特性

- **🐭 框架**: Next.js - 用于 Web 的 React 框架(使用 App 目录)
- **🐮 平台**: Cloudflare 
- **🐯 后端**: Google Forms API

## 🚀 部署
要部署你的Waitlist,请创建一个 Cloudflare Pages 应用程序:

1. 添加你自己的变量
   
![Cloudflare Pages 设置](deploy1.png)

2. 部署配置
   
![Cloudflare Pages 部署](deploy2.png)

## 📜 许可证
本项目采用 MIT 许可证。有关更多信息,请参阅[许可证](LICENSE)文件。
部署需要安装node

然后安装PM2(PM2 是一个守护进程管理工具，帮助您管理和守护您的应用程序。它以简单直观的 C​​LI 命令行方式进行工作。)
npm install pm2@latest -g


### 安装依赖
npm install

### 开发(热更新)
npm run auto

### 部署
npm run deploy

### pm2命令https://pm2.fenxianglu.cn/docs/start

log输出文件路径（默认为 $HOME/.pm2/logs）
配置文件 ecosystem.config.js
// pm2 flush 清空日志

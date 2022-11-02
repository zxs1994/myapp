module.exports = {
  apps: [
    {
      name: 'myapp', // 进程名称
      script: './bin/www', // 启动路径
      watch: true, // 监听文件变化自动重启
      ignore_watch: ['node_modules'], // 忽略文件
      stop_exit_codes: [0], // 崩溃重启
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: '80'
      },
    },
  ],
}

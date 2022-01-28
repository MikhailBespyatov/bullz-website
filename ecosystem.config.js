module.exports = {
  apps: [
    {
      name: 'bullz-site-dev-4000',
      cwd: '/home/powermob/application/bullz/bullz-site-dev',
      script: 'yarn',
      args: 'start:do',
      exec_mode: 'cluster',
      instances: 'max',
      watch: ['next-env.d.ts'],
    },
],};

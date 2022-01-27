module.exports = {
  apps: [
    {
      name: 'bullz-site-dev-4000',
      cwd: '~/application/bullz/bullz-site-dev',
      script: 'yarn',
      args: 'start',
      exec_mode: 'cluster',
      instances: 'max',
      watch: ['next-env.d.ts'],
    },
],};

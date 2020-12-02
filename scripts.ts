
export default {
  scripts: {
    start: {
      cmd: 'deno run mod.js',
      allow: ['net']
    },
    install: 'deno run deps.js',
    lint: 'deno lint --unstable'
  }
}

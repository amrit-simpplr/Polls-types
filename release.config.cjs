module.exports = {
  branches: [
    'main',
    'master',
    { name: 'develop', prerelease: 'dev' },
    { name: 'beta', prerelease: true },
    { name: 'alpha', prerelease: true }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md'
      }
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        tarballDir: 'dist'
      }
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'dist/*.tgz',
            label: 'Package tarball'
          },
          {
            path: 'dist/api.json',
            label: 'OpenAPI specification'
          },
          {
            path: 'dist/index.html',
            label: 'API documentation'
          }
        ]
      }
    ]
  ]
};
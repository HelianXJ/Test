module.exports = function(grunt) {
    let version = 'dev';
    version = require('child_process').execSync(
        'git rev-parse --abbrev-ref HEAD'
    ).toString().replace(/(^\s*)|(\s*$)/g, '');
    if (version === 'HEAD') {
        const head = require('child_process').execSync(
            'git describe --always --tags'
        ).toString().replace(/(^\s*)|(\s*$)/g, '');
        if (head.slice(0, 1) === 'v') {
            version = head.substring(1);
        }
    }
    grunt.registerTask('update-asset-version', function() {
        grunt.file.write(
            '../config/asset-version.js',
            "module.exports = '" + version + "';"
        );
    });
    grunt.registerTask('webpack', function() {
        require('child_process').execSync('webpack', {
            'stdio': [0, 1, 2]
        });
    });
    grunt.registerTask('default', [
        'update-asset-version',
        'webpack'
    ]);
};

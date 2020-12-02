const withImages = require('next-images');
module.exports = withImages({
    esModule: true,
});
module.exports = {
    env: {
        API_BASE_URL: 'https://localhost:5001/api',
    },
};

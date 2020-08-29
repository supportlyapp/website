import theme from './index'

const colors = require('vuetify/es5/util/colors').default;

export default theme({
    mode: 'spa',
    content: {
        liveEdit: false,
    },
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    css: [
        { src: '~assets/sass/app.scss', lang: 'scss' },
    ],
    plugins: [
        {
            src: '~components/base/index.js',
            ssr: false,
            mode: "client"
        },
    ],
    vuetify: {
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#1A4B79',
                    secondary: '#050b1f',
                    accent: '#204165',
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

})

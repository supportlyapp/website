<template>
    <v-app>
        <v-app-bar
                id="home-app-bar"
                app
                color="white"
                elevation="1"
                height="80"
        >
            <div>
                <v-tabs
                        class="hidden-sm-and-down"
                        optional
                >
                    <v-tab
                            to="/"
                            :ripple="false"
                            active-class="text--primary"
                            class="font-weight-bold"
                            min-width="96"
                            text
                    >
                        Home
                    </v-tab>
                    <v-tab
                            to="/docs/introduction"
                            :ripple="false"
                            active-class="text--primary"
                            class="font-weight-bold"
                            min-width="96"
                            text
                    >
                        Docs
                    </v-tab>

                </v-tabs>
            </div>
        </v-app-bar>

        <v-theme-provider dark>
            <div id="hero">
                <v-img
                        :min-height="minHeight"
                        src="/home-hero.jpg"
                        class="white--text"
                        gradient="to right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .8)"
                >
                    <v-container class="fill-height px-4 py-12">
                        <v-responsive
                                class="d-flex align-center"
                                height="100%"
                                max-width="700"
                                width="100%"
                        >
                            <base-heading title="SUPPORT YOUR CUSTOMER IN REAL TIME FOR FREE!"/>

                            <base-body>
                                Supportly is a free and realtime support system for the people whom can't affored the
                                over
                                prices support services.
                            </base-body>

                            <div
                                    :class="$vuetify.breakpoint.smAndDown ? 'flex-column align-start' : 'align-center'"
                                    class="d-flex flex-wrap"
                            >
                                <base-btn>
                                    Get Started Now
                                </base-btn>
                            </div>
                        </v-responsive>
                    </v-container>
                </v-img>
            </div>
        </v-theme-provider>

        <base-section id="theme-features">
            <base-section-heading title="System Features">
                Here are the most interesting features. You will discover more when you start using supportly
            </base-section-heading>

            <v-container>
                <v-row>
                    <v-col
                            v-for="(feature, i) in features"
                            :key="i"
                            cols="12"
                            md="6"
                    >
                        <base-avatar-card
                                v-bind="feature"
                                align="left"
                                horizontal
                        >
                            {{ feature.text }}
                        </base-avatar-card>
                    </v-col>
                </v-row>
            </v-container>
        </base-section>

        <v-theme-provider dark>
            <base-section
                    id="social"
                    class="accent text-center"
                    space="56"
            >
                <base-icon class="mb-8">
                    mdi-twitter
                </base-icon>

                <base-section-heading
                        color="transparent"
                        title="Social Media"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aspernatur recusandae aut
                    repudiandae illo error obcaecati dolores voluptate, tempore.
                </base-section-heading>

                <a
                        class="d-inline-block mb-8"
                        href="https://vuetifyjs.com"
                        style="text-decoration: none;"
                        target="_blank"
                >
                    https://vuetifyjs.com
                </a>

                <div class="py-4"/>

                <v-btn class="font-weight-bold" color="white" href="https://twitter.com/vuetifyjs" light min-width="168"
                       target="_blank" x-large>
                    Follow Us

                    <v-icon right>
                        mdi-open-in-new
                    </v-icon>
                </v-btn>
            </base-section>
        </v-theme-provider>

        <base-section id="info-alt" space="56">
            <v-container>
                <v-row justify="space-between">
                    <v-col cols="12" md="5">
                        <base-business-info title="KEEP IN TOUCH WITH US">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo pariatur quidem, quis modi
                            iure nihil commodi suscipit, corporis dicta adipisci, voluptatum quia cupiditate.
                        </base-business-info>
                    </v-col>

                    <v-col cols="12" md="6">
                        <base-contact-form title="MAIL US YOUR MESSAGE"/>
                    </v-col>
                </v-row>
            </v-container>
        </base-section>

        <v-footer id="home-footer" color="grey darken-4" dark min-height="72">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
                            <template v-for="(s, i) in social">
                                <a :key="s" class="white--text pa-1 pa-md-0" href="#" v-text="s"/>

                                <v-responsive v-if="i < social.length - 1" :key="`divider-${s}`"
                                              class="mx-4 shrink hidden-sm-and-down" max-height="24">
                                    <v-divider vertical/>
                                </v-responsive>
                            </template>
                        </div>
                    </v-col>

                    <v-col class="text-center text-md-right" cols="12" md="6">
                        Copyright &copy; 2020 Vuetify, LLC
                    </v-col>
                </v-row>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            title: process.env.appName,
            items: [
                'Home',
            ],
            features: [
                {
                    title: 'Real Time',
                    icon: 'flash_on',
                    text: `Unlike the monolithic support system you don't have to reload the page repeatedly to load updates, Updates are loaded instantly`
                },
                {
                    title: 'Free & Open Source',
                    icon: 'code',
                    text: `it won't cost you any thing unless the server you will deploy it on, also you can contribute to the project with features you like!`
                },
                {
                    title: 'Extensive API',
                    icon: 'http',
                    text: `You can extend the system API to process and visualize data in your clients such as mobile apps or other web portals`
                },
                {
                    title: 'Unlimited',
                    icon: 'all_inclusive',
                    text: 'Unlike many other freemium systems which offers a limited services in their free plans this system has not limitations at all. The only limits here are your server resources'
                },
                {
                    title: 'SPA',
                    icon: 'spa',
                    text: `Thanks to nuxtjs this project web interface requires no loads on navigations which makes it blazing fast`
                },
                {
                    title: 'Secure',
                    icon: 'lock',
                    text: `Thanks to laravel and it's new authentication guard "sanctum" the system is secured using http-only cookies without any need to store exposable tokens`
                },
            ],
            social: [
                'Facebook',
                'Twitter',
                'Instagram',
                'Linkedin',
            ],
        }),

        computed: {
            minHeight() {
                const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

                return `calc(${height} - ${this.$vuetify.application.top}px)`
            },
        }
    }
</script>

<style scoped>

    html, body {
        height: 100%;
    }

    #home-footer a {
        text-decoration: none
    }

</style>

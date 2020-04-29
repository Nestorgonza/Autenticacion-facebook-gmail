<template>
    <nav>
        <v-app-bar
        app
        color="primary"
        dark
        >
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <router-link :to="{name: 'Home'}">
            <div class="d-flex align-center">
                <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
                />

                <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"
                />
            </div>
            </router-link>
            

            <v-spacer></v-spacer>

            <v-btn @click="cerrarSesion">
                <span class="mr-2">Cerrar sesión</span>
                <v-icon>fab fa-accessible-icon</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer class="teal" v-model="drawer" app>
            <v-layout column align-center mt-5>
                <v-flex>
                    <v-avatar>
                        <v-img
                        alt="Vuetify Logo"
                        class="shrink mr-2"
                        contain
                        :src="usuario.foto"
                        transition="scale-transition"
                        width="40"
                        />
                    </v-avatar>
                </v-flex>
                <v-flex>
                    <p class="mt-3 white--text">{{usuario.nombre}}</p>
                </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-list>                                            
                <v-list-item v-for="item in items" :key="item.title"
                :to="item.to">
                    <v-list-item-icon>
                        <v-icon class="white--text">{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{item.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Dashboard', icon: 'far fa-address-card', to: {name:'Home'} },
                { title: 'Account', icon: 'far fa-address-card', to: {name:'Ingreso'} },
                { title: 'Admin', icon: 'far fa-address-card', to: {name:'Admin'} },
            ],
        }
    },
    methods: {
        ...mapActions(['cerrarSesion'])
    },
    computed: {
        ...mapState(['usuario'])
    },
}
</script>
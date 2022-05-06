<template>

        <div class="contents">

            <div class="container-fluid">
                <div class="social-dash-wrap">
                    <div class="row" v-if="user.type == `sa`">

                        <div class="col-lg-12">
                            <div class="breadcrumb-main">
                                <ul class="atbd-breadcrumb nav">
                                    <li class="atbd-breadcrumb__item">
                                        <router-link to="#">
                                            Super Admin Dashboard
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 mb-25" v-for="(card, i) in superadmindashcards" :key="i">
                            <a :href="card.link" class="social-overview-wrap">
                                <a-card hoverable="true" class="card border-0" :title="card.title">{{card.text}}</a-card>
                            </a>
                        </div>
                    </div>
                    
                    <div class="row" v-else-if="user.type == `colleague`">
                        <div class="col-lg-12">
                            <div class="breadcrumb-main">
                                <ul class="atbd-breadcrumb nav">
                                    <li class="atbd-breadcrumb__item">
                                        <router-link to="#">
                                            Trade Finance Dashboard
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 mb-25" v-for="(card, i) in tradefindashcards" :key="i">
                            <a :href="card.link" class="social-overview-wrap">
                                <a-card hoverable="true" class="card border-0" :title="card.title">{{card.text}}</a-card>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <footer class="footer-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <div class="footer-copyright">
                            <p>2022 @<router-link to="#">Bunisha</router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
</template>

<script>
import { ref } from "vue";
import VueFeather from "vue-feather";
import { getAuth } from "@firebase/auth";
import {
	collection,
	query,
	getFirestore,
	onSnapshot,
	addDoc,
} from "firebase/firestore";
import {Card} from 'ant-design-vue';

const tradefindashcards = [
    {
        title: 'Manage Bid Bonds',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '#'
    },
    {
        title: 'Manage Companies',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '/companies/manage'

    },
    {
        title: 'Manage Customers',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '/customers'

    },
    {
        title: 'Onboard Company',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '#'
    },
]

const superadmindashcards = [
    {
        title: 'Manage Users',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '#'
    },
    {
        title: 'Create User',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '#'
    },
    {
        title: 'Create Branch',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '#'
    },
    {
        title: 'Manage Roles',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '#'

    },
    {
        title: 'Create Role',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '#'

    },
    {
        title: 'Disable Account',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        link: '#'
    },
]

export default {
    setup() {
        
		const db = ref(null);
		const auth = ref(null);
		const user = ref({
            type: ''
        });

        return {db, auth, user}
    },

	async beforeCreate() {
		this.db = await getFirestore();
		this.auth = await getAuth()
    },

    components: {
        ACard: Card,
    },

    data() {
        return {
            tradefindashcards,
            superadmindashcards,
        }
    },

	async beforeCreate() {
		this.db = await getFirestore();
		this.auth = await getAuth().currentUser;

		// Get list of branches
		const users_q = query(collection(this.db, "users"));
		onSnapshot(users_q, (querySnapshot) => {
			// const users = [];
			querySnapshot.forEach(async (doc) => {
				if (doc.data().uid == (await getAuth().currentUser.uid)) {
					this.user = doc.data();
				}
			});
		});
	},
}
</script>
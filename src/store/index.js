import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.use(Vuex);
Vue.use(ElementUI);

export default new Vuex.Store({


    state: {
    data1: [
    {
        apiname: '',
        des: '',
        checkout: true,
        
    }
    ]

    },

    getters:{
        allDos: (state) => state.data1
    },

    actions:{
        addRow({commit}, apiname, des, checkout) {
            newdata=[apiname,des,checkout]
           commit('addTodo', newdata)         
        }   

    },

    mutations: {
        addTodo: (state, todo) => (state.data1.push(todo))
       
},

    
})
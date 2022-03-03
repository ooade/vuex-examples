import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
const URL ="https://cat-fact.herokuapp.com/"

export default new Vuex.Store({
	state: {
		todos: [],
		favs: [],
	},

	mutations: {
		addTodo(state, text) {
			state.todos.push({ text })
		},

		addFavs(state, text) {
			state.favs.push( { text } )
		},

		removeFavs(state, favs) {
			state.favs.splice(state.favs.indexOf(favs), 1)
		},

		removeTodo(state, todo) {
			state.todos.splice(state.todos.indexOf(todo), 1)
		},

		Import(state,textImport) {
			axios.get(`${URL}facts/random?animal_type=cat&amount=${textImport}`)
			.then(resp=>{
				
				if(textImport >=2){
					resp.data.forEach(value => {
						let text = value.text
						state.todos.push({text})
					});
				}else{
					state.todos.push({'text':resp.data.text})
				}
			})
		}

	}
})

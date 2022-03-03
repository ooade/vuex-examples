<template>
	<div>
		<div>
			<!-- primeira secçao -->
			<!-- ao clicar em import deve ir buscar à API informação random que faz um addTodo automaticamente quando importa -->
			<h1>Import</h1>
			<form @submit.prevent="Import">
				<input
				type="number"
				placeholder="How many to import?"
				v-model="textImport"
				min="0"
				max="50"
				/>
				<button> Import </button>
			</form>
		</div>

		<div>
			<!-- segunda secçao -->
			<!-- formulario -->
			<form @submit.prevent="addTodo">
				<input
				type="text"
				placeholder= "What must be done?"
				v-model="text"
				/>
				<button> Add Todo </button>
			</form>
			<h1>Lista</h1>
			<!-- lista -->
			<ul>
				<!-- lista -->
				<li
					v-for="(todo, index) in todos"
					:key="index"
					>{{ todo.text }}
						<button @click="removeTodo(todo)">x</button>
						<button @click="addFavs(todo)">☆</button>
				</li>

			</ul>
		</div>

		<div>
			<!-- terceira secçao -->
			<h1>Favoritos</h1>

			<!-- lista -->
			<ul>
				<!-- lista -->
				<li
					v-for="(favs, index) in favs"
					:key="index"
					>{{ favs.text }}
						<button @click="removeFavs(favs)">x</button>
				</li>

			</ul>
		</div>
	</div>
</template>

<script>

import store from '../store';

export default {
	data() {
		return {
			text: '',
			textImport: "",
		}
	},

	

	computed: { 
		todos: () => store.state.todos,
		favs: () => store.state.favs,
		},

	methods: {
		addTodo() {	
			store.commit('addTodo', this.text)
			this.text = ''
		},

		addFavs(id) {
			store.commit('removeTodo', id)
			store.commit('addFavs', id.text, id)	
		},

		removeFavs(id) {
			store.commit('removeFavs', id)
			store.commit('addTodo', id.text,id)
		},

		removeTodo(id) {
			store.commit('removeTodo', id)
		},

		Import() {
			store.commit('Import', this.textImport)
			this.textImport = ''
		},	
	}
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  margin-top: 40px;
}
input {
 width: 250px;
}

</style>

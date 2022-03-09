import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from "moment"


Vue.use(Vuex)
const URL ="https://staging-at-api.azitek.io/"

export default new Vuex.Store({
	state: {
		list: [],
	},

	mutations: {
		List(state) {
			axios.get(`${URL}tags/`, {
				headers: {
					'X-Api-Key': "6e133fd221f87a77545181af132e7b5c2cee09c328a8f310d513dc9e89c8f3f3"
				}
			})

			.then(resp=>{
				console.log(resp.data)
				
				resp.data.forEach(value => {
									
					//value.id = value.id.toString(16)
					//value.id= value.id.toUpperCase()
					//value.id= value.id.match(/.{1,2}/g).join(":")
					value.last_update = moment.unix(value.last_update).format('MMMM Do YYYY, h:mm:ss a')

					state.list.push(value)
					

				});
			})
		},

		

	}
})

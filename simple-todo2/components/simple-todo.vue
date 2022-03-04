<template>

	<div>
		<div>
			<input type="text" v-model="search" placeholder="Search bar">

			<h1>Anchors</h1>

			<div class="grid-container" >	
				<div class="grid-item pointer" @click="myFunction('bssid')"> bssid </div>
				<div class="grid-item " >fw_version </div>
				<div class="grid-item pointer" @click="myFunction('id')">id </div>
				<div class="grid-item pointer" @click="myFunction('label')">label </div>
				<div class="grid-item pointer" @click="myFunction('last_update')">last_update </div>
				<div class="grid-item " >rssi </div>
				<div class="grid-item ">runtime </div>
				<div class="grid-item " >ssid </div>
			</div>

			<div class="grid-container" v-for="(anchor) in filter" 
					:key="anchor.id">
				<div class="grid-item" >{{ anchor.bssid }} </div>
				<div class="grid-item" >{{ anchor.fw_version }} </div>
				<div class="grid-item" >{{ anchor.id.toString(16).toUpperCase().match(/.{1,2}/g).join(":") }} </div>
				<div class="grid-item" >{{ anchor.label }} </div>
				<div class="grid-item" >{{ anchor.last_update }} </div>
				<div class="grid-item" >{{ anchor.rssi }} </div>
				<div class="grid-item" >{{ anchor.runtime }} </div>
				<div class="grid-item" >{{ anchor.ssid }} </div>
			</div>

		</div>
	</div>

</template>

<script>

	import store from '../store';

	export default {

		data() {
			return {
				search:"",
				Lista: [],

				orders: {
					bssid: true,
					label: true,
					id: true,
					last_update: true,
				},

			}
		},

		computed: { 
			anchors: () => store.state.list,

			filter(){
				return this.anchors.filter( anchors => {
					return anchors.label.match(this.search);
				})
			}

		},

		methods: {

			List() {	
				store.commit('List')
			},

			myFunction(ref) { 
			
				switch(ref){

					case "label" :

						let tempOrder= this.orders.label;
						this.anchors.sort(function(a, b) {

							if(tempOrder){

								return a.label.localeCompare(b.label);
								
							}else{

								return b.label.localeCompare(a.label);
							}

						});
						
						this.orders.bssid = true
						this.orders.id = true
						this.orders.last_update = true
						this.orders.label = !this.orders.label
						break;
							
					case"bssid":

						let tempOrder2= this.orders.bssid;
						this.anchors.sort(function(a, b) {
							

							if(tempOrder2){

								return a.bssid.localeCompare(b.bssid);
								
							}else{

								return b.bssid.localeCompare(a.bssid);
							}

						});

						this.orders.label = true
						this.orders.id = true
						this.orders.last_update = true
						this.orders.bssid = !this.orders.bssid
						break;

						case"id":

						let tempOrder3= this.orders.id;
						this.anchors.sort(function(a, b) {
				
							if(tempOrder3){
								
								return a.id>b.id ? 1 : -1;
								
							}else{
								
								return a.id<b.id ? 1 : -1;
							}
			
						});

						this.orders.label = true
						this.orders.bssid = true
						this.orders.last_update = true
						this.orders.id = !this.orders.id
						break;

						case"last_update":

						let tempOrder4= this.orders.last_update;
						this.anchors.sort(function(a, b) {
							

							if(tempOrder4){

								return a.last_update.localeCompare(b.last_update);
								
							}else{

								return b.last_update.localeCompare(a.last_update);
							}

						});

						this.orders.label = true
						this.orders.bssid = true
						this.orders.id = true
						this.orders.last_update = !this.orders.last_update
						break;
					
				}
			},

		},

		created() {
			this.List();
		},
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
.pointer {
  cursor: pointer;
}
.grid-container {
  	display: grid;
  	grid-template-columns:  12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  	background-color: #2196F3;
  	padding: 1px;
}
.grid-item {
  	background-color: rgba(255, 255, 255, 0.8);
  	border: 1px solid rgba(0, 0, 0, 0.8);
  	padding: 30px;
  	font-size: 18px;
	overflow: hidden;
	text-overflow: ellipsis;
  	text-align: center;
}


</style>

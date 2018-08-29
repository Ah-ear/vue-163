import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		list:[]
	},
	getters:{
		list(state){
			return state.list
		}
	},
	mutations:{
		updateList(state,data){
			state.list = data
		}
	},
	actions:{
		getLists(store){
			Vue.jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html').then( data => {
				console.log('data',data);
				var list = data.list.filter(item => {
					return item.addData == null&&item.picInfo.length!=0
				}).map(item => {
					console.log('item',item)
					return{
						title:item.title,
						src:item.picInfo[0].url,
						desc:item.category
					}
				})
				store.commit('updateList',list)
			})
		}
	}
})
export default store
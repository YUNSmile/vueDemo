<template>
	<div>
		<search-form :formSetData='searchFormData' @searchevent="searchevent"></search-form>
		<com-table :tableColumn='tableColumn' :tableData='tableData'></com-table>
	</div>
</template>

<script>
	import SearchForm from '@/components/common/SearchForm.vue'
	import ComTable from '@/components/common/Table.vue'
	import orderListService from '@/service/orderList.js'
	import orderListSchema from '@/schema/basic/orderlist.js'

	export default{
		name:'orderList',
		components:{
		  	SearchForm,
		  	ComTable
		},
		methods: {
	      handleClick(row) {
	        console.log(row);
	      },
	      searchevent(formP){
	      	if(formP.billingDate){
	      		formP.billingDateStart = formP.billingDate[0].toISOString().slice(0,10);
	      		formP.billingDateEnd = formP.billingDate[1].toISOString().slice(0,10);
	      	}
	      	orderListService.fetchOrderList({
	      		pageNum: 1,
				pageSize: 10,
				...formP
	      	}).then(res=>{
	      		if(res.result){
	      			this.tableData = res.data;
	      		}else{
	      			this.$message.error(res.msg);
	      		}
	      	});
	      }
	    },
	    data() {
	      return {
	      	tableColumn:orderListSchema.tableColumn,
	      	searchFormData:orderListSchema.searchForm,
	        tableData: []
	      }
	    }
	}
</script>

<style>
</style>
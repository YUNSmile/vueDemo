<template>
	<el-table :data="tableData" style="width: 100%">
		<template v-for="item in tableColumn">
			<el-table-column :key="item.key" :label="item.label" :width='item.width' :fixed='item.fixed'>
				<template slot-scope="scope">
					<el-button v-if="item.key=='btns'" v-for="(btn,index) in item.btns" :key="index" @click="btn.handleClick(scope.row)" type="text" size="small">
						{{btn.label}}
					</el-button>
					<div v-html='item.render?item.render(scope.row,scope.row[item.key]):scope.row[item.key]'>
					</div>
				</template>
			</el-table-column>
		</template>
	</el-table>
</template>

<script>
	export default {
		name: 'Table',
		props: ['tableColumn', 'tableData'],
		data() {
			return {}
		},
		created() {},
		methods: {
			handleClick(row) {
				console.log(row);
			},
		}
	}
</script>

<style>

</style>
<template>
	<div>
		<el-form ref='searchForm' label-position="right" :inline="true" :model="formInline" class="demo-form-inline">
			<el-row>
				<el-col :span="8" v-for="item in formSetData" :key="item.key">

					<el-form-item v-if="item.type=='select'" :label="item.label" :prop="item.key" :rules="item.rules">
						<el-select v-model="formInline[item.key]" placeholder="请选择" size='small'>
							<el-option v-for="option in item.options" :key="option.value" :label="option.label" :value="option.value">
							</el-option>
						</el-select>
					</el-form-item>

					<el-form-item v-else-if="item.type==='date'" :label="item.label" :prop="item.key" :rules="item.rules">
						<el-date-picker v-model="formInline[item.key]" type="date" placeholder="选择日期" size='small'>
						</el-date-picker>
					</el-form-item>

					<el-form-item v-else-if="item.type==='daterange'" :label="item.label" :prop="item.key" :rules="item.rules">
						<el-date-picker v-model="formInline[item.key]" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" size='small'>
						</el-date-picker>
					</el-form-item>

					<el-form-item v-else-if="item.type==='radio'" :label="item.label" :prop="item.key" :rules="item.rules">
						<el-radio-group v-model="formInline[item.key]">
							<el-radio v-for="option in item.options" :key="option.value" :label="option.value"></el-radio>
						</el-radio-group>
					</el-form-item>

					<el-form-item v-else-if="item.type==='checkbox'" :label="item.label" :prop="item.key" :rules="item.rules">
						<el-checkbox-group v-model="formInline[item.key]">
							<el-checkbox v-for="option in item.options" :key="option.value" :label="option.value"></el-checkbox>
						</el-checkbox-group>
					</el-form-item>

					<el-form-item v-else :label="item.label" :prop="item.key" :rules="item.rules">
						<el-input size="small" v-model="formInline[item.key]" :placeholder="item.label"></el-input>
					</el-form-item>

				</el-col>

				<el-col :span="8">
					<el-button @click="resetForm">清除重置</el-button>
					<el-button type="primary" @click="search">查询</el-button>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'SearchForm',
		props: ['formSetData'],
		data() {
			return {
				formInline: {}
			}
		},
		created() {
			let data = {};
			//初始化对象
			this.formSetData.forEach((obj) => {
				if(obj.defaultValue) {
					data[obj.key] = obj.defaultValue;
				} else {
					if(obj.type == 'checkbox') {
						data[obj.key] = [];
					} else {
						data[obj.key] = '';
					}
				}
			});
			this.formInline = data;
		},
		methods: {
			search() {
				this.$refs['searchForm'].validate((valid) => {
					if(!valid) {
						return false;
					}
					this.$emit('searchevent', this.formInline);
				});
			},
			resetForm() {
				this.$refs['searchForm'].resetFields();
			}
		}
	}
</script>

<style>

</style>
let formSet = {
	searchForm: [{
			label: '货单号',
			key: 'requestOrderNo',
//			rules: [{
//					required: true,
//					message: '请输入邮箱地址',
//					trigger: 'blur'
//				},
//				//			      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
//			]
		},
		{
			label: '承运商',
			key: 'carriersCompany'
		},
		{
			label: '支付状态',
			type: 'select',
			key: 'payStatusList',
			options: [{
				value: '',
				label: '全部'
			},{
				value: '0',
				label: '未支付'
			}, {
				value: '1',
				label: '已支付'
			}],
		},
		{
			label: '收货人',
			key: 'receiverPartyName'
		},
		{
			label: '下单时间',
			type:'daterange',
			key: 'billingDate'
		},
		{
			label: '货单状态',
			type: 'select',
			key: 'statusList',
			options: [{
				value: '',
				label: '全部'
			},{
				value: '待受理',
				label: '待受理'
			}, {
				value: '已受理',
				label: '已受理'
			}, {
				value: '运输中',
				label: '运输中'
			}, {
				value: '已完成',
				label: '已完成'
			}, {
				value: '已拒绝',
				label: '已拒绝'
			}, {
				value: '已关闭',
				label: '已关闭'
			}, {
				value: '异常',
				label: '异常'
			}],
		},
//		{
//			label: 'test2',
//			type: 'date',
//			key: 'test2'
//		},
//		{
//			label: 'test3',
//			type: 'checkbox',
//			key: 'test3',
//			defaultValue: ['复选框1'],
//			options: [{
//				label: '复选框1',
//				value: '复选框1'
//			}, {
//				label: '复选框2',
//				value: '复选框2'
//			}]
//		},
//		{
//			label: 'test4',
//			type: 'radio',
//			key: 'test4',
//			defaultValue: '1',
//			options: [{
//				label: '1',
//				value: '1'
//			}, {
//				label: '2',
//				value: '2'
//			}]
//		}
	],
	tableColumn:[{
  		label:'日期',
  		key:'date',
  		render:(obj,v)=>{
  			return v+"00:00:00"
  		}
  	},{
  		label:'姓名',
  		key:'name',
  		render:(obj,v)=>{
  			return `<a>${v}</a>`
  		}
  	},{
  		label:'省份',
  		key:'province',
  	},{
  		label:'市区',
  		key:'city',
  	},{
  		label:'邮编',
  		key:'zip',
  	},{
  		label:'操作',
  		key:'btns',
  		width:'100',
  		fixed:'right',
  		btns:[{
  			label:'查看',
  			handleClick:()=>{
  				alert('查看')
  			}
  		},{
  			label:'编辑',
  			handleClick:()=>{
  				alert('编辑')
  			}
  		}]
  	}],
}
export default  formSet
const menuList = [
	{
		title: '首页',
		key: '/admin/home'
	},
	{
		title: 'UI',
		key: '/admin/ui',
		children: [
			{
				title: '按钮',
				key: '/admin/ui/buttons'
			},
			{
				title: '弹窗',
				key: '/admin/ui/modals'
			},
			{
				title: 'Loading',
				key: '/admin/ui/loadings'
			},
			{
				title: '通知提醒框',
				key: '/admin/ui/notification'
			},
			{
				title: '全局提示框',
				key: '/admin/ui/messages'
			},
			{
				title: 'Tab标签页',
				key: '/admin/ui/tabs'
			},
			{
				title: '图片画廊',
				key: '/admin/ui/gallery'
			}
		]
	},
	{
		title: '表单',
		key: '/admin/form',
		children: [
			{
				title: '登陆',
				key: '/admin/form/formLogin'
			},
			{
				title: '注册',
				key: '/admin/form/register'
			}
		]
	},
	{
		title: '表格',
		key: '/table',
		children: [
			{
				title: '基础表格',
				key: '/admin/table/baseTables'
			},
			{
				title: '高级表格',
				key: '/admin/table/highTables'
			}
		]
	},
	{
		title: '城市管理',
		key: '/admin/city',
	},
	{
		title: '订单信息',
		key: '/admin/order',
	},
	{
		title: '职员信息',
		key: '/admin/user',
	},
	{
		title: '图表',
		key: '/admin/echarts',
		children: [
			{
				title: '柱形图',
				key: '/admin/echarts/bar'
			},
			{
				title: '饼图',
				key: '/admin/echarts/pie'
			},
			{
				title: '折线图',
				key: '/admin/echarts/line'
			}
		]
	},
	{
		title: '富文本',
		key: '/admin/rich',
	},
	{
		title: '权限管理',
		key: '/admin/role',
	}
]

export default menuList

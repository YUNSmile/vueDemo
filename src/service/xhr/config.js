/** 此处配置 根访问路径 以及 全局错误处理
 * 更多配置请根据业务逻辑自行实现
 * 后端 API 地址，最好以 http(s):// 打头
 * imgDomain 图片ip/域名
 */
import { Notification } from 'element-ui';

let imgDomain = '';
const URL = window.location.href;

if (URL.indexOf('test.') > -1) {
	imgDomain = '//pmstest.tf56.com/'
} else {
	imgDomain = '//image.tf56.com' 
}

// api 目录
const paths = {
	basePath: '/tfPassParkBasicAdmin',
	transfarNetPath:'/transfarNet',
}

// 最新版本配置
const versionInfo = {
	name: '智慧园区v3.8.0',
	prodTime: '2017年11月16日',
	content: [
		'基本配置增加【项目扩展情况和客户平台概况】；',
		'退租操作页中【会签人】可更改；',
		'退租详情页【交互】修改；',
		'租赁【客户名称录入交互】修改；',
		'租赁业务管理新增【客户经理】字段；',
		'企业服务新增【客户经理】字段；',
		'水电配置之房间客户配置新增【客户经理】字段；',
		'财务业务新增【客户经理】字段；',
		'新增【已办任务】；',
		'智慧园区导航【报表中心】模块修改；',
		'新增【反馈】功能'
	]
};

// api请求失败回调函数
const errHandler = (data) => {
	let message = '出错啦!',
		description = `请联系管理员, 错误信息: ${data.msg}`;

	if (data.code === '403') {
		message = `系统通知`;
		description = `对不起，您没有权限访问`;
	}
	if (data.status === 404) {
		message = `系统通知`;
		description = `对不起，接口请求不存在`;
	}
	Notification.error({
      title: message,
      message: description
    });
}


/**
 * 分页参数设置
 * @param    { Number }  PAGE_SIZE        每页条数
 * @param    { Object }  size_options     每页显示条数选项
 */
const _PAGE_SIZE = '20';
const PAGINATION_CONFIG = {
	PAGE_SIZE: parseInt(_PAGE_SIZE, 10),
	SIZE_OPTIONS: [_PAGE_SIZE, '50', '100']
}

export {
	versionInfo,
	errHandler,
	imgDomain,
	paths,
	PAGINATION_CONFIG
}

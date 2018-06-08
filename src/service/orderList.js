import xhr from './xhr'
import { paths } from './xhr/config'

class orderListService {
    // 房间列表获取/查询
    fetchOrderList(data) {
        return xhr({
            url: paths.transfarNetPath + '/requestorder/queryRequestOrderList',
            body: data
        })
    }
}

export default new orderListService()
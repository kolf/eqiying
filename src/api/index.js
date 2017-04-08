import axios from 'axios'
import qs from 'qs'

const API_ROOT = '/api/'

const apis = {
	announce: 'Announce.ashx', // 查询公告
	signup: 'PanelBaseInfo.ashx',
}

export default {
	queryAnnounce() {
		return axios.post( API_ROOT + apis.announce, qs.stringify({
      action:'queryByAgencyIdType',
      startIndex:1,
      endIndex:999999
    }))
	},
	signup() {
		return axios.post( API_ROOT + apis.signup, qs.stringify({
      action:'queryByAgencyIdType',
      startIndex:1,
      endIndex:999999
    }))
	}
}

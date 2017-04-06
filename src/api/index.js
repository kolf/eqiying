import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const API_ROOT = '/api/'

const apis = {
	Announce: 'Announce.ashx',
}

export default {
	queryAnnounce() {
		return axios.post( API_ROOT + apis.Announce, {
      action:'queryByAgencyIdType',
      startIndex:1,
      endIndex:999999
    })
	}
}

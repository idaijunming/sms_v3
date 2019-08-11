import {SingleApi} from "../apis";


class ClazzCourseService extends SingleApi {

	constructor() {
		super(ClazzCourseService.name, {
			baseURL: "/sms/clazz-course"
		})
	}

	choose(cid: number, tid: number) {
		const sid: number = Number(localStorage.getItem('sms_id'));
		return this.request({
			method: 'get',
			params: {
				sid, cid, tid
			}
		})
	}

	drop(cid: number, tid: number) {
		const sid: number = Number(localStorage.getItem('sms_id'));
		return this.request({
			method: 'delete',
			params: {
				sid, cid, tid
			}
		})
	}

	selected(pageNum?: number, pageSize?: number) {
		const sid: number = Number(localStorage.getItem('sms_id'));
		return this.request({
			method: 'get',
			url: `/list/selected/${sid}`,
			headers: {
				pageNum, pageSize
			}
		})
	}

	unSelected(courseName: string, pageNum?: number, pageSize?: number) {
		const sid: number = Number(localStorage.getItem('sms_id'));
		return this.request({
			method: 'get',
			url: '/list/unSelected',
			params: {
				sid: sid,
				courseName: courseName
			},
			headers: {
				pageNum, pageSize
			}
		})
	}

}

export default new ClazzCourseService();
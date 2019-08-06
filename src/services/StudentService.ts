import {SingleApi} from "../apis";

export type Student = {
	id?: number,
	sid?: string,
	name?: string,
	password?: string
}

class StudentService extends SingleApi {

	constructor() {
		super(StudentService.name, {
			baseURL: "/sms/student"
		})
	}

	selectById(id: number) {
		return this.request({
			url: `/id/${id}`
		});
	}

	selectOne(student: Student) {
		return this.request({
			method: "post",
			url: '/search',
			data: student
		});
	}

	selectAll() {
		return this.request({
			url: '/list',
			headers: {
				noPage: true
			}
		});
	}

	update(student: Student) {
		return this.request({
			method:'put',
			data: student
		})
	}

}

export default new StudentService();
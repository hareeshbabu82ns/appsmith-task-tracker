export default {

	selectEmployee: async (selectedUser) => {
		await FetchTimeLogsOfUser.run({userId:selectedUser?.id})
		await FetchTasksOfUser.run({userId:selectedUser?.id})
		await storeValue('default_tab','Time Log');
		// await resetWidget('lst_user')
	},

	hasActiveTimeLogsOfUser (userId) {
		const hasLogs = FetchActiveTimeLogsOfAllUsers.data.data.time_log.some(l=> !l.date_end && l.user_id.id === userId)
		return hasLogs
	}
}
import schedule from 'node-schedule'

// 매주 평일 8시 51분 => 0 51 08 * * 1-5
const checkInRule = new schedule.RecurrenceRule()
checkInRule.hour = 8
checkInRule.minute = 51
checkInRule.dayOfWeek = new schedule.Range(1, 5)

// 매주 평일 22시 0분 => 0 0 22 * * 1-5
const checkOutRule = new schedule.RecurrenceRule()
checkOutRule.hour = 22
checkOutRule.minute = 0
checkOutRule.dayOfWeek = new schedule.Range(1, 5)

export { checkInRule, checkOutRule }

import 'dotenv/config'
import schedule from 'node-schedule'
import members from './config/members.js'
import { checkInRule, checkOutRule } from './config/rules.js'
import { attendanceInfoURL } from './config/urls.js'
import check, { CheckStatus } from './lib/check.js'
import hook from './lib/hook.js'

const main = () => {
  schedule.scheduleJob(checkInRule, async (fireDate) => {
    try {
      await Promise.all(members.map((member) => check(member, CheckStatus.In)))
      await hook.success('**입실 체크 완료**', '확인하기', members.map((m) => attendanceInfoURL(m.id)).join('\n'))
    } catch (error) {
      console.error(error)
      await hook.error('**입실 체크 중 에러 발생**', '확인하기', members.map((m) => attendanceInfoURL(m.id)).join('\n'))
    }
  })

  // 평일 매일 오후 18시 10분에 실행할 퇴실 체크
  schedule.scheduleJob(checkOutRule, async (fireDate) => {
    try {
      await Promise.all(members.map((member) => check(member, CheckStatus.Out)))
      await hook.success('**퇴실 체크 완료**', '확인하기', members.map((m) => attendanceInfoURL(m.id)).join('\n'))
    } catch (error) {
      console.error(error)
      await hook.error('**퇴실 체크 중 에러 발생**', '확인하기', members.map((m) => attendanceInfoURL(m.id)).join('\n'))
    }
  })
}

main()

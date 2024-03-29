import 'dotenv/config'
import members from './config/members.js'
import { attendanceInfoURL } from './config/urls.js'
import check, { CheckStatus } from './lib/check.js'
import hook from './lib/hook.js'

async function main() {
  try {
    await Promise.all(members.map((member) => check(member, CheckStatus.In)))
    await hook.success('**입실 체크 완료**', '확인하기', members.map((m) => attendanceInfoURL(m.id)).join('\n'))
  } catch (error) {
    console.error(error)
    await hook.error('**입실 체크 중 에러 발생**', '확인하기', members.map((m) => attendanceInfoURL(m.id)).join('\n'))
  }
}

main()

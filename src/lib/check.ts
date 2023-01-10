import got from 'got'
import { Member } from '../config/members.js'
import { ATTENDANCE_AJAX_URL } from '../config/urls.js'
import formattedDate from '../lib/formattedDate.js'

export enum CheckStatus {
  In = 'I',
  Out = 'O',
}

const check = (member: Member, status: CheckStatus) =>
  got
    .post(ATTENDANCE_AJAX_URL, {
      form: {
        indMbrid: member.id,
        joCrtfcNo: 'T20220302008',
        joCrtfcDsp: '1',
        joCrtfcDspSn: '1',
        attendScd: status,
        attendOs: 'IOS',
        attendOsId: 'UID',
        prcerAtendDe: formattedDate(),
        localtimeGapHour: '0',
        gpsLati: '',
        gpsLongti: '',
      },
    })
    .then((res) => {
      console.log(`[${status === CheckStatus.In ? '입실' : '퇴실'} 체크 완료] ${member.name} ${formattedDate()}`)
      return res.body
    })

export default check

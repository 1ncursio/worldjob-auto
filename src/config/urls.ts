import formattedDate from '../utils/formattedDate.js'
import { Member } from './members'

const BASE_URL = 'https://m.worldjob.or.kr:444/indvdl/epmtSprtMng'

// 출석 수동으로 가능한 페이지 링크
export const attendanceInfoURL = (id: Member['id']) =>
  `${BASE_URL}/beaconAtendenceAuto.do?joCrtfcNo=T20220302008&joCrtfcDsp=1&joCrtfcDspSn=1&prcerAtendDe=${formattedDate()}&indMbrid=${id}`

// 출석 ajax url
export const ATTENDANCE_AJAX_URL = `${BASE_URL}/ajaxInsertAtendBeacon.do`

import universityGrade from './university-grade';
import ProfileList from '~/types/profile-list';

const profileList: ProfileList[] = [
  { key: 'ハンドルネーム', value: 'ほり、hori、@horri1520' },
  { key: '出身地', value: '香川県' },
  { key: '居住地', value: '福岡県' },
  { key: '学年', value: `大学${String(universityGrade)}年（23卒）` },
];

export default profileList;

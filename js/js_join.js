/**
 * 회원가입 페이지
 */

// 회원정보 유효성 확인
// 이메일 유효성 확인

const email = document.querySelector('#email');
const userName = document.querySelector('#userName');
const password = document.querySelector('#password');
const passwordCheck = document.querySelector('#passwordCheck');
const area = document.querySelector('#area');
const gender_man = document.querySelector('#gender_man');
const gender_woman = document.querySelector('#gender_woman');
const phone1 = document.querySelector('#phone1');
const phone2 = document.querySelector('#phone2');
const phone3 = document.querySelector('#phone3');

const emailErrorMsg = document.querySelector('#emailError');
const userNameErrorMsg = document.querySelector('#userNameError');
const passwordErrorMsg = document.querySelector('#passwordError');
const passwordCheckErrorMsg = document.querySelector('#passwordCheckError');
const phoneErrormsg = document.querySelector('#phoneError');

document.memberFrm.onsubmit = function () {
  // 이메일 유효성 검사
  if (
    !regExpTest(
      /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/,
      email,
      emailErrorMsg,
      '이메일 형식에 어긋납니다.',
    )
  )
    return false;
  // 이름 유효성 검사
  if (
    !regExpTest(
      /^[가-힣]{2,}$/,
      userName,
      userNameErrorMsg,
      '한글 2글자 이상 입력하세요',
    )
  )
    return false;
  // 비밀번호 유효성 검사
  const regExpArr = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\*!&]/];

  for (let i = 0; i < regExpArr.length; i++) {
    if (
      !regExpTest(
        regExpArr[i],
        password,
        passwordErrorMsg,
        '비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야합니다.',
      )
    ) {
      return false;
    }
  }
  // 비밀번호 일치 여부
  if (!isEqualPwd()) {
    passwordCheckError.innerHTML = '비밀번호가 일치하지 않습니다.';
    // passwordCheck.value = '';
    passwordCheck.select();
    return false;
  }

  // 전화번호 유효성 검사
  if (!regExpTest(/^010$/, phone1, phoneErrormsg, '번호 2자리 이상 입력'))
    return false;

  if (
    !regExpTest(/^[0-9]{3,4}$/, phone2, phoneErrormsg, '번호 3자리 이상 입력')
  )
    return false;

  if (!regExpTest(/^[0-9]{4}$/, phone3, phoneErrormsg, '번호 4자리 이상 입력'))
    return false;

  alert('🎉환영합니다🎉');
  location.href = '#page-5';
  return true;
};

function isEqualPwd() {
  if (password.value == passwordCheck.value) {
    passwordCheckErrorMsg.innerHTML = '';
    return true;
  } else {
    passwordCheckErrorMsg.innerHTML = '비밀번호가 일치하지 않습니다.';
    password.select();
    return false;
  }
}

function regExpTest(regExp, el, error, msg) {
  if (regExp.test(el.value)) {
    error.innerHTML = '';
    return true;
  }
  //적합한 문자열이 아닌 경우
  error.innerHTML = msg;
  el.value = '';
  el.focus();
  return false;
}

// 눈모양 이모티콘 누르면 비밀번호 확인
// 비밀번호
eye1.addEventListener('mousedown', () => {
  password.type = 'text';
});
eye1.addEventListener('mouseup', () => {
  password.type = 'password';
});
// 비밀번호 확인
eye2.addEventListener('mousedown', () => {
  passwordCheck.type = 'text';
});
eye2.addEventListener('mouseup', () => {
  passwordCheck.type = 'password';
});

// 멤버리스트
class MemberList {
  constructor(userEmail, userName, userPassword, datetime = Date.now()) {
    this.userEmail = userEmail;
    this.userName = userName;
    this.userPassword = userPassword;
    this.datetime = datetime;
  }
}

// localStorage에 사용자 정보 저장
const saveMemberList = () => {
  // 사용자 입력값 처리
  const userEmailVal = email.value;
  const userNameVal = userName.value;
  const userPasswordVal = password.value;

  // memberList 객체
  const memberList = new MemberList(userEmailVal, userNameVal, userPasswordVal);

  // 베열에 저장
  const memberLists = JSON.parse(localStorage.getItem('memberLists')) || [];
  memberLists.push(memberList);

  // json변환
  const data = JSON.stringify(memberLists);

  // localStorage에 저장
  localStorage.setItem('memberLists', data);

  // 초기화
  document.memberFrm.reset();
};

// 뒤로가기 버튼
const back = () => history.back();

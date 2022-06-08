/**
 * 3페이지 슬라이드
 */
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const slide_list = document.querySelector('.slide_list');

let index = 0;

prevButton.addEventListener('click', () => {
  if (index === 0) return;
  index -= 1;

  slide_list.style.transform = `translate3d(-${800 * index}px, 0, 0)`;
});

nextButton.addEventListener('click', () => {
  if (index === 3) return;
  index += 1;

  slide_list.style.transform = `translate3d(-${800 * index}px, 0, 0)`;
});

/**
 * 로그인
 */
const logEmail = document.querySelector('#logEmail');
const logPassword = document.querySelector('#logPassword');
const logIn = () => {
  memberLists = JSON.parse(localStorage.getItem('memberLists'));

  logEmail.value === '' && alert('이메일을 입력해주세요.');
  logPassword.value === '' && alert('비밀번호를 입력해주세요.');

  (logEmail.value === '' && logPassword.value === '') ||
    memberLists.forEach((memberList) => {
      if (memberList.userEmail !== logEmail.value)
        alert('가입되지 않은 이메일입니다.');
      else if (
        memberList.userEmail === logEmail.value &&
        memberList.userPassword !== logPassword.value
      )
        alert('잘못된 비밀번호입니다.');
      else {
        alert('로그인 완료!');
        location.href = '#page-1';
      }
    });
};

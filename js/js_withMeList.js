const renderMemberList = (
  memberLists = JSON.parse(localStorage.getItem('memberLists')),
) => {
  if (!memberLists) return;
  const tbody = document.querySelector('#member-list tbody');
  memberLists
    .map((memberlist) => {
      const { userEmail, userName, datetime } = memberlist;
      return `<tr>
        <td>${userEmail}</td>
        <td>${userName}</td>
        <td>${datetimeFormatter(datetime)}</td>
        </tr>`;
    })
    .forEach((tr) => {
      tbody.innerHTML += tr;
    });
};

const datetimeFormatter = (millis) => {
  const d = new Date(millis);
  const f = (n) => (n < 10 ? '0' + n : n);
  const yyyy = d.getFullYear();
  const mm = f(d.getMonth() + 1);
  const dd = f(d.getDate());
  const hh = f(d.getHours());
  const mi = f(d.getMinutes());
  return `${yyyy}/${mm}/${dd} ${hh}:${mi}`;
};

renderMemberList();

// 뒤로가기 버튼
const back = () => history.back();

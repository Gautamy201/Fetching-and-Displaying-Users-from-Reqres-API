const fetchUsersData = async () => {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data;
};

const userList = document.querySelector(".user_list");
const fetchBtn = document.querySelector(".fetch-btn button");

fetchBtn.addEventListener("click", () => {
  fetchUsersData().then((users) => {
    users.forEach((user) => {
      userList.innerHTML += `<div class="user_contener">
        <img src="${user.avatar}" alt="" class="user_avtar" />
        <div class="user_detail">
        <p class="user_fullname">${user.first_name + user.last_name}</p>
        <p class="user_email">${user.email}</p>
        </div>
      </div>`;
    });
  });
});

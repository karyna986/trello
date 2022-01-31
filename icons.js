let users = []
$.ajax({
    url: 'https://randomuser.me/api/?results=5&inc=name,gender,picture&noinfo',
    dataType: 'json',
    success: function(data) {
      users = data.results
      users.forEach((user, id)=> {
        users[id].id = id
        getPhoto(user)} )
    }
  });

  function getPhoto(user) {
    let icons = document.querySelector('.title--icons')
    let img = new Image(); 
    img.src = user.picture.large;
    img.id = `img_${user.id}`
    img.alt = 'alt';
    icons.appendChild(img);
  }

// открыть блок 5 при загрузке
const btrIcons = document.querySelector('.add_icons')

btrIcons.addEventListener('click', ()=> {
  const icons = document.querySelector('.icons__item')
  icons.style.display = "flex"
  const title = document.querySelector('.trello__title')
  
  users.forEach((user) => { 
    const userInfo = document.createElement('div')
    userInfo.classList.add(`user_info`)
    userInfo.id = `user_info_${user.id}`
    userInfo.innerHTML = `
                    <img class="user" src="${user.picture.large}">
                    <p>${user.name.first} ${user.name.last}</p>
                    <div onclick="deleteUser(${user.id})"> <p>X</p> </div>
                      `
    title.append(icons)
    icons.append(userInfo)
  })
}) 

//создать юзеров +1
let page = 6
function addUser() {
  $.ajax({
    url: `https://randomuser.me/api/?page=${page}&results=1`,
    dataType: 'json',
    success: function(data) {
      page++
      console.log(data);
      users.push(Object.assign(data.results[0], {id: users.length}))
      let user = users[users.length - 1]
      getPhoto(user)

      const title = document.querySelector('.trello__title')
      const icons = document.querySelector('.icons__item')
      const userInfo = document.createElement('div')
      userInfo.classList.add(`user_info`)
      userInfo.id = `user_info_${user.id}`
      userInfo.innerHTML = `
                       <img class="user" src="${user.picture.large}">
                       <p>${user.name.first} ${user.name.last}</p>
                       <div onclick="deleteUser(${user.id})"> <p>X</p> </div>
                         `
      title.append(icons)
      icons.append(userInfo)
     
    }
  });  
}

//создать юзеров
const addUsers = document.querySelector('.add_users')
addUsers.addEventListener('click', ()=> {
  console.log(users.length)
  if(users.length==10){
    addUsers.style.display = "none"
    alert('Нельзя создавать больше 10 пользователей!')
  }
  else {
     addUser()
  }
 
})

// delete
function deleteUser(id) {
  const userInfo = document.querySelector(`#user_info_${id}`)
  const photo = document.querySelector(`#img_${id}`)
  const addUsers = document.querySelector('.add_users')
  addUsers.style.display = "block"
  console.log(users.length)
  if(users.length==1) {
    alert('Нельзя удалить последнего пользователя!')
  }
  else {
    users.splice(id) 
    userInfo.remove()
    photo.remove()
    console.log(users)
  }
   
}
// close 
function closeUser() {
  const users = document.querySelector('.icons__item')
  users.style.display = "none"

}

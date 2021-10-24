const LinksSocialMidia = {
  github: 'raimundosilvw',
  youtube: 'UCj9fQeGK8p69d8WZQvGWeng',
  facebook: 'raimundo.jose.7374',
  instagram: 'raimundosiilva',
  twiiter: 'raimundosiilva'
}

function changeSocialMediaLinks() {
  //todos os elementos que estiverem em ul é childrem e será jogado em "li"
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}

changeSocialMediaLinks()
//api de busca no github
function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.href = data.login
    })
}

getGithubProfileInfos()

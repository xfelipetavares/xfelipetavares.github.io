const linksSocialMedia = {
  github: `xfelipetavares`,
  youtube: `iPhelipe`,
  facebook: `xfelipetavares`,
  instagram: `xfelipetavares`,
  twitter: `xfelipetavares`
}
function chanceLinks(){
  for(let li of socialLinks.children){
    const socialNames = li.getAttribute(`class`)
    li.children[0].href = `http://${socialNames}.com/${linksSocialMedia[socialNames]}`
  }
}


function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userAvatar.src = data.avatar_url
    userBio.textContent = data.bio
    userGithubLink.href = data.html_url
    userLogin.textContent = data.login
  })
  
}


getGitHubProfileInfos()
chanceLinks()
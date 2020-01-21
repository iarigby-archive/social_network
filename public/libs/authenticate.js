const jwtToken = localStorage.getItem('jwtToken')
if (jwtToken == null) {
    window.location = 'login.html'
}

const logOut = () => {
    localStorage.removeItem('jwtToken')
    window.location = 'login.html'
}
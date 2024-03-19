function validtae(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;

    if (user == 'Webdev' && pass == 'learn')
    {
        alert('Login successfully!');
    } else {
        alert('Login failed');
    }
}
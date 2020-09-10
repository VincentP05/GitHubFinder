//Init Github
const github = new Github;

//Init UI
const ui = new UI;

//Search input
const searchUser = document.getElementById('searchUser');

//Search input event listener
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profileData.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profileData);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        ui.clearProfile();
    }
})
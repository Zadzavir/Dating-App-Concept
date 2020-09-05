class UI{
    constructor(){
        // Elements
        this.profileWindow = document.querySelector(".profile-window");
        this.profilePicture = document.querySelector(".profile-picture");
        this.profileButtons = document.querySelector(".profile-buttons");
        this.profileContent = document.querySelector(".profile-content");
        this.profileName = document.querySelector(".profile-name");
        this.profileAge = document.querySelector(".profile-age");
        this.profileGender = document.querySelector(".profile-gender");
        this.profileLocation = document.querySelector(".profile-location");
        // Buttons
        this.likeBtn = document.querySelector(".like-btn");
        this.dislikeBtn = document.querySelector(".dislike-btn");
    }

    paint(user){
        this.profilePicture.innerHTML = `<img src="${user.picture.large}">`;
        this.profileName.innerHTML = `${user.name.first}`;
        this.profileAge.innerHTML = `${user.dob.age}`;
        this.profileGender.innerHTML = `${user.gender}`;
    }
    
    likeUserAnimation(){
        setTimeout(() => ui.profilePicture.classList.remove("match-indicator"), 1300)
        ui.profilePicture.classList.add("match-indicator");
        ui.profilePicture.innerHTML = '<i class="fas fa-heart fa-2x pulse"></i>'
    }

    dislikeUserAnimation(){
        setTimeout(() => ui.profilePicture.classList.remove("match-indicator"), 1300)
        ui.profilePicture.classList.add("match-indicator");
        ui.profilePicture.innerHTML = '<i class="fas fa-heart-broken fa-2x slide-down"></i>'
    }

    endOfList(){
        ui.profilePicture.innerHTML = `
            <div class="match-indicator">That's All</div>
        `
    }
}
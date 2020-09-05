// init
const users = new Users();
const ui = new UI();

// get x <= 5000 random users 
const userList = users.get(100).then(
    data => data.results
).catch(
    err => console.log(`couldn't get results from data ${err}`)
);

// get users from results array
userList.then(
    users => {
        const user = profileIterator(users);
        // display user
        ui.paint(user.next().value)
        // add events
        // like user
        ui.likeBtn.addEventListener("click", () => {
            if(user.next().done === true){
                // show end of list dialog
                setTimeout(() => ui.endOfList(), 1300);
                // play animation
                ui.likeUserAnimation()
            } else {
                // display next user after the animation
                setTimeout(() => ui.paint(user.next().value), 1300);
                // play animation
                ui.likeUserAnimation()
            }
        });
        // dislike user
        ui.dislikeBtn.addEventListener("click", () => {
            if(user.next().done === true){
                // show end of list dialog
                setTimeout(() => ui.endOfList(), 1300);
                // play animation
                ui.dislikeUserAnimation()
            } else {
                // display next user after the animation
                setTimeout(() => ui.paint(user.next().value), 1300);
                // play animation
                ui.dislikeUserAnimation()
            }
        });
    }).catch(
    err => err
);



function profileIterator(users){
    let i = 0
    return{
        next: function(){
            return i < users.length ? 
            { value: users[i++], done: false } :
            { done: true }
        }
    }
} 
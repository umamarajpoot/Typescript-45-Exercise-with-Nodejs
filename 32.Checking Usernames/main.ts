let current_users : string[] = ["salar","admin","rawaha","sila","saboor"]
let new_users: string[] = ["hammad","jawad","fawad","samad","suhab"]

new_users.forEach((newUser) => {
if(
    current_users.some(
        (currentUser) => currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase()
    )
)
{
    console.log(`${newUser} Will need to enter a new username.`);
    }
    else{
        console.log(`${newUser} is available.`);
    }});
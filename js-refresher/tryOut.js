const user = {
    firstName:'morioh',
    lastName:'Huncho',
    age:23

}
//  console.table(user)
//  console.log(user)

const userName = user.firstName.toUpperCase() + user.lastName.toUpperCase()
console.log('Welcome \t' + userName)

const middleName = 'maina'

console.log(middleName)

const updateUser = {
    ...(user),
    ...(middleName && {middleName})
}

console.log(updateUser)
const UpdatedUserName = updateUser.firstName.toUpperCase() + updateUser.middleName + updateUser.lastName.toUpperCase()
console.log('Welcome \t' + UpdatedUserName)

const createUserPassword = UpdatedUserName.toLowerCase('');
console.log(createUserPassword)

const addUserPassword = {
    ...(updateUser),
    ...(createUserPassword && {createUserPassword})
}

console.log(addUserPassword)
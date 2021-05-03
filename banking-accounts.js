var accountpool = []

function changeToObject(username) {
    let data = {
        userName: username,
        balances: 0
    }
    return data
}

function addNewAccount(userName) {
    if (typeof userName === 'string') {
        data = changeToObject(userName)
        accountpool.push(data)
        console.log('Account Has Been Added !')
    } else {
        console.log('Your Input is Not Valid!')
    }

}

function deposit(accountName, amount) {
    let matchedAccount;
    if (typeof accountName === 'string') {
        accountpool.forEach(function (element) {
            if (element.userName === accountName) {
                element.balances += amount
                console.log('Deposit Success!')
                matchedAccount = element
            }
        })
        if (typeof matchedAccount != 'object') {
            console.log('Deposit Failed')
        }
    } else {
        console.log('Your Username is Invalid')
    }

}

function withdrawal(accountName, amount) {
    let matchedAccount;
    if (typeof accountName === 'string') {
        accountpool.forEach(function (element) {
            if (element.userName === accountName) {
                element.balances -= amount
                console.log('Withdrawal Success!')
                matchedAccount = element
            }
        })
    } else {
        console.log('Your Username is Invalid')
    }

}

function listAllAccounts() {
    console.log('List Of All Account Has Been Added')
    accountpool.forEach(function (elements, index) {
        console.log(`No.${index+1}, Username : ${elements.userName}, Balances : ${elements.balances}`)
    })
}


addNewAccount('Linada')
addNewAccount('Romeo')
addNewAccount('juliet')
deposit('Linaada', 10000)
deposit('Linada', 10000)
deposit('Linaada', 10000)
listAllAccounts()
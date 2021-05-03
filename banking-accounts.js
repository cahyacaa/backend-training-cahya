var storage = require('node-persist');



storage.init({
    dir: '/home/ca/Desktop/js-project/db',
 
    stringify: JSON.stringify,
 
    parse: JSON.parse,
 
    encoding: 'utf8',
 
    logging: false,  // can also be custom logging function
 
    ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object
 
    expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache
 
    // in some cases, you (or some other service) might add non-valid storage files to your
    // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
    forgiveParseErrors: false
 
});


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
         storage.setItemSync("data","asa")
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
                element.balances+=amount
                console.log('Deposit Success!')
                matchedAccount=element
            }
        })
        if (typeof matchedAccount != 'object'){
            console.log('Deposit Failed')
        }
    }else{
        console.log('Your Username is Invalid')
    }

}

function withdrawal(accountName, amount) {
    let matchedAccount;
    if (typeof accountName === 'string') {
        accountpool.forEach(function (element) {
            if (element.userName === accountName) {
                element.balances-=amount
                console.log('Withdrawal Success!')
                matchedAccount=element
            }
        })
    }else{
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
deposit('Linaada',10000)
deposit('Linada',10000)
deposit('Linaada',10000)
listAllAccounts()

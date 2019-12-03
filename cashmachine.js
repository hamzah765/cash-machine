let pin = 1234

let balance = 100000

let userinput = ""

const checkpin = () => {

   userinput = prompt("Please Can You Enter Your Pin Please")
    
    if(userinput == pin){
    
        alert("OK,You May Proceed")
    
    }
    
    else {
    
        alert("Wrong Pin,Please Try Again Or Contact Your Bank Branch At 012049876543210")
        
        checkpin()
    
    }
    
}

const userwithdrawal = () => {
    
    
    userinput = prompt("How Much Would You Like To Withdraw ? \n1.£10\n2.£20\n3.£50")

    
    if(userinput == 1){
        balance -= 10
        alert(`Your Balance Is Now ${balance}`)
    }
    
    
    else if(userinput == 2){
        balance -= 20
     alert(`Your Balance Is Now ${balance}`)
    }


    else balance -= 50
    alert(`Your Balance Is Now ${balance}`)
}

checkpin()


userwithdrawal()

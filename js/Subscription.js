let validate = () =>{
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let mgender = document.getElementById('mgender')
    let fgender = document.getElementById('fgender')
    let plans = document.getElementById('plan')
    let agreement = document.getElementById('agreement')

    if(!vEmail(email)){
        return
    }
    
    if(!vPassword(password)){
        return
    }

    if(!vGender(mgender, fgender)){
        return
    }

    if(!vAgreement(agreement)){
        return
    }

    if(!vPlans(plans)){
        return
    }

    alert('Succes!')

    window.location.reload()
}

let vEmail = (email) => {
    if(email.value === ''){
        alert('Email is required')
        return false
    } 
    if(email.value.startsWith('.') || email.value.startsWith('@')){
        alert('Email cannot starts with . or @')
        return false
    } 
    if(email.value.indexOf('.') === (email.value.indexOf('@') + 1)){
        alert('Email cannot contain . after @')
        return false
    } 
    if(email.value.endsWith('@') || email.value.endsWith('.')){
        alert('Email cannot end with @ or .')
        return false
    } 
    if(email.value.split('@').length > 2){
        alert('Email must only have one @')
        return false
    }  
    if(email.value.includes("@")== false || !email.value.includes(".")){
        alert('Email must contain @ and .');
        return false;
    }
    return true
}

let vPassword = (password) => {
    if(password.value === ''){
        alert('Password required')
        return false
    } else if(password.value.length < 8){
        alert('Password min length 8')
        return false
    }
    return true
}

let vGender = (mgender, fgender) => {
    if(!mgender.checked && !fgender.checked){
        alert('Gender required')
        return false
    }
    return true
}

let vPlans = (plans) => {
    if(plans.value === 'Choose'){
        alert('Choose plans')
        return false
    }
    return true
}

let vAgreement = (agreement) => {
    if(!agreement.checked){
        alert('You must agree with the Terms and Conditions')
        return false
    }
    return true
}
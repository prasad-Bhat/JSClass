function passcheck(string){
    regx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    const result = regx.test(string)
    if(result)
    {
        return "Strong"
    }else{
        return "Weak"
    }
}


module.exports = passcheck
export const validateData = (name, email, password) => {
    const isValidName = /([a-zA-Z0-9_\s]+)/.test(name)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
 
    if(!isValidName){ return 'Name is not Valid'}
    if(!isEmailValid) { return "Email is not valid"; }
    if(!isPasswordValid) { return 'Password is not valid' }

    return null;
}
export const fullnameChecker = (fullname) => {
    const result = fullname.match(/^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/g);
    console.log(typeof result);
    return result;
}


export const usernameChecker = (username) => {
    const result = username.match(/^([\w]{3,})+\s+([\w\s]{3,})+$/i);
    return result == null ? null: result.toString();
}
export const passwordChecker = (password) => {
    const result = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
    console.log(typeof result);
    return result == null ? null: result.toString();
}

export const emailChecker = (email) => {
    const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return result == null ? null: result.test(String(email).toLowerCase());
};


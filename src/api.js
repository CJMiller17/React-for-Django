import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000'

export const createUser = ({ username, password, firstName, lastName }) => {
    axios({
        method: 'post',
        url: `${baseUrl}/create-user/`,
        data: {
            username,
            password,queueMicrotask
            first_name: firstName,
            last_name: lastName

        }
    }).then(response => {
        console.log("Create User: ", response)
    }).catch(error => console.log("Error from Create User: ", error))
}

export const getToken = ({ auth, username, password }) => {
    console.log("Here Get Token")
    axios.post(`${baseUrl}/token/`, {
        username,
        password
    }).then(response => {
        console.log("Response is here", response)
        auth.setAccessToken(response.data.access)
    })
    .catch(error => console.log('ERROR from get Token: ', error))
}

export const fetchUser = ({ auth }) => {
    console.log("What is Auth?", auth)
    axios({
        method: "get",
        url: `${baseUrl}/profile/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    }).then(response => {
        console.log("Fetch User Response: ", response)
    }).catch(error => console.log("Error from fetchUser: ", error))
}
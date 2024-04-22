// Simulate an API call for login
const fakeLogin = async (username) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ok: true,
                user: { username }
            })
        }, 100)
    })
}

export default fakeLogin;
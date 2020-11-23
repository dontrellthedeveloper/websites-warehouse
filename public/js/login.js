const hideAlert = () => {
    const el = document.querySelector('.alert-login');
    if (el) el.parentElement.removeChild(el);
};

const showAlert = (type, msg) => {
    hideAlert();
    const markup = `<div class="alert-login alert--${type}">${msg}</div>`;
    document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
    window.setTimeout(hideAlert, 5000);
};





const signUp = async (name, email, password, passwordConfirm) => {

    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/signup',
            data: {
                name,
                email,
                password,
                passwordConfirm
            }
        });
        if(res.data.status === 'success') {
            showAlert('success','Signed up successfully');
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        }
    } catch (e) {
        showAlert('error',e.response.data.message);
    }
};


const login = async (email, password) => {
    console.log(email, password);
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/v1/users/login',
            data: {
                email,
                password
            }
        });
        if(res.data.status === 'success') {
            showAlert('success','Logged in successfully');
            window.setTimeout(() => {
                location.assign('/');
            }, 1500);
        }
    } catch (e) {
        showAlert('error',e.response.data.message);
    }
};




const logout = async () => {
    try {
        const res = await axios({
            method: 'GET',
            url: '/api/v1/users/logout'
        });
        if ((res.data.status = 'success')) location.assign('/')
    } catch (e) {
        showAlert('error', 'Error logging out! Try again.')
    }
};



const updateData = async (name, email) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: '/api/v1/users/updateMe',
            data: {
                name,
                email
            }
        });

        if (res.data.status === 'success') {
            showAlert('success', 'Data updated successfully')
        }
    } catch (err) {
        showAlert('error', err.response.data.message)
    }
};









const signUpForm = document.querySelector('.form2');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.logout-a');
const userDataForm = document.querySelector('.form-user-data');

if(signUpForm)
    signUpForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;
        signUp(name, email, password, passwordConfirm);
    });

if(loginForm)
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email, password);
    });

if(logOutBtn)
    logOutBtn.addEventListener('click', logout);

if(userDataForm)
    userDataForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        updateData(name, email);
    });
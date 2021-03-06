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
        console.log(e.response);
        showAlert('error', 'Error logging out! Try again.')
    }
};



// type is either password or data
const updateSettings = async (data, type) => {
    try {
        const url = type === 'password' ? '/api/v1/users/updateMyPassword' : '/api/v1/users/updateMe';

        const res = await axios({
            method: 'PATCH',
            url,
            data
        });

        if (res.data.status === 'success') {
            showAlert('success', `${type.toUpperCase()} updated successfully!`);
        }
    } catch (err) {
        showAlert('error', err.response.data.message)
    }
};





const purchaseWebsite = async websiteId => {
    try {
        const stripe = Stripe('pk_test_51HqkwrANfcP4UCDtKo2U4kDtrL63G8HXbSYLzQ3sOwXd7jVrmPTd3KY6D1bVQ1ST5XVvB9IsCfWkeBx4RJwAPR4J00pgRMcz50');
        // 1) Get checkout session from API
        const session = await axios(`/api/v1/purchases/checkout-session/${websiteId}`);

        // console.log(session);
        // 2) Create checkout form + charge credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        })

    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }

};







const signUpForm = document.querySelector('.form2');
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.logout-a');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const purchaseBtn = document.getElementById('purchase-website');

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
        const form = new FormData();
        form.append('name', document.getElementById('name').value);
        form.append('email', document.getElementById('email').value);
        form.append('photo', document.getElementById('photo').files[0]);
        // console.log(form);
        updateSettings(form, 'data');
    });

if(userPasswordForm)
    userPasswordForm.addEventListener('submit', async e => {
        e.preventDefault();
        document.querySelector('.btn--save-password').textContent = 'Updating...';

        const passwordCurrent = document.getElementById('password-current').value;
        const password = document.getElementById('password').value;
        const passwordConfirm = document.getElementById('password-confirm').value;
        await updateSettings({passwordCurrent, password, passwordConfirm}, 'password');

        document.querySelector('.btn--save-password').textContent = 'Save password';
        document.getElementById('password-current').value = '';
        document.getElementById('password').value = '';
        document.getElementById('password-confirm').value = '';
    });

if(purchaseBtn)
    purchaseBtn.addEventListener('click', e => {
        e.target.textContent = 'Processing...';
        const {websiteId} = e.target.dataset;
        purchaseWebsite(websiteId);
    });
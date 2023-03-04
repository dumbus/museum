const modal = () => {
  const open = document.querySelector('.tickets-btn'),
        close = document.querySelector('.modal-close'),
        modal = document.querySelector('.modal'),
        overlay = document.querySelector('.overlay'),
        submit = document.querySelector('.modal-submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
  });

  open.addEventListener('click', () => {
    modal.classList.add('modal-opened');
    modal.style.left = '50%';
    modal.style.transform = 'translateX(-50%) translateY(-55%)';
    overlay.style.display = 'block';
  });

  close.addEventListener('click', () => {
    modal.style.left = '-200vw';
    modal.style.transform = 'translateX(-50%) translateY(-50%)';
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target !== modal) {
      modal.style.left = '-100vw';
      modal.style.transform = 'translateX(-50%) translateY(-50%)';
      overlay.style.display = 'none';
    }
  });

  // tickets interaction

  let rentTypeMarks = document.querySelectorAll('.rent-type-mark');
  let basicNumber = document.querySelector('.tickets-rent-amount-number-input-basic');
  let basicUp = document.querySelector('.up-btn-basic');
  let basicDown = document.querySelector('.down-btn-basic');
  let seniorNumber = document.querySelector('.tickets-rent-amount-number-input-senior');
  let seniorUp = document.querySelector('.up-btn-senior');
  let seniorDown = document.querySelector('.down-btn-senior');

  let basicNumberForm = document.querySelector('.modal-amount-number-input-basic');
  let basicUpForm = document.querySelector('.up-btn-basic-form');
  let basicDownForm = document.querySelector('.down-btn-basic-form');
  let seniorNumberForm = document.querySelector('.modal-amount-number-input-senior');
  let seniorUpForm = document.querySelector('.up-btn-senior-form');
  let seniorDownForm = document.querySelector('.down-btn-senior-form');
  let selectForm = document.querySelector('.modal-booking-select');

  let overviewBasicNumber = document.querySelector('.overview-basic-number');
  let overviewSeniorNumber = document.querySelector('.overview-senior-number');
  let overviewTicketType = document.querySelector('.modal-overview-ticket-type');
  let overviewBasicSum = document.querySelector('.overview-basic-number-sum');
  let overviewSeniorSum = document.querySelector('.overview-senior-number-sum');
  let overviewTotal = document.querySelector('.modal-overview-total-wrapper-sum');


  let total = document.querySelector('.total-numbers');

  let exhibitionPrices = [20, 25, 40];
  let exhibitionNames = ['Permanent Exhibition', 'Temporary Exhibition', 'Combined Admission'];

  function reloadTotal() {
    let exhibitionMultiply = exhibitionPrices[localStorage.getItem('type-number')];
    let basicAmount = localStorage.getItem('basic-number');
    let seniorAmount = localStorage.getItem('senior-number');

    let totalNumber = +exhibitionMultiply * (+basicAmount + 0.5 * +seniorAmount);

    total.innerText = totalNumber;
  }

  function reloadForm() {
    let exhibitionMultiply = exhibitionPrices[localStorage.getItem('type-number')];

    basicNumberForm.value = localStorage.getItem('basic-number');
    seniorNumberForm.value = localStorage.getItem('senior-number');
    selectForm.value = localStorage.getItem('type-number');

    overviewBasicNumber.innerText = localStorage.getItem('basic-number');
    overviewSeniorNumber.innerText = localStorage.getItem('senior-number');
    overviewTicketType.innerText = exhibitionNames[localStorage.getItem('type-number')];
    overviewBasicSum.innerText = (+localStorage.getItem('basic-number') * exhibitionMultiply ) + ' €';
    overviewSeniorSum.innerText = (+localStorage.getItem('senior-number') * exhibitionMultiply * 0.5 ) + ' €';
    overviewTotal.innerText = (+localStorage.getItem('basic-number') * exhibitionMultiply ) + (+localStorage.getItem('senior-number') * exhibitionMultiply * 0.5 ) + ' €';

  }

  reloadTotal();
  reloadForm();

  // Ticket types to LocalStorage

  if (localStorage.getItem('type-number') == null) {
    localStorage.setItem('type-number', 0);
  }

  for (let i = 0; i < rentTypeMarks.length; i++) {
    rentTypeMarks[localStorage.getItem('type-number')].setAttribute('checked', '');
  }

  rentTypeMarks.forEach(item => {
    item.addEventListener('click', (e) => {
      rentTypeMarks.forEach(item => {
        item.removeAttribute('checked');
      });
      e.target.setAttribute('checked', '');
      for (let i = 0; i < rentTypeMarks.length; i++) {
        if (rentTypeMarks[i].hasAttribute('checked')) {
          localStorage.setItem('type-number', [i]);
        }
      }
      reloadTotal();
      reloadForm();
    });
  });

  // Ticket numbers to LocalStorage

  if (localStorage.getItem('basic-number') == null) {
    localStorage.setItem('basic-number', 1);  
  }

  if (localStorage.getItem('senior-number') == null) {
    localStorage.setItem('senior-number', 1);  
  }

  basicNumber.value = localStorage.getItem('basic-number');
  seniorNumber.value = localStorage.getItem('senior-number');

  basicUp.addEventListener('click', () => {
    if (+localStorage.getItem('basic-number') + 1 <= 20) {
      localStorage.setItem('basic-number', +localStorage.getItem('basic-number') + 1);
    } else {
      localStorage.setItem('basic-number', 20);
    }
    reloadTotal();
    reloadForm();
  });

  basicDown.addEventListener('click', () => {
    if (+localStorage.getItem('basic-number') - 1 >= 0) {
      localStorage.setItem('basic-number', +localStorage.getItem('basic-number') - 1);
    } else {
      localStorage.setItem('basic-number', 0);
    }
    reloadTotal();
    reloadForm();
  });

  seniorUp.addEventListener('click', () => {
    if (+localStorage.getItem('senior-number') + 1 <= 20) {
      localStorage.setItem('senior-number', +localStorage.getItem('senior-number') + 1);
    } else {
      localStorage.setItem('senior-number', 20);
    }
    reloadTotal();
    reloadForm();
  });

  seniorDown.addEventListener('click', () => {
    if (+localStorage.getItem('senior-number') - 1 >= 0) {
      localStorage.setItem('senior-number', +localStorage.getItem('senior-number') - 1);
    } else {
      localStorage.setItem('senior-number', 0);
    }
    reloadTotal();
    reloadForm();
  });

  // modal interaction

  let customSelect = document.querySelector('.custom-select');

  customSelect.addEventListener('click', () => {
    let selectedItem = document.querySelector('.same-as-selected');
    if (selectedItem.innerText === 'Permanent exhibition') {
      localStorage.setItem('type-number', 0);
    } else if (selectedItem.innerText === 'Temporary exhibition') {
      localStorage.setItem('type-number', 1);
    } else if (selectedItem.innerText === 'Combined Admission') {
      localStorage.setItem('type-number', 2);
    }

    reloadForm();
  });

  basicUpForm.addEventListener('click', () => {
    if (+localStorage.getItem('basic-number') + 1 <= 20) {
      localStorage.setItem('basic-number', +localStorage.getItem('basic-number') + 1);
    } else {
      localStorage.setItem('basic-number', 20);
    }
    reloadForm();
  });

  basicDownForm.addEventListener('click', () => {
    if (+localStorage.getItem('basic-number') - 1 >= 0) {
      localStorage.setItem('basic-number', +localStorage.getItem('basic-number') - 1);
    } else {
      localStorage.setItem('basic-number', 0);
    }
    reloadForm();
  });

  seniorUpForm.addEventListener('click', () => {
    if (+localStorage.getItem('senior-number') + 1 <= 20) {
      localStorage.setItem('senior-number', +localStorage.getItem('senior-number') + 1);
    } else {
      localStorage.setItem('senior-number', 20);
    }
    reloadForm();
  });

  seniorDownForm.addEventListener('click', () => {
    if (+localStorage.getItem('senior-number') - 1 >= 0) {
      localStorage.setItem('senior-number', +localStorage.getItem('senior-number') - 1);
    } else {
      localStorage.setItem('senior-number', 0);
    }
    reloadForm();
  });
  
  // modal validation

  let date = document.querySelector('#date');
  let time = document.querySelector('#time');

  let overviewDate = document.querySelector('.modal-overview-date');
  let overviewTime = document.querySelector('.modal-overview-time');

  date.addEventListener('change', ()=> {
    let currentDate = new Date().getTime();
    let selectedDate = Date.parse(date.value);

    let options = { weekday: 'long', month: 'long', day: 'numeric' };

    if (selectedDate < currentDate - 86400000) {
      date.valueAsDate = null;
      alert('You can\'t choose time in the past!');
    } else {
      let dateString = new Date(date.value).toLocaleDateString('en', options);
      overviewDate.innerText = dateString;
    }
  });

  time.addEventListener('change', () => {
    overviewTime.innerText = time.value;
  });

  // Input validation

  let regName = /^[a-zA-Zа-яА-Я\ ]+$/;
  let regEmail = /^[a-zA-Z0-9_-]{3,15}[@]{1}[a-zA-Z]{4,}[.]{1}[a-zA-Z]{2,}$/g;
  let regPhoneNoDivider = /^[0-9]{1,10}$/;
  let regPhoneByTwoDivider1 = /^[0-9]{2}[-\ ]?$/;
  let regPhoneByTwoDivider2 = /^[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?$/;
  let regPhoneByTwoDivider3 = /^[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?$/;
  let regPhoneByTwoDivider4 = /^[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?$/;
  let regPhoneByTwoDivider5 = /^[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?$/;
  let regPhoneByThreeDivider1 = /^[0-9]{3}[-\ ]?$/;
  let regPhoneByThreeDivider2 = /^[0-9]{3}[-\ ]?[0-9]{3}[-\ ]?$/;
  let regPhoneByThreeDivider3 = /^[0-9]{3}[-\ ]?[0-9]{3}[-\ ]?[0-9]{3}[-\ ]?$/;
  let regPhoneByTwoThreeDivider1 = /^[0-9]{3}[-\ ]?[0-9]{3}[-\ ]?[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?$/;
  let regPhoneByTwoThreeDivider2 = /^[0-9]{2}[-\ ]?[0-9]{2}[-\ ]?[0-9]{3}[-\ ]?[0-9]{3}[-\ ]?$/;
  let regPhoneByTwoThreeDivider3 = /^[0-9]{3}[-\ ]?[0-9]{2}[-\ ]?[0-9]{3}[-\ ]?[0-9]{2}[-\ ]?$/;
  let regPhoneByTwoThreeDivider4 = /^[0-9]{2}[-\ ]?[0-9]{3}[-\ ]?[0-9]{2}[-\ ]?[0-9]{3}[-\ ]?$/;
  


  let inputName = document.querySelector('.modal-booking-text');
  let nameError = document.querySelector('.name-error');

  let inputEmail = document.querySelector('.modal-booking-email');
  let emailError = document.querySelector('.email-error');

  let inputPhone = document.querySelector('.modal-booking-tel');
  let phoneError = document.querySelector('.phone-error');

  let errors = {
    name: 'Name is Invalid!',
    email: 'Email is Invalid!',
    phone: 'Phone number is Invalid!'
  };

  inputName.onblur = function() {
    let nameChecked = inputName.value.match(regName);

    console.log(nameChecked);

    if (nameChecked && (inputName.value.length > 2) && (inputName.value.length < 16)) {
      nameError.style.display = 'none';
    } else {
      inputName.value = '';
      nameError.style.display = 'block';
      nameError.innerText = errors.name;
    }
  };

  inputEmail.onblur = function() {
    let emailChecked = inputEmail.value.match(regEmail);

    if (emailChecked) {
      emailError.style.display = 'none';
    } else {
      inputEmail.value = '';
      emailError.style.display = 'block';
      emailError.innerText = errors.email;
    }
  };

  inputPhone.onblur = function() {
    let phoneChecked = inputPhone.value.match(regPhoneNoDivider) || inputPhone.value.match(regPhoneByTwoDivider1) || inputPhone.value.match(regPhoneByTwoDivider2) || inputPhone.value.match(regPhoneByTwoDivider3) || inputPhone.value.match(regPhoneByTwoDivider4) || inputPhone.value.match(regPhoneByTwoDivider5) || inputPhone.value.match(regPhoneByThreeDivider1) || inputPhone.value.match(regPhoneByThreeDivider2) || inputPhone.value.match(regPhoneByThreeDivider3) || inputPhone.value.match(regPhoneByTwoThreeDivider1) || inputPhone.value.match(regPhoneByTwoThreeDivider2) || inputPhone.value.match(regPhoneByTwoThreeDivider3) || inputPhone.value.match(regPhoneByTwoThreeDivider4);

    if (phoneChecked) {
      phoneError.style.display = 'none';
    } else {
      inputPhone.value = '';
      phoneError.style.display = 'block';
      phoneError.innerText = errors.phone;
    }
  };


};

export default modal;
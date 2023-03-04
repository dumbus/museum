const inputStyle = () => {
  const date = document.querySelector('#date');
  const time = document.querySelector('#time');
  const select = document.querySelector('.modal-booking-select');
  const option = document.querySelectorAll('option');
  
  date.addEventListener('change', ()=> {
    date.classList.add('date');
  });

  time.addEventListener('click', ()=> {
    time.classList.add('time');
  });
  

};

export default inputStyle;
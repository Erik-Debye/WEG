/**
 * The following code implements the mobile menu
 */
//icon (whole + parts)
const mobile_icon = document.querySelector('.mobile-nav-icon');
const top_line = document.querySelector('#line1');
const center_line = document.querySelector('#line2');
const bottom_line = document.querySelector('#line3');
//entire body
const body = document.querySelector('body');
//mobile nav element
const mobile_menu = document.querySelector('.mobile-nav');

const mobileLinks = Array.from(document.querySelectorAll('.mobile-link'));

//add click event to whole icon
mobile_icon.addEventListener('click', (_) => {
  //converts lines to an x
  top_line.classList.toggle('line1-open');
  center_line.classList.toggle('line2-open');
  bottom_line.classList.toggle('line3-open');
  //opens mobile nav
  mobile_menu.classList.toggle('mobile-nav-open');
  //fixes body so no scrolling
  body.classList.toggle('fixed');
});

//close menu when link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    top_line.classList.remove('line1-open');
    center_line.classList.remove('line2-open');
    bottom_line.classList.remove('line3-open');
    //opens mobile nav
    mobile_menu.classList.remove('mobile-nav-open');
    //fixes body so no scrolling
    body.classList.remove('fixed');
  });
});

//Close mobile menu when screen size gets larger than mobile
window.addEventListener('resize', (_) => {
  if (window.innerWidth > 950) {
    top_line.classList.remove('line1-open');
    center_line.classList.remove('line2-open');
    bottom_line.classList.remove('line3-open');
    //opens mobile nav
    mobile_menu.classList.remove('mobile-nav-open');
    //fixes body so no scrolling
    body.classList.remove('fixed');
  }
});

/**
 * This site might have a lot of empty links. Let's address them with modals
 */
//create a modal class. This way we don't have to redefine a million event listeners
class Modal {
  constructor(msg) {
    this.modalEl = document.createElement('div');
    this.modalEl.classList.add('modal');

    const contentEl = document.createElement('div');
    contentEl.classList.add('modal-content');
    this.modalEl.appendChild(contentEl);

    const closeEl = document.createElement('button');
    closeEl.classList.add('close-modal');
    contentEl.appendChild(closeEl);

    const closeSVG = document.createElement('img');
    closeSVG.classList.add('close-svg');
    closeSVG.setAttribute('alt', 'Close this Message');
    // Because this runs in different html files, we have to dynamically adjust the path to the svg
    const currURL = window.location.href;
    const svgPath =
      currURL.includes('index.html') || currURL.includes('/update2/#')
        ? './assets/svg/close-line-icon.svg'
        : '../assets/svg/close-line-icon.svg';
    closeSVG.setAttribute('src', svgPath);
    closeEl.appendChild(closeSVG);

    const titleEl = document.createElement('h2');
    titleEl.textContent = msg;
    contentEl.appendChild(titleEl);

    closeEl.addEventListener('click', (e) => {
      this.close();
    });

    this.modalEl.addEventListener('click', (e) => {
      if (e.target.matches('.modal')) {
        this.close();
      }
    });
  }

  append(id) {
    document.querySelector(`#${id}`).appendChild(this.modalEl);
  }

  open() {
    this.modalEl.style.display = 'block';
  }

  close() {
    this.modalEl.style.display = 'none';
  }
}

//Lets create some modals
//--booking
const bookModal = new Modal(
  `It seems like WEG is not available in your area yet! We are working on getting to you soon!`
);
const modals = [bookModal];

const bookingBtns = document.querySelectorAll('.booking-btn');
if (bookingBtns !== []) {
  bookingBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      bookModal.append('features');
      bookModal.open();
    });
  });
}

/**
 * Autoset form's textarea as user inputs or deletes content (type, copy-paste, etc)
 * takes the height of the scrollbar and adjusts that to rem for height
 */
const textbox = document.querySelector('textarea');
if (textbox) {
  textbox.addEventListener('input', (_) => {
    textbox.style.height = `${textbox.scrollHeight}px`;
  });
}

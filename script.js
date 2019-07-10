// SCROLL PAGE

const sectionHotel = document.querySelector(".section-info-hotel");
const sectionAboutUs = document.querySelector(".section-about-us");

const roomBoxes = [...document.querySelectorAll(".room")];
const tourImages = [...document.querySelectorAll(".tour__image")];

const handleScrollEffects = () => {
 const windowHeight = window.innerHeight;
 const scrollValue = window.scrollY;

 // hotel
 if (
  scrollValue >
  sectionHotel.offsetTop + sectionHotel.offsetHeight - windowHeight
 ) {
  sectionHotel.classList.add("active");
 }

 // rooms
 roomBoxes.forEach(roomBox => {
  if (scrollValue > roomBox.offsetTop + roomBox.offsetHeight - windowHeight) {
   roomBox.classList.add("active");
  }
 });

 // tours
 tourImages.forEach(tourImage => {
  if (
   scrollValue >
   tourImage.offsetTop + tourImage.offsetHeight - windowHeight
  ) {
   tourImage.classList.add("active");
  }
 });

 // about us
 if (
  scrollValue >
  sectionAboutUs.offsetTop + sectionAboutUs.offsetHeight - windowHeight
 ) {
  sectionAboutUs.classList.add("active");
 }
};

document.addEventListener("scroll", handleScrollEffects);

// *******************************************

// SCROLL TO SECTION AFTER CLICK NAV

const navItems = [...document.querySelectorAll(".navbar__item")];
const sections = ["info-hotel", "select-room", "select-tour", "contact"];

navItems.forEach((navItem, i) => {
 const section = document.querySelector(`.section-${sections[i]}`);

 const scrollToSection = () => {
  window.scrollTo({
   behavior: "smooth",
   top: section.offsetTop
  });
 };

 navItem.addEventListener("click", scrollToSection);
});

// *******************************************

// OPEN CONTACT - ROLL

const socialBox = document.querySelector(".contact-info");
const arrowContact = document.querySelector(".contact-switch");
const allContact = document.querySelector(".section-contact");
const wrapp = document.querySelector(".main-section");

const handleOpenContact = () => {
 arrowContact.classList.toggle("on");
 allContact.classList.toggle("on");
 wrapp.classList.toggle("on");
};

socialBox.addEventListener("click", handleOpenContact);
arrowContact.addEventListener("click", handleOpenContact);

// *******************************************

// POP UP BOOKING

// open popup
const popUpBookingBox = document.querySelector(".pop-up--booking");
const closePopUpBookingBox = document.querySelector(".close-pop-up--booking");

const bookingBox = document.querySelector(".box-booking");

const navBtnBook = document.querySelector(".navbar__item--btn-book");

const handleOpenPopUpBooking = () => {
 popUpBookingBox.classList.add("on");
 bookingBox.classList.add("on");
 closePopUpBookingBox.classList.add("on");
 document.body.classList.add("no-scroll");
};

navBtnBook.addEventListener("click", handleOpenPopUpBooking);

const roomBtnsBook = [...document.querySelectorAll(".button-book")];

roomBtnsBook.forEach(roomBtnBook => {
 roomBtnBook.addEventListener("click", handleOpenPopUpBooking);
});

const handleClosePopUpBooking = () => {
 popUpBookingBox.classList.remove("on");
 bookingBox.classList.remove("on");
 closePopUpBookingBox.classList.remove("on");
 document.body.classList.remove("no-scroll");
};

closePopUpBookingBox.addEventListener("click", handleClosePopUpBooking);

// select room
const popUpBtnsBook = [...document.querySelectorAll(".room-booking__btn-book")];
const popUpBookImages = [...document.querySelectorAll(".room-booking__image")];

popUpBtnsBook.forEach(popUpBtnBook => {
 popUpBookImages.forEach(popUpBookImage => {
  const atrrDataBookImage = popUpBookImage.dataset.checkbox;
  const atrrDataBookBtn = popUpBtnBook.dataset.checkbox;

  const handleAddCheckboxRoomImage = () => {
   if (atrrDataBookImage === atrrDataBookBtn) {
    popUpBtnBook.classList.toggle("on");
   }
  };
  popUpBookImage.addEventListener("click", handleAddCheckboxRoomImage);
 });

 const handleAddCheckboxRoom = () => {
  popUpBtnBook.classList.toggle("on");
 };

 popUpBtnBook.addEventListener("click", handleAddCheckboxRoom);
});

// effect input after click
const popUpBookInput = [...document.querySelectorAll(".search-form__input")];

for (let i = 0; i < popUpBookInput.length; i++) {
 popUpBookInput[i].addEventListener("focus", e => {
  e.target.classList.add("on");
 });

 popUpBookInput[i].addEventListener("blur", e => {
  e.target.classList.remove("on");
 });
}

// set current time as min date
const inputCheckIn = document.getElementById("check-in");
const inputCheckOut = document.getElementById("check-out");

// min date check in

const minDateCheckIn = new Date().toISOString().slice(0, 10);

inputCheckIn.min = minDateCheckIn;

inputCheckIn.addEventListener('change', () => {

 // value check in

 const valueDateCheckIn = inputCheckIn.value

 // min date check out 

 let yearDateCheckIn = valueDateCheckIn.slice(0, 4) * 1
 let monthDateCheckIn = valueDateCheckIn.slice(5, 7) * 1
 var lastDayInMonth = new Date(yearDateCheckIn, monthDateCheckIn, 0);

 if (valueDateCheckIn.slice(8, 10) * 1 === lastDayInMonth.getDate() && valueDateCheckIn.slice(5, 7) * 1 !== 12) {
  month = valueDateCheckIn.slice(5, 7) * 1 < 10 ? `0${valueDateCheckIn.slice(5, 7) * 1 + 1}` : valueDateCheckIn.slice(5, 7) * 1 + 1
  valueDateCheckOut = `${valueDateCheckIn.slice(0, 4)}-${month}-0${1}`;;
 } else if (valueDateCheckIn.slice(5, 7) * 1 === 12 && valueDateCheckIn.slice(8, 10) * 1 === 31) {
  valueDateCheckOut = `${valueDateCheckIn.slice(0, 4) * 1 + 1}-0${1}-0${1}`
 } else {
  days = valueDateCheckIn.slice(8, 10) * 1 < 10 ? `0${valueDateCheckIn.slice(8, 10) * 1 + 1}` : valueDateCheckIn.slice(8, 10) * 1 + 1

  valueDateCheckOut = `${valueDateCheckIn.slice(0, 7)}-${days}`;
 }

 inputCheckOut.min = valueDateCheckOut;

})

// *********************************************************

// SLIDER IMAGE

let index = 0;

const sliderImagesMainImages = [
 ...document.querySelectorAll(".slider-images__image")
];
const sliderImagesArrowsLeft = [
 ...document.querySelectorAll(".slider-images__arrow-left")
];
const sliderImagesArrowsRight = [
 ...document.querySelectorAll(".slider-images__arrow-right")
];

const sliderImagesOne = ["IMG/image5.jpg", "IMG/image6.jpg", "IMG/image7.jpg"];
const sliderImagesTwo = ["IMG/image8.jpg", "IMG/image9.jpg", "IMG/image10.jpg"];
const sliderImagesThree = [
 "IMG/image11.jpg",
 "IMG/image12.jpg",
 "IMG/image13.jpg"
];
const sliderImagesFour = [
 "IMG/image14.jpg",
 "IMG/image15.jpg",
 "IMG/image16.jpg"
];

const slidersImages = [
 sliderImagesOne,
 sliderImagesTwo,
 sliderImagesThree,
 sliderImagesFour
];

sliderImagesMainImages.forEach((mainImage, i) => {
 const sliderImages = slidersImages[i];

 const atrrMainImage = mainImage.dataset.name;

 sliderImagesArrowsRight.forEach(arrowRight => {
  const atrrArrowRight = arrowRight.dataset.name;

  const handleSwitchOnNextImage = () => {
   if (atrrMainImage === atrrArrowRight) {
    index++;

    if (index === sliderImages.length) {
     index = 0;
    }
    mainImage.src = sliderImages[index];
   }
  };

  arrowRight.addEventListener("click", handleSwitchOnNextImage);
 });

 sliderImagesArrowsLeft.forEach(arrowLeft => {
  const atrrArrowLeft = arrowLeft.dataset.name;

  const handleSwitchOnBackImage = () => {
   if (atrrMainImage === atrrArrowLeft) {
    if (index > 0) {
     mainImage.src = sliderImages[index - 1];
     index--;
    } else {
     mainImage.src = sliderImages[sliderImages.length - 1];
     index = sliderImages.length - 1;
    }
   }
  };

  arrowLeft.addEventListener("click", handleSwitchOnBackImage);
 });
});

// ***********************************

// POPUP TOUR

const popUpTourBox = document.querySelector(".pop-up--tour");
const closePopUpTourBox = document.querySelector(".close-pop-up--tour");

const tourBoxes = [...document.querySelectorAll(".tour")];

const tours = ["one", "two", "three", "four"];

tourBoxes.forEach((tourBox, i) => {
 const tour = document.querySelector(`.tour-info--${tours[i]}`);

 const atrrDataTourBox = tourBox.dataset.number;
 const atrrDataTour = tour.dataset.number;

 const handleOpenPopUpTour = () => {
  if (atrrDataTourBox === atrrDataTour) {
   tour.classList.add("on");
   popUpTourBox.classList.add("on");
   closePopUpTourBox.classList.add("on");
   document.body.classList.add("no-scroll");
  }
 };

 const handleClosePopUpTour = () => {
  tour.classList.remove("on");
  popUpTourBox.classList.remove("on");
  closePopUpTourBox.classList.remove("on");
  document.body.classList.remove("no-scroll");
 };

 tourBox.addEventListener("click", handleOpenPopUpTour);
 closePopUpTourBox.addEventListener("click", handleClosePopUpTour);
})

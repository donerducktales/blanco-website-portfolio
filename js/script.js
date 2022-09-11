// menu hamburger
document.querySelector(`.user-panel__menu-hamburger`).addEventListener(`click`, () => {
   document.querySelector(`.user-panel__mobile-menu`).classList.toggle(`active`)
});

// sign up scroll
document.querySelector(`.user-panel__sign-up`).addEventListener(`click`, () => {
   if (innerWidth >= 1281) {
      window.scrollTo({
         top: 5800,
         behavior: "smooth",
      });
   } else if (innerWidth <= 1280 && innerWidth >= 1278) {
      window.scrollTo({
         top: 6545,
         behavior: "smooth",
      });
   } else if (innerWidth <= 1277 && innerWidth >= 1187) {
      window.scrollTo({
         top: 6500,
         behavior: "smooth",
      });
   } else if (innerWidth <= 1186 ) {
      window.scrollTo({
         top: 6852,
         behavior: "smooth",
      });
   }
});

document.querySelector(`.mobile-menu__sign-up`).addEventListener(`click`, () => {
   if (innerWidth <= 968 && innerWidth >= 846) {
      window.scrollTo({
         top: 6875,
         behavior: "smooth",
      });
   } else if (innerWidth <= 845 && innerWidth >= 781) {
      window.scrollTo({
         top: 10175,
         behavior: "smooth",
      });
   } else if (innerWidth <= 780 && innerWidth >= 601) {
      window.scrollTo({
         top: 10230,
         behavior: "smooth",
      });
   } else if (innerWidth <= 601 && innerWidth >= 533) {
      window.scrollTo({
         top: 10270,
         behavior: "smooth",
      });
   } else if (innerWidth <= 533 && innerWidth >= 485) {
      window.scrollTo({
         top: 10340,
         behavior: "smooth",
      });
   }  else if (innerWidth <= 484 && innerWidth >= 361) {
      window.scrollTo({
         top: 9146,
         behavior: "smooth",
      });
   }  else if (innerWidth <= 360) {
      window.scrollTo({
         top: 9350,
         behavior: "smooth",
      });
   }
});
let pub = document.querySelectorAll(".container > div");
pub.forEach((e, i) => {
  e.classList.add(`index${i}`);
  e.style.zIndex = `${i}`;
});

function permut() {
  let element = 0;
  for (i = 0; i < pub.length; i++) {
    // i = 4
    if (pub[element].classList.contains(`index${i}`)) {
      if (element !== pub.length - 1) {
        pub[element].classList.replace(
          `index${i}`,
          `index${(i + 1) % pub.length}`
        );
        pub[element].style.zIndex = `${(i + 1) % pub.length}`;
        element++;
        i = -1;
      } else {
        pub[element].classList.replace(
          `index${i}`,
          `index${(i + 1) % pub.length}`
        );
        pub[element].style.zIndex = `${(i + pub.length+1) % pub.length}`;
        console.log(pub[element]);
        // 5 elements, 4 zIndex, index{0 à 4}
        break;
      }
    }
  }
}

permut();

setInterval(permut, 10000);

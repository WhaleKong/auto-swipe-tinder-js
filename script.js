const swipeTinderJaJa = () => {
  const x = setInterval(() => {
    const closePopupMatch = document.getElementsByClassName(
      "Pt(20px) Pb(40px) C(#fff) Fw($bold) Tt(u) Lts($ls-s) D(b) Cur(p) W(100%) Trsdu($slow)"
    );
    const likeBtn = document.querySelector('[aria-label="Like"]');

    if (!closePopupMatch.length) {
      likeBtn.click();
    } else {
      closePopupMatch[0].click();
    }
  }, 5000);
  setTimeout(() => {
    clearInterval(x);
  }, 20000);
};

swipeTinderJaJa();

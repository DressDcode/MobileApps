const vhEl  = document.querySelector('.vh');
const dvhEl = document.querySelector('.dvh');
const mVh   = document.getElementById('m-vh');
const mDvh  = document.getElementById('m-dvh');

function paneHeight(el){ return Math.round(el.getBoundingClientRect().height); }
function visualH(){ return Math.round((window.visualViewport?.height) || window.innerHeight); }

function update(){
  mVh.innerHTML = `vh: ${paneHeight(vhEl)}px<br>visual: ${visualH()}px`;
  mDvh.innerHTML = `dvh: ${paneHeight(dvhEl)}px<br>visual: ${visualH()}px`;
}

// ενημέρωση σε resize / orientation / scroll / focus (keyboard)
['resize','orientationchange','scroll'].forEach(ev =>
  window.addEventListener(ev, () => requestAnimationFrame(update), { passive: true })
);
window.addEventListener('focusin', update);
window.addEventListener('focusout', update);

// αρχικό paint
update();

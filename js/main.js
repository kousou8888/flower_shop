// ローディングアニメーション
window.onload = function() {
    document.getElementById('loading');
    lassList.add('loaded');
}


// ▼　スクロールアニメーション
const scrollEvent = function () {
const ClassElem = document.getElementsByClassName("scroll");  //フェードインアニメーション適用

const scrollAnime = function (classE) {
    window.addEventListener("scroll", function () {
        const scrollValue = window.pageYOffset;  //スクロール量の取得
        const scrollEle = classE;  // 要素の取得
        const windowHeight = window.innerHeight;  // 画面の高さを取得
        const value = 180;  // はみ出させる値
        for (let a = 0; a < scrollEle.length; a++) {
            const scrollTop = scrollEle[a].getBoundingClientRect().top + scrollValue;  // 取得した要素のtop値の取得 + スクロール量
            if (scrollValue > scrollTop - windowHeight + value) {
                scrollEle[a].classList.add("js-fade");
            }else{
                //   scrollEle[a].classList.remove("js-fade");
            }
        }
    });
}
scrollAnime(ClassElem);
};
scrollEvent();


const pagetopBtn = document.querySelector('#page_top');
pagetopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
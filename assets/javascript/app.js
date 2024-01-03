const cl = console.log;

const heroName = document.getElementById("heroName");
const allDivImg = [...document.querySelectorAll(".all")];


const onHeroChange = (eve) => {
    let herovVal = eve.target.value;
    cl(herovVal);
    allDivImg.forEach(img => {
        img.classList.add('d-none');
    })
    let showImg = [...document.getElementsByClassName(herovVal)];
    showImg.forEach(img => {
        img.classList.remove('d-none');
    })
}



heroName.addEventListener("change", onHeroChange);












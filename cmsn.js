function handleClick() {
    const loader = document.querySelector('.loader');
    const clickButton = document.querySelector('.click');
    const bongbay = document.querySelector('.bongbay');
    const happybirthday = document.querySelector('.happybirthday');

    clickButton.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';
        bongbay.style.display = 'block';

        setTimeout(() => {
            happybirthday.classList.add('show');
            setTimeout(() => {
                happybirthday.classList.remove('show');
                happybirthday.classList.add('hide');

                setTimeout(() => {
                    happybirthday.style.display = 'none';
                    happybirthday.classList.remove('hide');
                }, 2000); 
            }, 5000);
        }, 4000);
    }, 4000);
}

document.addEventListener("DOMContentLoaded", function() {
    const imagesLeft = document.querySelectorAll('.trai img');
    const imagesRight = document.querySelectorAll('.phai img');

    imagesLeft.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = 'translateX(0)';
        }, index * 300);
    });

    imagesRight.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = 'translateX(0)';
        }, index * 300);
    });
});

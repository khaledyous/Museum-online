var images = [
    'img/slide1.jpg',
    'img/slide2.jpg',
    'img/slide3.jpg',
    'img/slide4.jpg',
    'img/slide5.jpg',
    'img/slide6.jpg'],
    index = 0;
    time = 5000;

    function slideShow() {
        document.getElementById('InformationSlide').className += "fadeOut";
        setTimeout(function() {
            document.getElementById('InformationSlide').src = images[index];
            document.getElementById('InformationSlide').className = "";
        },500);
        index++;
        if (index == images.length) { index = 0; }
        setTimeout(slideShow, time);
    }
    slideShow();



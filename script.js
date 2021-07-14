
        // Header
        window.addEventListener('scroll', function(){
            var header = document.querySelector('header')
            header.classList.toggle('sticky', window.scrollY > 0);
        });
        

        function toggleMenu(){
            var toggle = document.querySelector('.toggle');
            var threeLine = document.querySelector('.three-line');
            toggle.classList.toggle('active');
            threeLine.classList.toggle('active');
        }
        // Header

        // Gallery
        const button = document.querySelector('#LoadMoreWork');
        const hiddenELements = document.querySelectorAll('.you-see.hidden');
        let openHandler = false;
        button.value = 'hide';
        button.onclick = () => {
            if (openHandler) {
                hiddenELements.forEach(x => x.style.display = 'none');
                button.innerHTML = "load more work";
                openHandler = false;
            } else {
                hiddenELements.forEach(x => x.style.display = 'flex');
                openHandler = true;
                button.innerHTML = "Show less";
            }
        }
        // Gallery
    

        // film
        var Button = document.querySelector('#play-video')
        function playVideo() {
        var video = document.getElementById("myVideo");
        if (video.paused)
        {
            video.play();
            Button.style.display = 'none'
        } 
        else 
        {
            video.pause();
            Button.style.display = 'block'
        }
        }
        // bars
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if (scroll >= 700) {
                $(".b1").addClass("a1");
            } else {
                $(".b1").removeClass("a1");
            }
        });
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if (scroll >= 700) {
                $(".b2").addClass("a2");
            } else {
                $(".b2").removeClass("a2");
            }
        });
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();

            if (scroll >= 700) {
                $(".b3").addClass("a3");
            } else {
                $(".b3").removeClass("a3");
            }
        });

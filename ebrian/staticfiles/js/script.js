window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');

    loading.style.animation = 'loadingFadeout 3s ease-in-out forwards';
    setTimeout(function() {
        loading.style.display = 'none';
        content.style.display = 'block';
    }, 3100);
});

function wordChanger() {
    var words = ['Programmer', 'Developer', 'Data Analyst'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 20,
    speed = 80;

    var wordFlick = function() {
        setInterval(function() {
            if(forwards) {
                if(offset >= words[i].length) {
                    ++skip_count;
                    if(skip_count === skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if(offset === 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if(i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if(skip_count === 0) {
                if(forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }
            var cursor = (offset >= words[i].length) ? '' : '|';
            $('.introduction p span').text(part + cursor);
        }, speed);
    }
    $(document).ready(function() {
        wordFlick();
    });
}
wordChanger();

function character1Animation() {
    window.addEventListener('load', function() {
        const character1 = document.querySelector('.character-1');
        character1.style.animation = 'characterFloating 3s ease-in-out infinite';
        //character1.style.animation = 'character1Entrance 5s ease-out forwards, characterFloating 3s ease infinite';
    });
}
character1Animation();

function character2Animation() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight;

        if(scrollPosition >= viewportHeight) {
            const character2 = document.querySelector('.character-2');
            character2.style.animation = 'character2Entrance 5s ease-out forwards, characterFloating 3s ease-in-out infinite';
        }
    });
}
character2Animation();

function character3Animation() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight * 2;

        if(scrollPosition >= viewportHeight) {
            const character3 = document.querySelector('.character-3');
            character3.style.animation = 'character3Entrance 5s ease-out forwards, characterFloating 3s ease-in-out infinite';
        }
    });
}
character3Animation();

function characterPopout() {
    const character1_img = document.querySelector('.character-1 img');
    const character1_div = document.querySelector('.character-1 div');

    character1_div.addEventListener('mouseenter', function() {
        character1_div.classList.remove('character1_floating');
        //character1_img.classList.add('character1_popout');
    });
}
characterPopout();
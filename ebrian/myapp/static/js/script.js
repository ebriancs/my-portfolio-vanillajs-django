window.addEventListener('load', function() {
    // FUNCTIONS
    disableHTML();
    window.addEventListener('resize', disableHTML);
    baseHTML();
});

function disableHTML() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const minScreenWidth = 1200;
    const minScreenHeight = 600;

    const contentDiv = document.getElementById('content');
    const disablerDiv = document.getElementById('disabler');

    if(screenWidth >= minScreenWidth && screenHeight >= minScreenHeight) {
        contentDiv.style.display = 'block';
        disablerDiv.style.display = 'none';
    } else {
        contentDiv.style.display = 'none';
        disablerDiv.style.display = 'flex';
    }
}

function baseHTML() {
    // INTRODUCTION
    function introduction() { // WORD CHANGER
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
                $('#introduction p span').text(part + cursor);
            }, speed);
        }
        $(document).ready(function() {
            wordFlick();
        });
    }
    introduction();
    
    // CHARACTER 1
    function character1() {
        // VARIABLES
        const character = document.querySelector('#character-1'); // character 1
        const character_img = document.querySelector('#character-1 img'); // character 1 img
        const character_div = document.querySelector('#character-1 div'); // character 1 surf board

        // BEGIN
        character.style.animation = 'character-1-floating 3s ease-in-out infinite, character-1-entrance 2s ease-in-out forwards'; // character 1 entrance
    
        character.addEventListener('animationend', function() {
            setTimeout(function() {
                character_div.classList.add('active'); // activate character 1 surf board
            }, 200); // delay
            setTimeout(function() {
                character_img.style.animation = 'character-1-img-entrance 2s ease-out forwards'; // character 1 image entrance
            }, 400); // delay

            character_img.addEventListener('animationend', function() {
                setTimeout(function() {
                    character_div.classList.remove('active'); // deactivate character 1 surf board

                    setTimeout(function() {
                        const con2 = document.getElementById('con-2');
                        con2.style.display = 'block'; // display skills container

                        // FUNCTION CALL
                        console.log('skillsHTML activated');
                        skillsHTML();
                    }, 1000); // delay
                }, 400); // delay
            }, { once: true }); // execute once
        }, { once: true }); // execute once
    }
    character1();
}

function skillsHTML() {
    // VARIABLES
    const skills = document.querySelector('.skills');
    const skills_div_1 = document.querySelector('.skills-div-1');
    const skills_div_2 = document.querySelector('.skills-div-2');
    const skills_div_3 = document.querySelectorAll('.skills-div-3');
    const skills_title = document.querySelector('.skills-title h1');
    const character = document.querySelector('#character-2');
    const character_img = document.querySelector('#character-2 img');
    const character_div = document.querySelector('#character-2 div');

    // BEGIN
    window.addEventListener('scroll', function() {
        // VARIBALES
        const scroll_position = window.scrollY || window.pageYOffset;
        const viewport_height = window.innerHeight; // 100vh

        if(scroll_position >= viewport_height) {
            character.style.animation = 'character-2-floating 3s ease-in-out infinite, character-2-entrance 1s ease-in-out forwards'; // character 2 entrance

            character.addEventListener('animationend', function() {
                setTimeout(function() {
                    character_div.classList.add('active'); // activate character 2 surf board
                }, 200); // delay
                setTimeout(function() {
                    character_img.style.animation = 'character-2-img-entrance 2s ease-out forwards'; // character 2 image entrance
                }, 400); // delay

                character_img.addEventListener('animationend', function() {
                    setTimeout(function() {
                        character_div.classList.remove('active'); // deactivate character 2 surf board
                    }, 400); // delay
                    setTimeout(function() {
                        skills_div_1.style.animation = 'skills-div-1-entrance 1s ease forwards'; // skills div 1 entrance
                        skills_title.style.animation = 'skills-title-entrance 1s ease forwards'; // skills title entrance
                    }, 600); // delay
                    
                    skills_div_1.addEventListener('animationend', function() {

                        skills_div_2.style.animation = 'skills-div-2-entrance 1s ease-out forwards'; // skills div 2 entrance
                        
                        const a_skills = document.querySelector('.a-skills');
                        a_skills.classList.remove('a-skills'); // navigation link from red to cyan

                        setTimeout(function() {
                            const con3 = document.getElementById('con-3');
                            con3.style.display = 'block'; // display achievements container

                            // FUNCTION CALL
                            console.log('achievementsHTML activated');
                            achievementsHTML();
                        }, 3000); // delay
                    }, { once: true });
                }, { once: true });
            }, { once: true });
        }
    });
}

function achievementsHTML() {
    // VARIABLES
    const achievements = document.querySelector('.achievements');
    const achievements_div_1 = document.querySelector('.achievements-div-1');
    const achievements_div_2 = document.querySelector('.achievements-div-2');
    const achievements_title = document.querySelector('.achievements-title h1');
    const character = document.querySelector('#character-3');
    const character_img = document.querySelector('#character-3 img');
    const character_div = document.querySelector('#character-3 div');

    // BEGIN
    window.addEventListener('scroll', function() {
        // VARIBALES
        const scroll_position = window.scrollY || window.pageYOffset;
        const viewport_height = window.innerHeight * 2; // 200vh

        if(scroll_position >= viewport_height) {
            character.style.animation = 'character-3-floating 3s ease-in-out infinite, character-3-entrance 1s ease-in-out forwards'; // character 3 entrance

            character.addEventListener('animationend', function() {
                setTimeout(function() {
                    character_div.classList.add('active'); // activate character 3 surf board
                }, 200); // delay
                setTimeout(function() {
                    character_img.style.animation = 'character-3-img-entrance 2s ease-out forwards'; // character 3 image entrance
                }, 400); // delay

                character_img.addEventListener('animationend', function() {
                    setTimeout(function() {
                        character_div.classList.remove('active'); // deactivate character 3 surf board
                    }, 400); // delay
                    setTimeout(function() {
                        achievements_div_1.style.animation = 'achievements-div-1-entrance 1s ease forwards'; // achievements div 1 entrance
                        achievements_title.style.animation = 'achievements-title-entrance 1s ease forwards'; // achievements title entrance
                    }, 600); // delay
                    
                    achievements_div_1.addEventListener('animationend', function() {
                        achievements_div_2.style.animation = 'achievements-div-2-entrance 1s ease-out forwards'; // achievements div 2 entrance

                        const a_achievements = document.querySelector('.a-achievements');
                        a_achievements.classList.remove('a-achievements'); // navigation link from red to cyan

                        setTimeout(function() {
                            const con4 = document.getElementById('con-4');
                            const con5 = document.getElementById('con-5');
                            con4.style.display = 'block'; // display contact container
                            con5.style.display = 'block'; // display footer container

                            // FUNCTION CALL
                            console.log('contactHTML activated');
                            contactHTML();
                        }, 1000);
                    }, { once: true });
                }, { once: true });
            }, { once: true });
        }
    });

    function slider() { // list of achievements slider
        const slider_items = document.querySelectorAll('.achievements-div-2-items');
        const slider_next = document.querySelector('.achievements-div-2-next');
        const slider_prev = document.querySelector('.achievements-div-2-prev');
    
        let active = Math.floor(slider_items.length / 2);
        
        function showSlider() {
            let num = 0;
            
            slider_items[active].style.transform = 'none';
            slider_items[active].style.zIndex = 1;
            slider_items[active].style.filter = 'none';
            slider_items[active].style.opacity = 1;
    
            slider_items[active].addEventListener('mouseover', function() {
                slider_items[active].style.transform = 'scale(1.1)';
            });
    
            slider_items[active].addEventListener('mouseout', function() {
                slider_items[active].style.transform = 'scale(1)';
            });
    
            for(var i = active + 1; i < slider_items.length; i++){
                num++;
                slider_items[i].style.transform = `translateX(${40 * num}%) scale(${1 - 0.2 * num}) perspective(20px) rotateY(-1deg)`;
                slider_items[i].style.zIndex = -num;
                slider_items[i].style.filter = 'blur(1px)';
                slider_items[i].style.opacity = num > 2 ? 0 : 0.8;
                slider_items[i].style.border = 'none';
            }
    
            num = 0;
    
            for(var i = active - 1; i >= 0; i--) {
                num++;
                slider_items[i].style.transform = `translateX(${-40 * num}%) scale(${1 - 0.2 * num}) perspective(20px) rotateY(1deg)`;
                slider_items[i].style.zIndex = -num;
                slider_items[i].style.filter = 'blur(1px)';
                slider_items[i].style.opacity = num > 2 ? 0 : 0.8;
                slider_items[i].style.border = 'none';
            }
        }
        showSlider();
    
        slider_next.onclick = function() {
            active = active + 1 < slider_items.length ? active + 1 : active;
            showSlider();
        }
    
        slider_prev.onclick = function() {
            active = active - 1 >= 0 ? active - 1 : active;
            showSlider();
        }
    }
    slider();
}

function contactHTML() {
    const contact_div_1 = document.querySelector('.contact-div-1');

    window.addEventListener('scroll', function() {
        // VARIBALES
        const scroll_position = window.scrollY || window.pageYOffset;
        const viewport_height = window.innerHeight * 3; // 300vh

        if(scroll_position >= viewport_height) {
            contact_div_1.style.animation = 'contact-div-1-entrance 2s ease-out forwards'; // contact div 1 entrance

            contact_div_1.addEventListener('animationend', function() {
                const a_contact = document.querySelector('.a-contact');
                a_contact.classList.remove('a-contact'); // navigation link from red to cyan

                // FUNCTION CALL
                detailsHTML();
                messageHTML();
            });
        }
    });
}

function detailsHTML() {
    const details_i = document.getElementById('details-i');
    const details_tr = document.querySelectorAll('#details tr');

    let details_active = true; // STATUS
    details_i.addEventListener('click', function() {
        if(details_active) { // ENTRANCE
            Array.from(details_tr).forEach(function(element, index) {
                setTimeout(function() {
                    element.style.animation = "details-tr-entrance 1s ease both";
                }, index * 200);
            });
            details_active = false;
        } else { // EXIT
            Array.from(details_tr).forEach(function(element, index) {
                setTimeout(function() {
                    element.style.animation = "details-tr-exit 1s ease both";
                }, index * 200);
            });
            details_active = true;
        }
    });
}

function messageHTML() {
    const message = document.getElementById('message');
    const message_i = document.getElementById('message-i');
    const message_btn_close = document.getElementById('message-btn-close');

    message_i.addEventListener('click', function() { // OPEN MESSAGE
        message.style.display = 'block';
        message.style.animation = 'message-entrance 0.5s ease both';
    });

    message_btn_close.addEventListener('click', function() { // CLOSE MESSAGE
        message.style.animation = 'message-exit 0.5s ease forwards';
        message.addEventListener('animationend', function() {
            message.style.display = 'none';
            message.style.animation = '';
        }, { once: true });
    });
}
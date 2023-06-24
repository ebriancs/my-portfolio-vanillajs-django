window.addEventListener('load', function() {
    // FUNCTIONS
    disableHTML();
    window.addEventListener('resize', disableHTML);
    baseHTML();
});

function disableHTML() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const minScreenWidth = 600;
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
    function introduction() {
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
        const character = document.querySelector('#character-1');
        const character_img = document.querySelector('#character-1 img');
        const character_div = document.querySelector('#character-1 div');

        // BEGIN
        character.classList.add('character-1-animation');
    
        character.addEventListener('animationend', function() {
            setTimeout(function() {
                character_div.classList.add('active');
            }, 200); // delay
            setTimeout(function() {
                character_img.classList.add('character-1-img-animation');
            }, 400); // delay

            character_img.addEventListener('animationend', function() {
                setTimeout(function() {
                    character_div.classList.remove('active');

                    setTimeout(function() {
                        const con2 = document.getElementById('con-2');
                        con2.style.display = 'block';

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
            character.classList.add('character-2-animation');

            character.addEventListener('animationend', function() {
                setTimeout(function() {
                    character_div.classList.add('active');
                }, 200); // delay
                setTimeout(function() {
                    character_img.classList.add('character-2-img-animation');
                }, 400); // delay

                character_img.addEventListener('animationend', function() {
                    setTimeout(function() {
                        character_div.classList.remove('active');
                    }, 400); // delay
                    setTimeout(function() {
                        skills_div_1.classList.add('skills-div-1-animation');
                        skills_title.classList.add('skills-title-animation');
                    }, 600); // delay
                    
                    skills_div_1.addEventListener('animationend', function() {

                        skills_div_2.classList.add('skills-div-2-animation');
                        
                        setTimeout(function() {
                            const con3 = document.getElementById('con-3');
                            con3.style.display = 'block';

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
            character.classList.add('character-3-animation');

            character.addEventListener('animationend', function() {
                setTimeout(function() {
                    character_div.classList.add('active');
                }, 200); // delay
                setTimeout(function() {
                    character_img.classList.add('character-3-img-animation');
                }, 400); // delay

                character_img.addEventListener('animationend', function() {
                    setTimeout(function() {
                        character_div.classList.remove('active');
                    }, 400); // delay
                    setTimeout(function() {
                        achievements_div_1.classList.add('achievements-div-1-animation');
                        achievements_title.classList.add('achievements-title-animation');
                    }, 600); // delay
                    
                    achievements_div_1.addEventListener('animationend', function() {
                        achievements_div_2.classList.add('achievements-div-2-animation');

                        setTimeout(function() {
                            const con4 = document.getElementById('con-4');
                            const con5 = document.getElementById('con-5');
                            con4.style.display = 'block';
                            con5.style.display = 'block';

                            console.log('contactHTML & footerHTML activated');
                            contactHTML();
                            footerHTML();
                        }, 1000);
                    }, { once: true });
                }, { once: true });
            }, { once: true });
        }
    });

    function slider() {
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
            contact_div_1.classList.add('contact-div-1-animation');
        }
    });
}

function footerHTML() {

}

function testing_bottom() { // CONTACT, FOOTER, DETAILS
    // VARIABLES
    const contact_div_1 = document.querySelector('.contact-div-1');
    const details_i = document.getElementById('details-i');
    const details_tr = document.querySelectorAll('#details tr');

    window.addEventListener('load', function() {
        setTimeout(function() {
            contact_div_1.classList.add('contact-div-1-animation');

            contact_div_1.addEventListener('animationend', function() {
                
                let details_active = true; // STATUS
                details_i.addEventListener('click', function() {
                    if(details_active) { // ENTRANCE
                        Array.from(details_tr).forEach(function(element, index) {
                            setTimeout(function() {
                                element.style.animation = "details-tr-entrance 1s ease both";
                            }, index * 200);
                        });
                        details = false;
                    } else { // EXIT
                        Array.from(details_tr).forEach(function(element, index) {
                            setTimeout(function() {
                                element.style.animation = "details-tr-exit 1s ease both";
                            }, index * 200);
                        });
                        details_active = true;
                    }
                });
            });
        }, 1000);
    }); 
}
testing_bottom();

function testing_skills() {
    window.addEventListener('load', function() {
        // VARIABLES
        const skills = document.querySelector('.skills');
        const skills_div_1 = document.querySelector('.skills-div-1');
        const skills_div_2 = document.querySelector('.skills-div-2');
        const skills_div_3 = document.querySelectorAll('.skills-div-3');
        const skills_title = document.querySelector('.skills-title h1');
        const character = document.querySelector('#character-2');
        const character_img = document.querySelector('#character-2 img');
        const character_div = document.querySelector('#character-2 div');

        character.classList.add('character-2-animation');

        character.addEventListener('animationend', function() {
            setTimeout(function() {
                character_div.classList.add('active');
            }, 200); // delay
            setTimeout(function() {
                character_img.classList.add('character-2-img-animation');
            }, 400); // delay
    
            character_img.addEventListener('animationend', function() {
                setTimeout(function() {
                    character_div.classList.remove('active');
                }, 400); // delay
                setTimeout(function() {
                    skills_div_1.classList.add('skills-div-1-animation');
                    skills_title.classList.add('skills-title-animation');
                }, 600); // delay
                
                skills_div_1.addEventListener('animationend', function() {
    
                    skills_div_2.classList.add('skills-div-2-animation');
                    
                    setTimeout(function() {
                        const con3 = document.getElementById('con-3');
                        con3.style.display = 'block';
    
                        console.log('achievementsHTML activated');
                        achievementsHTML(); 
                    }, 3000); // delay
                }, { once: true });
            }, { once: true });
        }, { once: true });
    });
}
//testing_skills();

function testing_achievements() {
    // VARIABLES
    const achievements = document.querySelector('.achievements');
    const achievements_div_1 = document.querySelector('.achievements-div-1');
    const achievements_div_2 = document.querySelector('.achievements-div-2');
    const achievements_title = document.querySelector('.achievements-title h1');
    const character = document.querySelector('#character-3');
    const character_img = document.querySelector('#character-3 img');
    const character_div = document.querySelector('#character-3 div');

    character.classList.add('character-3-animation');

    character.addEventListener('animationend', function() {
        setTimeout(function() {
            character_div.classList.add('active');
        }, 200); // delay
        setTimeout(function() {
            character_img.classList.add('character-3-img-animation');
        }, 400); // delay

        character_img.addEventListener('animationend', function() {
            setTimeout(function() {
                character_div.classList.remove('active');
            }, 400); // delay
            setTimeout(function() {
                achievements_div_1.classList.add('achievements-div-1-animation');
                achievements_title.classList.add('achievements-title-animation');
            }, 600); // delay
            
            achievements_div_1.addEventListener('animationend', function() {
                achievements_div_2.classList.add('achievements-div-2-animation');

                setTimeout(function() {
                    const con4 = document.getElementById('con-4');
                    const con5 = document.getElementById('con-5');
                    con4.style.display = 'block';
                    con5.style.display = 'block';

                    console.log('contactHTML & footerHTML activated');
                    contactHTML();
                    footerHTML();
                }, 1000);
            }, { once: true });
        }, { once: true });
    }, { once: true });

    function slider() {
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
//testing_achievements();
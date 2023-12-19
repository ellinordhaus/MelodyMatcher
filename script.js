document.addEventListener('DOMContentLoaded', () => {
    setupButtonListeners();
    document.addEventListener('DOMContentLoaded', () => {
        setupButtonListeners();
    });
});

function setupButtonListeners() {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            transitionPage(e.target.id);
        });
    });
}

let previousPage = 'home';

function transitionPage(buttonId) {
    let [prevCheck, prevCheck1] = buttonId.split('-');
    if (!prevCheck1) previousPage = 'home';
    else {
        previousPage = prevCheck;
    }

        const existingBackButton = document.querySelector('.back-button');
        if (existingBackButton) {
            existingBackButton.remove();
        }

        if (buttonId !== 'home') {
            const backButton = document.createElement('button');
            backButton.className = 'back-button';
            backButton.style.position = 'fixed';
            backButton.style.bottom = '2vw';
            backButton.style.left = '2vw';
            backButton.style.width = '2.5vw';
            backButton.style.height = '2.2vw';
            backButton.style.backgroundImage = 'url("images/backButton.png")';
            backButton.style.backgroundSize = 'cover';
            backButton.style.backgroundColor = 'transparent';
            backButton.style.border = 'none';
            backButton.style.cursor = 'pointer';
            document.body.appendChild(backButton);

            backButton.addEventListener('click', () => {
                const options = document.querySelectorAll('.option-button');
                resetButtons(options);
                transitionPage(previousPage);
                const rotatingImage = document.getElementById('rotating-image');
                if (rotatingImage) {
                    rotatingImage.remove();
                }
                let playButton = document.querySelector('.play-button');
                if (playButton) {
                    playButton.remove();
                }
            });
        }

    const container = document.querySelector('.container');
    container.style.opacity = '0';

    setTimeout(() => {
        const heading = document.querySelector('.heading p');
        const question = document.querySelector('.question h2');
        const options = document.querySelectorAll('.option-button');


        let [baseId, action] = buttonId.split('-');
        if (!action) action = baseId;


        switch (baseId) {
            case 'button1':
                handleButton1Actions(action, heading, question, options);
                break;
            case 'button2':
                handleButton2Actions(action, heading, question, options);
                break;
            case 'button3':
                handleButton3Actions(action, heading, question, options);
                break;
            case 'home':
                handleHome(heading, question, options);
                break;
        }


        setTimeout(() => {
            container.style.opacity = '1';
        }, 350);
    }, 350);
}

function handleHome(heading, question, options) {
            heading.textContent = "Tired of listening to pop music? Discover something new!";
            question.textContent = "What are you looking for?";
            updateButtonsContent(options, [
                {text: "I want to feel like a supervillan", id: "button1"},
                {text: "I want music that tickles my brain", id: "button2"},
                {text: "I want something I can dance to AND cry to", id: "button3"}
            ], "#96BECF");
            document.body.style.backgroundColor = "#268EBA";
            updateTextColor(heading, question, "#FFFFFF");
}

function handleButton1Actions(action, heading, question, options) {
    switch (action) {
        case 'button1':
            heading.textContent = "So, you want to feel like a supervillain?";
            question.textContent = "What crime would you commit?";
            updateButtonsContent(options, [
                {text: "Arson", id: "button1-arson"},
                {text: "Revenge", id: "button1-revenge"},
                {text: "World Domination", id: "button1-worlddomination"}
            ], "#7e3636");
            document.body.style.backgroundColor = "#131313";
            updateTextColor(heading, question, "#d88d8d");
            break;
        case 'arson':
            heading.textContent = "So, you want to commit arson?";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "Burning Pile by Mother Mother", "BurningPile.mp3", "images/b1-1shape.png", 1, "https://www.youtube.com/watch?v=JAto3oiGntY");
            document.body.style.backgroundColor = "#ff7b30";
            updateTextColor(heading, question, "#ededed");
            break;
        case 'revenge':
            heading.textContent = "So, you want revenge?";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "GASLIGHT! by Maggie Lindemann", "GASLIGHT.mp3", "images/b1-2shape.png", 2, "https://www.youtube.com/watch?v=iz2xnER6k2g");
            document.body.style.backgroundColor = "#240101";
            updateTextColor(heading, question, "#d88d8d");
            break;
        case 'worlddomination':
            heading.textContent = "So, you want to take over the world?";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "DICTATOR by REI AMI", "Dictator.mp3", "images/b1-3shape.png", 3, "https://www.youtube.com/watch?v=dhjiRQPJhgQ");
            document.body.style.backgroundColor = "#910000";
            updateTextColor(heading, question, "#d88d8d");
            break;
    }
}

function handleButton2Actions(action, heading, question, options) {
    switch (action) {
        case 'button2':
            heading.textContent = "So, you want your brain to tingle?";
            question.textContent = "What is tickling your brain?";
            updateButtonsContent(options, [
                {text: "A Fairy", id: "button2-fairy"},
                {text: "A Pixie", id: "button2-pixie"},
                {text: "???", id: "button2-question"}
            ], "#269214");
            document.body.style.backgroundColor = "#62d589";
            updateTextColor(heading, question, "#174b0e");
            break;
        case 'fairy':
            heading.textContent = "So, you want to be serenaded by a Fairy?";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "Digitally Yours by Diamond White", "DigitallyYours.mp3", "images/b2-1shape.png", 1, "https://www.youtube.com/watch?v=h6q8tLYjuR4");
            document.body.style.backgroundColor = "#ACF1E0";
            updateTextColor(heading, question, "#174b0e");
            break;
        case 'pixie':
            heading.textContent = "So, you want to be serenaded by a Pixie?";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "Get It Get It by Terror Jr", "GetItGetIt.mp3", "images/b2-2shape.png", 2, "https://www.youtube.com/watch?v=Osu1BDChcR8");
            document.body.style.backgroundColor = "#63dba9";
            updateTextColor(heading, question, "#174b0e");
            break;
        case 'question':
            heading.textContent = "Surprise, You get to be serenaded by gecs! 100 to be exact!";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "Hollywood Baby by 100 gecs", "HollywoodBaby.mp3", "images/b2-3shape.png", 3, "https://www.youtube.com/watch?v=UtfkrGRK8wA");
            document.body.style.backgroundColor = "#1FD65D";
            updateTextColor(heading, question, "#174b0e");
            break;
    }
}

function handleButton3Actions(action, heading, question, options) {
    switch (action) {
        case 'button3':
            heading.textContent = "So, you want to simultaneously dance and cry?";
            question.textContent = "How much dancing/crying?";
            updateButtonsContent(options, [
                {text: "Mostly dancing", id: "button3-dancing"},
                {text: "Mostly crying", id: "button3-crying"},
                {text: "An equal amount of each", id: "button3-dancingandcrying"}
            ], "#268eba");
            document.body.style.backgroundColor = "#62ced5";
            updateTextColor(heading, question, "#186a8e");
            break;
        case 'dancing':
            heading.textContent = "So, you want to dance and cry, but mostly dance?";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "Clarity by Zedd", "Clarity.mp3", "images/b3-1shape.png", 1, "https://www.youtube.com/watch?v=IxxstCcJlsc");
            document.body.style.backgroundColor = "#0dd3e0";
            updateTextColor(heading, question, "#186a8e");
            break;
        case 'crying':
            heading.textContent = "So, you want to dance and cry, but mostly cry?";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "Alive x Starbright by Dabin", "AliveXStarBright.mp3", "images/b3-2shape.png", 2, "https://www.youtube.com/watch?v=OPxVPIGIs5M");
            document.body.style.backgroundColor = "#4B658B";
            updateTextColor(heading, question, "#ffffff");
            break;
        case 'dancingandcrying':
            heading.textContent = "So, you want to equally dance and cry?";
            question.textContent = "The song for you is...";
            displayFinalContent(options, "Never Give Up On You by SLANDER", "NeverGiveUpOnYou.mp3", "images/b3-3shape.png", 3, "https://www.youtube.com/watch?v=Ifw3fBVjJZU");
            document.body.style.backgroundColor = "#00B2D9";
            updateTextColor(heading, question, "#186A8E");
            break;
    }
}

function updateButtonsContent(options, buttonsData, backgroundColor) {
    options.forEach((button) => {
        button.style.width = '0';
        button.style.opacity = '0';
    });

    setTimeout(() => {
        options.forEach((button, index) => {
            if (index < buttonsData.length) {
                const data = buttonsData[index];
                button.textContent = data.text;
                button.id = data.id;
                button.style.backgroundColor = backgroundColor;
                button.style.opacity = '1';


                button.style.width = 'auto';
                const newWidth = window.getComputedStyle(button).width;


                button.style.width = '0';

                button.offsetHeight;
                button.style.width = newWidth;


                setTimeout(() => {
                    button.style.width = '';
                    button.style.maxWidth = '80vw';
                }, 500);

                button.addEventListener('click', handleButtonClick);
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        });
    }, 350);
}


let rotationAngle = 0;
let rotationInterval;

function displayFinalContent(options, songTitle, audioFileName, imagePath, optionNumber, externalUrl) {
    const button = options[0];
    button.style.opacity = '0';
    button.style.width = '0';

    button.onclick = () => {
        window.open(externalUrl, '_blank');
    };

    setTimeout(() => {
        button.textContent = songTitle;
        button.id = '';
        button.style.display = 'block';


        let container = document.querySelector('.rotating-container');
        if (!container) {
            container = document.createElement('div');
            container.classList.add('rotating-container');
            container.style.position = 'fixed';
            container.style.bottom = '5vw';
            container.style.right = '3vw';
            container.style.width = '35%';
            container.style.height = '.35 * 100vw';
            document.body.appendChild(container);
        }


        let rotatingImage = document.getElementById('rotating-image');
        if (!rotatingImage) {
            rotatingImage = document.createElement('img');
            rotatingImage.id = 'rotating-image';
            rotatingImage.style.width = '100%';
            rotatingImage.style.height = '100%';
            container.appendChild(rotatingImage);
        }
        rotatingImage.src = imagePath;


        let playButton = document.querySelector('.play-button');
        if (!playButton) {
            playButton = document.createElement('button');
            playButton.classList.add('play-button');
            container.appendChild(playButton);
        }
        if (songTitle === "Hollywood Baby by 100 gecs") {
            playButton.style.backgroundImage = 'url("images/playButtonBlue.png")';
        }
        else {
        playButton.style.backgroundImage = 'url("images/playButton.png")';
        }


        let audio = document.querySelector('.audio-element');
        if (!audio) {
            audio = new Audio(`songs/${audioFileName}`);
            audio.volume = 0.5;
            audio.classList.add('audio-element');
        } else {
            audio.src = `songs/${audioFileName}`;
        }


        playButton.style.position = 'absolute';
        playButton.style.top = '50%';
        playButton.style.left = '50%';
        playButton.style.transform = 'translate(-50%, -50%)';

        let titleContainer = document.createElement('div');
        titleContainer.style.position = 'absolute';
        titleContainer.style.left = '0';
        titleContainer.style.right = '0';
        titleContainer.style.bottom = '10%';
        container.appendChild(titleContainer);


        button.style.position = 'absolute';
        switch (optionNumber) {
            case 1:
                button.style.bottom = '50%';
                break;
            case 2:
                button.style.bottom = '35%';
                break;
            case 3:
                button.style.bottom = '10%';
                break;
        }


        rotationAngle = 0;
        clearInterval(rotationInterval);
        rotatingImage.src = imagePath;
        rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;

        playButton.onclick = () => {
            if (audio.paused) {
                audio.play();
                if (songTitle === "Hollywood Baby by 100 gecs") {
                    playButton.style.backgroundImage = 'url("images/pauseButtonBlue.png")';
                }
                else {
                    playButton.style.backgroundImage = 'url("images/pauseButton.png")';
                }


                rotationInterval = setInterval(() => {
                    rotationAngle += 2;
                    rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
                }, 20);
            } else {
                audio.pause();
                if (songTitle === "Hollywood Baby by 100 gecs") {
                    playButton.style.backgroundImage = 'url("images/playButtonBlue.png")';
                }
                else {
                    playButton.style.backgroundImage = 'url("images/playButton.png")';
                }


                clearInterval(rotationInterval);
            }
        };


        for (let i = 1; i < options.length; i++) {
            options[i].style.display = 'none';
        }

        button.style.width = 'auto';
        const newWidth = window.getComputedStyle(button).width;
        button.style.width = '0';
        button.offsetHeight;
        button.style.width = newWidth;


        setTimeout(() => {
            button.style.width = '';
            button.style.maxWidth = '80vw';
        }, 500);
        button.style.opacity = '1';
    }, 350);
}


function updateTextColor(heading, question, color) {
    heading.style.color = color;
    question.style.color = color;
}

function handleButtonClick(e) {
    transitionPage(e.target.id);
}

function resetButtons(options) {
    for (let button of options) {

        button.style = '';
        button.onclick = null;


        button.style.display = 'block';
        button.style.margin = '2vw 0';
        button.style.padding = '1.5vw 2.5vw';
        button.style.border = 'none';
        button.style.borderRadius = '1vw';
        button.style.backgroundColor = '#96becf';
        button.style.color = '#ffffff';
        button.style.fontSize = '2vw';
        button.style.fontFamily = "'Poppins', sans-serif";
        button.style.cursor = 'pointer';
        button.style.transition = 'background-color 0.25s, width 0.5s, opacity 0.5s';
        button.style.outline = 'none';
        button.style.boxSizing = 'border-box';
        button.style.textAlign = 'center';
        button.style.whiteSpace = 'nowrap';
        button.style.overflow = 'hidden';
        button.style.maxWidth = '80vw';
    }


    const titleContainer = document.querySelector('.title-container');
    if (titleContainer) {
        titleContainer.remove();
    }
}



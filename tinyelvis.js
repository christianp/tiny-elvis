let action_counter = 0;

const lines = {
    'TWAV_A1.mp3': 'Say man, check out that window!',
    'TWAV_A2.mp3': 'Say, boy, check out that icon!',
    'TWAV_A3.mp3': 'Hey, man, check out that cursor!',
    'TWAV_A4.mp3': 'Man, get a load of that desktop!',
    'TWAV_A5.mp3': 'Hey, look at that caption over there!',
    'TWAV_A6.mp3': 'Whoah, man, look at that pixel!',
    'TWAV_B1.mp3': 'Man, that thing is huge!',
    'TWAV_B2.mp3': 'Whoah, that sucker\'s huge!',
    'TWAV_B3.mp3': 'Whoah, baby, that thing is huge!',
}

const alts = {
    '1': 'Tiny Elvis reclining',
    '2': 'Tiny Elvis standing with his hands on his hips',
    'R': 'Tiny Elvis getting up',
    'P': 'Tiny Elvis rocking \'n\' rolling',
    'G': 'Tiny Elvis spreading his arms wide'
}

const elvis_button = document.getElementById('elvis-button');
const elvis = document.getElementById('elvis');
const favicon = document.querySelector('link[rel="icon"]');
const speech = document.getElementById('speech');
const subtitle = document.getElementById('subtitle');

function play_anim(frames) {
    let action = action_counter;
    return new Promise((resolve) => {
        let i=1;
        function frame() {
            if(action != action_counter) {
                throw new Error('Old action');
            }
            const f = frames[i];
            elvis.src = favicon.href = `pngs/${f}.png`;
            elvis.alt = alts[f[0]];
            i += 1;
            if(i<frames.length) {
                setTimeout(frame, 1000/15);
            } else {
                resolve();
            }
        }
        frame();
    });
}

function wait(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t);
    });
}

const standup = [1,2,3,4,5,6,7,8].map(i=>`R0${i}`).concat(['2']);
const sitdown = [1,2,3,4,5,6,7,8].reverse().map(i=>`R0${i}`).concat(['1']);
const rocknroll = [1,2,3,4,5,6,7,8,7,6,5,4,3,2,1].map(i=>`P0${i}`).concat(['2']);
const armsup = [1,2,3,4,5,6,7,8].map(i=>`G0${i}`);
const armsdown = [1,2,3,4,5,6,7,8].reverse().map(i=>`G0${i}`).concat(['2']);

function say(filename) {
    const action = action_counter;
    console.log('playing',filename);
    return new Promise((resolve) => {
        speech.src = `mp3s/${filename}`;
        speech.play();
        const line = lines[filename];
        document.title = line;
        subtitle.textContent = line;

        speech.addEventListener('ended', () => {
            if(action != action_counter) {
                throw new Error('Old action');
            }
            document.title = 'Tiny Elvis';
            subtitle.textContent = ' ';
            console.log('ended',filename);
            resolve();
        }, {once: true});
    });
}

function randint(a,b) {
    return Math.floor(Math.random()*(b-a)+a);
}

async function activate() {
    clearTimeout(next_activation);
    const a = randint(1,6);
    const b = randint(1,3);
    action_counter++;
    const action = action_counter;

    function check() {
        if(action != action_counter) {
            console.log(action,action_counter);
            throw new Error('Old action');
        }
    }

    try {
        await play_anim(standup);
        check();
        await wait(100);
        check();
        await say(`TWAV_A${a}.mp3`);
        check();
        await Promise.all([play_anim(armsup), say(`TWAV_B${b}.mp3`)]);
        check();
        await play_anim(armsdown);
        check();
        await play_anim(rocknroll);
        check();
        await wait(1000);
        check();
        await play_anim(sitdown);
    } catch(e) {
        console.error(e);
    }

    next_activation = setTimeout(activate, (Math.random()*60*5 + 10)*1000);
}

let next_activation = null;

elvis_button.addEventListener('click', activate);

const progressInput = document.querySelector('.progress-input');
const progressBar = document.querySelector('.progress');
const progressAnimate = document.querySelector('.progress-animate');
const progressHidden = document.querySelector('.progress-hidden');

const progress = {
    setValue(value) {
        value = Math.max(0, Math.min(100, value));
        progressBar.style.setProperty('--progress-size', `${value}%`);
    },

    setAnimated(isAnimated) {
        progressBar.style.setProperty('--animation-flag', isAnimated ? 'running' : 'paused');
    },

    setHidden(isHidden) {
        progressBar.style.setProperty('--hidden-flag', isHidden ? 'hidden' : 'visible');
    }
};

progressInput.addEventListener('input', () => {
    progress.setValue(Number(progressInput.value));
});

progressAnimate.addEventListener('change', () => {
    progress.setAnimated(progressAnimate.checked);
});

progressHidden.addEventListener('change', () => {
    progress.setHidden(progressHidden.checked);
});

const stepper = document.querySelector(".stepper");
const stepperinput = stepper.querySelector(".stepper__input");
const stepperbtnup = stepper.querySelector(".stepper__btn--up");
const stepperbtndown = stepper.querySelector(".stepper__btn--down");
let count = stepperinput.value;
const isNotApple = () => {
    if (!/Iphone|iPad|iPod/i.test(navigator.userAgent)); {
        return false;
    }
    return true;
}
function allowNumbersOnly(e) {
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
    }
}
stepperinput.addEventListener("keyup", (e) => {
    let self = e.currentTarget;
    if (self.value == "0") {
        self.value = 1;
    }
    if (isNotApple) {
        self.style.width = `${self.value.length + 1}ex`;
    } else {
        self.style.width = `${self.value.length + 2}ex`;
    }
    count = stepperinput.value;
   
    if (count == 1) {
        stepperbtndown.classList.add("stepper__btn--disabled")
    }else if (count > 998) {
        stepperbtnup.classList.add("stepper__btn--disabled")
    } else {
        stepperbtnup.classList.remove("stepper__btn--disabled")
        stepperbtndown.classList.remove("stepper__btn--disabled")
    }
});

stepperinput.addEventListener("keyup", (e) => {
    allowNumbersOnly(e);
});

stepperinput.addEventListener("change", (e) => {
    let self = e.currentTarget;
    if (!self.value) {
        self.value = 1;
    }

    count = stepperinput.value;
    if (count == 1) {
        stepperbtndown.classList.add("stepper__btn--disabled")
    }else if (count > 998) {
        stepperbtnup.classList.add("stepper__btn--disabled")
    } else {
        stepperbtnup.classList.remove("stepper__btn--disabled")
        stepperbtndown.classList.remove("stepper__btn--disabled")
    }
});
stepperbtnup.addEventListener("click", (e) => {
    e.preventDefault();
    count++;
    if (count == 1) {
        stepperbtndown.classList.add("stepper__btn--disabled")
    }else if (count > 998) {
        stepperbtnup.classList.add("stepper__btn--disabled")
    } else {
        stepperbtnup.classList.remove("stepper__btn--disabled")
        stepperbtndown.classList.remove("stepper__btn--disabled")
    }
    stepperinput.value = count;
    if (isNotApple) {
        stepperinput.style.width = `${stepperinput.value.length + 1}ex`;
    } else {
        stepperinput.style.width = `${stepperinput.value.length + 2}ex`;
    }
})
stepperbtndown.addEventListener("click", (e) => {
    e.preventDefault();
    count--;
    if (count == 1) {
        stepperbtndown.classList.add("stepper__btn--disabled")
    }else if (count > 998) {
        stepperbtnup.classList.add("stepper__btn--disabled")
    } else {
        stepperbtnup.classList.remove("stepper__btn--disabled")
        stepperbtndown.classList.remove("stepper__btn--disabled")
    }
    stepperinput.value = count;
    if (isNotApple) {
        stepperinput.style.width = `${stepperinput.value.length + 1}ex`;
    } else {
        stepperinput.style.width = `${stepperinput.value.length + 2}ex`;
    }
})
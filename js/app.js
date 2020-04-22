// focus/blur for card form inputs
let cardInput = document.querySelectorAll('.add-card__input');
if (cardInput) {
    for (let i = 0; i < cardInput.length; i++) {
        cardInput[i].onfocus = function () {
            if (!this.classList.contains('active')) {
                this.parentNode.classList.add('active');
            }
        };
        cardInput[i].onblur = function () {
            if (this.value === '') {
                this.parentNode.classList.remove('active');
            }
        };
    }
}

// show add card form
let addCardButton = document.querySelector('.add-btn');
let addCardForm = document.querySelector('.add-card-form');
if (addCardForm) {
    let showCardForm = function (e) {
        e.preventDefault();
        if (getComputedStyle(addCardForm, null).display == 'none') {
            addCardForm.style.display = 'block';
            this.style.display = 'none';
        }
    };
    addCardButton.addEventListener('click', showCardForm);
}

// masked input
function doFormat(x, pattern, mask) {
    var strippedValue = x.replace(/[^0-9]/g, "");
    var chars = strippedValue.split('');
    var count = 0;

    var formatted = '';
    for (var i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        if (chars[count]) {
            if (/\*/.test(c)) {
                formatted += chars[count];
                count++;
            } else {
                formatted += c;
            }
        } else if (mask) {
            if (mask.split('')[i])
                formatted += mask.split('')[i];
        }
    }
    return formatted;
}

let maskFunction = function () {
    document.querySelectorAll('.masked').forEach(function (e) {
        function format(elem) {
            const val = doFormat(elem.value, elem.getAttribute('data-format'));
            elem.value = doFormat(elem.value, elem.getAttribute('data-format'));

            if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.move('character', val.length);
                range.select();
            } else if (elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(val.length, val.length);
            }
        }
        e.addEventListener('keyup', function () {
            format(e);
        });
        e.addEventListener('keydown', function () {
            format(e);
        });
        format(e)
    });
};
if (document.querySelectorAll('.masked')) {
    maskFunction();
}
// function for creation attributes
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
// share add phone
let shareAddPhoneBtn = document.querySelector('.share__add_plus');
let shareAddEmailBtn = document.querySelector('.share__add_plus__email');
let AddEmailBtn = document.querySelector('.share__add_email');
let emailHolder = document.querySelector('.share-email-holder');
if (document.querySelector('.share__add_plus')) {
    let shareAddPhone = function (selector, placeholder, inputType, inputFormat, inputClass) {
        let sharePhoneBox = document.querySelector(selector);
        let parent = document.createElement("form");
        parent.className = "share-input-box";
        parent.setAttribute('action', '#');
        sharePhoneBox.appendChild(parent);
        let child = document.createElement("input");
        child.className = inputClass;
        setAttributes(child, {"type": inputType, "placeholder": placeholder});
        let childButton = document.createElement("button");
        childButton.className = 'share__button';
        setAttributes(childButton, {"type": 'submit'});
        if (inputFormat) {
            setAttributes(child, {"data-format": "+** *** *** ***"});
        }
        parent.appendChild(child);
        parent.appendChild(childButton);
        maskFunction();
    };
    if (emailHolder) {
        let showEmailBox = function (e) {
            e.preventDefault();
            if (getComputedStyle(emailHolder, null).display == 'none') {
                emailHolder.style.display = 'block';
            }
        };
        AddEmailBtn.addEventListener('click', showEmailBox);
    }
//    shareAddPhoneBtn.addEventListener("click", function () {
//        shareAddPhone('.share-input-phone', 'Phone number', 'tel', true, "share__input masked");
//    }, false);
//    shareAddEmailBtn.addEventListener("click", function () {
//        shareAddPhone('.share-email-box', 'Email', 'email', false, "share__input");
//    }, false);
}
// video
var videoPlay = document.querySelector('.video-box__play');
if (videoPlay) {
    let playVideo = function () {
        let videoParent = this.parentElement;
        if (!videoParent.classList.contains('played')) {
            videoParent.classList.add('played');
            videoParent.children[0].setAttribute('controls', 'true');
            videoParent.children[0].play();
        }
    };
    videoPlay.addEventListener("click", playVideo);
}
// show modal
let showModalPlayersButton = document.querySelector('.add-players__btn');
let shadowBox = document.querySelector('.shadow');
if (showModalPlayersButton) {
    let playersModal = document.querySelector('.modal-players');
    let showPlayersModal = function (e) {
        e.preventDefault();
        if (!playersModal.classList.contains('in')) {
            playersModal.classList.add('in');
            shadowBox.classList.add('in');
            document.querySelector('body').style.overflow = 'hidden';
        }
    };
    showModalPlayersButton.addEventListener('click', showPlayersModal);
}
// close modal
let closeModalPlayersButton = document.querySelector('.modal__close');
if (closeModalPlayersButton) {
    let modalBox = document.querySelector('.modal');
    let closeModal = function (e) {
        e.preventDefault();
        if (modalBox.classList.contains('in')) {
            modalBox.classList.remove('in');
            shadowBox.classList.remove('in');
            document.querySelector('body').style.overflow = 'visible';
        }
    };
    closeModalPlayersButton.addEventListener('click', closeModal);
}
// add title/score
let infoButtonTitle = document.querySelector('.info__btn_title');
let infoButtonScore = document.querySelector('.info__btn_score');
if (infoButtonTitle || infoButtonScore) {
    let infoForm = function (infoParent, placeholder, currentElem) {
        let infoParentItem = document.querySelector(infoParent);
        let parent = document.createElement("form");
        parent.className = "video-info-form";
        parent.setAttribute('action', currentElem.dataset.action);
        parent.setAttribute('method', 'POST');
        infoParentItem.appendChild(parent);

        let parentFlex = document.createElement("div");
        parentFlex.className = "flex-space-b edit-row";
        parent.appendChild(parentFlex);

        let child = document.createElement("input");
        child.className = 'profile-information__name';
        setAttributes(child, {"type": 'text', placeholder: placeholder, name: 'value'});
        let childButton = document.createElement("button");
        childButton.className = 'btn-edit btn-edit_save';
        setAttributes(childButton, {"type": 'submit'});
        childButton.innerHTML = 'Save';
        parentFlex.appendChild(child);
        parentFlex.appendChild(childButton);
        currentElem.style.display = 'none';
    };

    if (infoButtonTitle) {
        infoButtonTitle.addEventListener("click", function () {
            infoForm('.video-title', 'Type your title', infoButtonTitle);
        }, false);
    }
    if (infoButtonScore) {
        infoButtonScore.addEventListener("click", function () {
            infoForm('.video-score', 'Type your score', infoButtonScore);
        }, false);
    }
}

// function for finding the closest parent with class
var getClosest = function (elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) {
                    }
                    return i > -1;
                };
    }

    // Get the closest matching element
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector))
            return elem;
    }
    return null;

};

// edit button
let formSaveButton = document.querySelectorAll('.btn-edit.edit');
if (formSaveButton) {
    for (let i = 0; i < formSaveButton.length; i++) {
        let editForm = function (e) {
            e.preventDefault();
            let thisParent = getClosest(e.target, '.edit-row');
            let input = thisParent.children[0];
            let button = this;
            if (!this.classList.contains('btn-edit__save')) {
                input.removeAttribute('readonly');
                this.innerHTML = 'save';
                this.classList.add('btn-edit__save');
            } else {
                let data = new FormData();
                data.append('value', input.value);
                request(this.href, function ($response) {
                    input.setAttribute('readonly', 'readonly');
                    button.innerHTML = 'edit';
                    button.classList.remove('btn-edit__save');
                }, data);
            }
        };
        formSaveButton[i].addEventListener("click", editForm);
    }
}
// share modal
let showModalShareButton = document.querySelector('.btn__share-video');
if (showModalShareButton) {
    let shareModal = document.querySelector('.share-up');
    let body = document.querySelector('body');
    let showShareModal = function (e) {
        e.preventDefault();
        if (!shareModal.classList.contains('in')) {
            shareModal.classList.add('in');
            let shareHeight = shareModal.clientHeight;
            shareModal.style.bottom = "calc(50% - " + shareHeight / 2 + "px";
            let shadow = document.createElement("div");
            shadow.className = "shadow";
            body.appendChild(shadow);
            body.style.overflow = 'hidden';
            document.querySelector('.shadow').classList.add('in');
        }
    };
    window.addEventListener("orientationchange", function () {
        setTimeout(function () {
            if (shareModal.classList.contains('in')) {
                ;
                let shareHeight = shareModal.clientHeight;
                shareModal.style.bottom = "calc(50% - " + shareHeight / 2 + "px";
            }
        }, 1010);
    });
    showModalShareButton.addEventListener('click', showShareModal);
}
// close share modal
let closeModalShareButton = document.querySelector('.share-up .share-up__close');
if (closeModalShareButton) {
    let modalBox = document.querySelector('.share-up');
    let closeModal = function (e) {
        e.preventDefault();
        if (modalBox.classList.contains('in')) {
            modalBox.classList.remove('in');
            modalBox.style.bottom = "-100vh";
            document.querySelector('.shadow').classList.remove('in');
            document.querySelector('body').style.overflow = 'visible';
        }
    };
    closeModalShareButton.addEventListener('click', closeModal);
}

document.addEventListener('DOMContentLoaded', () => {
    // ajax forms
    formsAjaxSubmit();

    //clone email form
    (function () {
        let cloneBtns = document.querySelectorAll('.clone_btn');

        if (cloneBtns) {
            cloneBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    let cloneObject = document.querySelector(btn.dataset.target);
                    let cloneWrapper = cloneObject.parentNode;
                    let cloned = cloneObject.cloneNode(true);
                    cloneWrapper.appendChild(cloned);
                    //formsAjaxSubmit();
                    maskFunction();
                });
            });
        }
    })();

    // profile image
    (function () {
        let inputFilePreview = document.querySelector('input.preview');
        if (inputFilePreview) {
            inputFilePreview.addEventListener('change', () => {
                let data = new FormData();
                data.append('avatar', inputFilePreview.files[0]);
                request(inputFilePreview.dataset.ajaxpath, function ($response) {
                    readURL(inputFilePreview);
                }, data);
            });
        }
    })();

    // search friends/players
    (function () {
        const searchInputs = document.querySelectorAll('.search__input');

        if (searchInputs) {
            searchInputs.forEach(input => {
                input.addEventListener('input', event => {
                    const resultWrapper = input.closest('.section-search').querySelector('.search__result');

                    if (input.value.length > 3) {
                        let loader = document.querySelector('.ajax-loader');
                        let searchBtn = document.querySelector('.search-btn');
                        let form = input.closest('form');

                        if (loader) {
                            loader.style.display = 'block';
                            searchBtn.style.display = 'none';
                        }

                        request(form.action + '?q=' + input.value, function (response) {
                            resultWrapper.innerHTML = response;

                            if (loader) {
                                loader.style.display = 'none';
                                searchBtn.style.display = 'block';
                            }
                        });
                    }
                });
            });
        }
    })();

    (function () {
        document.addEventListener('click', event => {
            // ajax links (add/remove friends & players)
            let link = event.target.closest('.ajax-link');
            if (link) {
                event.preventDefault();
                request(link.href, function (response) {
                    if (response.action == 'removed') {
                        link.children[0].innerText = '+';

                        if (link.closest(link.dataset.target)) {
                            link.parentNode.remove();
                        }

                    } else if (response.action == 'added') {
                        if (link.dataset.target == 'div#players-wrapper') {
                            link.classList.add('active');
                            link.children[0].innerText = 'Ѵ';
                        } else {
                            link.children[0].innerText = 'X';
                        }
                    }

                    document.querySelector(link.dataset.target).innerHTML = response.view;
                });
            }

            // load more
            if (event.target.classList.contains('btn-more')) {
                event.preventDefault();
                const COUNT = 6; // must = App\Entity\User::PER_PAGE
                let loadMore = event.target;
                let moreWrapper = loadMore.parentNode.querySelector('.more-wrapper');
                let offset = loadMore.dataset.offset;
                let count = loadMore.dataset.count;
                request(loadMore.dataset.href + '?offset=' + offset, function (response) {
                    if (count <= COUNT) {
                        loadMore.remove();
                    }
                    moreWrapper.insertAdjacentHTML('beforeEnd', response.view);
                    loadMore.dataset.offset = ++offset;
                    loadMore.dataset.count = count - COUNT;
                });
            }
        });
    })();

});

/* ==========================================================================
 XMLHTTPREQUEST
 ========================================================================== */
function request(url, callback, data = null) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(data);
    xhr.onload = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = () => {
        console.error(xhr.statusText);
    };
}

/* ==========================================================================
 preview profile photo
 ========================================================================== */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            let previewWrapper = document.getElementById('preview-image-file');
            previewWrapper.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

/* ==========================================================================
 ajax submit form
 ========================================================================== */
function ajaxSubmit(form) {
    event.preventDefault();

    let data = new FormData(form);

    request(form.action, function (response) {
        //form.reset();
        console.log(response);
    }, data);
}

function formsAjaxSubmit() {
    let forms = document.querySelectorAll('form[data-ajax]');

    if (forms) {
        forms.forEach(form => {
            form.addEventListener('submit', event => {
                ajaxSubmit(form);
            });
        });
    }
}

window.ajaxSubmitForm = function (form) {
    ajaxSubmit(form);
}

// hide alert
let alertCloseButton = document.querySelector('.messages-inner .share-up__close');
let alertBox = document.querySelector('.messages-inner');
if (alertBox) {
    let alertShadow = document.querySelector('.messages .shadow');
    let hideAlert = function (e) {
        e.preventDefault();
        if (getComputedStyle(alertBox, null).display == 'block') {
            alertBox.parentNode.removeChild(alertBox);
            alertShadow.parentNode.removeChild(alertShadow);
        }
    };
    alertCloseButton.addEventListener('click', hideAlert);
}

// native slide up/down/toggle functions
let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
};

let slideDown = (target, duration=500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};
var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
};



// btn-more page video-catalog
let btnMore = document.querySelectorAll('.btn-more-video');
let videoHidden = document.querySelectorAll('.video-hidden');

for(let i=0;i<btnMore.length;i++) {
    btnMore[i].addEventListener("click", function (e) {
        e.preventDefault();
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            if (this.parentNode.parentNode.classList.contains('catalog-thumbnails')) {
                this.parentNode.classList.remove("content-box-mini");
            }
            this.innerHTML = 'Less info';
            slideDown(videoHidden[i], 500);
        }
        else {
            this.classList.remove('active');
            this.innerHTML = 'More info';
            if (this.parentNode.parentNode.classList.contains('catalog-thumbnails')) {
                this.parentNode.classList.add("content-box-mini");
            }
            slideUp(videoHidden[i], 500);
        }

    });
}

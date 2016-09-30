module.exports = {
    formValidation: function () {
        const formWithValidation = document.querySelectorAll('[data-form-with-validation]');

        if (formWithValidation.length) {
            formWithValidation.on('click', function () {
                let $this = $(this);
                let elementsForValidate = $this.querySelectorAll('[data-element-for-validate]');
                // console.log(elementsForValidate);
            });
        } else {
            console.log('no form with validation!');
        }

    }
};
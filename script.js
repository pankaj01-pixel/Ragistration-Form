const form = document.getElementById('registrationForm');
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const successMessage = document.getElementById('successMessage');

        form.addEventListener('submit', function (e) {
            e.preventDefault();

           
            nameError.classList.add('hidden');
            emailError.classList.add('hidden');
            passwordError.classList.add('hidden');
            successMessage.classList.add('hidden');

            let isValid = true;

         
            const namePattern = /^[A-Za-z\s]+$/;
            if (!nameInput.value.trim() || !namePattern.test(nameInput.value)) {
                nameError.classList.remove('hidden');
                isValid = false;
            }

          
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(emailInput.value)) {
                emailError.classList.remove('hidden');
                isValid = false;
            }

        
            if (passwordInput.value.length < 6) {
                passwordError.classList.remove('hidden');
                isValid = false;
            }

            if (isValid) {
                successMessage.classList.remove('hidden');
                form.reset();
            }
        });
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerHTML == '=') {
            try { string = eval(string) }
            catch { string = "Error"; }
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'B') {  // Handling backspace as 'B'
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});


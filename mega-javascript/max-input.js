let max_input = document.getElementById('max-input');
let for_change = document.getElementById('for-change');


function myfunction()
{
    const entered_value=max_input.value;
    const remaining_char=60-entered_value.length;
    for_change.textContent=remaining_char;
};

max_input.addEventListener('input',myfunction())

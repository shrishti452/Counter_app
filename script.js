let count = 0;

let countText = document.getElementById("count");

let increaseBtn = document.getElementById("increase");

let decreaseBtn = document.getElementById("decrease");

let resetBtn = document.getElementById("reset");

let themeBtn = document.getElementById("theme");

function updateCount()
{
    countText.innerText = count;

    if(count > 0)
    {
        countText.style.color = "green";
    }

    else if(count < 0)
    {
        countText.style.color = "red";
    }

    else
    {
        countText.style.color = "black";
    }
}

increaseBtn.addEventListener("click", function()
{
    count++;

    updateCount();
});

decreaseBtn.addEventListener("click", function()
{
        count--;

        updateCount();
    
});

resetBtn.addEventListener("click", function()
{
    count = 0;

    updateCount();
});

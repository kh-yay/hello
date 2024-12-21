const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item,idx)=>{
    item.addEventListener('click',function(){
        let click=0
        ratingValue.value=idx+1
        console.log(ratingValue.value)
        allStar.forEach(i=>{
           
            i.classList.replace('bxs-star','bx-star')
            i.classList.remove('active')
        })
        for(let i=0; i<allStar.length;i++){
            if(i<=idx){
                allStar[i].classList.replace('bx-star','bxs-star')
                allStar[i].classList.add('active')
            }else{
                allStar[i]=i.style.setProperty('--i',click)
                click++
            }
        }
   })
})

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
   
    const rating = document.querySelector('input[name="rating"]').value;
    const opinion = document.querySelector('textarea[name="opinion"]').value;

    // Perform AJAX to send data to the server
    fetch('submit.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user_id: 123, // Replace with the logged-in user's ID
            username: 'example_user', // Replace with the logged-in user's name
            rating,
            opinion,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Your feedback has been submitted!');
                // Redirect to the forum page
                window.location.href = 'forum.html'; // Change to the actual URL of your forum page
            } else {
                alert('There was an error submitting your feedback. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An unexpected error occurred. Please try again.');
        });
});
// Function to add images from the url that the user inputs
function AddImage(){
    // Store url as a variable
    const imageUrl = document.getElementById('url-input').value;

    if (imageUrl){
        const gallery = document.getElementById('image-gallery');

        // Make div for the gallery item
        let galleryItem = document.createElement('div');

        // Add CSS class to the gallery item element
        galleryItem.classList.add('gallery-item');

        // Make image element and assign the url to the image's src
        let newImage = document.createElement('img');
        newImage.src = imageUrl;

        // Make a remove button and add text and a css class to it
        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove-button');

        // Access onclick property of the remove button and add an arrow function that removes the element with the image
        removeButton.onclick = () => gallery.removeChild(galleryItem);

        // Append image and remove button to gallery item, then append gallery item to gallery
        galleryItem.appendChild(newImage);
        galleryItem.appendChild(removeButton);
        gallery.appendChild(galleryItem);

        // Assign empty string to the image input element
        document.getElementById('url-input').value = "";
    } else {
        console.log("Enter a valid url");
        alert("Enter a valid url");
    }
}

// Add event listener to the add image button
document.getElementById('add-image-button').addEventListener('click', AddImage);
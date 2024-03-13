

// Function to fetch images from the Picsum Photos API
async function displayImages() {
    // Fetch Data
    const response = await fetch('https://thesumitshrestha.github.io/image-api.json');
    const data = await response.json();
    const imageContainer = document.getElementById('image-container');

    // Display 24 images
    for (let i = 0; i < 24; i++) {
        const imageUrl = data[i].url;

        // Create elements
        const colDiv = document.createElement('div');
        colDiv.classList.add('col');

        const imageBoxDiv = document.createElement('div');
        imageBoxDiv.classList.add('image-box');

        const inputCheckbox = document.createElement('input');
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.classList.add('image-checkbox');
        inputCheckbox.id = `image${i + 1}`;

        const label = document.createElement('label');
        label.setAttribute('for', `image${i + 1}`);
        label.style.backgroundImage = `url('${imageUrl}')`;

        // Append elements
        imageBoxDiv.appendChild(inputCheckbox);
        imageBoxDiv.appendChild(label);
        colDiv.appendChild(imageBoxDiv);
        imageContainer.appendChild(colDiv);
    }
}

displayImages();
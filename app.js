// JSON data for images
const galleryData = [
    {
        "title": "Sunset",
        "imageUrl": "https://via.placeholder.com/300x200?text=Sunset",
        "description": "Beautiful sunset over the mountains."
    },
    {
        "title": "Forest",
        "imageUrl": "https://via.placeholder.com/300x200?text=Forest",
        "description": "Lush green forest with sunlight filtering through."
    },
    {
        "title": "Ocean",
        "imageUrl": "https://via.placeholder.com/300x200?text=Ocean",
        "description": "Vast blue ocean with calm waves."
    },
    {
        "title": "Cityscape",
        "imageUrl": "https://via.placeholder.com/300x200?text=Cityscape",
        "description": "A vibrant city skyline at night."
    },
    {
        "title": "Mountains",
        "imageUrl": "https://via.placeholder.com/300x200?text=Mountains",
        "description": "Snow-covered mountains under a clear blue sky."
    }
];

// Function to load gallery from JSON
function loadGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear existing items

    galleryData.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('col-lg-4', 'col-md-6', 'mb-4', 'gallery-item');
        galleryItem.setAttribute('data-bs-toggle', 'modal');
        galleryItem.setAttribute('data-bs-target', '#imageModal');
        galleryItem.setAttribute('data-index', index);

        galleryItem.innerHTML = `
            <div class="card h-100 shadow-sm">
                <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        `;

        gallery.appendChild(galleryItem);
    });

    // Add event listeners to open modal with correct data
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        item.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            openModal(index);
        });
    });
}

// Function to open modal and load image details
function openModal(index) {
    const selectedItem = galleryData[index];
    document.getElementById('imageModalLabel').textContent = selectedItem.title;
    document.getElementById('modalImage').src = selectedItem.imageUrl;
    document.getElementById('imageDescription').textContent = selectedItem.description;
}

// Load gallery on page load
document.addEventListener('DOMContentLoaded', loadGallery);

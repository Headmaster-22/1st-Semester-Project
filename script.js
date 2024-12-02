// 1. Visitor Count Logic - Increment on each visit (stored in localStorage)
if (!localStorage.getItem('visitorCount')) {
    localStorage.setItem('visitorCount', 1); 
} else {
    localStorage.setItem('visitorCount', parseInt(localStorage.getItem('visitorCount')) + 1);
}

let visitorCount = localStorage.getItem('visitorCount');
document.querySelector('.visitor-count p').textContent = `Visitor Count: ${visitorCount}`;

// 2. Dynamic Ticker - Date, Time, and Location
setInterval(() => {
    const date = new Date();
    const location = "AutoCity";
    const time = date.toLocaleTimeString();
    const currentDate = date.toLocaleDateString();
    document.getElementById('ticker').textContent = `Date: ${currentDate} | Time: ${time} | Location: ${location}`;
}, 1000);

// 4. Show Car Details - Pop-up with car details when a car card is clicked
function showCarDetails(carId) {
    const carDetails = {
        // New Cars
        'new-car-1': {
            name: "Tesla Model 3",
            price: "$39,990",
            internalSpecs: "5 seats, 15 cu ft trunk, 15-inch touchscreen",
            externalSpecs: "Sporty design, aerodynamic body",
            engine: "Electric engine, 283 hp",
            dimensions: "L: 4,694mm, W: 1,849mm, H: 1,443mm"
        },
        'new-car-2': {
            name: "Ford Mustang Mach-E",
            price: "$49,995",
            internalSpecs: "5 seats, 10.1-inch touchscreen, leather seats",
            externalSpecs: "Sleek design, muscular build",
            engine: "Electric engine, 346 hp",
            dimensions: "L: 4,710mm, W: 1,925mm, H: 1,630mm"
        },
        'new-car-3': {
            name: "BMW i4",
            price: "$56,400",
            internalSpecs: "5 seats, 12.3-inch display, leather upholstery",
            externalSpecs: "Sporty sedan, aerodynamic design",
            engine: "Electric engine, 335 hp",
            dimensions: "L: 4,783mm, W: 1,925mm, H: 1,448mm"
        },
        'new-car-4': {
            name: "Audi Q4 e-tron",
            price: "$52,400",
            internalSpecs: "5 seats, 10.1-inch touchscreen, virtual cockpit",
            externalSpecs: "Modern SUV design, dynamic lines",
            engine: "Electric engine, 295 hp",
            dimensions: "L: 4,590mm, W: 1,865mm, H: 1,630mm"
        },

        // Used Cars
        'used-car-1': {
            name: "Used Toyota Camry",
            price: "$20,000",
            internalSpecs: "5 seats, leather upholstery, touchscreen display",
            externalSpecs: "Sedan design, chrome grille",
            engine: "2.5L I4, 203 hp",
            dimensions: "L: 4,850mm, W: 1,840mm, H: 1,445mm"
        },
        'used-car-2': {
            name: "Used Honda Accord",
            price: "$18,500",
            internalSpecs: "5 seats, cloth upholstery, Apple CarPlay",
            externalSpecs: "Sedan design, sleek body",
            engine: "1.5L turbocharged I4, 192 hp",
            dimensions: "L: 4,865mm, W: 1,850mm, H: 1,450mm"
        },
        'used-car-3': {
            name: "Used Nissan Altima",
            price: "$16,000",
            internalSpecs: "5 seats, 8-inch touchscreen, push-to-start",
            externalSpecs: "Sedan design, compact",
            engine: "2.5L I4, 182 hp",
            dimensions: "L: 4,849mm, W: 1,834mm, H: 1,475mm"
        },
        'used-car-4': {
            name: "Used Chevrolet Malibu",
            price: "$14,500",
            internalSpecs: "5 seats, Bluetooth, remote start",
            externalSpecs: "Sedan design, stylish grille",
            engine: "1.5L turbocharged I4, 160 hp",
            dimensions: "L: 4,929mm, W: 1,857mm, H: 1,453mm"
        }
    };

    const car = carDetails[carId];

    if (car) {
        const carDetailHTML = `
            <div class="car-detail-popup">
                <h3>${car.name}</h3>
                <p>Price: ${car.price}</p>
                <div>
                    <h4>Internal Specifications</h4>
                    <p>${car.internalSpecs}</p>
                </div>
                <div>
                    <h4>External Specifications</h4>
                    <p>${car.externalSpecs}</p>
                </div>
                <div>
                    <h4>Engine</h4>
                    <p>${car.engine}</p>
                </div>
                <div>
                    <h4>Dimensions</h4>
                    <p>${car.dimensions}</p>
                </div>
                <button class="close-popup" onclick="closePopup()">Close</button>
            </div>
        `;
        const popupContainer = document.createElement('div');
        popupContainer.classList.add('popup-overlay');
        popupContainer.innerHTML = carDetailHTML;
        document.body.appendChild(popupContainer);
    }
}

// Close the car details popup
function closePopup() {
    const popup = document.querySelector('.popup-overlay');
    if (popup) {
        popup.remove();
    }
}
// Example car data categorized by brand
const brandCars = {
    'Tesla': [
        {
            name: "Tesla Model 3",
            price: "$39,990",
            image: "tesla.jpg"
        },
        {
            name: "Tesla Model S",
            price: "$89,990",
            image: "tesla-model-s.jpg"
        }
    ],
    'Ford': [
        {
            name: "Ford Mustang Mach-E",
            price: "$49,995",
            image: "ford-mach-e.jpg"
        },
        {
            name: "Ford F-150 Lightning",
            price: "$52,974",
            image: "ford-f150-lightning.jpg"
        }
    ],
    'BMW': [
        {
            name: "BMW i4",
            price: "$56,400",
            image: "bmw-i4.jpg"
        },
        {
            name: "BMW iX",
            price: "$84,100",
            image: "bmw-ix.jpg"
        }
    ],
    'Audi': [
        {
            name: "Audi Q4 e-tron",
            price: "$52,400",
            image: "audi-q4.jpg"
        },
        {
            name: "Audi e-tron GT",
            price: "$99,900",
            image: "audi-etrongt.jpg"
        }
    ],
    'Toyota': [
        {
            name: "Toyota Camry",
            price: "$20,000",
            image: "toyota-camry.jpg"
        },
        {
            name: "Toyota Prius",
            price: "$24,000",
            image: "toyota-prius.jpg"
        }
    ],
    'Honda': [
        {
            name: "Honda Accord",
            price: "$18,500",
            image: "honda-accord.jpg"
        },
        {
            name: "Honda Civic",
            price: "$16,000",
            image: "honda-civic.jpg"
        }
    ]
};

// Function to display cars by selected brand
function showCarsByBrand(brand) {
    document.getElementById('car-brands').style.display = 'none';  // Hide brands section
    document.getElementById('cars-by-brand').style.display = 'block';  // Show cars by brand section
    document.getElementById('brand-name').textContent = brand;  // Update the title with brand name
    const brandCarsList = document.getElementById('brand-cars-list');
    brandCarsList.innerHTML = '';  // Clear previous content

    // Create car cards for the selected brand
    brandCars[brand].forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>${car.price}</p>
        `;
        brandCarsList.appendChild(carCard);
    });
}

// Function to go back to the brand selection page
function goBackToBrands() {
    document.getElementById('car-brands').style.display = 'block';  // Show brands section
    document.getElementById('cars-by-brand').style.display = 'none';  // Hide cars by brand section
}

// Function to filter gallery items based on selected car type
function filterGallery() {
    const filterValue = document.getElementById('car-type-filter').value.toLowerCase(); // Get selected value
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const itemType = item.getAttribute('data-type').toLowerCase();
        
        if (filterValue === "" || itemType === filterValue) {
            item.style.display = "block"; // Show the item if it matches the filter
        } else {
            item.style.display = "none"; // Hide the item if it doesn't match
        }
    });
}

// Open the gallery image in a popup
function openGalleryPopup(imageSrc) {
    document.getElementById('gallery-popup').style.display = 'flex';  // Show the popup
    document.getElementById('gallery-image').src = imageSrc;  // Set the image source
}

// Close the gallery popup
function closeGalleryPopup() {
    document.getElementById('gallery-popup').style.display = 'none';  // Hide the popup
}

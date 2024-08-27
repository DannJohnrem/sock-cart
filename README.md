# Socks Cart

Socks Cart is a simple e-commerce product page built with the fundamentals of Vue.js (via CDN). The project demonstrates a product page for socks, with features including a color variant selection, an "Add to Cart" functionality, and a review submission form. The application emphasizes Vue.js basics and serves as a starting point for learning and building more complex applications.

## Features

- **Product Display**: Shows the details of the product (Vue Mastery Socks), including description, availability, and shipping information.
- **Color Variants**: Users can choose between different color options for the socks.
- **Add to Cart**: A button that adds the selected product to the cart. If the product is out of stock, the "Add to Cart" button is disabled.
- **Review Form**: A form that allows users to submit their reviews, including their name, review text, and rating.

## Project Structure

- **HTML**: Structure of the application.
- **CSS**: Basic styling for the application, ensuring a clean and user-friendly interface.
- **JavaScript**: Includes Vue.js for reactivity and managing the state of the application.

## Usage

### 1. Review Form

- **Navigating to the Form**: Access the review form by clicking on the "Leave a review" button or link.
- **Visual Component**: The review form is designed purely as a visual element. It does not handle actual data submission. This component simulates the process of submitting a review for demonstration and layout purposes only.

### 2. Product Page

- **Color Selection**: Select a color variant by clicking on the color circles. The product image updates to reflect the chosen color.
- **Add to Cart**: Click the "Add to Cart" button to add the selected product to your cart. If the product is out of stock, the button will be disabled and show an "Out of Stock" message.

### 3. Review Submission

- **Filling Out the Form**: Enter your name, review text, and select a rating from the dropdown.
- **Submitting the Review**: Click the "Submit" button to send your review. The form is for demonstration purposes and does not store or display submitted reviews.

## How to Run

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/DannJohnrem/socks-cart.git
    ```

2. **Open the `index.html` file** in your preferred browser.

## Technologies Used

- **Vue.js (via CDN)**: Used for reactivity and managing application state.
- **HTML/CSS**: Basic web technologies for structuring and styling the page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

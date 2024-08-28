const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 2,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 716, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 717, color: 'blue' , image: './assets/images/socks_blue.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
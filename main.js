const app = Vue.createApp({
    data() {
        return {
            brand: 'Nikey',
            product: 'Socks',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 716, color: 'green', image: './assets/images/socks_green.jpg', quantity: 11 },
                { id: 717, color: 'blue' , image: './assets/images/socks_blue.jpg', quantity: 0 }
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
        updateVariant(index) {
            this.selectedVariant = index
            // console.log(index);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product + this.onSale
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.'
            }

            return ''
        }

    }
})
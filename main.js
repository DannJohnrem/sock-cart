const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 9,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 716, color: 'green' },
                { id: 717, color: 'blue' }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
        }
    }
})
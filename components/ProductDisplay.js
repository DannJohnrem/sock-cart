app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<main class="product-display">
        <section class="product-container">
            <figure class="product-image">
                <img :src="image" alt="sock image" :class="{'out-of-stock-img': !inStock}">
            </figure>

            <article class="product-details">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of stock</p>
                <p>Shipping fee: {{shipping}} </p>
                <p v-show="onSale">On Sale</p>

                <product-details :details="details"></product-details>

                <div v-for="(variant, index) in variants" v-bind:key="variant.id"
                    @mouseover="updateVariant(index)" class="color-circle"
                    :style="{backgroundColor: variant.color}"></div>

                <div class="btn-container">
                    <button class="button" v-on:click="addToCart"
                    :class="{disabledButton: !inStock}" :disabled="!inStock">Add to cart</button>
                    <button class="button" @click="removeFromCart">Remove to cart</button>
                </div>

                <!-- <ul>
                    <li v-for="(size, index) in sizes" :key="index"> {{ size }}</li>
                </ul> -->
            </article>
        </section>
    </main>`,
    data() {
        return {
            brand: 'Nikey',
            product: 'Socks',
            selectedVariant: 0,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 716, color: 'green', image: './assets/images/socks_green.png', quantity: 11 },
                { id: 717, color: 'blue' , image: './assets/images/socks_blue.png', quantity: 0 }
            ],
            sizes: ['S', 'M', 'L', 'XL'],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1;
            }
        },
        updateVariant(index) {
            this.selectedVariant = index;
            // console.log(index);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' is on sale.';
            }
            return '';
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            }

            return 30;
        }
    }
})


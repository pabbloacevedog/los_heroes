<template>
    <div class="header">
        <div class="order_filter">
            <label for="id_select" class="label-select">
                Filtrar mayor a ...
            </label>
            <select id="id_select">
                <option v-for="option in filters" :key="option" :value="option">
                    {{ option }}
                </option>
            </select>
        </div>
        <div class="filters_area">
            <div class="label_order">Ordenar por:</div>
            <div class="order_name">
                <button @click="order_name">
                    Nombre {{ icon_order_name }}
                </button>
            </div>
            <div class="order_value">
                <button @click="order_value">
                    Valor {{ icon_order_value }}
                </button>
            </div>
        </div>
        <div class="add_area">
            <button @click="changeModalState" :disabled="add_disable">
                Nuevo contador
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            filtrar: false,
            name_asc: true,
            value_asc: false,
            icon_order_name: "",
            arraw_up: "↑",
            arraw_down: "↓",
            icon_order_value: "",
            filters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            buscador: "",
            add_disable: false,
        };
    },
    computed: {
        numberCounters() {
            return this.$store.state.counter.number_counters;
        },
        list() {
            return this.$store.state.counter.list;
        },
    },
    methods: {
        changeModalState() {
            console.log(this.$store);
            this.$store.commit("toggleModal");
        },
        order_name() {
            if (this.name_asc) {
                this.$store.commit("counter/orderNameDesc");
                this.name_asc = false;
                this.value_asc = false;
                this.icon_order_name = this.arraw_down;
                this.icon_order_value = "";
            } else {
                this.$store.commit("counter/orderNameAsc");
                this.name_asc = true;
                this.value_asc = false;
                this.icon_order_name = this.arraw_up;
                this.icon_order_value = "";
            }
        },
        start() {
            this.$store.commit("counter/orderNameAsc");
            this.icon_order_name = this.arraw_down;
        },
        order_value() {
            if (this.value_asc) {
                this.$store.commit("counter/orderValueDesc");
                this.name_asc = false;
                this.value_asc = false;
                this.icon_order_name = "";
                this.icon_order_value = this.arraw_down;
            } else {
                this.$store.commit("counter/orderValueAsc");
                this.value_asc = true;
                this.name_asc = false;
                this.icon_order_name = "";
                this.icon_order_value = this.arraw_up;
            }
        },

    },
    created() {
        this.start();
    },
    watch: {
        numberCounters: function () {
            if (this.numberCounters >= 20) {
                this.add_disable = true;
            } else {
                this.add_disable = false;
            }
        },
    },
};
</script>
<style>
.label_order {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
}
.header {
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #45289f;
}

.filters_area {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
.add_area {
    flex-grow: 1;
    text-align: right;
    padding-right: 8%;
}
.buscador {
    background-color: white;
}
.order_name {
    flex-grow: 1;
    align-self: center;
}
.order_value {
    flex-grow: 1;
    align-self: center;
}
.order_filter {
     flex-grow: 4;
    text-align: start !important;
    padding-left: 8%;
}
@keyframes gradient {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 0;
    }
}
input {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    border-radius: 15px;
    border: none;
    vertical-align: middle;
    padding: 0 20px;
}
button {
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    background: #017997;
    color: #fff;
    border-radius: 15px;
    border: none;
    vertical-align: middle;
    padding: 0px 20px;
    cursor: pointer;
}
button:hover {
    background: #069ec4;
}
select {
    color: #fff;
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    border-radius: 15px;
    border: none;
    vertical-align: middle;
    padding-left: 20px;
    min-height: 26px;
}
.label-select {
    color: #fff;
    flex-grow: 1;
    font-size: 1rem;
    line-height: 1.8rem;
    border-radius: 15px;
    border: none;
    vertical-align: middle;
}
</style>


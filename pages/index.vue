<template>
    <div class="content-all">
        <AddCount v-show="showModal" @close-modal="showModal = false" />
        <div v-if="list.length > 0">
            <div class="search_area">
                <div class="webflow-style-input">
                    <input
                        type="text"
                        placeholder="buscar..."
                        name="buscador"
                        class="buscador"
                        v-model="buscador"
                        @input="search"
                    />
                </div>
            </div>

            <div
                v-for="(item, index) in items"
                :key="index"
                style="padding-bottom: 20px"
            >
                <Count :item="item" :index="index" />
            </div>
        </div>
        <div v-else class="name" style="padding-top: 8%; text-align: center">
            Cree un nuevo contador en el botón superior derecho
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddCount from "~/components/AddCount.vue";
import Count from "~/components/Count.vue";

export default {
    name: "Home",
    components: {
        AddCount,
        Count,
    },
    data() {
        return {
            datos: {},
            items: [],
            buscador: "",
            viewDetail: false,
        };
    },
    computed: {
        showModal() {
            return this.$store.state.showModal;
        },
        list() {
            return this.$store.state.counter.list;
        },
        number_filter() {
            return this.$store.state.filter.number_filter;
        },
    },
    methods: {
        start() {
            var items = this.$store.state.counter.list;
            if (items) {
                this.items = items;
            }
        },
        search() {
            var items = this.list;
            this.items = items.filter(
                (item) =>
                    item.name
                        .toLowerCase()
                        .indexOf(this.buscador.toLowerCase()) > -1
            );
        },
        clean_filters() {
            this.$store.commit("filter/cleanFilters");
            this.start();
        },
    },
    created() {
        this.start();
    },
    mounted() {},
    updated() {},
    watch: {
        "$store.state.counter.list": function () {
            var items = this.$store.state.counter.list;
            if (items) {
                this.items = items;
            }
        },
        "$store.state.filter.filterSmaller": function () {
            if (this.$store.state.filter.filterSmaller) {
                var items = this.list;
                this.items = items.filter(
                    (e) => Number(e.value) <= Number(this.number_filter)
                );
            } else {
                this.clean_filters();
            }
        },
        "$store.state.filter.filterHigher": function () {
            if (this.$store.state.filter.filterHigher) {
                var items = this.list;
                this.items = items.filter(
                    (e) => Number(e.value) >= Number(this.number_filter)
                );
            } else {
                this.clean_filters();
            }
        },
    },
};
</script>
<style lang="css" >
@media (max-width: 600px) {
    .grid-container {
        display: grid;
        min-height: 100vh;
        grid-template-rows: 20vh auto 8vh;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    .header {
        grid-area: header;
        background-color: #520189;
        display: flex;
        flex-direction: column;
    }
    .content-all {
        padding: 0px 2% !important;
    }
    .order_filter {
        flex-grow: 1;
        padding-left: 0%;
    }
    .add_area {
        flex-grow: 1;
        text-align: right;
        padding-right: 0%;
    }
    .filters_area {
        flex-grow: 10;
        display: flex;
        width: -webkit-fill-available;
        padding: 0 4%;
    }
}
@media (min-width: 600px) and (max-width: 900px) {
    .grid-container {
        display: grid;
        min-height: 100vh;
        grid-template-rows: 21vh auto 8vh;
        grid-template-areas:
            "header"
            "main"
            "footer";
    }
    .header {
        grid-area: header;
        background-color: #520189;
        display: flex;
        flex-direction: row;
    }
    .content-all {
        padding: 0px 2% !important;
    }
    .order_filter {
        padding-left: 0%;
    }
    .add_area {
        flex-grow: 1;
        text-align: right;
        padding-right: 0%;
    }
}
.search_area {
    padding: 1% 0;
}
.content-all {
    padding: 0px 8%;
}
</style>
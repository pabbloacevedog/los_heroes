

<template>
    <transition name="bounce">
        <div class="modal-overlay">
            <div class="add_content modal">
                <div class="add_title">
                    <input type="text" placeholder="Nombre contador" id="name_new" class="name_new" autofocus
                        v-model="obj.name" @focus="clean_name" maxlength="20" />
                </div>
                <div class="add_count">
                    <div class="count">
                        <div style="padding-right: 5%">
                            <h2 class="name">Valor</h2>
                        </div>
                        <div style="align-self: center">
                            <input type="number" id="input_counter" class="input_counter" min="1" max="20" maxlength="2"
                                v-model="obj.value" @keypress="solo_numeros" @focus="clean_counter" />
                        </div>
                    </div>
                </div>
                <div class="add_action">
                    <div class="cancelar">
                        <button class="btn_cancelar" @click="changeModalState">
                            cancelar
                        </button>
                    </div>
                    <div class="add_new">
                        <button @click="addCount">agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            obj: {
                name: "",
                value: 0,
            },
            rotate: {
                rotate: 360,
                backgroundColor: ['#2f495e', '#00c58e'],
                duration: 3000,
                loop: true
            },
            translate: {
                translateY: 250,
                duration: 3300
            }
        };
    },
    methods: {
        changeModalState() {
            console.log(this.$store);
            this.$store.commit("toggleModal");
        },
        addCount() {
            if (this.obj.name != "") {
                if (Number(this.obj.value) <= 20) {
                    var items = JSON.parse(localStorage.getItem("list"));
                    if (items) {
                        const found = items.find(
                            (element) => element.name === this.obj.name
                        );
                        if (!found) {
                            this.$store
                                .dispatch("counter/saveCount", this.obj)
                                .then((res) => {
                                    this.obj.value = 0;
                                    this.obj.name = "";
                                    this.changeModalState();
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        } else {
                            this.error_input();
                        }
                    } else {
                        this.$store
                            .dispatch("counter/saveCount", this.obj)
                            .then((res) => {
                                this.obj.value = 0;
                                this.obj.name = "";
                                this.changeModalState();
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    }
                } else {
                    this.error_counter();
                }
            } else {
                this.error_input();
            }
        },
        clean_name() {
            var element = document.getElementById("name_new");
            element.classList.remove("input_error");
        },
        clean_counter() {
            var element = document.getElementById("input_counter");
            element.classList.remove("counter_error");
        },
        error_input() {
            var element = document.getElementById("name_new");
            element.classList.add("input_error");
        },
        error_counter() {
            var element = document.getElementById("input_counter");
            element.classList.add("counter_error");
        },
        solo_numeros(e) {
            var key = e.keyCode || e.which;
            var tecla = String.fromCharCode(key).toLowerCase();
            var letras = "1234567890";
            var especiales = "8-16-20-80-186";
            var valor = especiales.split("-");
            var tecla_especial = false;

            for (var j in valor) {
                if (key == valor[j]) {
                    tecla_especial = true;
                    break;
                }
            }

            var charStr = String.fromCharCode(key);

            if (letras.indexOf(charStr) == -1 && !tecla_especial) {
                e.preventDefault();
                e.stopPropagation();
            }
        },
    },
    watch: {
        "obj.value": function () {
            if (Number(this.obj.value.length) > 2) {
                this.obj.value = this.obj.value.slice(0, 2);
            }
        },
    },
};
</script>
<style>
.input_error {
    outline: none !important;
    border: 2px solid red;
}

.add_content {
    border-radius: 15px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background-color: #20bf55;
    background-image: linear-gradient(315deg, #00c642 0%, #10a985 baef 74%);
}

.input_counter {
    width: 40px;
    text-align: center;
}

.counter_error {
    outline: none !important;
    border: 2px solid red;
}

.add_title {
    flex-grow: 1;
    text-align: start !important;
    padding-left: 5%;
    align-self: center;
}

.add_count {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}

.name_new {
    /* width: 500px; */
}

.count {
    display: flex;
    flex-direction: row;
}

.add_action {
    display: flex;
    flex-grow: 1;
    align-self: center;
    text-align: center;
}

.btn_cancelar {
    background: #6c6c6c;
}

.btn_cancelar:hover {
    background: #8d8d8d;
}

.cancelar {
    flex-grow: 1;
    align-self: center;
}

.add_new {
    flex-grow: 1;
    align-self: center;
}

.modal-overlay {
    z-index: 100;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    height: 55px;
    width: 80%;
    margin-top: 20%;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

@media (max-width: 600px) {
    .modal {
        height: 150px;
        margin-top: 20%;
        width: -webkit-fill-available;
    }

    .add_content {
        border-radius: 15px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        padding-top: 5%;
    }

    .name_new {
        width: 100%;
    }

    .modal-overlay {
        justify-content: left;
        padding: 2%;
    }

    .add_title {
        padding-left: 0%;
    }

    .cancelar {
        padding-right: 10%;
    }

    .count {
        align-self: start;
        justify-content: center;
    }
}

@media (min-width: 600px) and (max-width: 900px) {
    .modal {
        margin-top: 20%;
        width: -webkit-fill-available;
    }

    .add_content {
        border-radius: 15px;
        padding: 5px;
        display: flex;
        flex-direction: row;
    }

    .name_new {
        width: 90%;
    }

    .modal-overlay {
        justify-content: left;
        width: 98%;
        padding: 1%;
    }

    .add_title {
        padding-left: 0%;
    }

    .cancelar {
        padding-right: 1%;
    }

    .count {
        align-self: start;
        justify-content: center;
    }
}
</style>
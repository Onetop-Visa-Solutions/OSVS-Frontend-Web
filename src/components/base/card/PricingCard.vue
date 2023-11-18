<script setup lang="ts">

export interface InputField {
    checked?: boolean,
    label: string
}

export interface PricingDetailProps {
    icon: string
    title: string
    subtitle: string
    features: InputField[],
    selected: boolean,
    handleClick?: () => void
}

export interface PricingProps {
    data: PricingDetailProps
}

const props = withDefaults(defineProps<PricingProps>(), {
    features: () => [{ checked: false }],
    selected: false
})

</script>

<template>
    <div :class="props.data.selected ? 'selected-card' : ''" class="column price-card">
        <div class="price-header">
            <span class="is-size-4 text-primary has-text-weight-bold">For</span>
            <h3 class="is-size-1 text-primary has-text-weight-bold">{{ props.data.title }}</h3>
            <p>{{ props.data.subtitle }}</p>

            <div class="divider"></div>
        </div>
        <div class="price-body">
            <div class="d-flex col">
                <div v-for="i in props.data.features" class="custom-box">
                    <input :checked="i.checked" type="checkbox">
                    <label class="has-text-weight-bold">
                        <div class="custom-field"><img src="https://s2.svgbox.net/hero-solid.svg?ic=check" width="32"
                                height="32" /></div>
                        {{ i.label }}
                    </label>
                </div>
            </div>
        </div>
        <div class="price-footer">
            <button class="btn b-full">Learn more</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-container {
    gap: 2rem;
}

.b-full {
    width: 100%;
}

.custom-box {
    border: gray;
    border-radius: 50%;
    gap: 0.5rem;
    display: flex;
    align-items: center;

    label {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .custom-field {
        height: 30px !important;
        width: 30px !important;
        border: 1px solid #eee;
        border-radius: 50%;
        background-color: #fff;

        // .checked {
        //     background-color: #00A2B8;
        // }

        img {
            scale: 80%;
            fill: #fff !important;
            color: #fff !important;
        }
    }

    input[type="checkbox"] {
        border: 1px solid #000000;
        border-radius: 50%;
        height: 30px;
        width: 30px;
        display: none;

        &::before {
            content: "";
            border-radius: 50%;
        }

        &:checked~label>.custom-field {
            background-color: #00A2B8;
        }
        &:checked~label {
            color: #00A2B8;
        }
    }
}

.price-card {
    border: 1px solid #00A2B8;
    border-radius: 20px;
    height: 765px;
    width: 388px;
    display: grid;
    padding: 2rem;
    grid-template-columns: 1fr;
    justify-content: space-between;

    &.selected-card{
        background-color: #686777;
        border-color: #686777;

        .price-header > *{
            color: #fff !important;
        }
        & > * {
            color: #fff;
        }

        input:checked~label>.custom-field {
            background-color: #fff !important;
        }

        input:checked~label {
            color: #fff;
        }

    }

    .price-header {
        height: 100%;
        width: 100%;
        border-radius: 20px;
        // padding: 1rem;

        .divider {
            margin-top: 3rem;
            border-bottom: 1px solid #00A2B8;
        }
    }

    .price-body {
        // background-color: #000000;
    }
}


@media screen and (max-width: 600px) {
    .price-card {
        margin: 0 1rem;
    }
}
</style>

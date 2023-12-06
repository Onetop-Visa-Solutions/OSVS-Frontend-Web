<script setup lang="ts">
import CardVue from '/@src/components/base/card/Card.vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface ResourceData {
    id: number
    title: string
    image: string
    content: string
    date?: string
}

export interface ResourceCardProps {
    posts: ResourceData,
    upsideDown?: false
}

const props = withDefaults(defineProps<ResourceCardProps>(), {
    upsideDown: false,
})

</script>

<template>
    <div class="card">
        <div class="img-container">
            <img :src="props.posts.image" class="blog-img" />
        </div>
        <div class="card-content px-4">
            <h4 class="title is-size-4">{{ props.posts.title }}</h4>
            <p class="is-size-5 has-text-justified">{{ props.posts.content }}</p>

            <div class="mt-5">
                <a class="link" href="#">Read more</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 100%;
    height: 622px;
    object-fit: 'cover';
    border: 1px solid #7FFFFF;
    border-radius: 1rem;
    padding: 1rem;
    background: transparent;
    overflow: hidden;

    &:hover{
        box-shadow: 2px 6px 14px rgba(0,0,0,.3);
    }

    .img-container {
        width: '100%';
        height: '620px';
        padding: 0.6rem;
    }

    .blog-img {
        height: 270px;
        width: 100%;
        border-radius: 10px;
        background: "#7FFFFF";
    }

    .title {
        color: #00A2BB;
        font-weight: bold;  
    }

    .link {
        color: gray;
        font-weight: bold;
    }
}
</style>

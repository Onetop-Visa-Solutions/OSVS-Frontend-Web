<script setup lang="ts">

export interface PostGridItemAuthor {
  photo: string
  name: string
}
export interface PostItem {
  id: number
  author: PostGridItemAuthor
  category: string
  title: string
  abstract: string
  image: string
  imageFull: string
  content: string
  date: string
  duration: number
  related?: number[]
}
export interface SinglePostProps {
  post?: PostItem
  centered?: boolean
}
const props = defineProps<SinglePostProps>()
</script>

<template>
  <div v-if="props.post">
    <div

      class="post-header pt-24"
      :class="props.centered && 'is-centered'"
    >
      <div class="columns is-vcentered">
        <div
          class="column is-6"
          :class="props.centered ? 'is-12' : 'is-6'"
        >
          <div
            class="tags"
            :class="
              props.centered && 'mx-auto max-w-3 is-justify-content-center'
            "
          >
            <!-- <Tag
              color="primary"
              :label="props.post.category"
              outlined
            /> -->
          </div>
          <div
            class="mb-4"
            :class="props.centered ? 'mx-auto max-w-6' : 'max-w-5'"
          >
            <Title
              tag="h1"
              :size="2"
              weight="bold"
            >
              {{ props.post.title }}
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="pt-2"
            >
              {{ props.post.date }} — {{ props.post.duration }} min read
            </Subtitle>
          </div>
          <div class="metadata">
            <AvatarSimple
              :size="props.centered ? 'big' : 'medium'"
              :picture="props.post.author.photo"
            />
            <div class="meta">
              <span>{{ props.post.author.name }}</span>
            </div>
          </div>
        </div>
        <div
          v-if="!props.centered"
          class="column is-6"
        >
          <img
            class="post-image"
            :src="props.post.imageFull"
            alt="Post Image"
          >
        </div>
      </div>
    </div>
    <div class="post-body">
      <div class="post-body-inner mx-auto max-w-7">
        <div
          v-if="props.centered"
          class="column is-6"
        >
          <img
            class="post-image"
            :src="props.post.imageFull"
            alt="Post Image"
          >
        </div>
        <div
          class="content"
          v-html="props.post.content"
        />
      </div>
      <div class="sharing-options">
        <a
          href="https://www.facebook.com/onestoptravelagent1/"
          target="_blank"
        >
          <i
            class="iconify"
            data-icon="fa-brands:facebook-f"
          />
          <span class="is-sr-only">Facebook</span>
        </a>
        <a
          href="https://www.youtube.com/channel/UC_owccQqevMSIczDPKAUkPA"
          target="_blank"
        >
          <i
            class="iconify"
            data-icon="fa-youtube"
          />
          <span class="is-sr-only">Youtube</span>
        </a>
        <a
          href="https://www.tiktok.com/@onestoptravel?lang=en"
          target="_blank"
        >
          <i
            class="iconify"
            data-icon="mingcute:tiktok-fill"
          />
          <span class="is-sr-only">Tiktok</span>
        </a>
        <a
          href="https://t.me/oneStopVisaSolutions"
          target="_blank"
        >
          <i
            class="iconify"
            data-icon="fa:telegram"
          />
          <span class="is-sr-only">Telegram</span>
        </a>
      </div>
    </div>
    <!-- <Title
      tag="h2"
      :size="3"
      weight="bold"
      class="pt-6"
    >
      Related Posts
    </Title>
    <BlogGrid :posts="props.post.related" />
    <div class="py-12" /> -->
  </div>
</template>

<style lang="scss" scoped>
.post-header {
  border-bottom: 1px solid var(--blog-post-border-color);
  padding-bottom: 4rem;
  margin-top: 10;

  .tags {
    :deep(.tag:not(body)) {
      display: inline-block;
      min-height: 2.5em;
      line-height: 2.5;
    }
  }

  .post-image {
    border-radius: 1.5rem;
    box-shadow: var(--light-box-shadow);
    min-height: 350px;
    object-fit: cover;
    margin: 0 auto;
  }

  .metadata {
    .meta {
      span {
        &:first-child {
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--blog-post-author-name-color);
        }

        &:nth-child(2) {
          font-family: var(--font);
          font-size: 0.95rem;
          color: var(--light-text);
        }
      }
    }
  }

  &.is-centered {
    text-align: center;

    .metadata {
      flex-direction: column;

      .meta {
        margin-left: 0;
        margin-top: 0.75rem;
        line-height: 1.2;

        span {
          &:first-child {
            font-size: 1.15rem;
          }
        }
      }
    }
  }
}

.metadata {
  display: flex;
  align-items: center;

  .meta {
    margin-left: 0.75rem;

    span {
      display: block;
    }
  }
}

.post-body {
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--blog-post-border-color);

  .post-body-inner {
    .column {
      width: 100% !important;

      .post-image {
        display: block;
        border-radius: 1.5rem;
        box-shadow: var(--light-box-shadow);
        min-height: 350px;
        min-width: 100%;
        object-fit: cover;
        margin: 0 auto 3rem;
      }
    }

    :deep(.content) {
      h2 {
        font-family: var(--font-alt);
        color: var(--blog-post-heading-color) !important;
             }

      p {
        font-family: var(--font);
        font-size: 1.15rem;
        color: var(--blog-post-text-color) !important;
        text-align: justify;
      }
    }
  }

  .sharing-options {
    display: flex;
    justify-content: center;
    padding-top: 5rem;
    padding-bottom: 1rem;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 38px;
      width: 38px;
      border-radius: 50%;
      border: 1px solid var(--blog-post-border-color);
      margin: 0 0.75rem;
      transition: border 0.3s;

      .iconify {
        font-size: 1rem;
        color: var(--title-color);
        transition: color 0.3s;
      }

      &:hover {
        border-color: var(--primary);

        .iconify {
          color: var(--primary);
        }
      }
    }
  }
}

/* stylelint-disable-next-line media-feature-range-notation */
@media only screen and (max-width: 767px) {
  .post-header {
    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }
  }
}
</style>

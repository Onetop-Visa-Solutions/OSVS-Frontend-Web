<script setup lang="ts">
import { posts } from '/@src/data/pages/blog'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section
      color="grey"
      overflown
    >
      <Container>
        <div class="mx-auto max-w-9">
          <PageTitle
            title="Our Latest News"
            subtitle="Company Blog"
          >
            <template #content>
              <div class="mx-auto max-w-6 mt-2">
                <p class="paragraph rem-115">
                  Welcome to our company blog, where you can stay up-to-date with our latest news and updates.
                </p>
              </div>
            </template>
          </PageTitle>
        </div>

        <div class="columns">
          <div class="column is-8">
            <BlogGrid
              :posts="posts"
              side-grid
              upside-down
            />

            <div class="load-more py-6">
              <div class="buttons is-centered">
                <Button
                  color="primary"
                  :long="3"
                  raised
                  bold
                >
                  Load More
                </Button>
              </div>
            </div>
          </div>

          <div class="column is-4">
            <BlogStickySide>
              <BlogSearch />

              <BlogRecentPosts :posts="posts" />
            </BlogStickySide>
          </div>
        </div>
      </Container>
    </Section>
    <Footer
      v-background="{
        src: '/assets/shapes/lowpoly-pattern-blue.jpg',
        placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
      }"
      text="Onestop Visa Solutions is a leading provider of study abroad programs and visa assistance services, dedicated to empowering students and visitors alike with transformative educational experiences worldwide. Subscribe to our newsletter for valuable insights and updates as we guide you towards your academic and travel aspirations. "
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>

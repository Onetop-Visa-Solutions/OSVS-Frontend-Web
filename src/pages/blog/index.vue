<template>
  <div>
    <div class="mt-12">
      <MainSectionHeader
        title="Our Latest News"
        subtitle="Company Blog"
        text="Welcome to our company blog, where you can stay up-to-date with our latest news and updates. We are excited to share with you the latest happenings within our organization."
      />
    </div>
    <Section>
      <Container>
        <div class="columns is-mobile is-multiline">
          <div class="column is-8">
            <div class="columns is-multiline">
              <div
                v-for="i in items"
                :key="i.id"
                class="column is-half"
              >
                <ResourceCard :posts="i" />
              </div>
            </div>
          </div>
          <div class="column">
            <div class="relative search-box">
              <img
                src="https://s2.svgbox.net/hero-outline.svg?ic=search&color=000"
                alt="relative search"
                width="32"
                height="32"
              >
              <input
                id=""
                type="search"
                name=""
                placeholder="Search posts..."
              >
            </div>

            <h3 class="title text text-primary my-12">
              Recent Posts
            </h3>
            <div class="suggest-card">
              <img
                src=""
                class=""
                alt=""
              >
              <div class="d-flex">
                <p class="is-size-5 suggest-title">
                  Blog title placeholder sample one
                </p>
                <span>2 hrs ago</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
    <Footer
      text="Onestop Visa Solutions is a leading provider of study abroad programs and visa assistance services, dedicated to empowering students and visitors alike with transformative educational experiences worldwide. Subscribe to our newsletter for valuable insights and updates as we guide you towards your academic and travel aspirations. "
      color="light"
      :social-links="socialLinks"
      bubbles
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { socialLinks } from '/@src/data/blocks/advanced/social'

const items = ref([
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Blog title place holder 1',
    date: '23/23/2023',
    content: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 13,
    title: 'Blog title place holder 2',
    content: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 85,
    title: 'Blog title place holder 3',
    content: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likes: 85,
    title: 'Blog title place holder 4',
    content: 'Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.'
  }
]);
</script>
<style lang="scss">
.search-box{
  border: 1px solid #7FFFFF;
  border-radius: 10px;
  padding: 28px 56px;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 5;
  }

  input {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1rem;
    overflow: hidden;

    &:active,
    &:focus-within{
      border-color: #7FFFFF;
    }
  }
}

.suggest-card {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  height: 130px;
  width: 100%;

  .suggest-title {
    font-weight: bold;
    font-size: 18px;
  }

  .d-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  img {
    width: 130px;
    height: 100%;
    background-color: #7FFFFF;
    border-radius: 10px;
  }
}
</style>

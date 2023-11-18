<template>
  <div class="mt-12">
    <Container>

      <section class="mt">
        <div class="columns is-multiline">
          <div class="column gap4 is-6">
            <div style="height: 450px;" class="img-bg">
              <img src="../../../public/assets/customers/lefops.svg" alt="">
            </div>
          </div>
          <div class="column is-6 d-content">
            <div class="box">
              <p class="has-text-weight-bold">Study in the US</p>
              <h1 class="title is-size-1 text-primary has-text-weight-bold ">Enrich Your Education and Career Prospects
              </h1>
              <p class="has-text-justified">Embarking on a journey to study in the United States opens up a world of
                opportunities for international
                students. Renowned for its exceptional education system, cutting-edge research facilities, and diverse
                academic programs, the United States offers a transformative learning experience like no other.</p>
            </div>
          </div>
        </div>

        <div class="columns is-multiline">
          <div class="column">
            <div class="mt-4 box">
              <h5 class="text-primary has-text-weight-bold is-size-2">Educational Institutions</h5>
              <p class="has-text-justified">Leading universities in the United States are known for their rigorous
                academic standards, distinguished
                faculty members, and emphasis on research and critical thinking. Students have the opportunity to learn
                from renowned professors who are experts in their fields, often leading groundbreaking research and
                contributing to advancements in various disciplines.</p>
            </div>
          </div>
          <div class="column">
            <div class="img-box-container">
              <div v-for="i in 8" class="img-box"></div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="page-title-box">
          <p class="has-text-centered has-text-weight-bold">Study in the US</p>
          <h1 class="title text-primary is-mobile has-text-centered ">Basic Requirements</h1>
        </div>
        <div class="d-flex">
          <button class="btn primary">Requirements</button>
          <button class="btn">Scholarships and Funding</button>
        </div>
        <div class="columns gap mt-10 section-container is-mobile is-multiline">
          <PricingCard v-for="i in pricingList" :data="i" />
        </div>
      </section>

      <section>
        <div class="page-title-box">
          <p class="has-text-centered is-mobile has-text-weight-bold">Why Choose Education in the United States</p>
          <h1 class="title-w title text-primary has-text-centered ">Discover the Advantages of Studying in the US</h1>
        </div>

        <div class="d-flex gap-4">
          <button class="btn primary">Academic Excellence</button>
          <button class="btn outline">Cultural Diversity</button>
          <button class="btn outline">Career Opportunities </button>
        </div>

        <p class="has-text-weight-bold is-size-5 mt-8">The United States is renowned for its world-class educational
          institutions that consistently rank among the top
          universities in the world. These institutions prioritize academic excellence by maintaining rigorous academic
          standards.</p>

        <div class="mt-12 img-bg main-img-container">
          <img src="../../../public/assets/customers/lefops.svg" alt="">
        </div>
      </section>

      <section>
        <div class="page-title-box">
          <p class="has-text-centered has-text-weight-bold">Why Choose Education in the United States</p>
          <h1 class="title-w title text-primary has-text-centered ">Words from our clients</h1>
        </div>

        <div class="mt-12 img-bg main-img-container">
          <img src="../../../public/assets/customers/lefops.svg" alt="">
        </div>
      </section>

      <section class="mt-12"></section>

    </Container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pricingList = ref([
  {
    title: 'High School',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum vel fuga voluptas nesciunt iure',
    features: [
      {
        checked: true,
        label: 'Passport'
      },
      {
        checked: true,
        label: 'Proof of completing a certain grade level (varies by program)'
      },
      {
        checked: true,
        label: 'Proof of English proficiency'
      },
      {
        checked: true,
        label: 'Official transcripts from previous academic institutions'
      },
      {
        checked: true,
        label: 'Financial documentation'
      },
    ]
  },
  {
    title: 'Undergrad',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum vel fuga voluptas nesciunt iure',
    features: [
      {
        checked: true,
        label: 'Passport'
      },
      {
        checked: true,
        label: 'High school diploma'
      },
      {
        checked: true,
        label: 'High school transcripts'
      },
      {
        checked: true,
        label: 'Proof of English proficiency '
      },
      {
        checked: true,
        label: 'Financial documentation'
      },
      {
        checked: true,
        label: 'Extracurricular activity records'
      },
    ],
    selected: true
  },
  {
    title: 'Graduates',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum vel fuga voluptas nesciunt iure',
    features: [
      {
        checked: true,
        label: "A bachelor's degree"
      },
      {
        checked: true,
        label: 'A master’s or other higher credential degree'
      },
      {
        checked: true,
        label: 'Official transcripts from all previous academic institutions'
      },
      {
        checked: true,
        label: 'Proof of English proficiency '
      },
      {
        checked: true,
        label: 'Letters of recommendation'
      },
      {
        checked: true,
        label: 'Resume or curriculum vitae'
      },
      {
        checked: true,
        label: 'Writing samples or portfolio (for certain programs)'
      },
      {
        checked: true,
        label: 'Financial documentation'
      },
    ]
  }
])
</script>
<style lang="scss">
.gap {
  gap: 2rem;
}

.gap4 {
  gap: 4rem;
}

section.mt {
  margin-top: 8rem;
}

.d-content {
  text-align: start !important;
}
.img-box-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-left: 1rem;
}
.img-box {
  width: 80px;
  height: 70px;
  object-fit: cover;
  background-color: #00A2B8;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: none;
}

.main-img-container {
  width: 100%;
  height: 760px;
  border-radius: 10px;
  overflow: hidden;

  img {
    background-color: #07c3ed;
    width: 100%;
    height: 100%;
  }
}

.img-bg {
  background-color: #00A2B8;
  border-radius: 10px;
}

img {
  width: 100%;
  height: 100%;
}

.title-w {
  width: 70%;
  margin: auto;
}

.page-title-box {
  margin-top: 8rem;

  h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 3.5rem;
  }
}

.d-flex {
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: center;

  &.col {
    flex-direction: column;
  }
}

.btn {
  padding: 18px 24px;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: .3s ease-in-out;
  font-size: 16px;
  font-weight: normal;

  &.outline {
    background-color: transparent;
    border: 1px solid #00A2B8;
  }

  &:hover {
    box-shadow: 4px 5px 8px rgba($color: #000000, $alpha: 0.2);
  }

  &.primary {
    background-color: #00A2B8;
    color: #fff;
    font-weight: bold;

  }
}</style>

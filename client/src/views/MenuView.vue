<script setup>
  import { ref, watchEffect } from 'vue';
  import gql from 'graphql-tag';
  import { useQuery } from '@vue/apollo-composable';
  import TheHero from '../components/TheHero/TheHero.vue';
  import PageSection from '../components/PageSection/PageSection.vue';
  import ProductCard from '../components/ProductCard/ProductCard.vue';
  import MenuNav from '../components/MenuNav/MenuNav.vue';


  const allProducts = gql `
  query GetProductsAndCategories {
    productCategories(where: {orderby: SLUG, order: ASC}, first: 20) {
      edges {
        node {
          id
          name
          slug
          count
          contentNodes(first: 50) {
            edges {
              node {
                ... on SimpleProduct {
                  id
                  name
                  price(format: FORMATTED)
                  shortDescription(format: RAW)
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const { result, loading, error } = useQuery( allProducts );

  let prodCats = ref([]);
  let newProdCats = ref({});


  watchEffect( () => {
    if ( loading.value ) {
      console.log( "Loading..." );
    } else {
      console.log( "Loaded" );
      prodCats.value = result.value?.productCategories.edges ?? [];

      prodCats.value.forEach( (cat ) => {
        if ( cat.node.slug.includes('featured-item') ) {
          newProdCats.value[0] = cat.node;
        }

        if ( cat.node.slug.includes('combos') ) {
          newProdCats.value[1] = cat.node;
        }

        if ( cat.node.slug.includes('kids') ) {
          newProdCats.value[2] = cat.node;
        }

        if ( cat.node.slug.includes('pregame') ) {
          newProdCats.value[3] = cat.node;
        }

        if ( cat.node.slug.includes('dinners') ) {
          newProdCats.value[4] = cat.node;
        }

        if ( cat.node.slug.includes('meat-ala-carte') ) {
          newProdCats.value[5] = cat.node;
        }
        
        if ( cat.node.slug.includes('sides') ) {
          newProdCats.value[6] = cat.node;
        }

        if ( cat.node.slug.includes('salads') ) {
          newProdCats.value[7] = cat.node;
        }

        if ( cat.node.slug.includes('sandwiches') ) {
          newProdCats.value[8] = cat.node;
        }
        
        if ( cat.node.slug.includes('family-deals') ) {
          newProdCats.value[9] = cat.node;
        }

        if ( cat.node.slug.includes('catering-meats') ) {
          newProdCats.value[10] = cat.node;
        } 

        if ( cat.node.slug.includes('catering-sides') ) {
          newProdCats.value[11] = cat.node;
        } 
      });
    }
  });
</script>

<template>
  <main class="page page-menu">
    <TheHero
      sectionClass="hero--with-mask"
      sectionAriaLabel="Image of ribs on a wood cutting board with tomatoes and sauce. Photo by Alexandru-Bogdan Ghita on Unsplash"
      :sectionStyle="{
        backgroundImage: 'url(/src/assets/img/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg)',
      }"
    >
      <template #body>
        <h1 class="hero__title text-white">Menu</h1>
      </template>
    </TheHero>
    <MenuNav
      :navItems="newProdCats"
    />
    <div class="container mb-5 py-3">
      <PageSection
        v-for="cat in newProdCats" :key="cat['id']" 
        :sectionID="cat['slug']"
        :sectionTitle="cat['name']"
        sectionClass="page-section--menu"
        headerClass="section__header--menu"
      >
      <template #body>
        <ul class="page-section__list">
          <li 
            class="page-section__list-item"
            v-for="prod in cat['contentNodes']['edges']" :key="prod['node']['id']"
          >

            <ProductCard
              :productName="prod['node']['name']"
              :productPrice="prod['node']['price']"
              :productDescription="prod['node']['shortDescription']"
            />
          </li>
        </ul>
      </template>
      </PageSection>
      
    </div>
  </main>
</template>
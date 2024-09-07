<script setup>
  import { computed, onMounted, ref, watchEffect, onUpdated } from 'vue';

  import gql from 'graphql-tag';
  import { useQuery } from '@vue/apollo-composable';
  import TheHero from '../components/TheHero/TheHero.vue';
  import TheColumns from '../components/TheColumns/TheColumns.vue';
  import TheCard from '../components/TheCard/TheCard.vue';
  import ButtonComp from '../components/ButtonComp/ButtonComp.vue';


  defineProps({
    flipCols: {
      type: Boolean,
      default: false
    },
    sectionClass: {
      type: String,
      default: ''
    },
    col1Class: {
      type: String,
      default: ''
    },
    col2Class: {
      type: String,
      default: ''
    },
    sectionStyle: {
      type: String,
      default: ''
    }
  })

  

  const allProducts = gql `
    query {
      products {
        edges {
          node {
            name
            shortDescription
          }
        }
      }
    }
  `;


  const { result, loading, error } = useQuery( allProducts );
  const products = computed(() => result.value?.products.edges ?? []);


  watchEffect( () => {
    // console.log("Prod: ", products);
  });
  
  const handleScrollToSection = () => {
    const about = document.querySelector('#about');
    const top = document.querySelector('#top');

    if ( window.location.pathname === '/' ) {
      if( window.location.hash === '' ) {
        top.scrollIntoView({ behavior: 'smooth' });
      } else if ( window.location.hash === '#about' ) {
        about.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    
    return;
  };

  
  onMounted( () => {
    handleScrollToSection();
  });

  onUpdated( () => {
    handleScrollToSection();
  });

  
  
</script>

<template>
  <main class="home">
    <div id="top" aria-label="Top of the Page"></div>
    <TheHero
      sectionAriaLabel="Image of three stakes cooking on a grill with the fire embers glowing underneath. Photo by Emerson Vieira on Unsplash"
      :sectionStyle="{
        backgroundImage: 'url(src/assets/img/emerson-vieira-RO6Ke69Szhg-unsplash.jpg)',
      }"
    >
      <template #body>
        <img alt="Vue logo" class="hero__logo" src="@/assets/img/big-daddys-logo.png" width="125" height="125" atl="Big Daddys homeplate BBQ logo. A picture behind two baseball bats that for an x." />
        <h1 class="hero__title text-white text-center">Southern Style BBQ</h1>
        <div class="btn-container text-center">
          <ButtonComp btn-class="mr-4" btn-text="Order" />
        </div>
      </template>
    </TheHero>
    <TheColumns
      :columns="2"
      id="info"
      section-class="text-white"
      :sectionWidth="true"
      :sectionStyle="{
        background: 'url(src/assets/img/pexels-pixabay-247671.jpg) no-repeat 50% 100%',
        backgroundSize: 'cover',
        height: '600px'
      }"
      hasBGImg="grayscale"
      sectionAriaLabel="Abstract Background. Photo by Pixabay from Pexels"
    >
      <template #col-1>
        <TheCard 
          titleText="Hours"
          sectionClass="text-center ml-auto pr-5 w-50"  
          :hasTitleUnderline= "true"
          borderColor="white"
        >
          <template #body>
            <p class="card__text">
              Monday: 4pm - 8pm
            </p>
            <p class="card__text">
              Tuesday - Sunday: 11am - 8pm
            </p>
            <p class="card__text">
              We Deliver!
            </p>
          </template>
        </TheCard>
      </template>
      <template #col-2>
        <TheCard 
          titleText="Location"
          sectionClass="text-center mr-auto pl-5 w-50"
          :hasTitleUnderline= "true"
          borderColor="white"
        >
          <template #body>
            <a class="card__link card__link--no-decoration text-white" href="https://www.google.com/maps/search/?api=1&amp;query=47.5951518,-122.3316393&amp;query_place_id=ChIJvejfzWLEwokRYqbceu6WHbk" target="_blank">
              <p class="card__text">
                167 Route 9W,
              </p>
              <p class="card__text">
                Haverstraw, NY 10927
              </p>  
            </a>
            <a class="card__link card__link--no-decoration text-white" href="tel:8452714024">
              <p class="card__text">(845)-271-4024</p>
            </a>
            <div class="card__social pt-4">
              <a class="card__link mr-4" href="http://www.instagram.com/bigdaddyshomeplatebbq" target="_blank" rel="noopener">
                <img class="card__icon" style="width: 40px; height: 40px; border: 0;" src="@/assets/img/ig.svg">
              </a>
              <a class="card__link" href="http://www.twitter.com/bdhomeplatebbq" target="_blank" rel="noopener">
                <img class="card__icon" style="width: 40px; height: 40px; border: 0;" src="@/assets/img/twitter.svg">
              </a>
            </div>
           </template>
        </TheCard>
      </template>
    </TheColumns>
    <TheColumns
      id="view-menu"
      :sectionWidth="true"
      :sectionStyle="{
        background: 'url(src/assets/img/dolores-preciado-7a--Ad6mkNE-unsplash.jpg) no-repeat 50% 100%',
        backgroundSize: 'cover',
        height: '600px'
      }"
      hasBGImg="true"
      sectionAriaLabel="Image of Beef skewer with onion, pepper. Photo by Dolores Preciado on Unsplash"
      :colClass="{
        1: 'd-flex align-items-center justify-content-center',
      }"

    >
      <template #col-1>
        <TheCard 
          titleText="Where Every Bite Sizzles with Flavor!"
          sectionClass="text-center text-white"
          headerClass="mb-4"
        >
          <template #body>
            <div class="d-flex justify-content-center">
              <ButtonComp 
                btnText="View Our Menu"
                btnClass="btn--primary"
              />
            </div>
          </template>
        </TheCard>
      </template>
    </TheColumns>
    <TheColumns 
      :columns="2"
      sectionId="catering"
      sectionClass="bg-tertiary"
      :sectionWidth="true"
      :colClass="{
        1: 'd-flex align-items-center justify-content-center',
      }"
    >
      <template #col-1>
        <TheCard 
          titleText="Need Catering?"
          headerTitleClass="mt-0 text-white"
          cardBody="text-center"
        >
          <template #body>
            <ButtonComp 
              btnText="View Our Catering Menu"
              btnClass="btn--primary"
            />
          </template>
        </TheCard>
      </template>
      <template #col-2>
        <img alt="Image of Hamburger and Fries Photo
. Photo by Jonathan Borba on pexels" class="two-col-section__img" src="@/assets/img/pexels-jonathan-borba-2983101.jpg" width="640" height="426" />
      </template>
    </TheColumns>
    <TheColumns
      id="about"
      :columns="2"
      :sectionWidth="true"
      :colClass="{
        2: 'bg-black text-white',
      }"
    >
      <template #col-1>
        <img class="two-col-section__img-about w-100 h-100" alt="Image of the owner Mr.Parker" src="@/assets/img/mr_parker.png" >
      </template>
      <template #col-2>
        <TheCard 
          title-text="About Us"
          sectionClass="p-5"  
          headerTitleClass="m-0"
        >
          <template v-slot:body>
            <p>Big Daddy’s Home Pate BBQ is a family operated BBQ restaurant located in Rockland County, New York. Join us for the ultimate Southern BBQ experience. Our goal is to bring our guest that southern home feeling with, smiles, friendship and good food.</p>
            
            <p>The idea for Big Daddy’s started on June 7th, 2017 in Haverstraw NY. Owner James Parker and his family Tyjuana Parker (wife), Jameisha Parker (Daughter), Jarell Parker (Son) & Antonio Lynn (Son) worked tirelessly for months constructing an awesome Southern International BBQ menu including our Famous Ribs and Brisket.</p>
            
            <p>Chef Parker from Myrtle Beach, South Carolina is a Graduate of Culinary Institute Of America and has over 27 years of experience as a Corporate Executive Chef for Whitsons Culinary Group. He has prepared food from all over the world including Italy, Asia, Mexico and many more.</p>
            
            <p>Our theme is sports based because every member of the Parker Family has played and excelled at sports. Chef Parker is very well known in the community for softball. He became so dominate on the pitchers mound that he developed the name “Big Daddy”.</p>
          </template>
        </TheCard> 
      </template>
    </TheColumns>
  </main>
</template>

<template>

  <q-page class="q-pa-lg">

    <q-img style="max-height: 700px" class="gt-sm"
           src="../assets/high_five.webp">
      <div class="absolute-bottom text-h2">
        Internship Opportunities at Lurie Children's
      </div>
    </q-img>
    <q-img style="max-height: 500px" class="lt-sm"
           src="../assets/high_five.webp">
      <div class="absolute-bottom text-subtitle1">
        Internship Opportunities at Lurie Children's
      </div>
    </q-img>

    <div class="row q-pa-xl justify-center bg-primary text-white gt-sm">
      <div class="col-12 col-md-3">
        <div class="text-h4 text-center">Allies in Our Mission</div>
        <div class="text-subtitle1">
          Every role at Lurie Children's contributes to our mission of improving the health and well-being of all
          children, and our allied health employees are no exception. With our family-centered approach to child care,
          you can truly see the ripple effect of positivity that your work brings to the community. Through the
          collaboration, communication, and recognition you receive from your peers and leaders at Lurie Children's, you
          will find that you are an ally in something truly special.
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-12 col-md-3">
        <div class="text-h4 text-center">Work, Learn, Grow</div>
        <div class="text-subtitle1">
          Lurie Children's careers are dynamic and unique to each individual. Our leaders play a key role in creating
          opportunities for team members who are ready to take the next step in their career. Whether you want to learn
          something new, hone the skills you already have, or pursue a leadership role, the opportunities are endless.
          Your growth is our growth. We want nothing less than to make your ambitions a reality at Lurie Children's.
        </div>
      </div>
    </div>
    <div class="row q-pa-xl justify-center bg-primary text-white lt-md">
      <div class="col-12 col-md-3">
        <div class="text-h6 text-center">Allies in Our Mission</div>
        <div class="text-caption">
          Every role at Lurie Children's contributes to our mission of improving the health and well-being of all
          children, and our allied health employees are no exception. With our family-centered approach to child care,
          you can truly see the ripple effect of positivity that your work brings to the community. Through the
          collaboration, communication, and recognition you receive from your peers and leaders at Lurie Children's, you
          will find that you are an ally in something truly special.
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-12 col-md-3">
        <div class="text-h6 text-center">Work, Learn, Grow</div>
        <div class="text-caption">
          Lurie Children's careers are dynamic and unique to each individual. Our leaders play a key role in creating
          opportunities for team members who are ready to take the next step in their career. Whether you want to learn
          something new, hone the skills you already have, or pursue a leadership role, the opportunities are endless.
          Your growth is our growth. We want nothing less than to make your ambitions a reality at Lurie Children's.
        </div>
      </div>
    </div>

    <div class="row q-my-md">
      <div class="col-12 col-md-6">
        <q-card class="full-width">
          <q-card-section>
            <div class="text-h6">Experiences</div>
          </q-card-section>

          <review-card v-for="profile in profiles" :headline="`${profile.first_name[0]}. ${profile.last_name[0]}.`"
                       :rating="profile.rating" :date="new Date()" :review_text="profile.review"></review-card>
        </q-card>

      </div>
    </div>

  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Criteria from "src/composables/Criteria";
import Profiles from "src/composables/Profiles";
import ReviewCard from "components/ReviewCard.vue";

export default defineComponent({
  name: 'IndexPage',
  components: { ReviewCard },
  setup() {

    const { profiles } = Profiles();
    return {
      profiles
    }
  }
})
</script>

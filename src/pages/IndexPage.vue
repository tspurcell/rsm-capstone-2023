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

    <div class="row q-pa-xl bg-primary q-my-md">
      <div class="col-12 text-center">
        <q-btn to="/profiles" color="blue-1" text-color="primary" class="text-subtitle1 text-bold"
               label="Search Experiences"
               unelevated padding="15px 30px"></q-btn>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        <q-card class="q-my-md">
          <q-card-section>
            <div class="text-subtitle1 text-bold">SHARE EXPERIENCE</div>
            <q-input v-model="profile.first_name" label="First Name"></q-input>
            <q-input v-model="profile.last_name" label="Last Name"></q-input>
            <q-select v-model="profile.current_class" :options="current_class_options"
                      label="Current Class"></q-select>
            <q-select v-model="profile.university" :options="university_options" label="University"></q-select>
            <q-select v-model="profile.major" :options="major_options" label="Major"></q-select>
            <q-select v-model="profile.gpa" :options="gpa_options" label="GPA"></q-select>
            <q-select v-model="profile.tech_level" :options="tech_level_options" label="Tech Level"></q-select>
            <q-select v-model="profile.interest" :options="interest_options" label="Interest"></q-select>
            <div class="q-my-sm">
              <div class="text-grey-6 text-subtitle1">Rating</div>
              <q-rating v-model="profile.rating" color="primary" :icon="icons" size="md"></q-rating>
            </div>
            <q-input v-model="profile.review" type="textarea" label="Tell us about your experience"></q-input>
          </q-card-section>
          <q-card-actions>
            <q-space></q-space>
            <q-btn label="Submit" color="primary" @click="create_profile" padding="10px 20px"></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>


  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import Criteria from "src/composables/Criteria";
import Profiles from "src/composables/Profiles";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'IndexPage',
  setup() {

    const {
      current_class_options,
      university_options,
      major_options,
      gpa_options,
      tech_level_options,
      interest_options
    } = Criteria();

    const { profiles } = Profiles();
    const profile = ref({});
    const router = useRouter();
    const create_profile = () => {
      profiles.value.push(profile.value);
      router.push({ path: '/profiles' })
    }

    return {
      profile,
      create_profile,
      current_class_options,
      university_options,
      major_options,
      gpa_options,
      tech_level_options,
      interest_options,
      icons: [
        'sentiment_very_dissatisfied',
        'sentiment_dissatisfied',
        'sentiment_neutral',
        'sentiment_satisfied',
        'sentiment_very_satisfied'
      ]
    }
  }
})
</script>

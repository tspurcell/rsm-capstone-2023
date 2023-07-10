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

          <q-card-section>
            <q-btn label="Add Experience" to="/" color="primary"></q-btn>
          </q-card-section>

          <q-card-section>
            <div class="text-bold text-h5">Top experiences that match your search criteria</div>
          </q-card-section>

          <q-card-section class="row q-gutter-md">
            <q-select dense outlined style="width: 200px" label="University" v-model="university"
                      :options="university_options"
                      emit-value clearable></q-select>
            <q-select dense outlined style="width: 200px" label="Major" v-model="major" :options="major_options"
                      emit-value clearable></q-select>
            <q-select dense outlined style="width: 200px" label="GPA" v-model="gpa"
                      :options="gpa_options" emit-value clearable></q-select>
            <q-select dense outlined style="width: 200px" label="Current Class" v-model="current_class"
                      :options="current_class_options" emit-value clearable></q-select>
            <q-select dense outlined style="width: 200px" label="Tech Level" v-model="tech_level"
                      :options="tech_level_options" emit-value clearable></q-select>
            <q-select dense outlined style="width: 200px" label="Interest" v-model="interest"
                      :options="interest_options" emit-value clearable></q-select>
          </q-card-section>

          <review-card v-for="profile in filtered_profiles" :headline="`${profile.first_name[0]}. ${profile.last_name[0]}.`"
                       :rating="profile.rating" :date="new Date()" :review_text="profile.review"></review-card>
        </q-card>

      </div>
    </div>

  </q-page>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import Criteria from "src/composables/Criteria";
import Profiles from "src/composables/Profiles";
import ReviewCard from "components/ReviewCard.vue";

export default defineComponent({
  name: 'IndexPage',
  components: { ReviewCard },
  setup() {

    const { profiles } = Profiles();
    const {
      current_class_options,
      university_options,
      major_options,
      gpa_options,
      tech_level_options,
      interest_options
    } = Criteria();

    const university = ref(null);
    const major = ref(null);
    const current_class = ref(null);
    const gpa = ref(null);
    const tech_level = ref(null);
    const interest = ref(null);

    const filtered_profiles = computed(() => {
      let result = [...profiles.value];
      if (university.value) {
        result = result.filter(x => x.university === university.value);
      }
      if (major.value) {
        result = result.filter(x => x.major === major.value);
      }
      if (current_class.value) {
        result = result.filter(x => x.current_class === current_class.value);
      }
      if (gpa.value) {
        result = result.filter(x => x.gpa === gpa.value);
      }
      if (tech_level.value) {
        result = result.filter(x => x.tech_level === tech_level.value);
      }
      if (interest.value) {
        result = result.filter(x => x.interest === interest.value);
      }

      return result;
    })
    return {
      filtered_profiles,

      current_class,
      current_class_options,
      university,
      university_options,
      major,
      major_options,
      gpa,
      gpa_options,
      tech_level,
      tech_level_options,
      interest,
      interest_options
    }
  }
})
</script>

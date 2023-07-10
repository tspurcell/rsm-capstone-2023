import { ref } from "vue";

const current_class_options = ref([
    'Sophomore',
    'Junior',
    'Senior'
])

const university_options = ref([
    'UT Austin',
    'UT Dallas',
    'Texas A&M',
    'Baylor',
    'Rice'
])

const major_options = ref([
    'Nursing',
    'MIS',
    'Human Resources',
    'Health Care Management',
    'Biology'
])

const gpa_options = ref([
    '3.5 and above',
    '3.1 - 3.4',
    '2.5 - 3.0',
    'Below 2.5'
])

const tech_level_options = ref([
    'Novice',
    'Intermediate',
    'Expert'
])

const interest_options = ref([
    'Nursing',
    'Advanced Practice',
    'Allied Health',
    'Support Services',
    'Research',
    'Leadership'
])

export default () => {
    return {
        current_class_options,
        university_options,
        major_options,
        gpa_options,
        tech_level_options,
        interest_options
    }
}
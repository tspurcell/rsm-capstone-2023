import { ref } from "vue";

const wellness_assessments = ref([
    {
        profile_id: 1,
        date: '2023-06-02',
        hours_worked: 40,
        assessment_score: 7,
        question_1: 0,
        question_2: 2,
        question_3: 4,
        question_4: 1,
        question_5: 0
    },
    {
        profile_id: 1,
        date: '2023-06-09',
        hours_worked: 45,
        assessment_score: 12,
        question_1: 0,
        question_2: 2,
        question_3: 4,
        question_4: 4,
        question_5: 1
    },
    {
        profile_id: 1,
        date: '2023-06-16',
        hours_worked: 46,
        assessment_score: 15,
        question_1: 0,
        question_2: 4,
        question_3: 4,
        question_4: 4,
        question_5: 3
    },
    {
        profile_id: 1,
        date: '2023-06-23',
        hours_worked: 38,
        assessment_score: 8,
        question_1: 2,
        question_2: 2,
        question_3: 4,
        question_4: 0,
        question_5: 0
    },
    {
        profile_id: 1,
        date: '2023-06-30',
        hours_worked: 42,
        assessment_score: 11,
        question_1: 3,
        question_2: 2,
        question_3: 4,
        question_4: 1,
        question_5: 1
    },
    {
        profile_id: 1,
        date: '2023-07-07',
        hours_worked: 48,
        assessment_score: 16,
        question_1: 4,
        question_2: 2,
        question_3: 4,
        question_4: 4,
        question_5: 2
    },
    {
        profile_id: 2,
        date: '2023-06-02',
        hours_worked: 40,
        assessment_score: 7,
        question_1: 0,
        question_2: 2,
        question_3: 4,
        question_4: 1,
        question_5: 0
    },
    {
        profile_id: 2,
        date: '2023-06-09',
        hours_worked: 45,
        assessment_score: 12,
        question_1: 0,
        question_2: 2,
        question_3: 4,
        question_4: 4,
        question_5: 1
    },
    {
        profile_id: 2,
        date: '2023-06-16',
        hours_worked: 46,
        assessment_score: 15,
        question_1: 0,
        question_2: 4,
        question_3: 4,
        question_4: 4,
        question_5: 3
    },
    {
        profile_id: 2,
        date: '2023-06-23',
        hours_worked: 38,
        assessment_score: 8,
        question_1: 2,
        question_2: 2,
        question_3: 4,
        question_4: 0,
        question_5: 0
    },
    {
        profile_id: 2,
        date: '2023-06-30',
        hours_worked: 42,
        assessment_score: 11,
        question_1: 3,
        question_2: 2,
        question_3: 4,
        question_4: 1,
        question_5: 1
    },
    {
        profile_id: 2,
        date: '2023-07-07',
        hours_worked: 32,
        assessment_score: 3,
        question_1: 1,
        question_2: 1,
        question_3: 1,
        question_4: 0,
        question_5: 0
    }
])


export default () => {
    return {
        wellness_assessments
    }
}

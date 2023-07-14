import { computed, ref } from "vue";
import test_data from './test_data.json'

const profiles = ref(test_data)

const formatted_profiles = computed(() => profiles.value.map(x => ({ ...x, full_name: `${ x.first_name } ${ x.last_name }` })))

export default () => {
    return {
        profiles: formatted_profiles
    }
}

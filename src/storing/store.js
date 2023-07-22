import { reactive } from "vue";

export const store = reactive({
    teachers: [],
    selectedSubject: null,
    sortBy: null,
    infoTeachers: []
})
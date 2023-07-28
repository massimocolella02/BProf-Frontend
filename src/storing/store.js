import { reactive } from "vue";

export const store = reactive({
    teachers: [],
    selectedSubject: null,
    sortBy: 'reviews',
    infoTeachers: [],
    pathUrlBack: "http://localhost:8000/",
})
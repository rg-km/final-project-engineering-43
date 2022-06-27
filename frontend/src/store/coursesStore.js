import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCoursesStore = create(
  persist((set, get) => ({
    length: 0,
    courses: [],
    setCourses: (courses) =>
      set((state) => ({ courses, length: state.courses.length })),
    filtered: (roadmap) => {
      const courses = get().courses;
      return {
        roadmap,
        courses: courses.filter((course) => course.RoadmapId === roadmap.id),
      };
    },
    getCourses: (id) => get().courses.find((course) => course.id === id),
    clearcourses: () => set({ length: 0, courses: [] }, true),
  }))
);

export default useCoursesStore;

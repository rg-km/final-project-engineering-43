import create from 'zustand';

const useCoursesStore = create((set, get) => ({
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
  clearcourses: () => set({ length: 0, courses: [] }, true),
}));

export default useCoursesStore;

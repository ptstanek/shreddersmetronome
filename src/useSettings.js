import { ref } from "vue";

// this is like a settings store.
// to use it somewhere else you need to import this and create a settings object with useSettings()

const settings = ref({
  darkMode: false,
  volume: 100,
});

export function useSettings() {
  return settings;
}

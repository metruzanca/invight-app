import { loadAsync } from "expo-font";
import { Roboto_400Regular } from '@expo-google-fonts/roboto'
// import { Ionicons } from '@expo/vector-icons';

// TODO preload ionicons w/ https://docs.expo.io/guides/preloading-and-caching-assets/

export async function useLoadFonts() {
  await loadAsync({
    Roboto: Roboto_400Regular,
    // Ionicons: ,
  });
}
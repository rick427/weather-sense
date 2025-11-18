import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "@/router";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <AppRoutes />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
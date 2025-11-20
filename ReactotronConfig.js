import Reactotron from "reactotron-react-native";

Reactotron.configure()
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/
    }
  }) 
  .connect({ name: "weathrSense" }); 
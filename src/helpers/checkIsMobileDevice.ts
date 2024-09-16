import { onMounted, onUnmounted } from "vue";
import { useApplicationStore } from "../stores/application.store";

export const useCheckDevice = () => {
  const store = useApplicationStore();
  const { setIsMobile } = store;

  const detectDevice = () => {
    const checkDevice = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const width = window.innerWidth;
      if (isMobileDevice && width < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    onMounted(() => {
      checkDevice();
      window.addEventListener("resize", checkDevice);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkDevice);
    });
  };
  return { detectDevice };
};

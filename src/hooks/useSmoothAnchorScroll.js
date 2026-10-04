import { useEffect } from "react";

export const useSmoothAnchorScroll = () => {
  useEffect(() => {
    let animationFrame = null;

    const cancelAnimation = () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const link = event.target.closest('a[href^="#"]');
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;

      const hash = link.getAttribute("href");
      let target;
      try {
        target = hash === "#"
          ? document.documentElement
          : document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        return;
      }
      if (!target) return;

      event.preventDefault();
      cancelAnimation();

      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }

      const startY = window.scrollY;
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
      const targetY = hash === "#"
        ? 0
        : Math.max(
            0,
            target.getBoundingClientRect().top + startY - headerHeight - 20,
          );
      const distance = targetY - startY;
      if (Math.abs(distance) < 5) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) {
        window.scrollTo(0, targetY);
        return;
      }

      // Smooth cubic easing for fluid transitions when scrolling down to anchors
      const duration = Math.min(900, Math.max(500, Math.abs(distance) * 0.45));
      let startTime;

      const animate = (time) => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / duration, 1);
        const easedProgress =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, startY + distance * easedProgress);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(animate);
        } else {
          animationFrame = null;
        }
      };

      animationFrame = window.requestAnimationFrame(animate);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("wheel", cancelAnimation, { passive: true });
    window.addEventListener("touchstart", cancelAnimation, { passive: true });
    window.addEventListener("pointerdown", cancelAnimation, { passive: true });
    window.addEventListener("keydown", cancelAnimation);

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("wheel", cancelAnimation);
      window.removeEventListener("touchstart", cancelAnimation);
      window.removeEventListener("pointerdown", cancelAnimation);
      window.removeEventListener("keydown", cancelAnimation);
      cancelAnimation();
    };
  }, []);
};
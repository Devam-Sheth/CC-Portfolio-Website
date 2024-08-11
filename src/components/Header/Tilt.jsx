import React, { useRef, useEffect } from "react";

const Tilt = ({ children, tiltEffectSettings }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const setTransition = (event) => {
      clearTimeout(card.transitionTimeoutId);
      card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
      card.transitionTimeoutId = setTimeout(() => {
        card.style.transition = "";
      }, tiltEffectSettings.speed);
    };

    const cardMouseEnter = (event) => {
      setTransition(event);
    };

    const cardMouseMove = (event) => {
      const cardWidth = card.offsetWidth;
      const cardHeight = card.offsetHeight;
      const centerX = card.offsetLeft + cardWidth / 2;
      const centerY = card.offsetTop + cardHeight / 2;
      const mouseX = event.clientX - centerX;
      const mouseY = event.clientY - centerY;
      const rotateXUncapped =
        tiltEffectSettings.max * mouseY / (cardHeight / 2);
      const rotateYUncapped =
        -tiltEffectSettings.max * mouseX / (cardWidth / 2);
      const rotateX = Math.min(
        Math.max(rotateXUncapped, -tiltEffectSettings.max),
        tiltEffectSettings.max
      );
      const rotateY = Math.min(
        Math.max(rotateYUncapped, -tiltEffectSettings.max),
        tiltEffectSettings.max
      );

      card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
    };

    const cardMouseLeave = (event) => {
      card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      setTransition(event);
    };

    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", cardMouseEnter);
      card.removeEventListener("mousemove", cardMouseMove);
      card.removeEventListener("mouseleave", cardMouseLeave);
    };
  }, [tiltEffectSettings]);

  return (
    <div ref={cardRef} className="tilt-card">
      {children}
    </div>
  );
};

export default Tilt;

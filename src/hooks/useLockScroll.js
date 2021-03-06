import { useLayoutEffect } from "react";

const useLockBodyScroll = () => {
	useLayoutEffect(() => {
		// Prevent scrolling on mount
		document.body.style.overflow = "hidden";
		// Re-enable scrolling when component unmounts
		return () => (document.body.style.overflow = "visible");
	}, []); // Empty array ensures effect is only run on mount and unmount
};

export default useLockBodyScroll;

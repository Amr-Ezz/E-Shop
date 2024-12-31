
const getDynamicThreshold = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        return {threshold: 0.1}
    }
    return {threshold: 0.3}
};
export default getDynamicThreshold;
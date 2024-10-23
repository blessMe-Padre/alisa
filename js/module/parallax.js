export const initParallax = () => {
    const wrappers = document.querySelectorAll('.parallax');
    const layers = document.querySelectorAll('.parallax__item');
    const handleParallax = (evt) => {
        //размер области просмотра
        wrappers.forEach(item => {
            const parallaxLeftOffset = item.getBoundingClientRect().left;
            const parallaxTopOffset = item.getBoundingClientRect().top;
            // координаты центра экрана
            const coordX = evt.clientX - parallaxLeftOffset - 0.5 * item.offsetWidth;
            const coordY = evt.clientY - parallaxTopOffset - 0.5 * item.offsetHeight;

            const layers = item.querySelectorAll('.parallax__item');
            layers.forEach((layer) => {
                const layerSpeed = layer.dataset.speed;
                const x = - (coordX * layerSpeed).toFixed(2);
                const y = - (coordY * layerSpeed).toFixed(2);
                layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
            });
        });
    };

    const reset = () => {
        layers.forEach((layer) => {
            layer.removeAttribute('style');
        });
    }

    wrappers.forEach(item => {
        item.addEventListener('mousemove', handleParallax);
        item.addEventListener('mouseout', reset);
    });
}
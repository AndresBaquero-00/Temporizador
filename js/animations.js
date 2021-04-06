import { createAnimation } from 'https://cdn.jsdelivr.net/npm/@ionic/core@latest/dist/esm/index.mjs';

/**
 * 
 * @param {HTMLImageElement} element El elemento
 * @param {number} width El ancho de la pantalla
 * @param {number} height La altura de la pantalla
 * @returns {any} animation
 */
export const animation = (element) => {
    const animation = createAnimation()
        .addElement(element)
        .duration(1000)
        .fromTo('opacity', '1', '0')
        .afterAddClass('oculto');

    return animation;
}
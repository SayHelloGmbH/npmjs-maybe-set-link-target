/**
 * Parse link URLs and set target to _blank if it's an external link.
 * i.e. not the same website, not javascript, not fancybox etc.
 *
 * @version 2022-05-07
 * @author Say Hello GmbH
 */

export const maybeSetLinkTarget = links => {
    links.forEach(link => {
        var hostname = link.hostname;
        if (
            link.target === '' &&
            hostname &&
            hostname.indexOf(window.location.hostname) < 0 &&
            hostname.indexOf(window.location.hostname.replace('www.', '')) < 0 &&
            hostname !== '' &&
            hostname !== null &&
            hostname !== 'undefined' &&
            hostname !== 'false' &&
            hostname !== false &&
            (hostname.hash === '' || hostname.hash === null || hostname.hash === undefined) &&
            hostname.indexOf('javascript') !== 0 &&
            hostname.indexOf('mailto:') < 0 &&
            !link.dataset.fancybox &&
            !link.dataset.fslightbox
        ) {
            link.target = '_blank';
            link.setAttribute('rel', 'noopener');
            if (link.className.indexOf('tooltip') < 0 && !link.dataset.tooltip) {
                link.setAttribute('title', hostname);
            }
        }
    });
};

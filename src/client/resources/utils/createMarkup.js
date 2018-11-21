import urlRegex from 'url-regex';

const createMarkup = body => {
    let urls = body?.match(urlRegex());

    return {
        __html: (urls || []).reduce((acc, url) => {
            if (
                url.endsWith('.jpg') ||
                url.endsWith('.png') ||
                url.endsWith('.gif')
            ) {
                return (
                    acc.replace(url, '') +
                    `<a href="${url}" target="_blank"><img src="${url}"/></a>`
                );
            } else {
                return acc.replace(url, `<a href="${url}">${url}</a>`);
            }
        }, body)
    };
};

export default createMarkup;

import content from 'utils/content/content.json';

const contentMap = new Map(Object.entries(content));

const getContent = (id: string) => contentMap.get(id) || '';

export default getContent;

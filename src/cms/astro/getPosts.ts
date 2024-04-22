// import { getDirectusClient } from './client'
// import { getAssetURL } from './getAssetUrl'

export async function getPosts( args ) {
    const blogEntries = (await getCollection('blog', ({ data }) => {
        return true;
    })).sort(
        (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
    );

    return paginate(blogEntries, { pageSize: config.postsPerPage });
}
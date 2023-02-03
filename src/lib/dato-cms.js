import { GraphQLClient } from "graphql-request";

export function request({ query, variables, includeDrafts, excludeInvalid }) {
    const headers = {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS_API_TOKEN}`,
    };
    if (includeDrafts) {
      headers['X-Include-Drafts'] = 'true';
    }
    if (excludeInvalid) {
      headers['X-Exclude-Invalid'] = 'true';
    }
    const client = new GraphQLClient('https://graphql.datocms.com', { headers });
    return client.request(query, variables);
  }
import React from 'react';
import Link from './link.component';
import {useQuery, gql} from '@apollo/client'

const FEED_QUERY = gql `{
    feed {
      id
      links {
        id
        createdAt
        description
        url
      }
    }
  }`

  const LinkList = () => {
    const { data } = useQuery(FEED_QUERY);
  
    return (
      <div>
        {data && (
          <>
            {data.feed.links.map((link) => (
              <Link key={link.id} link={link} />
            ))}
          </>
        )}
      </div>
    );
  };



export default LinkList;
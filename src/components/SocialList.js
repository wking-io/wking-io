import React from 'react';
import PropType from 'prop-types';

import NoList from './NoList';
import SocialItem from './SocialItem';
import SocialLink from './SocialLink';

const SocialList = (props) => {
  const accounts = props.accounts;

  return (
    <NoList>
      {accounts.map((account, i) => (
        <SocialItem inline="m" key={i}>
          <SocialLink href={account.url} target="_blank">
            {account.icon}
            <p className="social__name">{account.name}</p>
          </SocialLink>
        </SocialItem>
      ))}
    </NoList>
  );
};

SocialList.propTypes = {
  accounts: PropType.arrayOf(PropType.object),
};

export default SocialList;

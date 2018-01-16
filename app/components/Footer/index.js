import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';


const Footer = () => (
  <Wrapper>
    <section>
      <FormattedMessage {...messages.licenseMessage} />
    </section>
    <section>
      <FormattedMessage
        {...messages.authorMessage}
        values={{
          author: <a href="https://twitter.com/annamatveev">Anna Matveev</a>,
        }}
      />
    </section>
  </Wrapper>
);

export default Footer;
